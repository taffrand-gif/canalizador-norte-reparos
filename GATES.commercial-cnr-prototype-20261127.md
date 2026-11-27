# Gate prototype commercial CNR — fuite d’eau Chaves

Date : 2026-11-27
Statut courant : `PARTIEL`
Branche : `seo/coverage-geo-neutral-cnr-20261127`
Production : interdite dans ce lot

## Périmètre exact

- Fichier source unique : `client/public/fugas-agua-chaves.html`
- Page témoin : fuite d’eau / installation plomberie à Chaves
- Aucun batch, aucune nouvelle URL, aucun changement de sitemap volontaire
- Aucun merge, aucune PR Ready, aucun déploiement Production

## Avant modification

- [x] Branche propre vérifiée par `git status --short --branch`
- [x] Présence du claim hérité `2 anos garantia` vérifiée
- [x] Présence du modèle non confirmé `K9-306` vérifiée
- [x] Présence du bloc premium vérifiée par contrôle ciblé

## Invariants obligatoires après modification

- [x] `npm run build` exit 0 — contrôle du 2026-11-27
- [x] Aucun `2 anos garantia` dans la page témoin — contrôle `ROUTE_SOURCE_CHECK=PASS`
- [x] Aucun `K9-306`, `FlexShaft`, `K-9102` dans la page témoin — contrôle `ROUTE_SOURCE_CHECK=PASS`
- [x] Aucun claim `500.000 €` ou `500 000 €` — contrôle ciblé
- [x] Aucun DGEG/TRIESP sur CNR — contrôle ciblé
- [x] Aucun délai d’arrivée chiffré — contrôle ciblé
- [x] Prix autorisés présents : 70 €/h + 30 € jour ; 100 €/h + 50 € nuit/week-end/fériés ; TTC — contrôle ciblé
- [x] Mention du devis écrit avant intervention présente — contrôle ciblé
- [x] `tel:+351928484451` présent — contrôle ciblé
- [x] WhatsApp plomberie `wa.me/351928484451` présent — contrôle ciblé
- [x] Les méthodes restent conditionnelles et sans résultat garanti — contrôle ciblé
- [x] Le diff reste limité à la page témoin et à ce gate — vérification Git

## Preuves Preview

- [x] Déploiement `dpl_q4Y6iwjCLvBt9FH57M3c8keihkuU` `READY`, commit `c2ca00b180e9b348cf9c27de160410ca1c508c87`.
- [x] `/fugas-agua-chaves` : HTTP 200, sans redirection, canonical self, téléphone et WhatsApp présents ; claims résiduels retirés.
- [x] `/fugas-agua-chaves.html` : HTTP 200, contenu identique à la route sans extension sur le déploiement précédent ; la règle de rewrite est inchangée.
- [ ] Indexabilité Preview non recevable : Vercel ajoute `X-Robots-Tag: noindex` sur la Preview ; contrôle Production interdit sans GO.
- [ ] DOM Playwright non exécuté ; Preview protégée et présence du `noindex` Preview empêche de classer la page comme preuve Production.

## Preuves requises

```text
FINI = [commande][population][commit][source][niveau][production][exceptions]
```

Niveau actuel : `PARTIEL`.

FINI = [commande: npm run build + npm run lint:sitemap-parity + git diff --check + ROUTE_SOURCE_CHECK + HTTP Preview][population: page témoin CNR][commit: c2ca00b180e9b348cf9c27de160410ca1c508c87][source: 20-BUSINESS-FACTS.json + doctrine CNR][niveau: PARTIEL][production: inchangée][exceptions: X-Robots-Tag noindex ajouté par Preview Vercel, DOM non vérifié]
