# Cho Tot iOS - VS Code AI Rules

This file provides AI assistant instructions for VS Code integration with the Cho Tot iOS project.

## ECS Event Generation

When working with ECS (Event Collection System) event generation:

### Automatic Detection

- **Trigger**: When users mention ECS event generation, tracker creation, or analytics events
- **Action**: Suggest running `/ct-ecs-gen {feature_name}` command or `python3 ./bin/gen_ecs_enum.py {feature_name}`

### Workflow Commands

- **Cursor**: `/ct-ecs-gen {feature_name}` (snake_case format)
- **VS Code**: Use the command palette: "Generate ECS Code: {feature_name}"
- **Terminal**: `python3 ./bin/gen_ecs_enum.py {feature_name}`

### Example Usage

```
User: "I need to add tracking for the insert ad feature"
Agent: "I can help you generate the ECS code for the insert_ad feature. Would you like me to run the ECS generation command?"
```

### Generated Files

The command generates:

- `{FeatureName}Tracker.swift` - Contains event tracking functions
- `{FeatureName}EventType.swift` - Contains type-safe event enum

## Integration Guidelines

- **Always use CT Design System components**
- **Follow MVVM + Clean Architecture patterns**
- **Ensure proper AnalyticsEvent type usage**
- **Add generated files to Xcode project**
- **Test analytics integration**

## File Organization

Generated ECS files are placed in: `ECSCodeGen/ECSEventsCodeGen/`

For detailed guidelines, refer to the main agent instructions in `.ruler/AGENTS.md`.
