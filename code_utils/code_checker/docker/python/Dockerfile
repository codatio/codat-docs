# Python-specific Dockerfile for Codat code snippets validation
FROM ubuntu:22.04

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

# Install Python 3.11 and pip
RUN apt-get update && apt-get install -y \
    python3.11 \
    python3.11-dev \
    python3-pip \
    python3.11-venv \
    && update-alternatives --install /usr/bin/python python /usr/bin/python3.11 1 \
    && update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.11 1 \
    && rm -rf /var/lib/apt/lists/*

# Create workspace directory
WORKDIR /workspace/code-snippets/python

# Copy Python dependencies and install packages
COPY code_checker/docker/python/requirements.txt ./requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Create directory for code snippets and copy them from temp directory
RUN mkdir -p ./snippets/

# Copy Python code snippets from temp directory (similar to JavaScript approach)
COPY temp/python/complete/ ./snippets/

# Verify Python installation and show packages
RUN echo "=== Python Environment Information ===" && \
    echo "Python version:" && python --version && \
    echo "" && \
    echo "=== Python Packages Verified ===" && \
    python -c "import requests; print('✓ requests')" && \
    python -c "import codat_platform; print('✓ codat-platform')" || echo "codat-platform installed but may need configuration" && \
    echo "" && \
    pip list | grep -E "(codat|pyright|requests)" && \
    echo "" && \
    echo "=== Python Snippets Count ===" && \
    find ./snippets -name "*.py" 2>/dev/null | wc -l | xargs echo "Python snippets found:" || echo "No snippets directory found yet"

# Set working directory
WORKDIR /workspace/code-snippets/python

# Default command
CMD ["/bin/bash"]
