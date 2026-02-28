#!/bin/bash

# Données par ville
declare -A CITIES
CITIES[vila-real]="Vila Real|41.2959|-7.7442|45|60-70|5"
CITIES[chaves]="Chaves|41.7390|-7.4706|50|55-60|6"
CITIES[lamego]="Lamego|41.0967|-7.8108|45|60-70|5"

for city_key in "${!CITIES[@]}"; do
  IFS='|' read -r city lat lon taxa tempo zona <<< "${CITIES[$city_key]}"
  file="picheleiro-${city_key}.html"
  
  echo "Enriching $file for $city..."
  
  # Backup
  cp "$file" "${file}.bak"
  
  # Ajouter geo coordinates au JSON-LD
  sed -i '' 's/"priceRange":"€€"}/"priceRange":"€€","geo":{"@type":"GeoCoordinates","latitude":"'$lat'","longitude":"'$lon'"}}/' "$file"
  
done

echo "Done!"
