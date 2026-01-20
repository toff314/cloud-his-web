#!/bin/bash

# Cloud-HIS Web Application Startup Script

echo "Starting Cloud-HIS Web Application..."

# Start the backend server in the background
echo "Starting backend server..."
cd backend
npm run dev &
BACKEND_PID=$!

# Give the backend a moment to start
sleep 3

# Start the frontend server in the background
echo "Starting frontend server..."
cd ../frontend
npm run dev &
FRONTEND_PID=$!

# Function to clean up background processes
cleanup() {
    echo "Shutting down servers..."
    kill $BACKEND_PID $FRONTEND_PID 2>/dev/null
    exit 0
}

# Trap signals to ensure cleanup
trap cleanup SIGINT SIGTERM

# Wait for both processes
wait $BACKEND_PID $FRONTEND_PID