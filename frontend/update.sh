#!/bin/bash

cd ~/Documents/projs/pocket-training/frontend

# Roda o comando para atualizar a versão
npm version patch

# Pega a versão atualizada
VERSION=$(npm -j ls | jq -r '.version')

git add .

# Faz o commit com a versão atualizada
git commit -m "updated up to v$VERSION"

git push --ipv4
