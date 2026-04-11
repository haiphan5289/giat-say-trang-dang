@@ -0,0 +1,230 @@
# web Scaffolding Guide

This guide explains how to use the web prompt files to generate code scaffolding for your React Component architecture project.

## Available Prompts

### 1. **ios-scaffold.prompt.md** - Basic File Scaffolding
Generate individual files like React Components, Components, etc.

### 2. **ios-module.prompt.md** - Complete Module Generation
Generate complete React Component modules with React Component, Component, and Builder.

### 3. **ios-usecase.prompt.md** - Custom Hook Generation
Generate React Clean Architecture custom hooks with apiAPI Service dependencies.

### 4. **ios-apiAPI Service.prompt.md** - API Service Generation
Generate apiAPI Services with service layer integration.

### 5. **ios-target.prompt.md** - API Target Generation
Generate API targets following Axios/Fetch request interface patterns.

### 6. **ios-cell.prompt.md** - Cell Generation
Generate TableView/CollectionView cells with Design System.

### 7. **ios-unittest.prompt.md** - Unit Test Generation
Generate unit tests using Jest and React Testing Library with mock classes.

## How to Use Prompts

### Method 1: GitHub Copilot Chat Commands

Use `/` commands in GitHub Copilot Chat:

```
/ios-scaffold fileName:UserProfile fileType:React Component
/ios-module moduleName:UserProfile featureName:GSUserManagement
/ios-usecase customHookName:GetUserProfile feature:GSUserManagement customHookType:action
/ios-apiAPI Service apiAPI ServiceName:UserProfile feature:GSUserManagement
/ios-target targetName:UserProfile feature:GSUserManagement operations:get,create
/ios-cell cellName:UserProfile feature:GSUserManagement
/ios-unittest className:UserProfileComponent feature:GSUserManagement testType:hook / context
```

### Method 2: Natural Language Requests

Ask Copilot to generate code using natural language:

```
"Generate a UserProfile React Component using our web scaffold template"
"Create a complete React Component module for UserProfile in GSUserManagement feature"
"Generate a Custom Hook for getting hồ sơ khách hàng data"
"Create a apiAPI Service for UserProfile with service integration"
"Generate API targets for UserProfile CRUD operations"
"Create a UserProfile table view cell with Design System"
"Generate unit tests for UserProfileComponent with Jest and React Testing Library"
```

## Template Variables

All prompts support these variables:

- `${input:fileName}` / `${input:moduleName}` - Base name (e.g., "UserProfile")
- `${input:featureName}` - Feature module (e.g., "GSUserManagement")
- `${input:fileType}` - File type (React Component, Component, Custom Hook, etc.)
- `${input:customHookType}` - "action" or "standard" for Custom Hook
- `${input:operations}` - Comma-separated operations for API targets

## Usage Examples

### Complete Feature Development Flow

1. **Start with API Target**:
```
/ios-target targetName:UserProfile feature:GSUserManagement operations:get,update,delete
```

2. **Create API Service**:
```
/ios-apiAPI Service apiAPI ServiceName:UserProfile feature:GSUserManagement
```

3. **Generate Custom Hooks**:
```
/ios-usecase customHookName:GetUserProfile feature:GSUserManagement customHookType:action
/ios-usecase customHookName:UpdateUserProfile feature:GSUserManagement customHookType:action
```

4. **Create Complete Module**:
```
/ios-module moduleName:UserProfile featureName:GSUserManagement
```

5. **Add Custom Cell (if needed)**:
```
/ios-cell cellName:UserProfileItem feature:GSUserManagement
```

### Individual File Generation

**React Component Only**:
```
/ios-scaffold fileName:UserProfile fileType:React Component
```

**Component Only**:
```
/ios-scaffold fileName:UserProfile fileType:Component
```

**Custom Hook Only**:
```
/ios-usecase customHookName:ValidateUserInput feature:GSUserManagement customHookType:standard
```

**Unit Test Only**:
```
/ios-unittest className:UserProfileComponent feature:GSUserManagement testType:hook / context
```

## Project Structure

Generated files should be organized in your project like this:

```
src/features/
  GSUserManagement/
    UserProfile/
      UserProfileReact Component.ts
      UserProfileComponent.ts
      UserProfileBuilder.ts
    Custom Hook/
      GetUserProfileCustom Hook.ts
      UpdateUserProfileCustom Hook.ts
    API Service/
      UserProfileAPI Service.ts
    Target/
      UserProfileTarget.ts
    Cell/
      UserProfileItemCell.ts
      UserProfileItemCellComponent.ts
ChoTotTests/
  GSUserManagement/
    UserProfileComponentSpec.ts
    GetUserProfileCustom HookSpec.ts
    UserProfileAPI ServiceSpec.ts
```

## Best Practices

### 1. **Follow Naming Conventions**
- Use PascalCase for class names: `UserProfileReact Component`
- Use descriptive names: `GetUserProfileCustom Hook` instead of `UserCustom Hook`
- Include feature prefix when needed: `GSUserManagementConfig`

### 2. **Generate in Order**
1. API Targets (lowest level)
2. API Services
3. Custom Hooks
4. Components & React Components
5. Supporting files (Cells, etc.)
6. Unit Tests (after implementation)

### 3. **Customize After Generation**
- All generated files contain TODO comments
- Replace placeholder types with actual models
- Implement business logic / custom hook in marked sections
- Add proper imports based on your needs

### 4. **Use Design System**
- Always use Design System for UI components
- Follow the examples in generated templates
- Don't use UIKit components directly

## Common Commands Reference

### Jest Module Setup
```bash
# Generate complete module with all dependencies
/ios-module moduleName:ProductListing featureName:GSEcommerce

# Add supporting custom hooks
/ios-usecase customHookName:SearchProducts feature:GSEcommerce customHookType:action
/ios-usecase customHookName:FilterProducts feature:GSEcommerce customHookType:standard

# Add custom cell
/ios-cell cellName:ProductItem feature:GSEcommerce
```

### API Integration Setup
```bash
# Generate API layer
/ios-target targetName:Product feature:GSEcommerce operations:get,search,filter
/ios-apiAPI Service apiAPI ServiceName:Product feature:GSEcommerce
/ios-usecase customHookName:GetProduct feature:GSEcommerce customHookType:action
```

### UI Component Setup
```bash
# Generate UI components
/ios-scaffold fileName:ProductDetail fileType:React Component
/ios-cell cellName:ProductImage feature:GSEcommerce
/ios-cell cellName:ProductInfo feature:GSEcommerce
```

## Troubleshooting

### Common Issues

1. **Prompt not recognized**: Ensure you're using GitHub Copilot Chat and the prompt files are in `.github/prompts/`

2. **Missing imports**: Add required imports based on your feature dependencies

3. **Build errors**: Replace placeholder types with actual models from your project

4. **Design system not found**: Ensure Design System is properly imported in your project

### Getting Help

- Reference the web general instructions: `.github/instructions/ios-general-instructions.instructions.md`
- Check existing code in your feature modules for patterns
- Follow the TODO comments in generated code
- Use Design System documentation for UI components

## Tips

- Start with a complete module using `/ios-module` then add specific custom hooks
- Use descriptive names that include the feature context
- Always implement TODO comments before moving to the next component
- Test your generated code incrementally
- Follow the React Component architecture patterns shown in the templates
