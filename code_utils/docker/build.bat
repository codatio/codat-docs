@echo off
REM Build script for the Code Snippets Docker container (Windows)
REM This script builds a Docker image with Python, TypeScript, and .NET Core
REM and copies all complete code snippets from the temp directory

echo Building Code Snippets Docker container...
echo This container includes:
echo   - Python 3.11
echo   - Node.js 18.x with TypeScript
echo   - .NET 8.0 SDK
echo   - Complete code snippets organized by language
echo.

REM Build the Docker image from the code_utils directory
cd ..
docker build -f docker/Dockerfile -t code-snippets:latest .

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ✅ Docker image built successfully!
    echo.
    echo To run the container:
    echo   docker run -it code-snippets:latest
    echo.
    echo To run with volume mount for development:
    echo   docker run -it -v %cd%:/host code-snippets:latest
    echo.
    echo To inspect the code snippets:
    echo   docker run -it code-snippets:latest find /workspace/code-snippets -name "*.py" -o -name "*.ts" -o -name "*.cs"
) else (
    echo.
    echo ❌ Docker build failed!
    exit /b 1
)
