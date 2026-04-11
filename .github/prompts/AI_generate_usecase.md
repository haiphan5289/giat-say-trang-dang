# [AI] Auto-generate a Custom Hook through the layers: Endpoints, API Services, API Services, Custom Hook, Component

**Owned by:** Hai Phan  
**Date:** May 14, 2025  
**Last Updated:** December 29, 2024  

---

## 1. Aim

### Objective
This document outlines the purpose, scope, and appropriate usage of the AI point identified during the presentation titled "Auto-generate a Custom Hook through the layers: Endpoints, API Services, API Services, Custom Hook, Component." conducted on May 5, 2025.

It serves as a guideline to ensure responsible interpretation, implementation, and integration of this AI insight within operational or strategic workflows.

### AI Point Summary
The AI automatically generates app functionality through four main layers: **Targets**, **API Services**, **API Services**, and **Custom Hooks**. After generating the Custom Hook, it applies the logic directly to the corresponding **Component**, helping reduce repetitive code and speed up development.

---

## 2. Process

### How the AI Point Was Derived
This insight was generated via analysis of existing React Clean Architecture patterns in the web codebase, specifically examining the modular architecture structure in the `GSOrder` module. The pattern follows Component-Based Architecture with React principles with clear separation of concerns.

### Data Considerations
- **Source:** VS Code, GitHub Copilot, Visual Studio Code
- **Sensitivity:** React Clean Architecture patterns
- **Assumptions:** Folder structure follows React Clean Architecture principles
- **Limitations:** Requires consistent naming conventions and architectural patterns

---

## 3. Output

### Architecture Layers Overview

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

### Interpreting the Output
Auto-generate a Custom Hook through the layers: **Targets**, **API Services**, **API Services**, **Custom Hook**, and **Component**.

For example, when you add a new Custom Hook for the màn hình xử lý đơn giặt sấy, this code will automatically generate all the related functions, such as:
- `GSAPI Config (apiConfig)` (API endpoints)
- `GSOrderTargets` (Network requests)  
- `GSOrderAPI Service` (API Service layer)
- `GSOrderAPI Service` (API Service layer)
- `GSOrderHook` (Business logic / custom hook)
- `GSOrderHook / Context` (Presentation logic)

---

## 4. Step-by-Step Implementation Guide

### Table of Contents:
1. [Add Endpoint to GSAPI Config (apiConfig)](#step-1-add-endpoint-to-crnetworkhelper)
2. [Add Targets to GSOrderTargets](#step-2-add-targets-to-crxử lý đơn giặtTargets)
3. [Add API Service to GSOrderAPI Service](#step-3-add-service-to-crxử lý đơn giặtservice)
4. [Add Function to GSOrderAPI Service](#step-4-add-function-to-crxử lý đơn giặtcartapiAPI Service)
5. [Add Custom Hook to GSOrderHook](#step-5-add-usecase-to-crxử lý đơn giặtusecase)
6. [Call Custom Hook in GSOrderHook / Context](#step-6-call-usecase-in-crxử lý đơn giặtpageviewmodel)

---

### Step 1: Add Endpoint to GSAPI Config (apiConfig)
**File Path:** `/Users/hai.phan/Desktop/haiphan/ct-ios-app--v3/src/features/GSOrder/GSOrder/API Config (apiConfig)/GSAPI Config (apiConfig).ts`

Add the following to the `Api` // additional methods or utility functions:

```typescript
// additional methods or utility functions Api {
    // Existing endpoints...
    
    // New endpoint for AI-generated Custom Hook
    static let fetchCopilot = "v1/private/ai/fetch-copilot"
}
```

---

### Step 2: Add Targets to GSOrderTargets
**File Path:** `/Users/hai.phan/Desktop/haiphan/ct-ios-app--v3/src/features/GSOrder/GSOrder/Data/API Services/Checkout/GSOrderTargets.ts`

Add the new target structure:

```typescript
const enum / union type GSOrderTargets {
    // Existing targets...
    
    interface / type FetchCopilotTarget: AxiosRequestConfig {
        typealias Output = CRCopilotResponseModel?
        
        var httpMethod: HTTPMethod {
            return .get
        }
        
        var endpoint: String {
            return Api.fetchCopilot
        }
        
        var parameterEncoding: ParameterEncoding {
            return JSONEncoding.default
        }
        
        let inputData: String
        
        var parameters: [String: Any]? {
            return [
                "input_data": inputData,
                "timestamp": Date().timeIntervalSince1970
            ]
        }
        
        function decode(data: Any) -> Output {
            guard let data = data as? [String: Any] else {
                return nil
            }
            return CRCopilotResponseModel(JSON: data)
        }
    }
}
```

---

### Step 3: Add API Service to GSOrderAPI Service
**File Path:** `/Users/hai.phan/Desktop/haiphan/ct-ios-app--v3/src/features/GSOrder/GSOrder/Data/API Services/Checkout/GSOrderAPI Service.ts`

Add the interface (TypeScript) method and implementation:

```typescript
interface (TypeScript) GSOrderAPI ServiceType {
    // Existing methods...
    function fetchCopilot(input: String) -> Promise / Observable (RxJS)<CRCopilotResponseModel?>
}

// additional methods or utility functions GSOrderAPI Service: GSOrderAPI ServiceType {
    // Existing implementations...
    
    function fetchCopilot(input: String) -> Promise / Observable (RxJS)<CRCopilotResponseModel?> {
        return GSOrderTargets.FetchCopilotTarget(inputData: input)
            .execute()
            .observe(on: resultScheduler)
    }
}
```

---

### Step 4: Add Function to GSOrderAPI Service
**File Path:** `/Users/hai.phan/Desktop/haiphan/ct-ios-app--v3/src/features/GSOrder/GSOrder/Data/API Services/Checkout/Cart/GSOrderAPI Service.ts`

Add the interface (TypeScript) method and implementation:

```typescript
interface (TypeScript) GSOrderAPI ServiceType {
    // Existing methods...
    function fetchCopilot(input: String) -> Promise / Observable (RxJS)<CRCopilotResponseModel?>
}

// additional methods or utility functions GSOrderAPI Service: GSOrderAPI ServiceType {
    // Existing implementations...
    
    function fetchCopilot(input: String) -> Promise / Observable (RxJS)<CRCopilotResponseModel?> {
        return service.fetchCopilot(input: input)
    }
}
```

---

### Step 5: Add Custom Hook to GSOrderHook
**File Path:** `/Users/hai.phan/Desktop/haiphan/ct-ios-app--v3/src/features/GSOrder/GSOrder/Domain/Custom Hooks/Checkout/GSOrderHook.ts`

Add the new Custom Hook following the established pattern:

```typescript
const // functional component or class CRFetchCopilotCustom Hook: BaseQueryHookType {
    
    typealias Output = CRCopilotResponseModel?
    typealias Input = String
    
    let apiAPI Service: GSOrderAPI ServiceType
    var action: QueryFn<Input, Output>?
    
    init(apiAPI Service: GSOrderAPI ServiceType) {
        self.apiAPI Service = apiAPI Service
        self.action = initAction()
    }
    
    private function initAction() -> QueryFn<Input, Output> {
        QueryFn<Input, Output> { [unowned self] input in
            self.apiAPI Service.fetchCopilot(input: input)
        }
    }
}
```

---

### Step 6: Call Custom Hook in GSOrderHook / Context
**File Path:** `/Users/hai.phan/Desktop/haiphan/ct-ios-app--v3/src/features/GSOrder/GSOrder/Features/CheckoutPage/GSOrderHook / Context.ts`

Add the Custom Hook integration following the existing patterns:

```typescript
const // functional component or class GSOrderHook / Context: GSOrderHook / ContextType, GSOrderPageComponentPropsListener {
    // Existing properties...
    
    // Add Custom Hook integration
    function fetchCopilotData(input: String) {
        let fetchCopilotCustom Hook = CRFetchCopilotCustom Hook(apiAPI Service: orderRepo)
        
        // Handle success response
        fetchCopilotCustom Hook.action?.elements
            .subscribe({next: { [weak self] result in
                guard let self = self, let result = result else { return }
                // Process the result
                self.handleCopilotResponse(result)
                print("FetchCopilot result: \(result)")
            })
            .disposed(by: cleanupFn)
        
        // Handle loading state
        fetchCopilotCustom Hook.action?.executing
            .subscribe({next: { [weak self] loading in
                guard let self = self else { return }
                self.presenter?.loading.accept(loading)
            })
            .disposed(by: cleanupFn)
        
        // Handle errors
        fetchCopilotCustom Hook.action?.underlyingError
            .subscribe({next: { [weak self] error in
                guard let self = self else { return }
                self.handleCopilotError(error)
            })
            .disposed(by: cleanupFn)
        
        // Execute the Custom Hook
        fetchCopilotCustom Hook.action?.execute(input)
    }
    
    private function handleCopilotResponse(_ response: CRCopilotResponseModel) {
        // Handle successful response
        // Update UI accordingly
    }
    
    private function handleCopilotError(_ error: Error) {
        // Handle error cases
        presenter?.loading.accept(false)
        // Show error message to user
    }
}
```

---

## 5. Data Model

Don't forget to create the response model:

```typescript
// CRCopilotResponseModel.ts
import { z } from 'zod'
import ObjectMapper

interface / type CRCopilotResponseModel: Mappable {
    var success: Bool?
    var data: String?
    var message: String?
    var timestamp: TimeInterval?
    
    init?(map: Map) {}
    
    mutating function mapping(map: Map) {
        success <- map["success"]
        data <- map["data"]
        message <- map["message"]
        timestamp <- map["timestamp"]
    }
}
```

---

## 6. Usage Guidelines

### Do's ✅
- Follow the established naming conventions
- Always implement error handling
- Use the established architectural patterns
- Add appropriate unit tests
- Document the new functionality
- Handle loading states properly

### Don'ts ❌
- Don't break the clean architecture principles
- Don't skip error handling
- Don't ignore memory management (cleanup in useEffect) (use `[weak self]`)
- Don't forget to dispose promise / observables properly
- Don't hardcode values without configuration

---

## 7. Logging & Feedback Loop

**GitHub Copilot Integration:** GitHub Copilot will read this prompt and remember it. Anytime you open this prompt and ask GitHub Copilot to generate a Custom Hook, it will auto-generate the custom hook following this guide.

### Prompt for GitHub Copilot:
```
Generate a new Custom Hook for [FeatureName] that follows the 6-layer architecture:
1. Add endpoint to GSAPI Config (apiConfig)
2. Add target to GSOrderTargets  
3. Add service method to GSOrderAPI Service
4. Add apiAPI Service method to GSOrderAPI Service
5. Create Custom Hook in GSOrderHook
6. Integrate in GSOrderHook / Context

Feature: [Describe the feature]
API Endpoint: [API path]
Input: [Input parameters]
Output: [Expected response]
```

---

## 8. Glossary of Terms

- **Custom Hook**: Business logic / custom hook layer that orchestrates data flow
- **API Service**: Data access layer abstraction
- **API Service**: Network/API communication layer
- **Target**: Specific API endpoint configuration
- **Component**: Presentation logic layer in React (Component/Hook/API Service) pattern
- **React Clean Architecture**: Architectural pattern with clear separation of concerns