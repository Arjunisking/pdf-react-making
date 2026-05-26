$invoicePath = ".\src\blocks\pdfx\invoice-modern\invoice-modern.tsx"
$content = Get-Content $invoicePath -Raw

$match = [regex]::Match($content, "(?:export\s+)?function\s+(Invoice\w+)")
if (-not $match.Success) {
  throw "No Invoice component function found in invoice-modern.tsx"
}

$componentName = $match.Groups[1].Value

if ($content -notmatch "export\s+default\s+$componentName") {
  Add-Content -Path $invoicePath -Value "`r`nexport default $componentName;"
}

Write-Host "Default export set to $componentName"