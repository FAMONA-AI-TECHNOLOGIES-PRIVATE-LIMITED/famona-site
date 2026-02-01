#!/bin/bash
# Production Build & Deployment Check

echo "--- Step 1: Installing Dependencies ---"
if [ ! -d "node_modules" ]; then
    npm install
fi

echo "--- Step 2: Running Production Build ---"
# This runs 'tsc -b && vite build' as defined in your package.json
npm run build

if [ $? -eq 0 ]; then
    echo "SUCCESS: Build complete. Files are in the 'dist' folder."
    echo "ACTION: Ensure your GitHub/Azure config points to 'dist'."
else
    echo "ERROR: Build failed. Check the errors above (likely TypeScript or missing imports)."
    exit 1
fi

echo "--- Step 3: Local Preview ---"
npm run preview