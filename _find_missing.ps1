$docsDir = "c:\Users\PhilipMcKinney\Documents\Code\codat-docs\docs"
$targetDir = "c:\Users\PhilipMcKinney\Documents\Code\codat-docs\i18n\fr-ca\docusaurus-plugin-content-docs\current"

$missing = @()
Get-ChildItem -Path $docsDir -Include "*.md","*.mdx" -Recurse | ForEach-Object {
    $rel = $_.FullName.Substring($docsDir.Length + 1)
    $target = Join-Path $targetDir $rel
    if (-not (Test-Path $target)) {
        $missing += $rel
    }
}

Write-Output "Missing files: $($missing.Count)"
Write-Output "---"
$missing | ForEach-Object { Write-Output $_ }
