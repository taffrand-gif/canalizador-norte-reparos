#!/usr/bin/env python3
"""CNR canonical triage plus guarded self-reference fixes.

Scans every HTML page under client/public. The source filename/route is the
local source of truth for self-ref fixes; same-concelho hub/money canonicals
are retained by design. HTTP checks are performed only for suspect targets.
"""
from __future__ import annotations

import argparse
import csv
import json
import re
import sys
import unicodedata
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.parse import urlparse
from urllib.request import Request, urlopen

DOMAIN = "https://canalizador-norte-reparos.pt"
ROOT = Path("client/public")
ABS_AUDIT = Path("/Users/admin/work/Sites/_audit")

CONCELHOS = {
    "alfandega-da-fe", "alijo", "armamar", "boticas", "braganca",
    "carrazeda-de-ansiaes", "chaves", "freixo-de-espada-a-cinta", "lamego",
    "macedo-de-cavaleiros", "mesao-frio", "miranda-do-douro", "mirandela",
    "mogadouro", "mondim-de-basto", "montalegre", "murca", "penedono",
    "peso-da-regua", "ribeira-de-pena", "sabrosa", "santa-marta-de-penaguiao",
    "sao-joao-da-pesqueira", "sernancelhe", "tabuaco", "torre-de-moncorvo",
    "valpacos", "vila-flor", "vila-nova-de-foz-coa", "vila-pouca-de-aguiar",
    "vila-real", "vimioso", "vinhais",
}


class CanonicalParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.canonicals: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if tag.lower() != "link":
            return
        attrs_dict = {key.lower(): (value or "") for key, value in attrs}
        if "canonical" in attrs_dict.get("rel", "").lower().split():
            self.canonicals.append(attrs_dict.get("href", ""))


def ascii_route(value: str) -> str:
    return unicodedata.normalize("NFKD", value).encode("ascii", "ignore").decode()


def city_of(value: str) -> str | None:
    value = ascii_route(value).lower().strip("/")
    matches = [slug for slug in CONCELHOS if value == slug or value.endswith("-" + slug)]
    return max(matches, key=len) if matches else None


def read_text(fp: Path) -> tuple[bytes, str]:
    raw = fp.read_bytes()
    try:
        return raw, raw.decode("utf-8")
    except UnicodeDecodeError:
        return raw, raw.decode("latin-1", errors="replace")


def expected_self(fp: Path) -> str:
    route = fp.relative_to(ROOT).with_suffix("").as_posix()
    if route == "index":
        route = ""
    return DOMAIN + "/" + route


def source_route(fp: Path) -> str:
    route = fp.relative_to(ROOT).with_suffix("").as_posix()
    return "/" if route == "index" else "/" + route


def is_self_ref(fp: Path, path: str) -> bool:
    source = source_route(fp)
    if path == source:
        return True
    # D7 routes intentionally strip diacritics in the URL.
    return path == ("/" if source == "/" else "/" + ascii_route(source.lstrip("/")))


def probe(path: str) -> str:
    if not path:
        return "no-target"
    try:
        response = urlopen(Request(DOMAIN + path, method="GET"), timeout=15)
        return str(response.status)
    except HTTPError as exc:
        return str(exc.code)
    except (URLError, TimeoutError, OSError) as exc:
        return f"error:{type(exc).__name__}"


def classify(fp: Path, canon: str, status: str | None) -> tuple[str, str]:
    path = urlparse(canon).path.rstrip("/")
    # Blog index canonical /blog is the deliberate section landing route.
    if fp.relative_to(ROOT).as_posix() == "blog/index.html" and path == "/blog":
        return "hub-money-same-concelho", "blog section landing route retained"
    if is_self_ref(fp, path) or not path:
        return "self-ref-ok", "canonical matches source route"
    if "/blog/" in path or path.startswith("/case-study"):
        return "case-study-blog-selfref", "cross-canonical to blog/case-study"
    source_city = city_of(fp.stem)
    target_city = city_of(path)
    if source_city and source_city == target_city:
        return "hub-money-same-concelho", f"same official concelho={source_city}; target retained"
    if status == "404":
        return "target-404-ou-typo-selfref", "target returned HTTP 404"
    if status and status.startswith("error:"):
        return "target-404-ou-typo-selfref", f"target probe {status}; manual check required"
    return "target-404-ou-typo-selfref", "cross-page target outside same-concelho allowlist"


def scan() -> tuple[list[dict[str, str]], dict[str, object]]:
    files = sorted(ROOT.rglob("*.html"))
    rows: list[dict[str, str]] = []
    target_cache: dict[str, str] = {}
    multi = empty = parse_errors = 0
    for fp in files:
        rel = fp.relative_to(ROOT).as_posix()
        try:
            _, text = read_text(fp)
            parser = CanonicalParser()
            parser.feed(text)
            parser.close()
        except Exception as exc:
            parse_errors += 1
            rows.append({"file": rel, "canon_target": "", "status_bucket": "parse-error", "http_status": "", "notes": str(exc)})
            continue
        canons = list(dict.fromkeys(parser.canonicals))
        if not canons:
            rows.append({"file": rel, "canon_target": "", "status_bucket": "no-canonical", "http_status": "", "notes": "no canonical link found"})
            continue
        if len(canons) > 1:
            multi += 1
        canon = canons[0]
        path = urlparse(canon).path.rstrip("/")
        source_city = city_of(fp.stem)
        target_city = city_of(path)
        approved_blog_index = rel == "blog/index.html" and path == "/blog"
        needs_probe = not (is_self_ref(fp, path) or not path or approved_blog_index or (source_city and source_city == target_city))
        status = ""
        if needs_probe:
            if path not in target_cache:
                target_cache[path] = probe(path)
            status = target_cache[path]
        bucket, notes = classify(fp, canon, status or None)
        if not canon.strip():
            empty += 1
            bucket = "target-404-ou-typo-selfref"
            notes = "empty canonical target"
        if len(canons) > 1:
            notes += f"; multiple={len(canons)}"
        rows.append({"file": rel, "canon_target": canon, "status_bucket": bucket, "http_status": status, "notes": notes})
    summary: dict[str, object] = {
        "scope": "client/public/**/*.html",
        "total_files": len(files),
        "rows": len(rows),
        "multi_canonical_count": multi,
        "empty_canon_count": empty,
        "parse_err_count": parse_errors,
        "counts_per_bucket": dict(Counter(row["status_bucket"] for row in rows)),
        "probed_targets": {path: target_cache[path] for path in sorted(target_cache)},
    }
    return rows, summary


def write_outputs(rows: list[dict[str, str]], summary: dict[str, object], out_csv: Path) -> None:
    fields = ["file", "canon_target", "status_bucket", "http_status", "notes"]
    out_csv.parent.mkdir(parents=True, exist_ok=True)
    with out_csv.open("w", newline="", encoding="utf-8") as handle:
        writer = csv.DictWriter(handle, fieldnames=fields, lineterminator="\n")
        writer.writeheader()
        for row in rows:
            writer.writerow({key: (row[key].rstrip() if isinstance(row[key], str) else row[key]) for key in fields})
    local_csv = Path("_audit/canonical-triage-CNR.csv")
    local_csv.parent.mkdir(parents=True, exist_ok=True)
    local_csv.write_bytes(out_csv.read_bytes())
    for summary_path in (ABS_AUDIT / "canonical-triage-CNR-summary.json", Path("_audit/canonical-triage-CNR-summary.json")):
        summary_path.parent.mkdir(parents=True, exist_ok=True)
        summary_path.write_text(json.dumps(summary, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")


def replace_canonical_href(raw: bytes, old: str, new: str) -> tuple[bytes, int]:
    # Only touch the canonical link tag; og:url/JSON-LD are checked separately
    # by the post-fix evidence and are intentionally not broad-replaced here.
    pattern = re.compile(rb"<link\b[^>]*>", re.I)
    for match in pattern.finditer(raw):
        tag = match.group(0)
        rel = re.search(rb"\brel\s*=\s*[\"']([^\"']*)[\"']", tag, re.I)
        if not rel or b"canonical" not in rel.group(1).lower().split():
            continue
        href = re.search(rb"(\bhref\s*=\s*[\"'])([^\"']*)([\"'])", tag, re.I)
        if not href:
            return raw, 0
        if href.group(2).decode("utf-8", errors="replace") != old:
            return raw, 0
        new_tag = tag[:href.start(2)] + new.encode("utf-8") + tag[href.end(2):]
        return raw[:match.start()] + new_tag + raw[match.end():], 1
    return raw, 0


def apply_fixes(rows: list[dict[str, str]]) -> dict[str, object]:
    targets = [row for row in rows if row["status_bucket"] in {"target-404-ou-typo-selfref", "case-study-blog-selfref"}]
    fixed: list[str] = []
    errors: list[str] = []
    for row in targets:
        fp = ROOT / row["file"]
        raw, _ = read_text(fp)
        new_raw, replacements = replace_canonical_href(raw, row["canon_target"], expected_self(fp))
        if replacements != 1:
            errors.append(f"{row['file']}: expected exactly one canonical replacement, got {replacements}")
            continue
        if new_raw == raw:
            errors.append(f"{row['file']}: no-op")
            continue
        fp.write_bytes(new_raw)
        fixed.append(row["file"])
    return {"candidates": len(targets), "fixed_count": len(fixed), "fixed": fixed, "errors": errors}


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--apply", action="store_true")
    parser.add_argument("--out-csv", type=Path, default=ABS_AUDIT / "canonical-triage-CNR.csv")
    args = parser.parse_args()
    rows, summary = scan()
    if args.apply:
        fix = apply_fixes(rows)
        if fix["errors"]:
            print(json.dumps(fix, indent=2, ensure_ascii=False), file=sys.stderr)
            return 1
        summary["fix"] = fix
        _, summary["post_fix"] = scan()
    write_outputs(rows, summary, args.out_csv)
    print(json.dumps(summary, indent=2, ensure_ascii=False))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
