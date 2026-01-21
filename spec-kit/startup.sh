#!/bin/bash

# Cloud HIS Web Startup Script

echo "==========================================="
echo "Cloud HIS Web Application Startup Script"
echo "==========================================="

# Color output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Get script directory
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Check if node is installed
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js is not installed. Please install Node.js first.${NC}"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo -e "${RED}❌ npm is not installed. Please install Node.js (includes npm).${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Node.js and npm are installed.${NC}"

# Parse command line arguments
case "${1:-init}" in
    init)
        echo -e "\n${YELLOW}📦 Installing backend dependencies...${NC}"
        cd "$SCRIPT_DIR/backend"
        npm install

        echo -e "\n${YELLOW}💾 Initializing database...${NC}"
        npm run init-db

        echo -e "\n${YELLOW}📦 Installing frontend dependencies...${NC}"
        cd "$SCRIPT_DIR/frontend"
        npm install

        echo -e "\n${GREEN}==========================================="
        echo -e "Installation completed!${NC}"
        echo -e "===========================================${NC}"
        echo ""
        echo -e "${YELLOW}To start the backend server:${NC}"
        echo "  cd backend && npm run dev"
        echo ""
        echo -e "${YELLOW}To start the frontend development server:${NC}"
        echo "  cd frontend && npm run dev"
        echo ""
        echo -e "${YELLOW}To start both servers:${NC}"
        echo "  ./startup.sh dev"
        ;;
    
    dev)
        echo -e "\n${YELLOW}🚀 Starting development servers...${NC}"
        
        # Start backend in background
        cd "$SCRIPT_DIR/backend"
        echo -e "${YELLOW}Starting backend server on port 3000...${NC}"
        npm run dev &
        BACKEND_PID=$!
        
        # Start frontend in background
        cd "$SCRIPT_DIR/frontend"
        echo -e "${YELLOW}Starting frontend server on port 5173...${NC}"
        npm run dev &
        FRONTEND_PID=$!
        
        echo -e "\n${GREEN}==========================================="
        echo -e "Development servers started!${NC}"
        echo -e "===========================================${NC}"
        echo ""
        echo -e "${YELLOW}Frontend:${NC} http://localhost:5173/"
        echo -e "${YELLOW}Backend:${NC} http://localhost:3000/"
        echo ""
        echo -e "${YELLOW}Press Ctrl+C to stop both servers${NC}"
        
        # Wait for both processes
        wait $BACKEND_PID $FRONTEND_PID
        ;;
    
    *)
        echo "Cloud HIS Web Application Management Script"
        echo ""
        echo "Usage: ./startup.sh [command]"
        echo ""
        echo "Commands:"
        echo "  init   - Install dependencies and initialize database (default)"
        echo "  dev    - Start both frontend and backend development servers"
        echo ""
        echo "Examples:"
        echo "  ./startup.sh          # Initialize project"
        echo "  ./startup.sh init     # Initialize project"
        echo "  ./startup.sh dev      # Start development servers"
        ;;
esac
