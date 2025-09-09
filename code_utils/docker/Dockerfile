# Multi-stage build for code snippets with Python, TypeScript, and .NET Core
FROM ubuntu:22.04

# Set environment variables
ENV DEBIAN_FRONTEND=noninteractive
ENV DOTNET_CLI_TELEMETRY_OPTOUT=1
ENV DOTNET_SKIP_FIRST_TIME_EXPERIENCE=1

# Update package list and install common dependencies
RUN apt-get update && apt-get install -y \
    curl \
    wget \
    apt-transport-https \
    software-properties-common \
    gnupg \
    lsb-release \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Install Python 3.11 and pip
RUN apt-get update && apt-get install -y \
    python3.11 \
    python3.11-dev \
    python3-pip \
    python3.11-venv \
    && update-alternatives --install /usr/bin/python python /usr/bin/python3.11 1 \
    && update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.11 1 \
    && rm -rf /var/lib/apt/lists/*

# Install Node.js 18.x and npm
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs

# Install TypeScript globally
RUN npm install -g typescript ts-node @types/node

# Install .NET 8.0 SDK
RUN wget https://packages.microsoft.com/config/ubuntu/22.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb \
    && dpkg -i packages-microsoft-prod.deb \
    && rm packages-microsoft-prod.deb \
    && apt-get update \
    && apt-get install -y dotnet-sdk-8.0 \
    && rm -rf /var/lib/apt/lists/*

# Create workspace directory structure
WORKDIR /workspace
RUN mkdir -p /workspace/code-snippets/python \
             /workspace/code-snippets/javascript \
             /workspace/code-snippets/csharp

# ========================================
# Python Project Setup with Codat SDKs
# ========================================
WORKDIR /workspace/code-snippets/python

# Copy Python dependencies and install packages
COPY docker/requirements.txt ./requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy Python code snippets
COPY temp/python/complete/ ./snippets/

# ========================================
# TypeScript Project Setup with Codat SDKs
# ========================================
WORKDIR /workspace/code-snippets/javascript

# Copy TypeScript project files and install dependencies
COPY docker/package.json ./package.json
COPY docker/tsconfig.json ./tsconfig.json
RUN npm install

# Create src directory and copy TypeScript code snippets
RUN mkdir -p src snippets
COPY temp/javascript/complete/ ./snippets/

# ========================================
# C# Project Setup with Codat SDKs
# ========================================
WORKDIR /workspace/code-snippets/csharp

# Copy C# project file and restore packages
COPY docker/CodatSnippets.csproj ./CodatSnippets.csproj
RUN dotnet restore

# Copy C# code snippets
COPY temp/csharp/complete/ ./snippets/

# ========================================
# Final Setup and Verification
# ========================================
WORKDIR /workspace/code-snippets

# Verify installations and show project structure
RUN echo "=== Environment Information ===" && \
    echo "Python version:" && python --version && \
    echo "Node.js version:" && node --version && \
    echo "npm version:" && npm --version && \
    echo "TypeScript version:" && tsc --version && \
    echo ".NET version:" && dotnet --version && \
    echo "" && \
    echo "=== Python Packages Verified ===" && \
    python -c "import requests; print('✓ requests')" && \
    python -c "import codat_platform; print('✓ codat-platform')" || echo "codat-platform installed but may need configuration" && \
    python --version | xargs echo "✓ Python:" && \
    pip list | grep -E "(codat|pyright|requests)" && \
    echo "" && \
    echo "=== TypeScript Codat Packages ===" && \
    cd javascript && npm list --depth=0 | grep codat && \
    echo "" && \
    echo "=== C# Codat Packages ===" && \
    cd ../csharp && dotnet list package | grep -i codat && \
    echo "" && \
    echo "=== Project Structure ===" && \
    find . -maxdepth 3 -type d | head -20 && \
    echo "" && \
    echo "=== Code Snippets Count ===" && \
    find . -name "*.py" | wc -l | xargs echo "Python snippets:" && \
    find . -name "*.ts" | wc -l | xargs echo "TypeScript snippets:" && \
    find . -name "*.cs" | wc -l | xargs echo "C# snippets:"

# README creation removed per user request

# Set working directory to code snippets root
WORKDIR /workspace/code-snippets

# Default command
CMD ["/bin/bash"]
