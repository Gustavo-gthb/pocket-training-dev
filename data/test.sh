#!/bin/bash

# JSON de entrada
json_data='{
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://api.exercisedb.io/image/0dCBujteu31Kaq",
    "id": "0001",
    "name": "3/4 sit-up",
    "target": "abs"
}'

# Extrair propriedades
gifUrl=$(echo $json_data | jq -r '.gifUrl')
bodyPart=$(echo $json_data | jq -r '.bodyPart')
equipment=$(echo $json_data | jq -r '.equipment')

# Criar nome do arquivo
file_name="${bodyPart}_${equipment}.gif"

# Baixar a imagem
curl -o $file_name $gifUrl
