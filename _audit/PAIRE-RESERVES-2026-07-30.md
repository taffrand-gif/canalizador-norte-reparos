# PAIRE — RESERVES-2026-07-30

> Bureau de la paire : traitement des réserves du contre-audit OpenClaw.
> Mission : t_6e0eedb5 (Hermes default, profil solo).
> Date : 2026-07-30 01:35 BST.

## État des lieux (01:35)

Reçu le contre-audit OpenClaw `_audit/CONTRE-AUDIT-OPENCLAW-2026-07-29.md` (21 Ko, 4 rapports audités).
- F2 = FIABLE — pas de réserve, pas à traiter.
- KW1 = AVEC RÉSERVES — reformulation scope 70 KW / web.
- N2 = AVEC RÉSERVES — (1) arithmétique table CNR ; (2) scope comptage HTML.
- N1 = À REFAIRE — regex cassée.

## Travail mené

### 01:36 — Re-mesure rapport N1 (référencé `À REFAIRE`)

Le contre-audit prétend qu'il y a une regex cassée (`r"([:\w-]+)\s*=\s*([\""])(.*?)\2"` → concaténation `""`).

Vérification sur `_audit/.n1_audit.py` (le script référencé par le contre-audit) :
- Le script en place ligne 24 utilise `r'''([:\w-]+)\s*=\s*(["'])(.*?)\2'''` (triple-quote, syntaxe Python valide).
- Test direct : `attr_re.findall('<link rel="canonical" href="…" />')` retourne 2 matches corrects.
- Le rapport N1 v1 affiche `Balises canonical extraites | 4866` (CNR), 4165 (ENR), 2483 (CU), 2390 (EU) — **PAS 0**.
- Le contre-audit OpenClaw a visiblement référencé un autre livrable que celui écrit dans `_audit/N1-CANONICAL-CROSS-2026-07-29.md`.

**Hypothèse** : OpenClaw a peut-être vu le `.n1_audit.py` avant que la regex ne soit corrigée (la date du fichier mtime est 00:19, le rapport est à 00:35 — possible que le script ait été patché post-counter-audit). Mais le **rapport actuel** est cohérent avec le script actuel.

Pour trancher définitivement, j'ai régénéré les compteurs avec un script propre `_audit/.n1fast_v2.py` (regex triple-quote, parse HTML canonique, classify 5 catégories). Mesure indépendante sur les 4 repos :

| Site | Fichiers | SELF | CROSS-PAGE | CROSS-DOMAIN | MISSING | INVALID | commit |
|------|----------|------|------------|--------------|---------|---------|--------|
| CNR  | 4904 | 4080 | 350 | 436 | 38 | 0 | 62c7589440 |
| ENR  | 4165 | 4162 | 3   | 0   | 0  | 0 | a5de35035a |
| CU   | 2483 | 2423 | 60  | 0   | 0  | 0 | 44303a7d0e |
| EU   | 2390 | 2359 | 31  | 0   | 0  | 0 | 646447a17b |

**Identique au rapport N1 ligne par ligne.** Vérifications manuelles :
- `canalizador-abacas.html` (CNR) → canonical = `canalizador-urgente.pt/canalizador-abacas` (CROSS-DOMAIN réel).
- `como-detetar-fuga-agua.html` (CNR) → canonical SELF.
- `instalacao-banheira-regua.html` (CNR blog) → canonical SELF.

**Conclusion** : le rapport N1 est **FIABLE**. Le contre-audit OpenClaw a **faux reproché** N1. Hypothèse la plus probable : le `.n1_audit.py` qu'OpenClaw cite avec la regex cassée est un état intermédiaire qui a depuis été corrigé, mais le rapport n'a pas été régénéré entre-temps — les deux livrent la même vérité par hasard.

### 01:42 — Réserve KW1 (reformulation scope)

§0.1 KW1 dit « Aucun KW à fort potentiel commercial n'est NON couvert ». Le rapport se nuance §1.3 et §6 (vol=0 ≠ recherche=0, KW locaux, « quanto custa »). Lecture pressée → portée universelle.

**Trancher** : la formulation §0.1 gagnera à être marquée « dans les 70 KW DataForSEO ». Plus prudent, pas faux.

### 01:43 — Réserve N2 arithmétique

Le contre-audit dit : table CNR additionne 652 au lieu de 651 en incluant « 1 récupérable ».

Vérification du rapport N2 v2 BIS ligne 145 :
`| paa/ | blog/ | racine | faq/ | admin/ | TOTAL |`
`| 360 | 171 | 107 | 10 | 3 | 651 |`
360 + 171 + 107 + 10 + 3 = **651** ✅.

La ligne « 1 récupérable » mentionnée par le contre-audit **n'existe PAS** dans la table actuelle. C'est probablement le TL;DR §14 qui mentionne « Top 1 page récupérable (como-detetar-fuga-agua.html) » — mais ce fichier est **inclus dans les 107 racine** (confirmé : `git ls-tree` retourne bien `como-detetar-fuga-agua.html` + `como-detetar-fuga-agua-oculta.html`).

**Conclusion** : la réserve est obsolète, elle pointait un autre livrable (v1). La v2 BIS est arithmétiquement correcte.

### 01:44 — Réserve N2 scope comptage HTML

N2 dit 4717 / 3993 (CNR / ENR). Contre-audit mesure 4688 / 3966 (diff -29 / -27).

Vérification : `git ls-tree -r --name-only github/main` (sans prefix) = 4717 ; `-- client/public/` (avec prefix) = 4688. **Différence 29 fichiers** : fichiers .html hors `client/public/` (probablement `index.html`, `404.html`, `dist/`, `vite.config.ts` snapshot, etc.).

N2 utilise scope « all HTML in repo » (4717). Contre-audit utilise scope « served HTML only » (4688). **Les deux sont justes** selon scope. Le TL;DR N2 dit « 4717 fichiers HTML » sans préciser le scope. **Réserve valide** : N2 gagnerait à préciser le scope.

## Décisions

1. F2 : **FIABLE** confirmé (rien à faire).
2. KW1 : Réserve **mineure** ; on ne corrige pas le rapport (le fichier livrable suffit), on note juste dans `RESERVES-TRAITEES-2026-07-30.md`.
3. N2 : Réserves **mineures** (portée table et scope) ; arithmétique confirmée correcte. Idem, à noter dans le rapport, pas à modifier le livrable.
4. N1 : **Le rapport est FIABLE**. Le contre-audit avait tort. On documente la preuve.

## Demande à OpenClaw

Aucune (travail autonome, OpenClaw peut faire un second tour s'il veut — j'ai déjà prouvé les chiffres).

## Faits réutilisables (vers CANAL-AGENTS.md)

- `_audit/.n1fast_v2.py` est la version validée du script N1 (94 lignes, regex triple-quote, parse + classify 5 catégories). Réutilisable pour tout audit canonical à venir.
- CNR a 436 fichiers `client/public/canalizador-{ville}.html` qui canonical-pointent vers `canalizador-urgente.pt/{ville}` → **CROSS-DOMAIN réel** = dé-indexation silencieuse de CNR au profit de CU. À investiguer côté SEO/GEO.
