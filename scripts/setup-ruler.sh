#!/bin/bash

echo "Setting up ruler for all modules..."

# Function to process a module
process_module() {
  local module=$1
  echo "Processing $module"

  # Remove existing .ruler directory if it exists
  if [ -d "$module/.ruler" ]; then
    rm -rf "$module/.ruler"
  fi

  # Create new .ruler directory
  mkdir -p "$module/.ruler"

  # Copy all files from root .ruler except ct-ai-*.md files
  for file in .ruler/*; do
    # Skip directories and non-files
    [ -f "$file" ] || continue

    filename=$(basename "$file")
    # Skip ct-ai-*.md files
    if [[ ! "$filename" =~ ^ct-ai-.*\.md$ ]]; then
      cp "$file" "$module/.ruler/"
    fi
  done

  # Copy module's AGENTS.md to .ruler/AGENTS.md if it exists
  if [ -f "$module/AGENTS.md" ]; then
    cp "$module/AGENTS.md" "$module/.ruler/AGENTS.md"
  fi

  # Ensure AGENTS.md exists in .ruler directory
  if [ ! -f "$module/.ruler/AGENTS.md" ]; then
    touch "$module/.ruler/AGENTS.md"
  fi

  # Check if reference note already exists in AGENTS.md
  if ! grep -q "# Reference Root AGENTS.md" "$module/.ruler/AGENTS.md"; then
    # Append reference note to AGENTS.md
    echo "" >> "$module/.ruler/AGENTS.md"
    echo "# Reference Root AGENTS.md" >> "$module/.ruler/AGENTS.md"
    echo "" >> "$module/.ruler/AGENTS.md"
    echo "- Reference main's AGENTS.md for coding standard and guideline ../.ruler/AGENTS.md. Make sure to follow the coding standard and guideline." >> "$module/.ruler/AGENTS.md"
  fi

  # Apply ruler in the module directory and wait for completion
  echo "Applying ruler rules in $module..."
  (cd "$module" && ruler apply --nested --backup=disable --agents=agentsmd)
  local exit_code=$?
  if [ $exit_code -ne 0 ]; then
    echo "Error applying ruler rules in $module. Exit code: $exit_code"
    exit $exit_code
  fi
  echo "Completed applying ruler rules in $module"
}

# Process AppFeatures modules that have a .ruler directory or AGENTS.md file
for module in AppFeatures/*; do
  if [ -d "$module" ] && ([ -d "$module/.ruler" ] || [ -f "$module/AGENTS.md" ]); then
    process_module "$module"
  fi
done

# Process Libraries modules that have a .ruler directory or AGENTS.md file
for module in Libraries/*; do
  if [ -d "$module" ] && ([ -d "$module/.ruler" ] || [ -f "$module/AGENTS.md" ]); then
    process_module "$module"
  fi
done

echo "Ruler setup completed for all modules."