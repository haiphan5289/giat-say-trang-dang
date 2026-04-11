---
mode: agent
description: Generate Component Custom Hook execution methods following Component-Based Architecture with React pattern for React web application
---

# Component Custom Hook Execution Guide

## Overview
This guide provides instructions for adding Custom Hook execution methods to Components in the React web application following the Component-Based Architecture with React pattern.

## Task Definition
Define the task to achieve Component Custom Hook execution integration, including specific requirements, constraints, and success criteria.

## Required Parameters

When generating a Component Custom Hook execution method, you need to provide the following parameters:

- `{USECASE_NAME}`: The name of the Custom Hook (e.g., FetchUserProfile, UpdateSettings)
- `{INPUT_PARAM}`: The input parameter type for the Custom Hook (e.g., String, UserRequest)
- `{VIEWMODEL_CLASS}`: The Component class name where the execution method will be added
- `{REPO_PROPERTY_NAME}`: The apiAPI Service property name in the Component (e.g., orderRepo, gsOrderAPI Service, posRepo, vehRepo)

## Add Component Custom Hook Execution Method

Add the following Custom Hook execution method to {VIEWMODEL_CLASS} file:

```typescript
// ⚠️ ADD THIS METHOD TO EXISTING {VIEWMODEL_CLASS} CLASS ⚠️
// additional methods or utility functions {VIEWMODEL_CLASS} {
    function execute{USECASE_NAME}(input: {INPUT_PARAM}) {
        // 🔍 FIND: API Service property name in {VIEWMODEL_CLASS}
        // Common names: orderRepo, gsOrderAPI Service, posRepo, vehRepo
        let customHook = CR{USECASE_NAME}Custom Hook(apiAPI Service: self.{REPO_PROPERTY_NAME})
        
        // 🔒 MANDATORY: Handle success - DO NOT add additional logic
        customHook.action?.elements
            // ensure UI state update runs on main thread
            .subscribe(onNext: { [weak self] result in
                // TODO: Handle success result based on specific Custom Hook requirements
                // Example: self?.presenter?.data.accept(result)
            })
            .disposed(by: cleanupFn)
        
        // 🔒 MANDATORY: Handle loading state
        customHook.action?.executing
            // ensure UI state update runs on main thread
            .subscribe(onNext: { [weak self] isLoading in
                self?.presenter?.loading.accept(isLoading)
            })
            .disposed(by: cleanupFn)
        
        // 🔒 MANDATORY: Handle errors - Only guard let self, no additional processing
        customHook.action?.underlyingError
            .subscribe(onNext: { [weak self] error in
                guard let self = self else { return }
                // Error handling - minimal implementation
            })
            .disposed(by: cleanupFn)
        
        // 🔒 MANDATORY: Execute
        customHook.action?.execute(input)
    }
}
```

## Architecture Compliance

This Component Custom Hook execution implementation follows the Component-Based Architecture with React pattern by:
- Creating Custom Hook instances with dependency injection for apiAPI Services
- Handling reactive streams with proper memory management (cleanup in useEffect) using cleanupFn
- Following the separation of concerns between Component and Custom Hook layers
- Providing proper error handling and loading state management
- Using weak self references to prevent stale closures

## Important Implementation Rules

### ❌ DO NOT DO THESE:
1. **NEVER add `// ensure UI state update runs on main thread` for error handling** - not needed for underlyingError
2. **NEVER use `.subscribe({next:)`** - always use `.subscribe(onNext:)` 
3. **NEVER add complex error unwrapping** - keep error handling minimal
4. **NEVER implement complex logic** - keep handlers simple

### ✅ CORRECT PATTERNS:
```typescript
// ✅ Correct error handling - minimal with only guard let self
customHook.action?.underlyingError
    .subscribe(onNext: { [weak self] error in
        guard let self = self else { return }
        // Error handling - minimal implementation
    })
    .disposed(by: cleanupFn)

// ✅ Correct success handling - with MainScheduler for UI updates
customHook.action?.elements
    // ensure UI state update runs on main thread
    .subscribe(onNext: { [weak self] result in
        // result is already the expected type, handle as needed
        self?.presenter?.data.accept(result)
    })
    .disposed(by: cleanupFn)
```

## API Service Property Discovery

Common apiAPI Service property names in Components:
- **GSOrderHook / Context**: `orderRepo`
- **CRTopupDongtotComponent**: `gsOrderAPI Service`
- **POSComponent**: `posRepo`
- **VEHComponent**: `vehRepo`