# C#/.NET-specific Dockerfile for Codat code snippets validation
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

# Install .NET 8.0 SDK
RUN wget https://packages.microsoft.com/config/ubuntu/22.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb \
    && dpkg -i packages-microsoft-prod.deb \
    && rm packages-microsoft-prod.deb \
    && apt-get update \
    && apt-get install -y dotnet-sdk-8.0 \
    && rm -rf /var/lib/apt/lists/*

# Create workspace directory
WORKDIR /workspace/code-snippets/csharp

# Copy C# project file and restore packages
COPY code_checker/docker/csharp/CodatSnippets.csproj ./CodatSnippets.csproj
RUN dotnet restore

# Create directory for code snippets and copy them from temp directory
RUN mkdir -p ./snippets/

# Copy C# code snippets from temp directory (similar to other languages)
COPY temp/csharp/complete/ ./snippets/

# Copy C# validation script and fix line endings
COPY code_checker/docker/csharp/validate-csharp-snippets.sh ./validate-csharp-snippets.sh
RUN sed -i 's/\r$//' validate-csharp-snippets.sh && chmod +x validate-csharp-snippets.sh

# Verify .NET installation and show packages
RUN echo "=== C#/.NET Environment Information ===" && \
    echo ".NET version:" && dotnet --version && \
    echo "" && \
    echo "=== C# Codat Packages ===" && \
    dotnet list package | grep -i codat || echo "Codat packages will be available after restore" && \
    echo "" && \
    echo "=== C# Snippets Count ===" && \
    find ./snippets -name "*.cs" 2>/dev/null | wc -l | xargs echo "C# snippets found:" || echo "No snippets directory found yet"

# Set working directory
WORKDIR /workspace/code-snippets/csharp

# Default command
CMD ["/bin/bash"]
