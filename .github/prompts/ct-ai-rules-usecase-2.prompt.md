---
mode: agent
description: Generate Custom Hook classes following Component-Based Architecture with React pattern for React web application
---

# Custom Hook Generation Guide

## Overview
This guide provides instructions for adding Custom Hook classes to the React web application following the Component-Based Architecture with React pattern.

## Task Definition
Define the task to achieve Custom Hook generation, including specific requirements, constraints, and success criteria.

## Required Parameters

When generating a Custom Hook, you need to provide the following parameters:

- `{USECASE_NAME}`: The name of the Custom Hook (e.g., FetchUserProfile, UpdateSettings)
- `{INPUT_PARAM}`: The input parameter type for the Custom Hook (e.g., String, UserRequest)
- `{RESPONSE_MODEL}`: The response model type returned by the Custom Hook (e.g., User, GSModelCommon<User>)
- `{REPOSITORY_CLASS}`: The apiAPI Service class name that the Custom Hook will depend on (e.g., UserAPI Service)
- `{USECASE_CLASS}`: The Custom Hook class file name where the new Custom Hook will be added

## Add Custom Hook Implementation

Add the following Custom Hook implementation to {USECASE_CLASS}.ts file:

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

## Architecture Compliance

This Custom Hook implementation follows the Component-Based Architecture with React pattern by:
- Conforming to `BaseQueryHookType` interface (TypeScript)
- Using dependency injection for the apiAPI Service
- Encapsulating business logic / custom hook within the Action
- Maintaining proper separation of concerns between layers