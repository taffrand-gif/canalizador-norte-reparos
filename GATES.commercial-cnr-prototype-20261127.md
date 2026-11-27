# Gate prototype commercial CNR — fuite d’eau Chaves

Date : 2026-11-27
Statut initial : `À REVOIR`
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

- [ ] `npm run build` exit 0
- [ ] Aucun `2 anos garantia` dans la page témoin
- [ ] Aucun `K9-306`, `FlexShaft`, `K-9102` dans la page témoin
- [ ] Aucun claim `500.000 €` ou `500 000 €`
- [ ] Aucun DGEG/TRIESP sur CNR
- [ ] Aucun délai d’arrivée chiffré
- [ ] Prix autorisés présents : 70 €/h + 30 € jour ; 100 €/h + 50 € nuit/week-end/fériés ; TTC
- [ ] Mention du devis écrit avant intervention présente
- [ ] `tel:+351928484451` présent
- [ ] WhatsApp plomberie `wa.me/351928484451` présent
- [ ] Les méthodes restent conditionnelles et sans résultat garanti
- [ ] Le diff reste limité à la page témoin et à ce gate

## Preuves requises

```text
FINI = [commande][population][commit][source][niveau][production][exceptions]
```

Niveau attendu du prototype : `PARTIEL` tant que Preview/DOM ne sont pas contrôlés.
