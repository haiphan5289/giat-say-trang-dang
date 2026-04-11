# Scripts Directory

This directory contains utility scripts for the ChoTot iOS project setup and development.

## Available Scripts

### `setup-serena-mcp.sh`

**Purpose**: Automated setup script for Serena MCP (Model Context Protocol) integration

**What it does**:

- ✅ Installs `uv` (Python package manager)
- ✅ Indexes the entire codebase for semantic understanding
- ✅ Verifies MCP configuration in Cursor
- ✅ Provides clear next steps for activation

**Usage**:

```bash
./scripts/setup-serena-mcp.sh
```

**Requirements**: macOS/Linux with curl installed

**Output**: Provides step-by-step feedback and next steps for using Serena

### Benefits of Serena MCP

Serena provides powerful capabilities for the ChoTot iOS monorepo:

- **Semantic Code Analysis**: Understands complex MVVM + Clean Architecture patterns
- **Automated Use Case Generation**: Creates complete 6-layer implementations
- **Architecture Compliance**: Validates adherence to established patterns
- **Large-Scale Refactoring**: Risk-free component migrations across 10k+ files

### Getting Help

For detailed usage instructions, see:

- [Complete Serena Integration Guide](../.serena/SERENA_INTEGRATION.md)
- [AI Coding Guidelines](../.ruler/AGENTS.md)

## Contributing

When adding new scripts:

1. Make scripts executable: `chmod +x scripts/your-script.sh`
2. Add documentation to this README
3. Follow the established naming conventions
4. Include proper error handling and user feedback
