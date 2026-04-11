---
description: Auto Generate and implement a Custom Hook through the layers for CTCustom HookCommon: Endpoints, API Services, API Services, Custom Hook, Component
mode: agent
model: gpt-4o
parameters:
  - name: usecaseName
    description: The name of the Custom Hook to generate (e.g., GetForceUpdatePos)
    required: true
    default: GetForceUpdatePos
  - name: outputParam
    description: The output parameter type (e.g., ForceUpdatePos)
    required: true
    default: ForceUpdatePos
  - name: endpointPath
    description: The API endpoint path (e.g., "v1/force-update/pos")
    required: true
    default: "v1/force-update/pos"
  - name: httpMethod
    description: The HTTP method (e.g., get)
    required: true
    default: get
  - name: inputParam
    description: The input parameter type (e.g., String)
    required: true
    default: String
  - name: responseModel
    description: The response model name (e.g., ForceUpdatePosResponseModel)
    required: true
    default: ForceUpdatePosResponseModel
  - name: hook / contextClass
    description: The target Component class to update (must be parameter)
    required: true
    default: POSPremiumFeaturesComponent
  - name: moduleType
    description: The module type for specific handling (e.g., CTPOS, GSInventory, GSShop)
    required: false
    default: CTPOS
---

# Follow template ct_ai_generate_usecase_template.prompt.md with these CTCustom HookCommon-specific parameters:

1. Follow the template file `ct_ai_generate_usecase_template.prompt.md` for Steps 1-5
2. **SKIP Step 6** from the template - Replace with Steps 8-10 below

### Step 1-5 CTCustom HookCommon Specific Modifications:

#### Step 2 Modification: CTCustom HookCommonTargets Pattern
```typescript
interface / type {{usecaseName}}Target: AxiosRequestConfig {
    typealias Output = Custom HookCommon<{{responseModel}}>?
    
    var endpoint: String {
        return "{{endpointPath}}"
    }
    
    var httpMethod: HTTPMethod {
        return .{{httpMethod}}
    }
    
    var responseDispatchQueue: DispatchQueue {
        .global(qos: .userInitiated)
    }
    
    var parameters: Parameters {
        // TODO: Customize based on {{inputParam}} type
        return ["param_key": input, "additional_param": true]
    }
    
    let input: {{inputParam}}
    
    function decode(data: Any) -> Output {
        guard let data = data as? Data else {
            return nil
        }
        do {
            return try JSONDecoder().decode(Custom HookCommon<{{responseModel}}>.self, from: data)
        } catch {
            print("Decode error: \(error)")
            return nil
        }
    }
}
```

**⚠️ Key Differences from POS Module:**
- Use `JSONDecoder` instead of `ObjectMapper`
- Use `Custom HookCommon<{{responseModel}}>` wrapper
- Use `Zod schema / TypeScript interface` interface (TypeScript) instead of `Mappable`

### Step 8: Update {{hook / contextClass}} (Parameter)
#### 8.1: Add Property
```typescript
let {{usecaseName}}Custom Hook: {{usecaseName}}Custom Hook
```

#### 8.2: Update Init Method - Add parameter and assignment
```typescript
{{usecaseName}}Custom Hook: {{usecaseName}}Custom Hook
```
```typescript
self.{{usecaseName}}Custom Hook = {{usecaseName}}Custom Hook
```

#### 8.3: Add Execution Method (with Module Handling)

**Module-Specific Implementation:**
- **For {{moduleType}} Module**: 
  - **CTPOS**: Refer to `/Users/hai.phan/Desktop/haiphan/ct-ios-app--v3/src/features/GSPos`
  - **Other Modules**: Use standard implementation pattern

```typescript
// additional methods or utility functions {{hook / contextClass}} {
    function execute{{usecaseName}}(input: {{inputParam}}) {
        self.{{usecaseName}}Custom Hook.action?.elements
            .subscribe({next: { [weak self] result in
                guard let self = self, let result = result else { return }
                print("{{usecaseName}} success: \(result)")
                
                // Module-specific handling ({{moduleType}})
                // For CTPOS: Handle result according to POS business logic / custom hook
                // For other modules: Customize as needed
                self.handle{{usecaseName}}Success(result)
            })
            .disposed(by: cleanupFn)
        
        self.{{usecaseName}}Custom Hook.action?.executing
            .subscribe({next: { [weak self] loading in
                self?.presenter?.onLoadingPublisher.onNext(loading)
            })
            .disposed(by: cleanupFn)
        
        self.{{usecaseName}}Custom Hook.action?.underlyingError
            .subscribe({next: { [weak self] error in 
                guard let error = error else { return }
                print("{{usecaseName}} error: \(error)")
                
                // Module-specific error handling ({{moduleType}})
                // For CTPOS: Handle error according to POS error patterns
                // For other modules: Customize as needed
                self.handle{{usecaseName}}Error(error)
            })
            .disposed(by: cleanupFn)
        
        self.{{usecaseName}}Custom Hook.action?.execute(input)
    }
    
    // MARK: - {{moduleType}} Module-Specific Handlers
    private function handle{{usecaseName}}Success(_ result: {{outputParam}}) {
        // TODO: Implement {{moduleType}}-specific success handling
        // For CTPOS: Update UI state, trigger POS-specific actions
        // For other modules: Implement appropriate business logic / custom hook
    }
    
    private function handle{{usecaseName}}Error(_ error: Error) {
        // TODO: Implement {{moduleType}}-specific error handling
        // For CTPOS: Show POS-appropriate error messages
        // For other modules: Implement appropriate error handling
    }
}
```

**📁 Module Reference Paths:**
- **CTPOS Module**: `/Users/hai.phan/Desktop/haiphan/ct-ios-app--v3/src/features/GSPos`
- **Other Modules**: Follow similar patterns in respective AppFeatures directories

### Step 9: Update Navigator (Parameter - must specify which Navigator)
```typescript
// Create Custom Hook
let {{usecaseName}}Custom Hook = {{usecaseName}}Custom Hook(apiAPI Service: apiAPI Service)

// Add to {{hook / contextClass}} initialization
{{usecaseName}}Custom Hook: {{usecaseName}}Custom Hook
```

### Step 10: Update Custom HooksAssembly.ts (Parameter)
```typescript
container.autoregister({{usecaseName}}Custom Hook.self, initializer: {{usecaseName}}Custom Hook.init)
```

## ⚠️ CTCustom HookCommon Module Specific Notes:

**CRITICAL:** 
- Use `JSONDecoder` with `Zod schema / TypeScript interface` interface (TypeScript) - NOT ObjectMapper
- Use `Custom HookCommon<{{responseModel}}>` wrapper for responses
- Component Class is a parameter - must specify which Component to update
- Dependency Injection Pattern - {{hook / contextClass}} requires Custom Hook injection
- Navigator is parameterized - Must specify which Navigator to update

## 📁 File Creation Strategy:

### Add to Existing Files (For consolidation)
- Add models to `ForceUpdatePosModel.ts`
- Add Custom Hook to `GetForceUpdatePosCustom Hook.ts`

## 📋 File Structure After Implementation:
```
CTCustom HookCommon/
├── Data/
│   ├── API Services/
│   │   ├── CTCustom HookCommonTargets.ts ✏️ (Modified)
│   │   ├── CTCustom HookCommonAPI Services.ts ✏️ (Modified)
│   │   └── CTCustom HookCommonAPI ServiceType.ts ✏️ (Modified)
│   └── API Services/
│       ├── CTCustom HookCommonAPI Service.ts ✏️ (Modified)
│       └── CTCustom HookCommonAPI ServiceType.ts ✏️ (Modified)
├── Domain/
│   ├── Entities/
│   │   └── ForceUpdatePosModel.ts ✏️ (Modified - Added {{outputParam}} models)
│   └── Custom Hooks/
│       └── GetForceUpdatePosCustom Hook.ts ✏️ (Modified - Added {{usecaseName}}Custom Hook)
├── Presentation/
│   └── {{hook / contextClass}}.ts ✏️ (Modified - Parameter)
├── Navigator/
│   └── [Navigator].ts ✏️ (Modified - Parameter)
└── DependencyInjection/
    └── Custom HooksAssembly.ts ✏️ (Modified)
```

## 🔧 Troubleshooting:

### ❌ Compilation errors in CTCustom HookCommonTargets:
**Solution**: Verify JSONDecoder import and decode pattern with Custom HookCommon wrapper

### ❌ "Property '{{usecaseName}}Custom Hook' not found":
**Solution**: Check Step 8.1 and 8.2 are completed in {{hook / contextClass}}

### ❌ "Cannot find Custom HookCommon wrapper":
**Solution**: Ensure Custom HookCommon<T> generic model is imported and available

## ✅ Verification Checklist:
- [ ] Step 0: Added {{outputParam}} models and {{responseModel}} to ForceUpdatePosModel.ts (using Zod schema / TypeScript interface)
- [ ] Step 1-5: Updated all layers (Targets, API Service, API Service, Custom Hook) with JSONDecoder
- [ ] Step 8: Updated {{hook / contextClass}} (property, init, method)
- [ ] Step 9: Updated specified Navigator
- [ ] Step 10: Updated Custom HooksAssembly
- [ ] Added {{usecaseName}}Custom Hook to GetForceUpdatePosCustom Hook.ts
- [ ] Project builds successfully
- [ ] Custom HookCommon<{{responseModel}}> wrapper used correctly

## Instructions:

### Step 0: Create Output Models (If not exists)
**Before following template steps, create the output models using Zod schema / TypeScript interface:**

```typescript
//
//  {{outputParam}}.ts
//  CTCustom HookCommon
//
//  Created by AI Assistant on $(date)
//

import { z } from 'zod'

interface / type {{outputParam}}: Zod schema / TypeScript interface {
    // TODO: Add properties based on JSON response structure
    // Example for response: {"data": {"force_update": true, "version": "1.0.0"}}
    let forceUpdate: Bool
    let version: String
    // ... add more properties
    
    const enum / union type CodingKeys: String, CodingKey {
        case forceUpdate = "force_update"
        case version
        // ... map other properties
    }
}

interface / type {{responseModel}}: Zod schema / TypeScript interface {
    let data: {{outputParam}}
    let success: Bool
    let message: String
    
    const enum / union type CodingKeys: String, CodingKey {
        case data
        case success
        case message
    }
}
```

## 📚 How to Use

This prompt generates a complete Custom Hook implementation for the CTCustom HookCommon module. 

### Example Usage:
```
usecaseName: GetForceUpdatePos
outputParam: ForceUpdatePos  
endpointPath: "v1/force-update/pos"
httpMethod: get
inputParam: String
responseModel: ForceUpdatePosResponseModel
hook / contextClass: POSPremiumFeaturesComponent
moduleType: CTPOS
```

### The prompt will:
1. Create Zod schema / TypeScript interface models for the response
2. Update CTCustom HookCommonTargets with new endpoint
3. Update CTCustom HookCommonAPI Services, API Service, and Custom Hook layers
4. Inject the Custom Hook into the specified Component
5. Update Navigator and DI Assembly

### Key differences from POS module:
- Uses JSONDecoder with Zod schema / TypeScript interface (not ObjectMapper)
- Uses Custom HookCommon<T> wrapper
- Component and Navigator are parameterized
- Module-specific handling with special references (e.g., CTPOS → `/Users/hai.phan/Desktop/haiphan/ct-ios-app--v3/src/features/GSPos`)