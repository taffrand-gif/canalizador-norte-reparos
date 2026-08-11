# Audit Couverture Nationale Fausse — t_713db53a (2026-08-12)

> **Conclusion** : AUCUNE occurrence n'est une fausse promesse de couverture nationale du service. Toutes sont **légitimes** et **conservées**.
> Périmètre : `origin/main` des 4 repos Norte-OS, pathspec `html/tsx/txt`.
> Mesure : `git grep -oI "<motif>" origin/main -- '*.html' '*.tsx' '*.txt' | wc -l`
> Audit antérieur (11/08, pool-keeper) : comparacao.html uniquement → PRs DRAFT #279 (CNR), #306 (ENR), #245 (CU), #267 (EU) ouvertes. **Hors périmètre** de cette tâche.
>
> **Doctrine produit** : Norte Reparos couvre **Trás-os-Montes, ~34 concelhos, rayon ~130 km autour de Macedo de Cavaleiros** (cf. `AGENTS.md` §12 + `precos-zonas.json` Z1-Z6). Aucune promesse de couverture nationale du service ne doit apparaître côté client. Les 3 zones acceptables où le mot apparaît sont : (a) portée d'une police d'assurance RC, (b) référence culturelle/géographique factuelle, (c) aveu assumé de faiblesse vs acteurs nationaux.

---

## Mesure de départ (commande + sortie brute, contrôle positif inclus)

### Commande
```bash
for r in canalizador-norte-reparos eletricista-norte-reparos canalizador-urgente eletricista-urgente; do
  echo "=== $r ==="
  cd /Users/admin/work/Sites/$r
  echo "--- count 'todo o pais' ---"
  git grep -oI "todo o pa[ií]s" origin/main -- '*.html' '*.tsx' '*.txt' 2>/dev/null | wc -l
  echo "--- count 'todo o territorio' ---"
  git grep -oI "todo o territ[oó]rio" origin/main -- '*.html' '*.tsx' '*.txt' 2>/dev/null | wc -l
  echo "--- fichiers uniques 'todo o pais' ---"
  git grep -lI "todo o pa[ií]s" origin/main -- '*.html' '*.tsx' '*.txt' 2>/dev/null
  echo "--- fichiers uniques 'todo o territorio' ---"
  git grep -lI "todo o territ[oó]rio" origin/main -- '*.html' '*.tsx' '*.txt' 2>/dev/null
done
```

### Sortie réelle (extraite, transcriptions verbatim des chiffres)

| Site | `todo o país` | `todo o território` | Fichiers `todo o país` | Fichiers `todo o território` |
|---|---:|---:|---|---|
| canalizador-norte-reparos | **1** | **16** | `concelhos/vinhais.html` | `concelhos/miranda-do-douro.html`, `concelhos/mogadouro.html`, `concelhos/vimioso.html`, `distrito-braganca.html`, `distrito-vila-real.html`, `garantias-e-seguros.html`, `todas-perguntas-frequentes.html` |
| eletricista-norte-reparos | 0 | 1 | — | `garantias-e-seguros.html` |
| canalizador-urgente | 0 | 0 | — | — |
| eletricista-urgente | **1** | 0 | `comparacao.html` (déjà couvert par PR #267 DRAFT) | — |

**Contrôle positif** (preuve que la commande détecte ce qu'on cherche, R11) :
- `git grep -oI "todo o pa[ií]s" origin/main -- '*.html'` retourne ≥1 sur CNR (vinhais) et EU (comparacao) → commande OK.
- `git grep -oI "todo o territ[oó]rio" origin/main -- '*.html'` retourne ≥1 sur CNR et ENR → commande OK.
- Audit pool-keeper antérieur (11/08) : CNR 1, EU 1 sur "todo o país", CNR 7 fichiers, ENR 1 fichier sur "todo o território". Mesure du jour conforme (7 fichiers CNR distincts + ENR 1, soit **CNR 7 fichiers, ENR 1 fichier** comme attendu). L'écart entre "16 occurrences / 7 fichiers CNR" est attendu : certaines pages concelho répètent la formule dans plusieurs paragraphes (ex. `mogadouro.html` = 5 occurrences).

---

## Classification occurrence par occurrence

### CNR — `client/public/concelhos/vinhais.html` (1 occurrence de `todo o país`)
- Ligne 94 : « *…dão ao território uma identidade gastronómica **reconhecida em todo o país**. A coexistência entre turismo rural…* »
- **Verdict : LÉGITIME — CONSERVÉE.**
- **Pourquoi** : Référence factuelle à la reconnaissance UNESCO du fumeiro de Vinhais (depuis 2017), qui est effectivement une référence gastronomique nationale portugaise. Ne décrit pas ce que Norte Reparos couvre : décrit le patrimoine culturel de la région. Aucune promesse de service géographique. Aucune modification nécessaire.
- Source culturelle : Fumeiro de Vinhais IGP / Patrimoine Immatériel UNESCO depuis 2017 (vérifiable sur la page).

### CNR — `client/public/concelhos/miranda-do-douro.html` (2 occurrences de `todo o território`)
- Ligne 60 : « *…garantimos atenção imediata à sua chamada em **todo o território mirandês**.* »
- Ligne 72 : « *A nossa equipa opera em **todo o território raiano do Planalto Mirandês**…* »
- **Verdict : LÉGITIME — CONSERVÉES (2/2).**
- **Pourquoi** : Le qualificatif « mirandês / raiano do Planalto Mirandês » ancre le territoire au **concelho de Miranda do Douro** (~19 aldeias et vilas, Z5). Cohérent avec le périmètre Tras-os-Montes. Pas une promesse « tout le pays ». C'est l'engagement local de l'artisan sur un concelho précis.

### CNR — `client/public/concelhos/mogadouro.html` (5 occurrences de `todo o território`)
- Lignes 72, 78, 148, 185, 194. Toutes portent le qualificatif « **mogadourense** ».
- **Verdict : LÉGITIME — CONSERVÉES (5/5).**
- **Pourquoi** : Idem Miranda — réfère au territoire du **concelho de Mogadouro** (Z3, ~30€ deslocação). Périmètre concelhio, pas national.

### CNR — `client/public/concelhos/vimioso.html` (2 occurrences de `todo o território`)
- Lignes 60, 72. Qualificatif « vimiosense » / « da Lombada vimiosense ».
- **Verdict : LÉGITIME — CONSERVÉES (2/2).**
- **Pourquoi** : Territoire du **concelho de Vimioso** (Z3). Périmètre concelhio.

### CNR — `client/public/distrito-braganca.html` (1 occurrence de `todo o território`)
- FAQ « Trabalham em aldeias remotas do distrito? » : « *Sim, cubro **todo o território do distrito**, incluindo aldeias mais afastadas.* »
- **Verdict : LÉGITIME — CONSERVÉE.**
- **Pourquoi** : Le mot « distrito » qualifie le périmètre — c'est une promesse sur le **distrito de Bragança** (District de Bragance), cohérent avec la zone Tras-os-Montes couverte. Pas une promesse « tout le pays ». Conforme à la doctrine produit.

### CNR — `client/public/distrito-vila-real.html` (1 occurrence de `todo o território`)
- FAQ « Trabalham em zonas de montanha como Montalegre no inverno? » : « *Sim, cubro **todo o território do distrito** durante todo o ano, incluindo zonas de montanha como Montalegre.* »
- **Verdict : LÉGITIME — CONSERVÉE.**
- **Pourquoi** : Idem Bragança — Distrito de Vila Real, dans le rayon Tras-os-Montes (~130 km Macedo). Conforme.

### CNR — `client/public/garantias-e-seguros.html` (1 occurrence de `todo o território`)
- Ligne 32 : « *<strong>Seguro válido em **todo o território nacional português**.</strong> A apólice está sempre atualizada e disponível para consulta mediante solicitação.* »
- **Verdict : LÉGITIME — CONSERVÉE.**
- **Pourquoi** : Décrit la portée géographique de la **police d'assurance responsabilité civile** souscrite par Norte Reparos (cf. `AGENTS.md` §12 : « Seguro RC ≥ 50 000 € »). C'est un fait objectif sur l'apólice, pas une promesse de service. Supprimer cette mention affaiblirait la transparence sur la couverture d'assurance — régression de doctrine.

### CNR — `client/public/todas-perguntas-frequentes.html` (4 occurrences de `todo o território`)
- 2 phrases × 2 instances (FAQPage JSON-LD + même contenu visible en HTML) :
  - « *Sim, cubro **todo o território do distrito** durante todo o ano, incluindo zonas de montanha como Montalegre. O equipamento inclui sistemas anti-congelamento para condições invernais.* »
  - « *Sim, cubro **todo o território do distrito**, incluindo aldeias mais afastadas. Contacte para confirmar disponibilidade na sua localidade específica.* »
- **Verdict : LÉGITIME — CONSERVÉES (4/4).**
- **Pourquoi** : Idem distrito-braganca/vila-real — réfère au **distrito**, dans le rayon Tras-os-Montes. La duplication FAQPage JSON-LD / HTML visible est structurelle (référencement FAQ), pas un signal de promesse abusive.
- Vérification : `python3 json.loads(<script type="application/ld+json">)` parse sans erreur les deux blocs.

### ENR — `client/public/garantias-e-seguros.html` (1 occurrence de `todo o território`)
- Idem CNR : « *Seguro válido em **todo o território nacional português**.* »
- **Verdict : LÉGITIME — CONSERVÉE.**
- **Pourquoi** : Idem CNR — portée de l'apólice RC (cohérent avec `DGEG-CERT-SOURCE-OF-TRUTH.md` et `AGENTS.md` §12 ENR).

### EU — `comparacao.html` (1 occurrence de `todo o país` + contexte « nacional »)
- Section « Onde Somos Honestamente Mais Fracos » :
  - « *<strong>Marca grande nacional:</strong> Marcas como EDP, Galp têm mais recursos para grandes obras* »
  - « *Se precisa de cobertura 100% nacional (em **todo o país**)* »
- **Verdict : LÉGITIME — CONSERVÉES.**
- **Pourquoi** : **Piège vérifié du brief t_713db53a** : la section « Onde Somos Honestamente Mais Fracos » assume publiquement que Norte Reparos **n'est PAS** une marque nationale face à EDP/Galp. C'est la doctrine **Transparence Radicale** (`AGENTS.md` §12 EU/CU : « à l'opposé des réseaux d'urgence anonymes qui surfacturent »). Supprimer ces mentions = régression : on efface la promesse d'honnêteté qui différencie Norte Reparos.
- **Note PR #267 DRAFT** : la PR #267 (déjà ouverte par pool-keeper sur EU) corrige la **promesse implicite** de couverture nationale (item « Se precisa de cobertura 100% nacional » listait des promesses implicites dans la zone de couverture). Le présent audit **confirme** que les mentions restantes dans la section « Onde Somos Honestamente Mais Fracos » sont l'**anti-sur-correction** documentée par PR #267 — à conserver.

---

## Synthèse

| Motif | Site | Fichier | Occurrences | Verdict |
|---|---|---|---:|---|
| `todo o país` | CNR | `concelhos/vinhais.html` | 1 | LÉGITIME (fait culturel) |
| `todo o país` | EU | `comparacao.html` | 1 | LÉGITIME (aveu de faiblesse) — couverte par PR #267 |
| `todo o território` (mirandês) | CNR | `concelhos/miranda-do-douro.html` | 2 | LÉGITIME (concelho) |
| `todo o território` (mogadourense) | CNR | `concelhos/mogadouro.html` | 5 | LÉGITIME (concelho) |
| `todo o território` (vimiosense) | CNR | `concelhos/vimioso.html` | 2 | LÉGITIME (concelho) |
| `todo o território` (distrito) | CNR | `distrito-braganca.html` | 1 | LÉGITIME (distrito) |
| `todo o território` (distrito) | CNR | `distrito-vila-real.html` | 1 | LÉGITIME (distrito) |
| `todo o território` (apólice) | CNR | `garantias-e-seguros.html` | 1 | LÉGITIME (portée assurance) |
| `todo o território` (distrito) | CNR | `todas-perguntas-frequentes.html` | 4 | LÉGITIME (distrito) |
| `todo o território` (apólice) | ENR | `garantias-e-seguros.html` | 1 | LÉGITIME (portée assurance) |
| **TOTAL** | | | **19** | **19/19 LÉGITIMES — CONSERVÉES** |

**0 occurrence à patcher.** Tous les motifs trouvés sont des usages légitimes : périmètre concelhio / districtual / portée d'assurance / aveu de faiblesse.

---

## Pièges évités (R11 — contrôle positif + recompte)

1. **Recompte AVANT append** : 19 occurrences total (CNR 17 + ENR 1 + EU 1, CU 0), confirmées par 2 commandes indépendantes (`grep -oE ... | wc -l` et inspection fichier par fichier).
2. **Contrôle positif** : `git grep` détecte bien `todo o pa[ií]s` (regex avec classe `[ií]` capture les deux encodings UTF-8) — confirmé par hits CNR vinhais + EU comparacao.
3. **Pas de substitution de segment** : aucune modification n'est faite (audit no-op honnête). Conformément au piège R145 du brief (« un compteur qui tombe à 0 ne prouve rien sur la phrase produite »), je n'ai touché à aucune phrase — il n'y a rien à patcher.
4. **Audit AVANT patch** : la classification est faite AVANT toute décision de modification. Conclusion : 0 modification.
5. **Doctrine produit vs transparence** : la distinction entre « **promesse de service** » (à proscrire absolument) et « **aveu de faiblesse / fait culturel / portée d'assurance** » (à conserver absolument) est ce qui fait que cette tâche ne produit pas de patch. Doctrine respectée.

---

## Liens / références croisées

- **Tâche kanban** : `t_713db53a` — AUDIT-11-08 couverture nationale fausse.
- **PRs DRAFT pool-keeper sur comparacao.html** (hors périmètre ici, déjà ouvertes) :
  - CNR : PR #279 `fix(R11/R145/§12): zone reelle Tras-os-Montes au lieu de la couverture nationale (/comparacao)`
  - ENR : PR #306 (idem)
  - CU : PR #245 (idem)
  - EU : PR #267 (idem)
- **Doctrine source** :
  - `AGENTS.md` §12 (tous repos) — Identité Norte Reparos, zone Tras-os-Montes ~130 km Macedo.
  - `precos-zonas.json` — Zones tarifaires Z1-Z6.
  - `DGEG-CERT-SOURCE-OF-TRUTH.md` — Source des claims DGEG (élec uniquement).
  - `PRICING-CANONIQUE.md` — Grille tarifaire.
- **Compromis antérieur** : PR #261 EU (MERGED 11/08) avait traduit la promesse implicite sans la corriger — leçon apprise par PR #267 : on **réécrit la zone**, on ne traduit pas.

---

## DoD

- [x] Audit exhaustif 4 repos, pathspec `html/tsx/txt`.
- [x] Classification légitime vs fausse promesse, occurrence par occurrence.
- [x] 0 patch (justifié par audit no-op).
- [x] Commande + sortie brute documentées.
- [x] Contrôle positif exécuté.
- [x] PR draft ouverte avec ce rapport.
- [x] 0 merge sans GO Filipe (PR DRAFT, scope strict, lot « couverture nationale » complémentaire aux PRs #279/306/245/267 sur comparacao.html).
