#!/bin/bash

SNIPPETS_PATH=${1:-"/workspace/code-snippets/csharp/snippets"}
TEMP_DIR="/tmp/csharp-validation"
TOTAL_ERRORS=0
VALIDATED_COUNT=0

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}🔍 Validating C# snippets individually...${NC}"

# Template for individual snippet project
create_project_file() {
    local project_file="$1"
    cat > "$project_file" << 'EOF'
<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <TargetFramework>net8.0</TargetFramework>
    <OutputType>Exe</OutputType>
    <ImplicitUsings>enable</ImplicitUsings>
    <Nullable>enable</Nullable>
  </PropertyGroup>

  <ItemGroup>
    <PackageReference Include="Codat.Platform" Version="*" />
    <PackageReference Include="Codat.BankFeeds" Version="*" />
    <PackageReference Include="Codat.Lending" Version="*" />
    <PackageReference Include="Codat.Sync.Commerce" Version="*" />
    <PackageReference Include="Codat.Sync.Expenses" Version="*" />
    <PackageReference Include="Codat.Sync.Payables" Version="*" />
    <PackageReference Include="Codat.Sync.Payroll" Version="*" />
    <PackageReference Include="Newtonsoft.Json" Version="13.0.3" />
  </ItemGroup>
</Project>
EOF
}

# Clean up any existing temp directory
if [ -d "$TEMP_DIR" ]; then
    rm -rf "$TEMP_DIR"
fi

# Find all .cs files
if [ ! -d "$SNIPPETS_PATH" ]; then
    echo -e "${YELLOW}⚠️  Snippets directory not found: $SNIPPETS_PATH${NC}"
    exit 0
fi

# Count .cs files
CS_FILES_COUNT=$(find "$SNIPPETS_PATH" -name "*.cs" -type f | wc -l)

if [ "$CS_FILES_COUNT" -eq 0 ]; then
    echo -e "${YELLOW}⚠️  No C# files found in $SNIPPETS_PATH${NC}"
    exit 0
fi

echo -e "${GREEN}📁 Found $CS_FILES_COUNT C# snippet files${NC}"

# Process each .cs file
find "$SNIPPETS_PATH" -name "*.cs" -type f | sort | while read -r file; do
    VALIDATED_COUNT=$((VALIDATED_COUNT + 1))
    SNIPPET_NAME=$(basename "$file" .cs)
    PROJECT_DIR="$TEMP_DIR/$SNIPPET_NAME"
    
    echo -e "${CYAN}🔄 [$VALIDATED_COUNT/$CS_FILES_COUNT] Validating: $SNIPPET_NAME${NC}"
    
    # Create project directory
    mkdir -p "$PROJECT_DIR"
    
    # Create project file
    PROJECT_FILE="$PROJECT_DIR/$SNIPPET_NAME.csproj"
    create_project_file "$PROJECT_FILE"
    
    # Copy snippet as Program.cs
    PROGRAM_FILE="$PROJECT_DIR/Program.cs"
    cp "$file" "$PROGRAM_FILE"
    
    # Restore packages for this project
    RESTORE_OUTPUT=$(dotnet restore "$PROJECT_FILE" -v q 2>&1)
    RESTORE_EXIT_CODE=$?
    
    if [ $RESTORE_EXIT_CODE -ne 0 ]; then
        echo -e "  ${RED}❌ $SNIPPET_NAME - RESTORE FAILED${NC}"
        echo -e "  ${RED}   Restore output:${NC}"
        echo "$RESTORE_OUTPUT" | sed 's/^/     /' | while read -r line; do
            echo -e "  ${RED}$line${NC}"
        done
        TOTAL_ERRORS=$((TOTAL_ERRORS + 1))
        echo "$TOTAL_ERRORS" > "$TEMP_DIR/error_count"
        continue
    fi
    
    # Build the project (capture both stdout and stderr)
    BUILD_OUTPUT=$(dotnet build "$PROJECT_FILE" --no-restore -v q 2>&1)
    BUILD_EXIT_CODE=$?
    
    if [ $BUILD_EXIT_CODE -eq 0 ]; then
        echo -e "  ${GREEN}✅ $SNIPPET_NAME - OK${NC}"
    else
        echo -e "  ${RED}❌ $SNIPPET_NAME - BUILD FAILED${NC}"
        echo -e "  ${RED}   Build output:${NC}"
        echo "$BUILD_OUTPUT" | sed 's/^/     /' | while read -r line; do
            echo -e "  ${RED}$line${NC}"
        done
        TOTAL_ERRORS=$((TOTAL_ERRORS + 1))
        # Write error count to temp file since subshell can't modify parent variables
        echo "$TOTAL_ERRORS" > "$TEMP_DIR/error_count"
    fi
done

# Read final error count
if [ -f "$TEMP_DIR/error_count" ]; then
    TOTAL_ERRORS=$(cat "$TEMP_DIR/error_count")
else
    TOTAL_ERRORS=0
fi

# Clean up temp directory
if [ -d "$TEMP_DIR" ]; then
    rm -rf "$TEMP_DIR"
fi

echo ""
if [ "$TOTAL_ERRORS" -eq 0 ]; then
    echo -e "${GREEN}🎉 All $CS_FILES_COUNT C# snippets validated successfully!${NC}"
    exit 0
else
    echo -e "${RED}❌ Validation completed with $TOTAL_ERRORS errors out of $CS_FILES_COUNT snippets${NC}"
    exit 1
fi
