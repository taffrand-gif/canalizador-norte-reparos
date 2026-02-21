#!/bin/bash

# Script pour corriger les formulations solo/singulier dans les fichiers HTML

echo "=== Correction des formulations solo/singulier ==="

# Liste des fichiers HTML à corriger
FILES=$(find client/public -name "*.html" -type f)

for file in $FILES; do
    echo "Traitement de: $file"
    
    # Sauvegarde originale
    cp "$file" "$file.bak"
    
    # Remplacements systématiques
    sed -i '' 's/eu levo/levamos/g' "$file"
    sed -i '' 's/Eu levo/Levamos/g' "$file"
    sed -i '' 's/eu vejo/vemos/g' "$file"
    sed -i '' 's/Eu vejo/Vemos/g' "$file"
    sed -i '' 's/eu localizo/localizamos/g' "$file"
    sed -i '' 's/Eu localizo/Localizamos/g' "$file"
    sed -i '' 's/eu resolvo/resolvemos/g' "$file"
    sed -i '' 's/Eu resolvo/Resolvemos/g' "$file"
    sed -i '' 's/eu trabalho/trabalhamos/g' "$file"
    sed -i '' 's/Eu trabalho/Trabalhamos/g' "$file"
    sed -i '' 's/eu conheço/conhecemos/g' "$file"
    sed -i '' 's/Eu conheço/Conhecemos/g' "$file"
    sed -i '' 's/eu sirvo/servimos/g' "$file"
    sed -i '' 's/Eu sirvo/Servimos/g' "$file"
    sed -i '' 's/eu faço/fazemos/g' "$file"
    sed -i '' 's/Eu faço/Fazemos/g' "$file"
    sed -i '' 's/eu executo/executamos/g' "$file"
    sed -i '' 's/Eu executo/Executamos/g' "$file"
    sed -i '' 's/eu garanto/garantimos/g' "$file"
    sed -i '' 's/Eu garanto/Garantimos/g' "$file"
    sed -i '' 's/eu invisto/investimos/g' "$file"
    sed -i '' 's/Eu invisto/Investimos/g' "$file"
    sed -i '' 's/eu uso/usamos/g' "$file"
    sed -i '' 's/Eu uso/Usamos/g' "$file"
    sed -i '' 's/eu realizo/realizamos/g' "$file"
    sed -i '' 's/Eu realizo/Realizamos/g' "$file"
    
    # Remplacements spécifiques pour sobre-mim.html
    if [[ "$file" == *"sobre-mim.html" ]]; then
        sed -i '' 's/Trabalho sozinho, por escolha./Na Norte Reparos, cada trabalho é acompanhado pessoalmente do diagnóstico à conclusão./g' "$file"
        sed -i '' 's/fala diretamente comigo/fala diretamente com a nossa equipa/g' "$file"
        sed -i '' 's/Sem subcontratados, sem surpresas./— sem call centers, sem intermediários, sem surpresas./g' "$file"
        sed -i '' 's/O Meu Equipamento Profissional/O Nosso Equipamento Profissional/g' "$file"
        sed -i '' 's/A Minha Zona de Trabalho/A Nossa Zona de Trabalho/g' "$file"
        sed -i '' 's/eu preencho essa lacuna/preenchemos essa lacuna/g' "$file"
        sed -i '' 's/O Que Me Diferencia/O Que Nos Diferencia/g' "$file"
    fi
    
    # Vérifier les différences
    if diff -q "$file" "$file.bak" > /dev/null; then
        echo "  ✓ Aucun changement nécessaire"
        rm "$file.bak"
    else
        echo "  ✗ Modifications appliquées"
        # Garder le backup pour vérification
    fi
done

echo "=== Correction terminée ==="