# Build script for Quartz static site generation
$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$publicPath = Join-Path $repoRoot "public"

Write-Host "Setting up Quartz build environment..." -ForegroundColor Cyan

# Install dependencies if needed
if (-not (Test-Path (Join-Path $repoRoot "node_modules"))) {
    Write-Host "Installing npm dependencies..." -ForegroundColor Yellow
    Set-Location $repoRoot
    npm install
}

# Clean up previous build
if (Test-Path $publicPath) {
    Write-Host "Removing previous build..." -ForegroundColor Yellow
    Remove-Item $publicPath -Recurse -Force -ErrorAction SilentlyContinue
}

# Build the site
Write-Host "Building static site..." -ForegroundColor Cyan
Set-Location $repoRoot

# Run the build
npx quartz build

Write-Host "Build complete! Output is in ./public/" -ForegroundColor Green
