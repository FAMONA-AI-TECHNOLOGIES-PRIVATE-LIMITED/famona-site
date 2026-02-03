#!/bin/bash
echo "[AUDIT] Initiating Famona AI Security & Compliance Scan..."

# 1. Public Directory Exposure Check
echo "Auditing public/ directory for sensitive files..."
# Patterns that should NEVER be in the public folder
SENSITIVE_PATTERNS=(".env*" "*.md" "*.drawio" "credentials.json" "*.sql" "*.log" "package-lock.json" "yarn.lock" "SITE.md" "TODO.md")

if [ -d "public" ]; then
    for pattern in "${SENSITIVE_PATTERNS[@]}"; do
        found_files=$(find public -name "$pattern" 2>/dev/null)
        if [ -n "$found_files" ]; then
            echo "[FAILURE] Sensitive files detected in public/:"
            echo "$found_files"
            exit 1
        fi
    done
else
    echo "Note: No public/ directory found. Assets are likely managed elsewhere."
fi

# 2. IP & Privacy Leak Scan
echo "Scanning src/ for hardcoded IP addresses..."
# Searches for IPv4 patterns (e.g., 192.168.1.1)
IP_LEAKS=$(grep -rE '[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}' src --exclude-dir=node_modules 2>/dev/null)
if [ -n "$IP_LEAKS" ]; then
    echo "[WARNING] Potential hardcoded IP addresses found in src/:"
    echo "$IP_LEAKS"
fi

echo "Scanning for external IP-echo dependencies..."
grep -rEi "ipify|icanhazip|ident.me|ifconfig.me" src --exclude-dir=node_modules

# 2. Structure Check
if [ ! -f "index.html" ]; then
    echo "WARNING: index.html not found in root. Vite expects it there."
fi

# 3. Indian Compliance Check
if grep -q "UXXXXXXXXXXXXXXPTCXXXXXX" index.html; then
    echo "CRITICAL: Placeholder CIN found in index.html."
    echo "ACTION: Replace the placeholder CIN with your actual Corporate Identity Number."
    exit 1
fi

# 3. Build Test
echo "Testing production build..."
npm run build -- --logLevel silent

if [ $? -eq 0 ]; then
    echo "SUCCESS: Build complete. Your 'dist' folder is safe to deploy."
else
    echo "ERROR: Build failed. Fix the errors above before pushing to GitHub."
fi