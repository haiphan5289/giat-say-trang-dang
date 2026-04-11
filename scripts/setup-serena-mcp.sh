#!/bin/bash

# Serena MCP Setup Script for ChoTot iOS
# This script installs dependencies and sets up Serena MCP for the project

set -e  # Exit on any error

echo "🚀 Setting up Serena MCP for ChoTot iOS..."
echo

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to print colored output
print_success() {
    echo -e "\033[0;32m✅ $1\033[0m"
}

print_warning() {
    echo -e "\033[1;33m⚠️  $1\033[0m"
}

print_error() {
    echo -e "\033[0;31m❌ $1\033[0m"
}

print_info() {
    echo -e "\033[0;34mℹ️  $1\033[0m"
}

# Check if we're in the right directory
if [[ ! -f "README.md" ]] || [[ ! -d "AppFeatures" ]]; then
    print_error "Please run this script from the root of the ct-ios-app repository"
    exit 1
fi

# Step 1: Install uv (Python package manager)
echo "📦 Step 1: Installing uv (Python package manager)..."
if command_exists uv; then
    print_success "uv is already installed"
    uv --version
else
    print_info "Installing uv..."
    curl -LsSf https://astral.sh/uv/install.sh | sh

    # Add uv to PATH for current session
    export PATH="$HOME/.cargo/bin:$PATH"

    if command_exists uv; then
        print_success "uv installed successfully"
        uv --version
    else
        print_error "Failed to install uv. Please check the installation manually."
        exit 1
    fi
fi

echo

# Step 2: Verify Python environment
echo "🐍 Step 2: Checking Python environment..."
if command_exists python3; then
    print_success "Python3 is available"
    python3 --version
else
    print_warning "Python3 not found. uv will handle Python installation automatically."
fi

echo

# Step 3: Start Serena project indexing
echo "🔍 Step 3: Starting Serena project indexing..."
echo "This may take several minutes for a large codebase like ChoTot iOS..."
echo

print_info "Running: uvx --from git+https://github.com/oraios/serena serena project index"
echo "Please wait..."

if uvx --from git+https://github.com/oraios/serena serena project index; then
    print_success "Serena project indexing completed successfully!"
else
    print_error "Serena project indexing failed"
    print_warning "You can try running the indexing command manually:"
    echo "  uvx --from git+https://github.com/oraios/serena serena project index"
    exit 1
fi

echo

# Step 4: Verify MCP configuration
echo "⚙️  Step 4: Checking MCP configuration..."
if [[ -f ".cursor/mcp.json" ]]; then
    if grep -q "serena" .cursor/mcp.json; then
        print_success "Serena MCP configuration found in .cursor/mcp.json"
    else
        print_warning "Serena not found in .cursor/mcp.json"
        print_info "Please ensure Serena is configured as an MCP server in Cursor"
    fi
else
    print_warning ".cursor/mcp.json not found"
    print_info "Please restart Cursor and check MCP server configuration"
fi

echo

# Success message
echo "🎉 Serena MCP setup completed successfully!"
echo
print_info "Next steps:"
echo "  1. Restart Cursor to load the Serena MCP server"
echo "  2. Ask Cursor: 'Activate this project using Serena'"
echo "  3. Start using Serena tools directly in Cursor chat"
echo
print_info "Try these commands to get started:"
echo "  • 'Check MVVM architecture compliance for the entire project'"
echo "  • 'Analyze the CTInsertAd feature structure'"
echo "  • 'Find all ViewController classes in the project'"
echo
print_info "For detailed usage instructions, see: .serena/SERENA_INTEGRATION.md"
echo
print_success "Setup complete! Happy coding with Serena! 🤖✨"
