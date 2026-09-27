$manifest = Get-Content "$PSScriptRoot\..\paes-pdfs\manifest.json" | ConvertFrom-Json
$outDir = "$PSScriptRoot\..\paes-pdfs"

$total = $manifest.Count
$ok = 0; $fail = 0

for ($i = 0; $i -lt $total; $i++) {
    $item = $manifest[$i]
    $catDir = Join-Path $outDir $item.category
    if (-not (Test-Path $catDir)) { New-Item -ItemType Directory -Path $catDir -Force | Out-Null }
    $outFile = Join-Path $catDir "$($item.id).pdf"
    if (Test-Path $outFile) { Write-Host "[$($i+1)/$total] SKIP $($item.id)"; continue }
    try {
        $ProgressPreference = 'SilentlyContinue'
        Invoke-WebRequest -Uri $item.url -OutFile $outFile -ErrorAction Stop
        Write-Host "[$($i+1)/$total] OK $($item.id)"
        $ok++
    } catch {
        Write-Host "[$($i+1)/$total] FAIL $($item.id): $($_.Exception.Message)"
        $fail++
    }
}
Write-Host "=== DONE: $ok OK, $fail failed ==="
