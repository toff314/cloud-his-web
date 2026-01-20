#!/bin/bash

# Node.js 一键安装脚本
# 支持 Ubuntu/Debian/CentOS/Rocky Linux

set -e

# Color output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo "==========================================="
echo "Node.js Installation Script"
echo "==========================================="

# Detect OS
if [ -f /etc/os-release ]; then
    . /etc/os-release
    OS=$ID
    VERSION=$VERSION_ID
else
    echo -e "${RED}❌ Cannot detect OS${NC}"
    exit 1
fi

echo -e "${YELLOW}Detected OS: $OS $VERSION${NC}"
echo ""

# Install Node.js 20.x LTS
case "$OS" in
    ubuntu|debian)
        echo -e "${YELLOW}Installing Node.js on Ubuntu/Debian...${NC}"
        
        # Remove old Node.js if exists
        sudo apt-get remove -y nodejs npm 2>/dev/null || true
        
        # Install Node.js 20.x from NodeSource
        curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
        sudo apt-get install -y nodejs
        
        # Install build tools
        sudo apt-get install -y build-essential
        
        # Allow npm to run as root
        sudo npm config set unsafe-perm true
        ;;
        
    centos|rhel|rocky|almalinux|opencloudos)
        echo -e "${YELLOW}Installing Node.js on CentOS/RHEL/Rocky/OpenCloudOS...${NC}"
        
        # Remove old Node.js if exists
        if command -v dnf &> /dev/null; then
            sudo dnf remove -y nodejs npm 2>/dev/null || true
        else
            sudo yum remove -y nodejs npm 2>/dev/null || true
        fi
        
        # Use binary installation for OpenCloudOS (universal method)
        NODE_VERSION="20.11.1"
        NODE_DIR="/usr/local/lib/nodejs"
        
        echo -e "${YELLOW}Downloading Node.js ${NODE_VERSION}...${NC}"
        
        # Create directory
        sudo mkdir -p $NODE_DIR
        
        # Download and extract
        cd /tmp
        if [ "$(uname -m)" = "x86_64" ]; then
            ARCH="x64"
        else
            ARCH=$(uname -m)
        fi
        
        curl -fsSL https://nodejs.org/dist/v${NODE_VERSION}/node-v${NODE_VERSION}-linux-${ARCH}.tar.xz | sudo tar -xJ -C $NODE_DIR --strip-components=1
        
        # Create symlinks
        sudo ln -sf $NODE_DIR/bin/node /usr/bin/node
        sudo ln -sf $NODE_DIR/bin/npm /usr/bin/npm
        sudo ln -sf $NODE_DIR/bin/npx /usr/bin/npx
        
        # Install build tools
        if command -v dnf &> /dev/null; then
            sudo dnf groupinstall -y "Development Tools" 2>/dev/null || true
        else
            sudo yum groupinstall -y "Development Tools" 2>/dev/null || true
        fi
        
        # Allow npm to run as root
        sudo npm config set unsafe-perm true
        ;;
        
    fedora)
        echo -e "${YELLOW}Installing Node.js on Fedora...${NC}"
        
        # Install Node.js from Fedora repo
        sudo dnf install -y nodejs npm
        
        # Allow npm to run as root
        sudo npm config set unsafe-perm true
        ;;
        
    *)
        echo -e "${RED}❌ Unsupported OS: $OS${NC}"
        echo "Please install Node.js manually from https://nodejs.org/"
        exit 1
        ;;
esac

echo ""
echo -e "${GREEN}==========================================="
echo -e "Installation completed!${NC}"
echo -e "===========================================${NC}"
echo ""

# Verify installation
if command -v node &> /dev/null; then
    NODE_VERSION=$(node -v)
    echo -e "${GREEN}✅ Node.js version: $NODE_VERSION${NC}"
else
    echo -e "${RED}❌ Node.js installation failed${NC}"
    exit 1
fi

if command -v npm &> /dev/null; then
    NPM_VERSION=$(npm -v)
    echo -e "${GREEN}✅ npm version: $NPM_VERSION${NC}"
else
    echo -e "${RED}❌ npm installation failed${NC}"
    exit 1
fi

echo ""
echo -e "${YELLOW}Now you can run:${NC}"
echo "  ./startup.sh          # Initialize project"
echo "  ./startup.sh dev      # Start development servers"
