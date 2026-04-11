#!/bin/bash

# Script to switch CLAUDE.md symlink to different feature modules
# Usage: ./scripts/set-claude-context.sh CTShop

MODULE=$1
PROJECT_ROOT="/Users/soanguyen/Development/ct-ios-app"
MODULE_CLAUDE="$PROJECT_ROOT/AppFeatures/$MODULE/CLAUDE.md"
ROOT_SYMLINK="$PROJECT_ROOT/CLAUDE.md"

if [ -z "$MODULE" ]; then
    echo "Usage: $0 <ModuleName>"
    echo "Example: $0 CTShop"
    echo ""
    echo "Available modules with CLAUDE.md:"
    find "$PROJECT_ROOT/AppFeatures" -name "CLAUDE.md" -exec dirname {} \; | xargs -n1 basename
    exit 1
fi

if [ ! -f "$MODULE_CLAUDE" ]; then
    echo "❌ Error: CLAUDE.md not found for module '$MODULE'"
    echo "Expected path: $MODULE_CLAUDE"
    echo ""
    echo "Available modules with CLAUDE.md:"
    find "$PROJECT_ROOT/AppFeatures" -name "CLAUDE.md" -exec dirname {} \; | xargs -n1 basename
    exit 1
fi

# Remove existing symlink if it exists
if [ -L "$ROOT_SYMLINK" ]; then
    rm "$ROOT_SYMLINK"
fi

# Create new symlink
ln -s "AppFeatures/$MODULE/CLAUDE.md" "$ROOT_SYMLINK"

echo "✅ Claude context switched to: $MODULE"
echo "📁 $ROOT_SYMLINK -> AppFeatures/$MODULE/CLAUDE.md"
