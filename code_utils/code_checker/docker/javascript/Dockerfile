# JavaScript/TypeScript-specific Dockerfile for Codat code snippets validation
FROM ubuntu:22.04

# Accept PAT token and email as build arguments
ARG PAT_TOKEN
ARG CODAT_EMAIL
ENV PAT_TOKEN=${PAT_TOKEN}
ENV CODAT_EMAIL=${CODAT_EMAIL}

# Set environment variables
ENV DEBIAN_FRONTEND=noninteractive

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

# Install Node.js 18.x and npm
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs

# Copy package.json, .npmrc, and TypeScript configuration
COPY code_checker/docker/javascript/package.json ./package.json
COPY code_checker/docker/javascript/.npmrc ./.npmrc
COPY code_checker/docker/javascript/tsconfig.json ./tsconfig.json

# Manually replace PAT_TOKEN and CODAT_EMAIL placeholders in .npmrc (avoiding need for vsts-npm-auth)
RUN sed -i "s/\${PAT_TOKEN}/$PAT_TOKEN/g" .npmrc && \
    sed -i "s/\${CODAT_EMAIL}/$CODAT_EMAIL/g" .npmrc

# Configure npm globally to use Azure DevOps registry with authentication
RUN npm config set registry https://pkgs.dev.azure.com/codat/Codat/_packaging/codat-npm/npm/registry/ && \
    npm config set //pkgs.dev.azure.com/codat/Codat/_packaging/codat-npm/npm/registry/:username codat && \
    npm config set //pkgs.dev.azure.com/codat/Codat/_packaging/codat-npm/npm/registry/:_password $PAT_TOKEN && \
    npm config set //pkgs.dev.azure.com/codat/Codat/_packaging/codat-npm/npm/registry/:email $CODAT_EMAIL && \
    npm config set //pkgs.dev.azure.com/codat/Codat/_packaging/codat-npm/npm/:username codat && \
    npm config set //pkgs.dev.azure.com/codat/Codat/_packaging/codat-npm/npm/:_password $PAT_TOKEN && \
    npm config set //pkgs.dev.azure.com/codat/Codat/_packaging/codat-npm/npm/:email $CODAT_EMAIL

# Debug: Show the configured registry
RUN echo "=== NPM Registry Configuration ===" && \
    npm config get registry && \
    echo "Global npm config:" && \
    npm config list && \
    echo "Contents of .npmrc:" && \
    cat .npmrc && \
    echo "======================================" && \
    echo ""

# Install TypeScript globally (now npm is properly configured)
RUN npm install -g typescript ts-node @types/node

# Create workspace directory
WORKDIR /workspace/code-snippets/javascript



# Install npm dependencies
RUN npm install

# Create directories for source code and snippets
RUN mkdir -p src snippets

# Copy JavaScript/TypeScript code snippets from temp directory  
COPY temp/javascript/complete/ ./snippets/

# Debug: Check what files were actually copied
RUN echo "=== DEBUG: Files in snippets directory ===" && \
    ls -la ./snippets/ && \
    echo "=== DEBUG: TypeScript files count ===" && \
    find ./snippets -name "*.ts" | wc -l && \
    echo "=== DEBUG: All files in snippets ===" && \
    find ./snippets -type f && \
    echo "=== DEBUG: Current working directory ===" && \
    pwd && \
    echo "=== DEBUG: Contents of tsconfig.json ===" && \
    cat ./tsconfig.json

# Verify Node.js and TypeScript installation
RUN echo "=== JavaScript/TypeScript Environment Information ===" && \
    echo "Node.js version:" && node --version && \
    echo "npm version:" && npm --version && \
    echo "TypeScript version:" && tsc --version && \
    echo "" && \
    echo "=== TypeScript Codat Packages ===" && \
    npm list --depth=0 | grep codat || echo "Codat packages installed" && \
    echo "" && \
    echo "=== TypeScript Snippets Count ===" && \
    find ./snippets -name "*.ts" -o -name "*.js" 2>/dev/null | wc -l | xargs echo "TypeScript/JavaScript snippets found:" || echo "No snippets directory found yet"

# Set working directory
WORKDIR /workspace/code-snippets/javascript

# Default command
CMD ["/bin/bash"]
