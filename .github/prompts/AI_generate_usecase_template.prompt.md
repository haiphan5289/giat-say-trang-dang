---
agent: Custom Hook Template Generation Specialist for Front End React Website Development
always: Auto-generate complete Custom Hook implementation through 6-layer architecture template
description: "Template pattern for auto-generating Custom Hook through layers: API Config → Endpoints → API Services → Repositories → Custom Hooks → Components. CRITICAL: Only modify existing files, never create new files."
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
---

## Prompt Activation

**You are an expert Front End React developer following the Custom Hook Template Generation Pattern.**

# web Custom Hook Auto-Generation - 6-Layer Architecture Template Implementation Prompt

You are an expert Front End React developer specializing in **Custom Hook template generation and Component-Based Architecture with React implementation** within the **Giặt Sấy Trắng Đáng application**.

We are going to **auto-generate a complete Custom Hook** through the **6-layer architecture template** pattern: **API Config (apiConfig)** → **Targets** → **API Services** → **API Services** → **Custom Hooks** → **Components**.

## Context Understanding

The **Custom Hook Template Generation Pattern** handles:
- Complete end-to-end Custom Hook template implementation across all architectural layers
- Component-Based Architecture with React compliance
- CorePayment module integration
- Reactive programming with RxTypeScript
- Proper error handling and loading states
- Type-safe API integration

## 🚨 CRITICAL RULE: NEVER CREATE NEW FILES

**🔒 MANDATORY: ONLY MODIFY EXISTING FILES - DO NOT CREATE NEW FILES**

**Module:** CorePayment  
**Custom Hook:** {USECASE_NAME}  
**Input:** {INPUT_PARAM}  
**Output:** {OUTPUT_PARAM}  
**Endpoint:** {ENDPOINT_PATH}  
**Method:** {HTTP_METHOD}  
**Response Model:** {RESPONSE_MODEL}  

## Auto Insert Code Rules

After generating code for all 6 layers, the system will automatically insert the code into the corresponding **existing files** for each layer (Endpoints, API Services, API Services, Custom Hook, Component, Models) in the project. You do not need to copy manually—just provide the Custom Hook information and parameters, and the code will be automatically updated in the correct locations.

**🚫 FORBIDDEN: Creating New Files**
- ❌ **DO NOT create** usage example files
- ❌ **DO NOT create** implementation summary files
- ❌ **DO NOT create** documentation files
- ❌ **DO NOT create** any new TypeScript files
- ❌ **DO NOT create** any new markdown files

**✅ ALLOWED: Only Modify Existing Files**
- ✅ **ONLY MODIFY** existing project files
- ✅ **ONLY ADD CODE** to existing files

**Important Notes:** 
- **Custom Hooks**: Added to existing `GSOrderHook.ts` file (never create new files)
- **Components**: Added as method to existing `GSOrderHook / Context` class (never create new class)
- **Models**: Added to existing `CRCheckOutModel.ts` file (recommended)

### 🚫 AI Point Summary - FILE CREATION FORBIDDEN
Auto-generates CorePayment Custom Hook through 6 layers: **API Config (apiConfig)** → **Targets** → **API Services** → **API Services** → **Custom Hooks** (add to existing file) → **Components** (add method to existing class).

**🔒 FINAL RESULT: ONLY 7 EXISTING FILES MODIFIED - NO NEW FILES CREATED**

## Architecture Requirements

All generated Custom Hooks using the template must consider:
- **Component-Based Architecture with React** (UI → Service → Data layers)
- **Design System** components for UI (<Button>, <Input>, <Typography>)
- **RxTypeScript** for reactive programming and asynchronous operations
- **CorePayment module** integration patterns
- **Type-safe API integration** with proper error handling
- **Memory management (cleanup in useEffect)** with proper dispose bag usage

---

## 6-Layer Architecture Template Overview

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

## Step-by-Step Template Implementation Guide

### Step 1: Add Endpoint to GSAPI Config (apiConfig)
```typescript
// ⚠️ NOTE: Endpoint name MUST be lowercase (e.g. fetchUserProfile, not FetchUserProfile)
// additional methods or utility functions Api {
    // Existing endpoints...
    static let {USECASE_NAME} = "{ENDPOINT_PATH}"
}
```

### Step 2: Add Target to GSOrderTargets
```typescript
const enum / union type GSOrderTargets {
    interface / type {USECASE_NAME}Target: AxiosRequestConfig {
        typealias Output = {RESPONSE_MODEL}?
        
        var httpMethod: HTTPMethod { return .{HTTP_METHOD} }
        var endpoint: String { return Api.{USECASE_NAME} }
        var parameterEncoding: ParameterEncoding { return URLEncoding.default }
        
        let input: {INPUT_PARAM}
        
        var parameters: [String: Any]? {
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

### Step 3: Add API Service Method
```typescript
interface (TypeScript) GSOrderAPI ServiceType {
    function {USECASE_NAME}(input: {INPUT_PARAM}) -> Promise / Observable (RxJS)<{RESPONSE_MODEL}?>
}

// additional methods or utility functions GSOrderAPI Service: GSOrderAPI ServiceType {
    function {USECASE_NAME}(input: {INPUT_PARAM}) -> Promise / Observable (RxJS)<{RESPONSE_MODEL}?> {
        return GSOrderTargets.{USECASE_NAME}Target(input: input)
            .execute()
            .observe(on: resultScheduler)
    }
}
```

### Step 4: Add API Service Method
```typescript
interface (TypeScript) GSOrderAPI ServiceType {
    function {USECASE_NAME}(input: {INPUT_PARAM}) -> Promise / Observable (RxJS)<{RESPONSE_MODEL}?>
}

// additional methods or utility functions GSOrderAPI Service: GSOrderAPI ServiceType {
    function {USECASE_NAME}(input: {INPUT_PARAM}) -> Promise / Observable (RxJS)<{RESPONSE_MODEL}?> {
        return service.{USECASE_NAME}(input: input)
    }
}
```

### Step 5: Add Custom Hook to GSOrderHook.ts 
Add the new Custom Hook class to the existing `GSOrderHook.ts` file:

```typescript
// Add to GSOrderHook.ts file
const // functional component or class CR{USECASE_NAME}Custom Hook: BaseQueryHookType {
    typealias Output = {RESPONSE_MODEL}?
    typealias Input = {INPUT_PARAM}
    
    let apiAPI Service: GSOrderAPI ServiceType
    var action: QueryFn<Input, Output>?
    
    init(apiAPI Service: GSOrderAPI ServiceType) {
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

### Step 6: Add Method to GSOrderHook / Context (Existing File)

⚠️ **ADD TO EXISTING FILE - DO NOT CREATE NEW CLASS** ⚠️

**Rules:**
1. 🔒 **ADD method to existing GSOrderHook / Context file**
2. 🔒 **NEVER modify the structure** - Use this exact pattern
3. 🔒 **NEVER change the success/error handlers** - They are auto-generated and complete
4. 🔒 **ONLY replace the placeholders** - {USECASE_NAME} and {INPUT_PARAM}
5. 🔒 **DO NOT add custom logic** - The template is complete and handles all cases

```typescript
// ⚠️ ADD THIS METHOD TO EXISTING GSOrderHook / Context CLASS ⚠️
// additional methods or utility functions GSOrderHook / Context {
    function execute{USECASE_NAME}(input: {INPUT_PARAM}) {
        let customHook = CR{USECASE_NAME}Custom Hook(apiAPI Service: orderRepo)
        
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

**Note:** 
- **ADD to existing file**: This method should be added to the existing `GSOrderHook / Context` class, not create a new file
- **Auto-generated handlers**: The success and error handlers are fully automated with logging for debugging purposes
- **No manual implementation needed**: Just replace the placeholders and add the method

---

## Response Model Template Implementation

### JSON Response Example
```json
{
    "data": {
        "total_negative": 0,
        "total_positive": 0
    },
    "success": true
}
```

### Add to CRCheckOutModel.ts (Recommended)
Add your response model at the bottom of the existing `CRCheckOutModel.ts` file:

```typescript
// MARK: - {USECASE_NAME} Response Models (Add at bottom of CRCheckOutModel.ts)

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
typealias {RESPONSE_MODEL} = GSModelCommon<{OUTPUT_PARAM}>
```

### Alternative: Create Separate File
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
typealias {RESPONSE_MODEL} = GSModelCommon<{OUTPUT_PARAM}>
```

### Why GSModelCommon?
✅ **Benefits:**
- **Consistency**: Reuse existing `GSModelCommon<T>` pattern
- **Cleaner**: No duplicate response wrapper code
- **Maintainable**: Single source of truth for response structure
- **Generic**: Works with any data type

✅ **GSModelCommon Structure:**
```typescript
public interface / type GSModelCommon<T: Zod schema / TypeScript interface>: Zod schema / TypeScript interface {
    let success: Bool?
    let data: T?
}
```
```

### Conversion Rules
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

### Parameters Customization
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

## GitHub Copilot Integration

```
Generate a CorePayment Custom Hook with these parameters:
- Custom Hook: {USECASE_NAME}
- Output: {OUTPUT_PARAM}
- Endpoint: {ENDPOINT_PATH}
- Method: {HTTP_METHOD}
- Response Model: {RESPONSE_MODEL}

Input Parameters:
- key: value (customize your API parameters here)

Follow the 6-layer architecture pattern in the template.
```

---

## Usage Examples and Template Implementation

### Basic Examples

#### Example 1: String Input
**Custom Hook Parameters:**
- USECASE_NAME: `FetchUserProfile`
- OUTPUT_PARAM: `UserProfile`
- ENDPOINT_PATH: `"v1/user/profile"`
- HTTP_METHOD: `get`
- RESPONSE_MODEL: `UserProfileResponseModel`

**Input Parameters:**
- userId: String

**Target Parameters:**
```typescript
var parameters: [String: Any]? {
    return ["userId": input] // Direct conversion: userId: String → ["userId": input]
}
```

**Alternative Examples:**
```typescript
// email: String → ["email": input]
// token: String → ["token": input]  
// categoryName: String → ["categoryName": input]
// searchQuery: String → ["searchQuery": input]

// With additional parameters:
// userId: String → ["userId": input, "includeProfile": true, "format": "json"]
```

#### Example 2: Int Input
**Custom Hook Parameters:**
- USECASE_NAME: `FetchOrderDetails`
- OUTPUT_PARAM: `OrderDetails`
- ENDPOINT_PATH: `"v1/orders/details"`
- HTTP_METHOD: `get`
- RESPONSE_MODEL: `OrderDetailsResponseModel`

**Input Parameters:**
- order_id: Int

**Target Parameters:**
```typescript
var parameters: [String: Any]? {
    return ["order_id": input] // Direct conversion: orderId: Int → ["orderId": input]
}
```

**Alternative Examples:**
```typescript
// amount: Int → ["amount": input]
// productId: Int → ["productId": input]  
// userId: Int → ["userId": input]
// page: Int → ["page": input]

// With additional parameters:
// page: Int → ["page": input, "limit": 20, "sort": "desc"]
```

#### Example 3: Custom Model Input
**Custom Hook Parameters:**
- USECASE_NAME: `CreateOrder`
- OUTPUT_PARAM: `OrderResult`
- ENDPOINT_PATH: `"v1/orders/create"`
- HTTP_METHOD: `post`
- RESPONSE_MODEL: `OrderResultResponseModel`

**Input Parameters:**
- orderRequest: CreateOrderRequest

**Target Parameters:**
```typescript
var parameters: [String: Any]? {
    return [
        "customerId": input.customerId,
        "items": input.items,
        "totalAmount": input.totalAmount
    ] // Direct mapping from orderRequest properties
}
```

**Generated Files for each example:**
1. **Data Model** - Add to `CRCheckOutModel.ts` (recommended)
2. **Custom Hook** - Add to existing `GSOrderHook.ts` file
3. **API Integration** - Complete 6-layer implementation in existing files

### Complete Prompt Example
Copy and paste this prompt to GitHub Copilot:

```
[AI] Auto-generate a Custom Hook through the layers: Endpoints, API Services, API Services, Custom Hook, Component:
- Custom Hook: FetchOrderStatistics
- Output: OrderStatistics
- Endpoint: "v1/orders/statistics"
- Method: get
- Response Model: OrderStatisticsResponseModel

Input Parameters (customize in Target):
var parameters: [String: Any]? {
    return ["order_id": input, "include_details": true]
}

Response JSON:
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

Add models to CRCheckOutModel.ts using GSModelCommon<OrderStatistics> pattern.
Follow the 6-layer architecture pattern in the template.
```

### Model Template Implementation Example
```typescript
// Add at bottom of CRCheckOutModel.ts
// MARK: - FetchOrderStatistics Response Models

public interface / type OrderStatistics: Zod schema / TypeScript interface {
    public let totalOrders: Int?
    public let pendingOrders: Int?
    public let completedOrders: Int?
    public let cancelledOrders: Int?
    public let totalRevenue: Int?
    
    const enum / union type CodingKeys: String, CodingKey {
        case totalOrders = "total_orders"
        case pendingOrders = "pending_orders"
        case completedOrders = "completed_orders"
        case cancelledOrders = "cancelled_orders"
        case totalRevenue = "total_revenue"
    }
}

// Use existing generic model
typealias OrderStatisticsResponseModel = GSModelCommon<OrderStatistics>
```

---

## How to Use This Prompt

### **Input Format Requirements:**

To activate the Custom Hook Template Generation Pattern, provide your input in this format:

```
USECASE_NAME: [Tên Custom Hook cần tạo]
INPUT_PARAM: [Kiểu dữ liệu đầu vào]
OUTPUT_PARAM: [Kiểu dữ liệu đầu ra]
ENDPOINT_PATH: [Đường dẫn API endpoint]
HTTP_METHOD: [Phương thức HTTP]
RESPONSE_MODEL: [Tên model response]
```

### **Example Inputs:**

```
USECASE_NAME: FetchOrderStatistics
INPUT_PARAM: String (orderId)
OUTPUT_PARAM: OrderStatistics
ENDPOINT_PATH: "v1/orders/statistics"
HTTP_METHOD: get
RESPONSE_MODEL: OrderStatisticsResponseModel
```

```
USECASE_NAME: CreatePayment
INPUT_PARAM: CreatePaymentRequest
OUTPUT_PARAM: PaymentResult
ENDPOINT_PATH: "v1/laundry-orders/create"
HTTP_METHOD: post
RESPONSE_MODEL: PaymentResultResponseModel
```

```
USECASE_NAME: FetchUserProfile
INPUT_PARAM: Int (userId)
OUTPUT_PARAM: UserProfile
ENDPOINT_PATH: "v1/user/profile"
HTTP_METHOD: get
RESPONSE_MODEL: UserProfileResponseModel
```

### **Generic Template:**

You are an expert Front End React developer specializing in Custom Hook template generation for Component-Based Architecture with React.  
We are going to auto-generate the Custom Hook "[USECASE_NAME]" through the 6-layer architecture template pattern.

Generate complete template implementation for:
- **API Config (apiConfig)**: API endpoint definition
- **Targets**: Axios/Fetch request interface implementation
- **API Services**: Network service method
- **API Services**: Data access layer
- **Custom Hooks**: Business logic / custom hook layer
- **Components**: UI / Component layer integration

**CRITICAL**: Only modify existing files using the template pattern, never create new files.

Start by implementing the Custom Hook template "[USECASE_NAME]" with the specified parameters.

---

## 🚫 FINAL WARNING: NO NEW FILES

**🔒 CRITICAL REMINDER:**
- ✅ **ONLY 7 EXISTING FILES** should be modified
- ❌ **DO NOT CREATE** any usage example files  
- ❌ **DO NOT CREATE** any implementation summary files
- ❌ **DO NOT CREATE** any documentation files
- ❌ **DO NOT CREATE** any new files whatsoever

**✅ SUCCESS CRITERIA:**
- Only existing project files are modified
- No new files in project directory
- Custom Hook works immediately after template implementation

**Remember: Step 6 is auto-generated and complete. Do not modify it.**
