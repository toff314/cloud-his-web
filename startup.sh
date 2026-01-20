#!/bin/bash

# Cloud HIS Web Startup Script

echo "==========================================="
echo "Cloud HIS Web Application Startup Script"
echo "==========================================="

# Check if node is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install Node.js (includes npm)."
    exit 1
fi

echo "✅ Node.js and npm are installed."

# Navigate to backend directory and install dependencies
echo ""
echo "📦 Installing backend dependencies..."
cd /home/yuanwu/cloud-his-web/backend
npm install

# Initialize database
echo ""
echo "💾 Initializing database..."
npm run init-db

# Navigate to frontend directory and install dependencies
echo ""
echo "📦 Installing frontend dependencies..."
cd /home/yuanwu/cloud-his-web/frontend
npm install

echo ""
echo "==========================================="
echo "Installation completed!"
echo "==========================================="
echo ""
echo "To start the backend server:"
echo "  cd /home/yuanwu/cloud-his-web/backend && npm run dev"
echo ""
echo "To start the frontend development server:"
echo "  cd /home/yuanwu/cloud-his-web/frontend && npm run dev"
echo ""
echo "For production build:"
echo "  cd /home/yuanwu/cloud-his-web/frontend && npm run build"
echo ""