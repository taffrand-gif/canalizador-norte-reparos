# GATES — pilote CNR fuite / deteção

**Statut :** `PARTIEL` — source, build et parité sitemap contrôlés ; Preview/production non vérifiées.
**Branche :** `seo/pilot-cnr-fuga-20261126`
**Worktree :** `/Users/admin/work/Sites/_worktrees/seo-pilot-cnr-fuga-20261126`
**Base :** `origin/main` à `e11d1a1373`

## Objectif mesurable

Optimiser une seule page commerciale CNR pour les intentions `fuga de água`, `deteção de fugas` et `reparação`, afin de préserver/renforcer le tunnel téléphone + WhatsApp sans créer de lot local ni élargir la couverture publiée.

## Périmètre autorisé

- `client/public/detecao-fugas-agua.html` uniquement pour le contenu et les métadonnées.
- `GATES.md` et le rapport de contrôle du pilote uniquement pour la preuve.
- Aucun autre HTML, aucune page locale, aucun générateur, aucun sitemap, aucun `llms.txt`, aucun IndexNow, aucune redirection et aucune configuration de production.
- Aucun merge, aucune publication production et aucun changement de zone sans GO nommé de Filipe.

## Source de vérité

- `/Users/admin/work/Sites/_governance/20-BUSINESS-FACTS.json`
- `/Users/admin/work/Sites/_governance/30-CONTENT-DOCTRINE.md`
- `/Users/admin/work/Sites/_governance/10-SAFETY.md`
- Page témoin actuelle : `client/public/detecao-fugas-agua.html`

## Contrôles obligatoires

### Source / structure

- titre, description, H1 et canonical cohérents avec la page `/detecao-fugas-agua` ;
- exactement un H1 ; JSON-LD parseable et cohérent avec le visible ;
- téléphone CNR `928 484 451`, lien `tel:` et lien WhatsApp présents ;
- prix uniquement selon la grille centrale : `70 €/h + 30 €` en semaine 09:00–18:00 et `100 €/h + 50 €` après 18:00, nuit, week-ends et jours fériés ; formulation TTC et devis écrit avant intervention ;
- équipements plomberie autorisés uniquement, contextualisés par usage : caméra d’inspection, fluorescéine, détecteur d’humidité, UV avec fluorescéine si pertinent ; aucun équipement électrique ou non confirmé ;
- absence de promesse de résultat, de précision, de détection toujours sans ouverture, de délai d’arrivée chiffré, de couverture générale non prouvée, d’avis ou de garantie inventés ;
- aucun claim DGEG/TR​​IESP, wallbox ou numéro électrique ;
- aucune modification des pages locales concurrentes.

### Déterministe

```bash
python3 - <<'PY'
from pathlib import Path
import json, re
p = Path('client/public/detecao-fugas-agua.html')
t = p.read_text(encoding='utf-8')
assert t.count('<h1') == 1
assert 'https://canalizador-norte-reparos.pt/detecao-fugas-agua' in t
assert 'tel:+351928484451' in t and 'wa.me/351928484451' in t
for raw in re.findall(r'<script\\b[^>]*type=["\']application/ld\\+json["\'][^>]*>(.*?)</script>', t, re.I|re.S):
    json.loads(raw)
for forbidden in ('DGEG', 'TRIESP', 'wallbox', 'geofone', 'Sewerin', 'SeeSnake', 'correlador', 'gás traçador', 'K9-102', 'sem partir', 'resultado garantido', 'precisão ao centímetro'):
    assert forbidden.lower() not in t.lower(), forbidden
print('CNR_LEAK_SOURCE_GATE=OK')
PY
git diff --check
```

### Génération / build

```bash
npm run build
npm run lint:sitemap-parity
```

Le build doit être exécuté après installation des dépendances si le worktree n’en possède pas. Toute modification hors périmètre générée par un script est un STOP à examiner, pas à inclure automatiquement.

### Diff / population

```bash
git diff --name-only origin/main...HEAD
# après modification :
git diff --name-only origin/main...HEAD
```

La liste finale doit rester limitée à la page témoin et aux fichiers de preuve autorisés ci-dessus. Aucun lot local n’est accepté.

### HTTP / DOM / Preview

- contrôler la page de Preview publique si une PR Draft est créée ;
- vérifier HTTP 200, canonical, H1, CTA téléphone/WhatsApp, prix visibles et JSON-LD ;
- vérifier les liens internes directs de la page témoin ;
- production : **NON VÉRIFIÉE** tant qu’aucun GO de merge/production n’est donné.

## Statut de sortie attendu

`PARTIEL` — source + build + parité sitemap sont contrôlés ; Preview/DOM Preview et production restent **NON VÉRIFIÉES**. `PASS_PREVIEW` seulement après contrôle DOM sur URL Preview. Aucun statut `PASS_PRODUCTION` sans merge autorisé et contrôle post-production.

**FINI = [commande: source gate + npm run build + npm run lint:sitemap-parity + git diff --check][population: 1 page CNR][commit: 58d1474483][source: BUSINESS-FACTS + doctrine][niveau: PARTIEL / PASS_BUILD][production: inchangée][exceptions: aucune].**
