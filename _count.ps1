$base = "c:\Users\PhilipMcKinney\Documents\Code\codat-docs\i18n\fr-ca\docusaurus-plugin-content-docs\current"
$dirs = @("auth-flow","bank-feeds","commerce","configure","core-concepts","data-model","enterprise","expenses","get-started","guides","integrations","knowledge-base","lending","payables","payroll","products","spend-insights","support","sync-for-payroll","terms","usecases","using-the-api")

foreach ($d in $dirs) {
    $p = Join-Path $base $d
    if (Test-Path $p) {
        $c = (Get-ChildItem -Path $p -Include "*.md","*.mdx" -Recurse).Count
        Write-Output "${d}: ${c}"
    } else {
        Write-Output "${d}: 0"
    }
}

$root = (Get-ChildItem -Path $base -File -Filter "*.md*").Count
Write-Output "root files: ${root}"
$total = (Get-ChildItem -Path $base -Include "*.md","*.mdx" -Recurse).Count
Write-Output "TOTAL: ${total} / 415"
