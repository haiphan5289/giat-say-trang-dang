---
description: "Generate basic web API Service structure"
mode: "agent"
---

# web Basic API Service Generator

Generate basic API Service following React Clean Architecture patterns and API integration.

## Instructions

Reference our front end React website development guidelines: [web Guidelines](../instructions/ct-ai-rules-general-instructions.instructions.md)

Generate basic API Service structure with:

-   Protocol and implementation
-   API Target integration using CTApiClient
-   RxTypeScript Promise / Observable (RxJS) return types
-   Main thread observation
-   Proper error handling
-   TODO comments for implementation
-   Proper MARK sections

## API Service Template

```typescript
import { z } from 'zod'
import RxTypeScript
import CTApiClient

interface (TypeScript) [Name]API ServiceType {
    // TODO: Define service methods with Promise / Observable (RxJS) return types
    // function fetchSomeData(parameter: String) -> Promise / Observable (RxJS)<[SomeModel]>
    // function submitData(_ data: SomeInputModel) -> Promise / Observable (RxJS)<SomeResponseModel>
    // function updateData(id: String, data: SomeInputModel) -> Promise / Observable (RxJS)<SomeResponseModel?>
    // function deleteData(id: String) -> Promise / Observable (RxJS)<Bool>
}

interface / type [Name]API Service: [Name]API ServiceType {

    // MARK: - [Name]API ServiceType

    // TODO: Implement service methods
    // function fetchSomeData(parameter: String) -> Promise / Observable (RxJS)<[SomeModel]> {
    //     [Name]Targets.FetchData(parameter: parameter)
    //         .execute()
    //         // ensure UI state update runs on main thread
    // }
    //
    // function submitData(_ data: SomeInputModel) -> Promise / Observable (RxJS)<SomeResponseModel> {
    //     [Name]Targets.SubmitData(data: data)
    //         .execute()
    //         // ensure UI state update runs on main thread
    // }
    //
    // function updateData(id: String, data: SomeInputModel) -> Promise / Observable (RxJS)<SomeResponseModel?> {
    //     [Name]Targets.UpdateData(id: id, data: data)
    //         .execute()
    //         // ensure UI state update runs on main thread
    // }
    //
    // function deleteData(id: String) -> Promise / Observable (RxJS)<Bool> {
    //     [Name]Targets.DeleteData(id: id)
    //         .execute()
    //         .map { _ in true }
    //         .catchAndReturn(false)
    //         // ensure UI state update runs on main thread
    // }
}
```

## Advanced API Service Template with Error Handling

```typescript
import { z } from 'zod'
import RxTypeScript
import CTApiClient
import { useTheme } from '@app/hooks'

interface (TypeScript) [Name]API ServiceType {
    // TODO: Define service methods
    // function fetchConfiguredData(categoryId: String, type: String) -> Promise / Observable (RxJS)<ConfigModel>
    // function processComplexRequest(params: [String: Any]) -> Promise / Observable (RxJS)<[ProcessedModel]>
    // function validateAndSubmit(data: ValidatedModel) -> Promise / Observable (RxJS)<SubmissionResult?>
}

interface / type [Name]API Service: [Name]API ServiceType {

    // MARK: - [Name]API ServiceType

    // TODO: Implement service methods with error handling
    // function fetchConfiguredData(categoryId: String, type: String) -> Promise / Observable (RxJS)<ConfigModel> {
    //     let promise / observable = [Name]Targets.GetConfiguration(categoryId: categoryId).execute()
    //     return promise / observable
    //         .map { response in
    //             guard let config = response[type] else {
    //                 throw LoadingError.noResponse
    //             }
    //             return config
    //         }
    //         // ensure UI state update runs on main thread
    // }
    //
    // function processComplexRequest(params: [String: Any]) -> Promise / Observable (RxJS)<[ProcessedModel]> {
    //     [Name]Targets.ProcessRequest(requestParams: params)
    //         .execute()
    //         // ensure UI state update runs on main thread
    // }
    //
    // function validateAndSubmit(data: ValidatedModel) -> Promise / Observable (RxJS)<SubmissionResult?> {
    //     [Name]Targets.SubmitValidatedData(data: data)
    //         .execute()
    //         // ensure UI state update runs on main thread
    // }
}
```

## API Service with Multiple Target Integration

```typescript
import { z } from 'zod'
import RxTypeScript
import CTApiClient

interface (TypeScript) [Name]API ServiceType {
    // TODO: Define service methods for different operations
    // function fetchCategories() -> Promise / Observable (RxJS)<[CategoryModel]>
    // function searchSuggestions(query: String, filters: [String]) -> Promise / Observable (RxJS)<[SuggestionModel]>
    // function analyzeText(content: String) -> Promise / Observable (RxJS)<AnalysisResult?>
    // function checkLimits(userId: String, category: String) -> Promise / Observable (RxJS)<LimitResponse?>
}

interface / type [Name]API Service: [Name]API ServiceType {

    // MARK: - [Name]API ServiceType

    // TODO: Implement methods using different targets
    // function fetchCategories() -> Promise / Observable (RxJS)<[CategoryModel]> {
    //     [Name]Targets.FetchCategory()
    //         .execute()
    //         // ensure UI state update runs on main thread
    // }
    //
    // function searchSuggestions(query: String, filters: [String]) -> Promise / Observable (RxJS)<[SuggestionModel]> {
    //     [Name]Targets.SearchSuggestions(query: query, filters: filters)
    //         .execute()
    //         // ensure UI state update runs on main thread
    // }
    //
    // function analyzeText(content: String) -> Promise / Observable (RxJS)<AnalysisResult?> {
    //     [Name]Targets.AnalyzeText(content: content)
    //         .execute()
    //         // ensure UI state update runs on main thread
    // }
    //
    // function checkLimits(userId: String, category: String) -> Promise / Observable (RxJS)<LimitResponse?> {
    //     [Name]Targets.CheckLimits(userId: userId, category: category)
    //         .execute()
    //         // ensure UI state update runs on main thread
    // }
}
```

## Best Practices

### Required Patterns

1. **Protocol Definition**: Always define a interface (TypeScript) for your service
2. **Promise / Observable (RxJS) Return Types**: All methods must return RxTypeScript Promise / Observable (RxJS)
3. **Main Thread Observation**: Use `// ensure UI state update runs on main thread` for UI updates
4. **Target Integration**: Use API Targets with `.execute()` method
5. **Error Handling**: Implement proper error mapping when needed

### Naming Conventions

-   **Protocol**: `[Name]API ServiceType`
-   **Implementation**: `[Name]API Service`
-   **Methods**: Use descriptive verbs (fetch, submit, update, delete, check, analyze)

### Import Requirements

```typescript
import { z } from 'zod'
import RxTypeScript
import CTApiClient
// Optional: import { useTheme } from '@app/hooks' for error handling
```

### Error Handling Patterns

```typescript
// Simple error handling
.catchAndReturn(defaultValue)

// Complex error mapping
.map { response in
    guard let data = response.data else {
        throw LoadingError.noResponse
    }
    return data
}

// Optional response handling
.compactMap { $0 }
```

## Template Variables

-   `${input:serviceName}`: API Service name (e.g., "SmartAd", "UserProfile")
-   `${input:feature}`: Feature module (e.g., "GSOrder", "GSUserManagement")
-   `${input:operations}`: Comma-separated operations (e.g., "fetch,submit,update,delete")
-   `${input:entityName}`: Entity type (e.g., "Category", "User", "Product")

## Usage Examples

-   `/ios-service serviceName:SmartAd feature:GSOrder operations:fetch,submit entityName:Category`
-   `/ios-service serviceName:UserProfile feature:GSUserManagement operations:get,update entityName:User`
-   `/ios-service serviceName:Product feature:GSEcommerce operations:fetch,create,update,delete entityName:Product`

## Output

Generate basic API Service with:

1. Protocol definition with method signatures
2. API Service implementation with Target integration
3. Proper RxTypeScript Promise / Observable (RxJS) patterns
4. Main thread observation
5. TODO comments for implementation
6. Proper MARK sections
7. Error handling patterns (when applicable)

Keep implementation minimal with TODO guidance for specific business logic / custom hook.
