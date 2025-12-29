#!/usr/bin/env pwsh
# Script de deploy para GitHub Pages

Write-Host "=== Iniciando Deploy ===" -ForegroundColor Green

# 1. Build do projeto
Write-Host "`n1. Fazendo build..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "Erro no build!" -ForegroundColor Red
    exit 1
}

# 2. Navegando para dist
Write-Host "`n2. Preparando deploy..." -ForegroundColor Yellow
Push-Location dist

# 3. Limpando git anterior se existir
if (Test-Path .git) {
    Remove-Item -Recurse -Force .git
}

# 4. Inicializando novo repositório
git init
git config user.name "Deploy Bot"
git config user.email "deploy@bot.com"

# 5. Commitando arquivos
git add -A
git commit -m "deploy: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"

# 6. Push forçado para gh-pages
Write-Host "`n3. Fazendo push para GitHub Pages..." -ForegroundColor Yellow
git push -f https://github.com/saboracaiteria/batalha-canaa.git HEAD:gh-pages

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n=== Deploy concluído com sucesso! ===" -ForegroundColor Green
    Write-Host "URL: https://saboracaiteria.github.io/batalha-canaa/" -ForegroundColor Cyan
} else {
    Write-Host "`nErro no push!" -ForegroundColor Red
}

# 7. Voltando para a pasta do projeto
Pop-Location
