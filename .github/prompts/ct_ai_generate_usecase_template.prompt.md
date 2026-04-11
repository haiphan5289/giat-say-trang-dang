---
description: Auto Generate and implement a Custom Hook through the layers: Endpoints, API Services, API Services, Custom Hook, Component
mode: agent
model: gpt-4o
parameters:
  - name: usecaseName
    description: The name of the Custom Hook to generate (e.g., FetchOrderStatistics)
    required: true
  - name: outputParam
    description: The output parameter type (e.g., OrderStatistics)
    required: true
  - name: endpointPath
    description: The API endpoint path (e.g., "v1/orders/statistics")
    required: true
  - name: httpMethod
    description: The HTTP method (e.g., get)
    required: true
  - name: inputParam
    description: The input parameter type (e.g., Int, order_id)
    required: true
  - name: responseModel
    description: The response model name (e.g., OrderStatisticsResponseModel)
    required: true
  - name: endpointClass
    description: The endpoint class name (e.g., GSAPI Config (apiConfig))
    required: true
  - name: targetClass
    description: The target class name (e.g., GSOrderTargets)
    required: true
  - name: serviceClass
    description: The service class name (e.g., GSOrderAPI Service)
    required: true
  - name: apiAPI ServiceClass
    description: The apiAPI Service class name (e.g., GSOrderAPI Service)
    required: true
  - name: customHookClass
    description: The usecase class name (e.g., GSOrderHook)
    required: true
  - name: modelClass
    description: The model class name (e.g., CRCheckOutModel)
    required: true
  - name: hook / contextClass
    description: The viewmodel class name (e.g., GSOrderHook / Context)
    required: true
  - name: genericModel
    description: The generic wrapper model class (auto-detect or use default)
    default: "GSModelCommon"
---

# [AI] Auto-generate a Custom Hook through the layers: Endpoints, API Services, API Services, Custom Hook, Component

**Module:** CorePayment  
**Custom Hook:** {USECASE_NAME}  
**Input:** {INPUT_PARAM}  
**Output:** {OUTPUT_PARAM}  
**Endpoint:** {ENDPOINT_PATH}  
**Method:** {HTTP_METHOD}  
**Response Model:** {RESPONSE_MODEL}  
**Endpoint Class:** {ENDPOINT_CLASS}  
**Target Class:** {TARGET_CLASS}  
**API Service Class:** {SERVICE_CLASS}  
**API Service Class:** {REPOSITORY_CLASS}  
**Custom Hook Class:** {USECASE_CLASS}  
**Model Class:** {MODEL_CLASS}  
**Component Class:** {VIEWMODEL_CLASS}  
**Generic Model:** {GENERIC_MODEL}  

---
## 1. Jest Setup

**🎯 Replace these core parameters (13 required + 1 auto-detected):**

| Parameter | Description | Example |
|-----------|-------------|---------|
| `{USECASE_NAME}` | Custom Hook identifier | FetchOrderStatistics |
| `{INPUT_PARAM}` | Input parameter type | String, Int, CustomModel |
| `{OUTPUT_PARAM}` | Output data type | OrderStatistics |
| `{ENDPOINT_PATH}` | API endpoint path | "v1/orders/statistics" |
| `{HTTP_METHOD}` | HTTP method | get, post, put, delete |
| `{RESPONSE_MODEL}` | Response model name | OrderStatisticsResponseModel |
| `{ENDPOINT_CLASS}` | Endpoint class | GSAPI Config (apiConfig) |
| `{TARGET_CLASS}` | Target class | GSOrderTargets |
| `{SERVICE_CLASS}` | API Service class | GSOrderAPI Service |
| `{REPOSITORY_CLASS}` | API Service class | GSOrderAPI Service |
| `{USECASE_CLASS}` | Custom Hook class | GSOrderHook |
| `{MODEL_CLASS}` | Model class | CRCheckOutModel |
| `{VIEWMODEL_CLASS}` | Component class | GSOrderHook / Context |
| `{GENERIC_MODEL}` | Generic wrapper (auto-detect) | **Auto:** GSModelCommon, BaseResponseModel, None |

### 🔒 **Core Rule: Only Modify Existing Files**
- ✅ **Auto-insert** code into 6 layers through existing project files
- ✅ **ADD methods** to existing Components / Custom Hooks / API Services
- ❌ **NEVER create** new files (TypeScript, MD, examples, docs)

### 🔍 **Auto-Detection Steps:**
1. **Open `{VIEWMODEL_CLASS}` file**
2. **Find apiAPI Service property name** (e.g., `orderRepo`, `gsOrderAPI Service`, `posRepo`)
3. **Replace `{REPO_PROPERTY_NAME}`** with actual property name in Step 6
4. **Auto-detect `{GENERIC_MODEL}`** based on module:
   - **CorePayment modules**: `GSModelCommon`
   - **VEH modules**: `BaseResponseModel`  
   - **POS modules**: Skip wrapper (direct model)
   - **Other modules**: Check existing patterns or use `GSModelCommon`

**📋 Files Modified:** API Config → Endpoints → API Services → Repositories → Custom Hooks → Components

---

## 2. Architecture Overview

```
┌─────────────────┐
│   Component     │ ← 6. Call Custom Hook
├─────────────────┤
│    Custom Hook      │ ← 5. Business Logic
├─────────────────┤
│   API Service    │ ← 4. Data Access Layer
├─────────────────┤
│    API Service      │ ← 3. Network Layer
├─────────────────┤
│    Targets      │ ← 2. API Endpoints
├─────────────────┤
│ API Config (apiConfig)   │ ← 1. API Constants
└─────────────────┘
```

---

## 3. Implementation Templates

<details>
<summary>📋 <strong>Step-by-Step Code Templates</strong> (Click to expand - All {PLACEHOLDER} dynamic)</summary>

### Step 1: Add Endpoint to {ENDPOINT_CLASS}
```typescript
// ⚠️ NOTE: Endpoint name MUST be lowercase (e.g. fetchUserProfile, not FetchUserProfile)
// additional methods or utility functions Api {
    // Existing endpoints...
    static let {USECASE_NAME} = "{ENDPOINT_PATH}"
}
```

### Step 2: Add Target to {TARGET_CLASS}
```typescript
const enum / union type {TARGET_CLASS} {
    interface / type {USECASE_NAME}Target: AxiosRequestConfig {
        typealias Output = {RESPONSE_MODEL}?
        
        var httpMethod: HTTPMethod { return .{HTTP_METHOD} }
        var endpoint: String { return Api.{USECASE_NAME} }
        var parameterEncoding: ParameterEncoding { return URLEncoding.default }
        
        let input: {INPUT_PARAM}

        var params: Parameters {
            // TODO: Customize parameters based on your INPUT_PARAM type
            // Examples:
            // - For String: ["user_id": input]
            // - For Int: ["order_id": input]
            // - For custom model: input.toDictionary() or manual mapping
            // - For GET requests: query parameters
            // - For POST requests: body parameters
            return nil // Replace with actual parameters
        }
        
        function decode(data: Any) -> Output {
            guard let data = data as? [String: Any],
                  let jsonData = try? JSONSerialization.data(withJSONObject: data, options: []),
                  let result = try? JSONDecoder().decode({RESPONSE_MODEL}.self, from: jsonData) else {
                return nil
            }
            return result
        }
    }
}
```
> 📝 **Note:** Add the new target at the end of the {TARGET_CLASS} class/const enum / union type.

### Step 3: Add API Service Method
```typescript
interface (TypeScript) {SERVICE_CLASS}Type {
    function {USECASE_NAME}(input: {INPUT_PARAM}) -> Promise / Observable (RxJS)<{RESPONSE_MODEL}?>
}

// additional methods or utility functions {SERVICE_CLASS}: {SERVICE_CLASS}Type {
    function {USECASE_NAME}(input: {INPUT_PARAM}) -> Promise / Observable (RxJS)<{RESPONSE_MODEL}?> {
        return {TARGET_CLASS}.{USECASE_NAME}Target(input: input)
            .execute()
            .observe(on: resultScheduler)
    }
}
```
> 📝 **Note:** Add the new service method at the end of the {SERVICE_CLASS} class.

### Step 4: Add API Service Method
```typescript
interface (TypeScript) {REPOSITORY_CLASS}Type {
    function {USECASE_NAME}(input: {INPUT_PARAM}) -> Promise / Observable (RxJS)<{RESPONSE_MODEL}?>
}

// additional methods or utility functions {REPOSITORY_CLASS}: {REPOSITORY_CLASS}Type {
    function {USECASE_NAME}(input: {INPUT_PARAM}) -> Promise / Observable (RxJS)<{RESPONSE_MODEL}?> {
        return service.{USECASE_NAME}(input: input)
    }
}
```
> 📝 **Note:** Add the new apiAPI Service method at the end of the {REPOSITORY_CLASS} class and {REPOSITORY_PROTOCOL} interface (TypeScript).

### Step 5: Add Custom Hook to {USECASE_CLASS}.ts 
```typescript
// Add to {USECASE_CLASS}.ts file
const // functional component or class CR{USECASE_NAME}Custom Hook: BaseQueryHookType {
    typealias Output = {RESPONSE_MODEL}?
    typealias Input = {INPUT_PARAM}
    
    let apiAPI Service: {REPOSITORY_CLASS}Type
    var action: QueryFn<Input, Output>?
    
    init(apiAPI Service: {REPOSITORY_CLASS}Type) {
        self.apiAPI Service = apiAPI Service
        self.action = initAction()
    }
    
    private function initAction() -> QueryFn<Input, Output> {
        QueryFn<Input, Output> { [unowned self] input in
            self.apiAPI Service.{USECASE_NAME}(input: input)
        }
    }
}
```
> 📝 **Note:** Add the new custom hook at the end of the {USECASE_CLASS}.ts class.

### Step 6: Add Method to {VIEWMODEL_CLASS} (Existing File)
```typescript
// ⚠️ FORCE TEMPLATE: DO NOT ADD ANYTHING ELSE. ADD THIS METHOD TO EXISTING {VIEWMODEL_CLASS} CLASS ⚠️
// NOTE: Place this function at the end of the Component class.
// additional methods or utility functions {VIEWMODEL_CLASS} {
    function execute{USECASE_NAME}(input: {INPUT_PARAM}) {
        // 🔍 FIND: API Service property name in {VIEWMODEL_CLASS}
        // Common names: orderRepo, gsOrderAPI Service, posRepo, vehRepo
        let customHook = CR{USECASE_NAME}Custom Hook(apiAPI Service: self.{REPO_PROPERTY_NAME})
        
        // 🔒 MANDATORY: Handle success - AUTO-GENERATED: No manual implementation needed
        customHook.action?.elements
            .subscribe({next: { [weak self] result in
                guard let self = self, let result = result else { return }
                // Success handling is auto-generated and complete
            })
            .disposed(by: cleanupFn)
        
        // 🔒 MANDATORY: Handle loading
        customHook.action?.executing
            .subscribe({next: { [weak self] loading in
                self?.presenter?.loading.accept(loading)
            })
            .disposed(by: cleanupFn)
        
        // 🔒 MANDATORY: Handle errors - AUTO-GENERATED: No manual implementation needed
        customHook.action?.underlyingError
            .subscribe({next: { [weak self] error in 
                // Error handling is auto-generated and complete
            })
            .disposed(by: cleanupFn)
        
        // 🔒 MANDATORY: Execute
        customHook.action?.execute(input)
    }
}
```

</details>

---

## 4. Add Response Model to {MODEL_CLASS}

### 4.1 JSON Response Example
```json
{
    "data": {
        "total_negative": 0,
        "total_positive": 0
    },
    "success": true
}
```

### 4.2 Add to {MODEL_CLASS}.ts (Recommended)
Add your response model at the bottom of the existing `{MODEL_CLASS}.ts` file:

```typescript
// MARK: - {USECASE_NAME} Response Models (Add at bottom of {MODEL_CLASS}.ts)

// Define the actual data model first
public interface / type {OUTPUT_PARAM}: Zod schema / TypeScript interface {
    // Define your data model properties here
    // Example for UserProfile:
    // public let id: String?
    // public let name: String?
    // public let email: String?
    
    // Example for Statistics (based on your response):
    // public let totalNegative: Int?
    // public let totalPositive: Int?
    
    const enum / union type CodingKeys: String, CodingKey {
        // Map your properties here with snake_case if needed
        // case id
        // case name
        // case email
        
        // Example for Statistics:
        // case totalNegative = "total_negative"
        // case totalPositive = "total_positive"
    }
}

// Use existing generic model (Recommended)
typealias {RESPONSE_MODEL} = {GENERIC_MODEL}<{OUTPUT_PARAM}>
```

### 4.3 Alternative: Create Separate File
If you prefer to create a separate file, create `{RESPONSE_MODEL}.ts`:

```typescript
// {RESPONSE_MODEL}.ts
import { z } from 'zod'

// Define the actual data model first
public interface / type {OUTPUT_PARAM}: Zod schema / TypeScript interface {
    // Your properties here
    const enum / union type CodingKeys: String, CodingKey {
        // Your coding keys
    }
}

// Use existing generic model
typealias {RESPONSE_MODEL} = {GENERIC_MODEL}<{OUTPUT_PARAM}>
```

### 4.4 Why {GENERIC_MODEL}?
✅ **Benefits:**
- **Consistency**: Reuse existing `{GENERIC_MODEL}<T>` pattern
- **Cleaner**: No duplicate response wrapper code
- **Maintainable**: Single source of truth for response structure
- **Generic**: Works with any data type

✅ **{GENERIC_MODEL} Structure:**
```typescript
public interface / type {GENERIC_MODEL}<T: Zod schema / TypeScript interface>: Zod schema / TypeScript interface {
    let success: Bool?
    let data: T?
}
```
### 4.5 Conversion Rules
When you have a JSON response, follow these rules to convert to Zod schema / TypeScript interface:

1. **JSON Object** → `interface / type Model: Zod schema / TypeScript interface`
2. **JSON Array** → `[Model]` or `Array<Model>`
3. **snake_case** → Use `CodingKeys` to map to camelCase
4. **Optional fields** → Use optional properties (`String?`, `Int?`)
5. **Nested objects** → Create separate interface / type models

**Example Conversion:**
```
JSON: "total_negative": 0     → TypeScript: totalNegative: Int?
JSON: "user_profile": {...}   → TypeScript: userProfile: UserProfile?
JSON: "items": [...]          → TypeScript: items: [Item]?
```

### 4.6 Parameters Customization
You can customize the API parameters in the Target. **General Rule:** Convert your Input Parameters directly to API parameters:

```typescript
var parameters: [String: Any]? {
    // ✅ GENERAL CONVERSION RULE:
    // Input Parameters: "paramName: Type" → ["paramName": input]
    
    // Examples:
    // orderId: String     → return ["orderId": input]
    // userId: Int         → return ["userId": input]  
    // productId: String   → return ["productId": input]
    // amount: Double      → return ["amount": input]
    // page: Int           → return ["page": input]
    // query: String       → return ["query": input]
    
    return ["paramName": input] // ⚠️ Replace "paramName" with your actual parameter name
}
```
**Conversion Examples:**
```
Input Parameters: userId: String        → ["userId": input]
Input Parameters: orderId: Int          → ["orderId": input]  
Input Parameters: email: String         → ["email": input]
Input Parameters: amount: Double        → ["amount": input]
Input Parameters: isActive: Bool        → ["isActive": input]
Input Parameters: categories: [String]  → ["categories": input]
```
---

## 5. GitHub Copilot Prompt

```
Generate a CorePayment Custom Hook with these parameters:
- Custom Hook: {USECASE_NAME}
- Output: {OUTPUT_PARAM}
- Endpoint: {ENDPOINT_PATH}
- Method: {HTTP_METHOD}
- Response Model: {RESPONSE_MODEL}
- Endpoint Class: {ENDPOINT_CLASS}
- Target Class: {TARGET_CLASS}
- API Service Class: {SERVICE_CLASS}
- Custom Hook Class: {USECASE_CLASS}
- Model Class: {MODEL_CLASS}
- Component Class: {VIEWMODEL_CLASS}
- Generic Model: {GENERIC_MODEL}

Input Parameters:
- key: value (customize your API parameters here)

Follow the 6-layer architecture pattern in the template.
```

---

## 5. Usage Examples & Patterns

### **Parameter Mapping Patterns:**
| Input Type | {USECASE_NAME} Example | {INPUT_PARAM} | Parameters Pattern |
|------------|----------------------|---------------|-------------------|
| **String** | FetchUserProfile | `userId: String` | `["userId": input]` |
| **Int** | FetchOrderDetails | `orderId: Int` | `["orderId": input]` |
| **Custom Model** | CreateOrder | `CreateRequest` | Map object properties |

### **API Service Property Discovery:**
| Component | API Service Property | Usage |
|-----------|-------------------|-------|
| **GSOrderHook / Context** | `orderRepo` | `self.orderRepo` |
| **CRTopupDongtotComponent** | `gsOrderAPI Service` | `self.gsOrderAPI Service` |
| **POSComponent** | `posRepo` | `self.posRepo` |
| **VEHComponent** | `vehRepo` | `self.vehRepo` |

### **Jest Reference:**
```typescript
// String/Int inputs → Direct mapping
var parameters: [String: Any]? { return ["paramName": input] }

// Custom Model → Map properties  
var parameters: [String: Any]? { 
    return ["customerId": input.customerId, "items": input.items] 
}
```

### **Model Pattern with Auto-Detected {GENERIC_MODEL}:**
```typescript
// 1. Define data model (Add to {MODEL_CLASS}.ts)
public interface / type {OUTPUT_PARAM}: Zod schema / TypeScript interface {
    public let totalOrders: Int?
    // ... properties with CodingKeys for snake_case
    
    const enum / union type CodingKeys: String, CodingKey {
        case totalOrders = "total_orders"
    }
}

// 2. Auto-generated wrapper pattern:
// 🔍 AUTO-DETECT based on module location:
// - src/features/GSOrder/* → GSModelCommon<{OUTPUT_PARAM}>
// - src/features/GSEquipment/* → BaseResponseModel<{OUTPUT_PARAM}>
// - src/features/GSPos/* → Direct model (no wrapper)
typealias {RESPONSE_MODEL} = {GENERIC_MODEL}<{OUTPUT_PARAM}>
```

<details>
<summary>📋 <strong>Complete Example Templates</strong> (Click to expand)</summary>

#### **Example: FetchOrderStatistics**
```markdown
{USECASE_NAME}: FetchOrderStatistics
{INPUT_PARAM}: String  
{OUTPUT_PARAM}: OrderStatistics
{ENDPOINT_PATH}: "v1/orders/statistics"
{HTTP_METHOD}: get
{RESPONSE_MODEL}: OrderStatisticsResponseModel
{TARGET_CLASS}: GSOrderTargets
{SERVICE_CLASS}: GSOrderAPI Service
{REPOSITORY_CLASS}: GSOrderAPI Service
{USECASE_CLASS}: GSOrderHook
{MODEL_CLASS}: CRCheckOutModel
{VIEWMODEL_CLASS}: GSOrderHook / Context
{GENERIC_MODEL}: GSModelCommon

Parameters: ["order_id": input, "include_details": true]
```

#### **JSON Response Template:**
```json
{
    "data": {
        "total_orders": 150,
        "pending_orders": 25,
        "completed_orders": 120,
        "cancelled_orders": 5,
        "total_revenue": 50000000
    },
    "success": true,
    "message": "Statistics fetched successfully"
}
```

</details>

---

## ✅ **Final Result**

**🎯 Complete 6-Layer Implementation** using 13 required + 1 auto-detected {PLACEHOLDER} variables:
- **API Config (apiConfig)**: Add `{USECASE_NAME}` endpoint  
- **Targets**: Add `{USECASE_NAME}Target` to `{TARGET_CLASS}`
- **API Services**: Add method to `{SERVICE_CLASS}`  
- **API Services**: Add method to API Service
- **Custom Hooks**: Add `CR{USECASE_NAME}Custom Hook` to `{USECASE_CLASS}.ts`
- **Components**: Add `execute{USECASE_NAME}` method to `{VIEWMODEL_CLASS}`

**🔒 Core Constraint**: Only modify existing files - never create new files

**🚀 Ready to use**: Complete Custom Hook implementation across all architecture layers
