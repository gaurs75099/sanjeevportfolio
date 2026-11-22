param(
  [string]$CommitMessage = "Update portfolio experience details",
  [switch]$SkipPush,
  [switch]$Preview
)

$ErrorActionPreference = "Stop"

Set-Location (Split-Path -Parent $PSScriptRoot)

Write-Host "1/5 Checking Git repository..." -ForegroundColor Cyan
git rev-parse --is-inside-work-tree | Out-Null

$branch = (git branch --show-current).Trim()
if (-not $branch) {
  throw "Could not determine the current Git branch."
}

Write-Host "2/5 Running lint and production build..." -ForegroundColor Cyan
npm run lint
if ($LASTEXITCODE -ne 0) { throw "Lint failed. Fix the errors before deployment." }

npm run build
if ($LASTEXITCODE -ne 0) { throw "Build failed. Fix the errors before deployment." }

Write-Host "3/5 Saving changes to Git..." -ForegroundColor Cyan
git add -A

$staged = git diff --cached --quiet
if ($LASTEXITCODE -eq 0) {
  Write-Host "No new changes to commit." -ForegroundColor Yellow
} else {
  git commit -m $CommitMessage
  if ($LASTEXITCODE -ne 0) { throw "Git commit failed." }
}

if (-not $SkipPush) {
  Write-Host "4/5 Pushing $branch to GitHub..." -ForegroundColor Cyan
  git push origin $branch
  if ($LASTEXITCODE -ne 0) { throw "GitHub push failed." }
} else {
  Write-Host "4/5 GitHub push skipped." -ForegroundColor Yellow
}

Write-Host "5/5 Deploying to Vercel..." -ForegroundColor Cyan
if ($Preview) {
  npx --yes vercel
} else {
  npx --yes vercel --prod --yes
}

if ($LASTEXITCODE -ne 0) { throw "Vercel deployment failed." }

Write-Host ""
Write-Host "Deployment finished successfully." -ForegroundColor Green
