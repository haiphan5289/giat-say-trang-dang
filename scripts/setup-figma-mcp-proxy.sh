#!/bin/bash
# Setup Figma MCP Proxy (REST API based — no Figma Desktop needed)
# Created by haiphan on 2026-04-03
# Copyright © 2024 Cho Tot. All rights reserved.

set -e

PROXY_DIR="$(cd "$(dirname "$0")/figma-mcp-proxy" && pwd)"
ENV_FILE="$PROXY_DIR/.env"
ENV_EXAMPLE="$PROXY_DIR/.env.example"

print_success() { echo -e "\033[0;32m✅ $1\033[0m"; }
print_info()    { echo -e "\033[0;34mℹ️  $1\033[0m"; }
print_warning() { echo -e "\033[1;33m⚠️  $1\033[0m"; }
print_error()   { echo -e "\033[0;31m❌ $1\033[0m"; }

echo "🔌 Setting up Figma MCP Proxy..."
echo

# Step 1: Check Node.js
if ! command -v node >/dev/null 2>&1; then
  print_error "Node.js is not installed. Install from: https://nodejs.org"
  exit 1
fi
NODE_VER=$(node --version)
print_success "Node.js $NODE_VER found"

# Step 2: Install dependencies
echo
echo "📦 Installing dependencies..."
cd "$PROXY_DIR"
npm install
print_success "Dependencies installed"

# Step 3: Setup .env
echo
if [ -f "$ENV_FILE" ]; then
  print_info ".env already exists — skipping"
else
  cp "$ENV_EXAMPLE" "$ENV_FILE"
  print_warning ".env created from template. You MUST add your FIGMA_TOKEN."
fi

# Step 4: Check token
FIGMA_TOKEN_VALUE=$(grep -E "^FIGMA_TOKEN=" "$ENV_FILE" 2>/dev/null | cut -d= -f2 | tr -d '"' | tr -d "'")
if [ -z "$FIGMA_TOKEN_VALUE" ] || [ "$FIGMA_TOKEN_VALUE" = "your_figma_personal_access_token_here" ]; then
  echo
  print_warning "FIGMA_TOKEN is not set!"
  echo
  echo "  1. Go to: https://www.figma.com/settings → 'Personal access tokens'"
  echo "  2. Create a token with: File content (read) + Variables (read)"
  echo "  3. Open: $ENV_FILE"
  echo "  4. Replace 'your_figma_personal_access_token_here' with your token"
  echo
  read -p "  Paste your Figma token now (or press Enter to skip): " INPUT_TOKEN
  if [ -n "$INPUT_TOKEN" ]; then
    sed -i.bak "s|your_figma_personal_access_token_here|$INPUT_TOKEN|" "$ENV_FILE"
    rm -f "$ENV_FILE.bak"
    print_success "Token saved to .env"
  else
    print_warning "Skipped. Edit $ENV_FILE manually before using the proxy."
  fi
fi

# Step 5: Show .mcp.json snippet
echo
print_success "Setup complete!"
echo
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  Add this to your .mcp.json (or .vscode/mcp.json):"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
cat <<'EOF'

"figma": {
  "command": "node",
  "args": ["scripts/figma-mcp-proxy/server.js"],
  "type": "stdio",
  "env": {
    "FIGMA_TOKEN": "<your_token_or_use_.env_file>"
  }
}

EOF
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo
print_info "Test it: cd scripts/figma-mcp-proxy && node server.js"
