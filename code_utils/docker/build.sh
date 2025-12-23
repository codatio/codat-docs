#!/bin/bash

# Build script for the Code Snippets Docker container
# This script builds a Docker image with Python, TypeScript, and .NET Core
# and copies all complete code snippets from the temp directory

echo "Building Code Snippets Docker container..."
echo "This container includes:"
echo "  - Python 3.11"
echo "  - Node.js 18.x with TypeScript"
echo "  - .NET 8.0 SDK"
echo "  - Complete code snippets organized by language"
echo ""

# Build the Docker image from the code_utils directory
cd ..
docker build -f docker/Dockerfile -t code-snippets:latest .

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Docker image built successfully!"
    echo ""
    echo "To run the container:"
    echo "  docker run -it code-snippets:latest"
    echo ""
    echo "To run with volume mount for development:"
    echo "  docker run -it -v \$(pwd):/host code-snippets:latest"
    echo ""
    echo "To inspect the code snippets:"
    echo "  docker run -it code-snippets:latest find /workspace/code-snippets -name '*.py' -o -name '*.ts' -o -name '*.cs'"
else
    echo ""
    echo "❌ Docker build failed!"
    exit 1
fi
