#  CNR boilerplate gGateographique  2026-11-26

## Objectif
Retirer uniquement `Viseu`, `Moimenta da Beira` et `Tavira` de la phrase commerciale rMassifp  te `Zonas de atendimento` dans les HTML statiques CNR. Prserver les libells administratifs `Viseu/Guarda`, les pages historiques, les titres/URLs hors phrase commerciale et la page autorise Moimenta de Vinhais.

## Population ferme
Les seuls paragraphes HTML contenant simultanment le marqueur `<strong>Zonas de atendimento:</strong>` et la liste commerciale hrite avec les localits cibles. La liste complte des fichiers et occurrences est dans `_audit/cnr-boilerplate-manifest-20261126.json`.

## Invariants
Aucune suppression de fichier ou evalURL. Aucun remplacement dans un titre, une canonical, un slug, un Schema.org ou un libellD `Viseu/Guarda`. Aucun changement CU/ENR/EU. Aucune modification Production dans ce lot.

## Preuves exiges
Manifest avant et aprs ; scan cibl  zro pour les trois noms dans la population ; scan ngatif pour `Viseu/Guarda` et la page `canalizador-moimenta.html` ; `git diff --check` ; build ; checks CI ; Preview DOM des chantillons et des routes statiques concernes.

## Statut
En  PR Draft sValidationpar e requise.
