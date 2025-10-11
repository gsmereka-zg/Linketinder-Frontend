# Salve como deploy-prod.ps1

# Configurações
$prodBranch = "prod"
$srcDir = "src"
$destDir = "dest"

# Obtém a branch atual
$currentBranch = git rev-parse --abbrev-ref HEAD
Write-Host "Branch atual: $currentBranch"

git add .
git commit -m "Deploy para produção"
git push

# Cria nova branch 'prod' a partir da atual
Write-Host "Criando nova branch '$prodBranch'..."
git checkout $prodBranch

# Copia arquivos da pasta 'dest/' para raiz
Write-Host "Copiando arquivos de '$destDir/' para raiz..."
Copy-Item "$destDir\*" -Destination "." -Recurse -Force

# Remove a pasta 'src/'
if (Test-Path $srcDir) {
    Write-Host "Removendo a pasta '$srcDir/'..."
    Remove-Item $srcDir -Recurse -Force
}

# Commit e push
git add .
git commit -m "Deploy para produção"
git push --set-upstream origin $prodBranch

# Volta para a branch original
Write-Host "Voltando para a branch '$currentBranch'..."
git checkout $currentBranch
