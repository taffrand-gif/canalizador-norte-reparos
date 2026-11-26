# Gate CNR — résidus géographiques — 2026-11-26

## Objectif

Nettoyer les surfaces restantes confirmées hors périmètre : retirer les mentions de `Moimenta da Beira` des blocs commerciaux/Schema/FAQ concernés ; supprimer les 19 fichiers PAA Tavira déjà `noindex, nofollow` ; retirer leurs URLs des sitemaps et listes IndexNow. Préserver `Moimenta de Vinhais` et `canalizador-moimenta`.

## Population fermée

Manifest : `_audit/cnr-residual-geography-manifest-20261126.json`. Population initiale : 106 fichiers HTML et 110 occurrences exactes `Moimenta da Beira` ; 19 fichiers `client/public/paa/*tavira*.html` ; 15 blocs URL Tavira dans `sitemap-plain.xml` ; 19 URLs Tavira dans IndexNow.

## Arbitrage

Retirer Moimenta da Beira car la source canonique confirme 131,3 km et la décision Filipe du 2026-11-23 l’exclut sans exception. Conserver Moimenta de Vinhais car la même source la donne dans la couverture à 75,6 km. Supprimer les PAA Tavira car elles sont déjà `noindex, nofollow`, hors service, et présentes par erreur dans des surfaces sitemap/IndexNow.

## Invariants

Aucune page commerciale valide d’une autre localité supprimée. Aucun retrait de `canalizador-moimenta.html`, `/canalizador-moimenta` ou d’un autre slug Moimenta autorisé. Aucun changement CU/ENR/EU. Aucun merge, déploiement Production, 301, DNS ou force-push.

## Preuves exécutées

- `PASS_SOURCE` : zéro `Moimenta da Beira` dans les HTML CNR ; zéro PAA Tavira ; zéro Tavira dans sitemap/IndexNow ; XML valide ; `canalizador-moimenta` conservée.
- 106 HTML modifiés, 19 PAA Tavira supprimées, 0 autre suppression HTML.
- `git diff --check` : propre après correction du whitespace sitemap.
- `npm run build` : code 0 ; Vite 1845 modules transformés ; bundle serveur généré.
- Post-build : mêmes invariants à zéro ; build n’a pas réintroduit les localités exclues.
- Contrôle DOM Preview/CI : à exécuter après push de la PR Draft.

## Statut

PR Draft uniquement ; merge et Production interdits sans GO nommé ultérieur.
