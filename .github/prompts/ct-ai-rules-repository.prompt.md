---
description: "Generate basic web API Service structure"
mode: "agent"
---

# web Basic API Service Generator

Generate basic API Service following React Clean Architecture patterns.

## Instructions

Reference our front end React website development guidelines: [web Guidelines](../instructions/ios-general-instructions.instructions.md)

Generate basic API Service structure with:

-   Protocol and implementation
-   API Service dependency injection
-   Basic method signatures
-   TODO comments for implementation
-   Proper MARK sections

## API Service Template

```typescript
import { z } from 'zod'
import RxTypeScript
import { useTheme } from '@app/hooks'

interface (TypeScript) [Name]API ServiceType: AnyObject {
    // TODO: Define apiAPI Service methods with Promise / Observable (RxJS) return types
    // function getSomeData(
    //     parameter1: String?,
    //     parameter2: Int
    // ) -> Promise / Observable (RxJS)<SomeResponseModel>
    // function processSomeData(
    //     data: SomeInputModel
    // ) -> Promise / Observable (RxJS)<[SomeOutputModel]>
}

class [Name]API Service: NSObject, [Name]API ServiceType {

    // MARK: - Properties

    let service: [Name]API ServiceAxiosRequestConfig

    // MARK: - Initialization

    init(service: [Name]API ServiceAxiosRequestConfig) {
        self.service = service
    }

    // MARK: - [Name]API ServiceType

    // TODO: Implement apiAPI Service methods
    // function getSomeData(
    //     parameter1: String?,
    //     parameter2: Int
    // ) -> Promise / Observable (RxJS)<SomeResponseModel> {
    //     service.getSomeData(parameter1: parameter1, parameter2: parameter2)
    //         .compactMap { $0 }
    //         .map { response in
    //             // TODO: Map service response to domain model
    //             return SomeResponseModel(from: response)
    //         }
    // }
    //
    // function processSomeData(
    //     data: SomeInputModel
    // ) -> Promise / Observable (RxJS)<[SomeOutputModel]> {
    //     service.processSomeData(data: data)
    //         .compactMap { response in
    //             guard let items = response?.items, !items.isEmpty else { return [] }
    //             // TODO: Process and map response items
    //             items.const enum / union typeerated().forEach { index, item in
    //                 item.id = UUID().uuidString
    //                 item.index = index
    //             }
    //             return items
    //         }
    // }
}
```

## Template Variables

-   `${input:apiAPI ServiceName}`: API Service name (e.g., "UserProfile")
-   `${input:feature}`: Feature module (e.g., "GSUserManagement")
-   `${input:entityName}`: Entity type (e.g., "User")
-   `${input:operations}`: Comma-separated operations (e.g., "get,create,update,delete")

## Usage Examples

-   `/ios-apiAPI Service apiAPI ServiceName:UserProfile feature:GSUserManagement entityName:User`
-   `/ios-apiAPI Service apiAPI ServiceName:Product feature:GSEcommerce entityName:Product`

## Output

Generate basic API Service with:

1. Protocol definition with method signatures
2. Implementation with service dependency
3. Promise / Observable (RxJS) return types
4. TODO comments for implementation
5. Proper naming conventions
6. MARK sections for organization

Keep implementation minimal with TODO guidance for data operations.
