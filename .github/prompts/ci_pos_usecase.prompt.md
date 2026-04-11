---
description: Auto Generate and implement a Custom Hook through the layers: Endpoints, API Services, API Services, Custom Hook, Component
mode: agent
model: gpt-4o
parameters:
  - name: usecaseName
    description: The name of the Custom Hook to generate (e.g., FetchOrderStatistics2)
    required: true
    default: FetchOrderStatistics2
  - name: outputParam
    description: The output parameter type (e.g., OrderStatistics)
    required: true
    default: OrderStatistics
  - name: endpointPath
    description: The API endpoint path (e.g., "v1/orders/statistics2")
    required: true
    default: "v1/orders/statistics2"
  - name: httpMethod
    description: The HTTP method (e.g., get)
    required: true
    default: get
  - name: inputParam
    description: The input parameter type (e.g., String)
    required: true
    default: String
  - name: responseModel
    description: The response model name (e.g., OrderStatisticsResponseModel)
    required: true
    default: OrderStatisticsResponseModel
  - name: genericModel
    description: The generic wrapper model class (auto-detect or use default)
    default: "None"
---

# Follow template ct_ai_generate_usecase_template.prompt.md with these POS-specific parameters:

**Module:** POS
**Custom Hook:** {{usecaseName}}
**Input:** {{inputParam}}
**Output:** {{outputParam}}
**Endpoint:** {{endpointPath}}
**Method:** {{httpMethod}}
**Response Model:** {{responseModel}}
**Endpoint Class:** POSUniTargets (⚠️ Direct endpoint, not API Config (apiConfig)+Api)
**Target Class:** POSUniTargets
**API Service Class:** POSUniAPI Service
**API Service Class:** POSAPI Service
**Custom Hook Class:** POSGetBundlesCustom Hook
**Model Class:** POSQuantityModel
**Component Class:** POSPremiumFeaturesComponent
**Generic Model:** {{genericModel}} (For POS: Direct model, no wrapper)

## Mapping to Template Variables:

Replace these placeholders in ct_ai_generate_usecase_template.prompt.md:

- `{USECASE_NAME}` → {{usecaseName}}
- `{INPUT_PARAM}` → {{inputParam}}
- `{OUTPUT_PARAM}` → {{outputParam}}
- `{ENDPOINT_PATH}` → {{endpointPath}}
- `{HTTP_METHOD}` → {{httpMethod}}
- `{RESPONSE_MODEL}` → {{responseModel}}
- `{ENDPOINT_CLASS}` → POSUniTargets
- `{TARGET_CLASS}` → POSUniTargets
- `{SERVICE_CLASS}` → POSUniAPI Service
- `{REPOSITORY_CLASS}` → POSAPI Service
- `{USECASE_CLASS}` → POSGetBundlesCustom Hook
- `{MODEL_CLASS}` → POSQuantityModel
- `{VIEWMODEL_CLASS}` → POSPremiumFeaturesComponent
- `{GENERIC_MODEL}` → {{genericModel}}

## Instructions:

### Step 0: Create Output Models (If not exists)
**Before following template steps, create the output models:**

```typescript
//
//  {{outputParam}}.ts
//  GSPos
//
//  Created by AI Assistant on $(date)
//

import { z } from 'zod'
import ObjectMapper
import { useTheme } from '@app/hooks'

interface / type {{outputParam}}: Mappable {
    // TODO: Add properties based on JSON response structure
    // Example for response: {"data": {"total_orders": 150, "pending_orders": 25}}
    var totalOrders: Int = 0
    var pendingOrders: Int = 0
    // ... add more properties
    
    init() {}
    
    init?(map: Map) {}
    
    mutating function mapping(map: Map) {
        totalOrders <- map["total_orders"]
        pendingOrders <- map["pending_orders"]
        // ... map other properties
    }
}

interface / type {{responseModel}}: Mappable {
    var data: {{outputParam}} = {{outputParam}}()
    var success: Bool = false
    var message: String = ""
    
    init() {}
    init?(map: Map) {}
    
    mutating function mapping(map: Map) {
        data <- map["data"]
        success <- map["success"] 
        message <- map["message"]
    }
}
```

1. Follow the template file `ct_ai_generate_usecase_template.prompt.md` for Steps 1-5
2. **SKIP Step 6** from the template - Replace with Steps 8-10 below

### Step 1-5 POS Specific Modifications:

#### Step 2 Modification: POSUniTargets Pattern
```typescript
interface / type {{usecaseName}}Target: AxiosRequestConfig {
    typealias Output = {{responseModel}}?
    
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
        guard let data = data as? [String: Any] else {
            return nil
        }
        return Mapper<{{responseModel}}>().map(JSONObject: data)
    }
}
```

**⚠️ Key Differences from Template:**
- Use `ObjectMapper` instead of `JSONDecoder`
- Direct endpoint strings (no Api.constantName)
- No ResponseEntity wrapper

### Step 8: Update POSPremiumFeaturesComponent
#### 8.1: Add Property
```typescript
let {{usecaseName}}Custom Hook: POS{{usecaseName}}Custom Hook
```

#### 8.2: Update Init Method - Add parameter and assignment
```typescript
{{usecaseName}}Custom Hook: POS{{usecaseName}}Custom Hook
```
```typescript
self.{{usecaseName}}Custom Hook = {{usecaseName}}Custom Hook
```

#### 8.3: Add Execution Method
```typescript
// additional methods or utility functions POSPremiumFeaturesComponent {
    function execute{{usecaseName}}(input: {{inputParam}}) {
        self.{{usecaseName}}Custom Hook.action?.elements
            .subscribe({next: { [weak self] result in
                guard let self = self, let result = result else { return }
                print("{{usecaseName}} success: \(result)")
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
            })
            .disposed(by: cleanupFn)
        
        self.{{usecaseName}}Custom Hook.action?.execute(input)
    }
}
```

### Step 9: Update POSInternalNavigator.ts
```typescript
// Create Custom Hook
let {{usecaseName}}Custom Hook = POS{{usecaseName}}Custom Hook(posAPI Service: apiAPI Service)

// Add to POSPremiumFeaturesComponent initialization
{{usecaseName}}Custom Hook: {{usecaseName}}Custom Hook
```

### Step 10: Update Custom HooksAssembly.ts
```typescript
container.autoregister(POS{{usecaseName}}Custom Hook.self, initializer: POS{{usecaseName}}Custom Hook.init)
```

## ⚠️ POS Module Specific Notes:

**CRITICAL:** 
- NO API Config (apiConfig)+Api.ts - Use direct endpoint strings in POSUniTargets.ts
- NO Generic Wrapper - Use direct models ({{responseModel}} = {{outputParam}})
- Dependency Injection Pattern - POSPremiumFeaturesComponent requires Custom Hook injection
- POSInternalNavigator Integration - Must create Custom Hook and inject into Component

## 📁 File Creation Strategy:

### Add to Existing Files (For consolidation)
- Add models to `POSQuantityModel.ts`
- Add Custom Hook to `POSGetBundlesCustom Hook.ts`

## 📋 File Structure After Implementation:
```
GSPos/
├── Data/
│   ├── API Services/
│   │   ├── POSUniTargets.ts ✏️ (Modified)
│   │   ├── POSUniAPI Service.ts ✏️ (Modified)
│   │   └── POSAPI ServiceType.ts ✏️ (Modified)
│   └── API Services/
│       ├── POSAPI Service.ts ✏️ (Modified)
│       └── POSAPI ServiceType.ts ✏️ (Modified)
├── Domain/
│   ├── Entities/
│   │   └── POSQuantityModel.ts ✏️ (Modified - Added {{outputParam}} models)
│   └── Custom Hooks/
│       └── POSGetBundlesCustom Hook.ts ✏️ (Modified - Added POS{{usecaseName}}Custom Hook)
├── Presentation/
│   └── PremiumFeatures/
│       └── POSPremiumFeaturesComponent.ts ✏️ (Modified)
├── Navigator/
│   └── POSInternalNavigator.ts ✏️ (Modified)
└── DependencyInjection/
    └── Custom HooksAssembly.ts ✏️ (Modified)
```

## 🔧 Troubleshooting:

### ❌ Compilation errors in POSUniTargets:
**Solution**: Verify ObjectMapper import and decode pattern matches existing targets

### ❌ "Property '{{usecaseName}}Custom Hook' not found":
**Solution**: Check Step 8.1 and 8.2 are completed in POSPremiumFeaturesComponent

## ✅ Verification Checklist:
- [ ] Step 0: Added {{outputParam}} models and {{responseModel}} to POSQuantityModel.ts
- [ ] Step 1-5: Updated all layers (Targets, API Service, API Service, Custom Hook)
- [ ] Step 8: Updated POSPremiumFeaturesComponent (property, init, method)
- [ ] Step 9: Updated POSInternalNavigator
- [ ] Step 10: Updated Custom HooksAssembly
- [ ] Added POS{{usecaseName}}Custom Hook to POSGetBundlesCustom Hook.ts
- [ ] Project builds successfully