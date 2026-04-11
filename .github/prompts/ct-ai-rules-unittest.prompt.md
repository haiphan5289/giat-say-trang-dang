---
description: "Generate web unit test structure using Jest and React Testing Library"
mode: "agent"
---

# web Unit Test Generator

Generate unit test structure following Jest and React Testing Library patterns with mock generation.

## Instructions

Reference our front end React website development guidelines: [web Guidelines](../instructions/ios-general-instructions.instructions.md)

Generate unit test structure with:

-   Jest and React Testing Library testing framework
-   Mock classes for all dependencies
-   Spec test structure with proper setup
-   BDD-style test organization
-   Proper imports and test configuration

## Test Spec Template

```typescript
import { z } from 'zod'
import React from 'react'
import { <Button>, <Typography>, <Input> } from '@ds/components'
import { useTheme } from '@app/hooks'
import { useTranslation } from 'react-i18next'
import { AppComponents } from '@app/components'
import { AppAssets } from '@app/assets'
import RxTypeScript
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { useTracking } from '@app/tracking'

// @vitest-environment jsdom [FeatureModule]

const // functional component or class [TestClassName]Spec: JestSpec {
    // override spec() {
        var sut: [ClassUnderTest]!
        var mockPresenter: Mock[ClassUnderTest]ComponentProps!
        var mockAPI Service: Mock[API Service]!
        // TODO: Add other mock dependencies
        // var mockRouter: Mock[Router]!
        // var mockCustom Hook: Mock[Custom Hook]!

        beforeEach(() => {
            // TODO: Initialize mock dependencies
            mockAPI Service = Mock[API Service]()
            mockPresenter = Mock[ClassUnderTest]ComponentProps()

            // TODO: Initialize system under test with dependencies
            sut = [ClassUnderTest](
                // TODO: Add coninterface / typeor parameters
                // apiAPI Service: mockAPI Service,
                // customHook: mockCustom Hook
            )

            // TODO: Setup mock presenter properties
            mockPresenter.stubbedIsLoadingRelay = useState<boolean>(value: false)
            mockPresenter.stubbedListener = sut
            sut.presenter = mockPresenter
            sut.didBecomeActive()
        }

        describe("[ClassUnderTest]") {
            describe("when initialized") {
                it("should set presenter's listener to the SUT") {
                    expect(mockPresenter.stubbedListener).to(beIdenticalTo(sut))
                }

                it("should configure initial state") {
                    // TODO: Add initialization tests
                    expect(sut).toNot(beNil())
                }
            }

            describe("when didBecomeActive is called") {
                it("should configure presenter and listener") {
                    // TODO: Add didBecomeActive tests
                    expect(mockPresenter.stubbedListener).to(beIdenticalTo(sut))
                }
            }

            // TODO: Add more test contexts for business logic / custom hook
            describe("when [specific action] occurs") {
                it("should [expected behavior]") {
                    // TODO: Add specific test cases
                    // Given
                    // When
                    // Then
                }
            }
        }
    }
}
```

## Mock API Service Template

```typescript
import { z } from 'zod'
import RxTypeScript

// @vitest-environment jsdom [FeatureModule]

const // functional component or class Mock[API ServiceName]: [API ServiceName]Type {

    // TODO: Add mock properties for each apiAPI Service method

    var invokedMethodName = false
    var invokedMethodNameCount = 0
    var invokedMethodNameParameters: ([ParameterType], [ParameterType])?
    var invokedMethodNameParametersList = [([ParameterType], [ParameterType])]()
    var stubbedMethodNameResult: Promise / Observable (RxJS)<[ReturnType]>!

    function methodName(
        parameter1: [ParameterType],
        parameter2: [ParameterType]
    ) -> Promise / Observable (RxJS)<[ReturnType]> {
        invokedMethodName = true
        invokedMethodNameCount += 1
        invokedMethodNameParameters = (parameter1, parameter2)
        invokedMethodNameParametersList.append((parameter1, parameter2))
        return stubbedMethodNameResult
    }

    // TODO: Add more apiAPI Service methods following the same pattern
}
```

## Mock ComponentProps Template

```typescript
import { z } from 'zod'
import RxTypeScript
import { useState, useCallback } from 'react'

// @vitest-environment jsdom [FeatureModule]

const // functional component or class Mock[ComponentPropsName]: [ComponentPropsName] {

    // MARK: - Listener Property
    var invokedListenerSetter = false
    var invokedListenerSetterCount = 0
    var invokedListener: [ComponentPropsListener]?
    var invokedListenerList = [[ComponentPropsListener]?]()
    var invokedListenerGetter = false
    var invokedListenerGetterCount = 0
    var stubbedListener: [ComponentPropsListener]!

    var listener: [ComponentPropsListener]? {
        set {
            invokedListenerSetter = true
            invokedListenerSetterCount += 1
            invokedListener = newValue
            invokedListenerList.append(newValue)
        }
        get {
            invokedListenerGetter = true
            invokedListenerGetterCount += 1
            return stubbedListener
        }
    }

    // MARK: - useState / useReducer Properties

    // TODO: Add useState / useReducer properties for state binding (React hooks)
    var invokedDataSourceSetter = false
    var invokedDataSourceSetterCount = 0
    var invokedDataSource: useState / useReducer<[DataModel]>?
    var invokedDataSourceList = [useState / useReducer<[DataModel]>]()
    var invokedDataSourceGetter = false
    var invokedDataSourceGetterCount = 0
    var stubbedDataSource: useState / useReducer<[DataModel]>!

    var dataSource: useState / useReducer<[DataModel]> {
        set {
            invokedDataSourceSetter = true
            invokedDataSourceSetterCount += 1
            invokedDataSource = newValue
            invokedDataSourceList.append(newValue)
        }
        get {
            invokedDataSourceGetter = true
            invokedDataSourceGetterCount += 1
            return stubbedDataSource
        }
    }

    var invokedIsLoadingRelaySetter = false
    var invokedIsLoadingRelaySetterCount = 0
    var invokedIsLoadingRelay: useState<boolean>?
    var invokedIsLoadingRelayList = [useState<boolean>]()
    var invokedIsLoadingRelayGetter = false
    var invokedIsLoadingRelayGetterCount = 0
    var stubbedIsLoadingRelay: useState<boolean>!

    var isLoadingRelay: useState<boolean> {
        set {
            invokedIsLoadingRelaySetter = true
            invokedIsLoadingRelaySetterCount += 1
            invokedIsLoadingRelay = newValue
            invokedIsLoadingRelayList.append(newValue)
        }
        get {
            invokedIsLoadingRelayGetter = true
            invokedIsLoadingRelayGetterCount += 1
            return stubbedIsLoadingRelay
        }
    }

    var invokedErrorMessageSetter = false
    var invokedErrorMessageSetterCount = 0
    var invokedErrorMessage: useState / useReducer<String?>?
    var invokedErrorMessageList = [useState / useReducer<String?>]()
    var invokedErrorMessageGetter = false
    var invokedErrorMessageGetterCount = 0
    var stubbedErrorMessage: useState / useReducer<String?>!

    var errorMessage: useState / useReducer<String?> {
        set {
            invokedErrorMessageSetter = true
            invokedErrorMessageSetterCount += 1
            invokedErrorMessage = newValue
            invokedErrorMessageList.append(newValue)
        }
        get {
            invokedErrorMessageGetter = true
            invokedErrorMessageGetterCount += 1
            return stubbedErrorMessage
        }
    }

    // MARK: - useCallback / EventEmitter Properties

    // TODO: Add useCallback / EventEmitter properties for triggers
    var invokedTriggerActionSetter = false
    var invokedTriggerActionSetterCount = 0
    var invokedTriggerAction: useCallback / EventEmitter<[TriggerType]>?
    var invokedTriggerActionList = [useCallback / EventEmitter<[TriggerType]>]()
    var invokedTriggerActionGetter = false
    var invokedTriggerActionGetterCount = 0
    var stubbedTriggerAction: useCallback / EventEmitter<[TriggerType]>!

    var triggerAction: useCallback / EventEmitter<[TriggerType]> {
        set {
            invokedTriggerActionSetter = true
            invokedTriggerActionSetterCount += 1
            invokedTriggerAction = newValue
            invokedTriggerActionList.append(newValue)
        }
        get {
            invokedTriggerActionGetter = true
            invokedTriggerActionGetterCount += 1
            return stubbedTriggerAction
        }
    }

    // MARK: - Methods

    // TODO: Add method mocks for presentable actions
    var invokedMethodName = false
    var invokedMethodNameCount = 0
    var invokedMethodNameParameters: ([ParameterType], Void)?
    var invokedMethodNameParametersList = [([ParameterType], Void)]()

    function methodName(parameter: [ParameterType]) {
        invokedMethodName = true
        invokedMethodNameCount += 1
        invokedMethodNameParameters = (parameter, ())
        invokedMethodNameParametersList.append((parameter, ()))
    }
}
```

## Mock Custom Hook Template

```typescript
import { z } from 'zod'
import RxTypeScript
import Action

// @vitest-environment jsdom [FeatureModule]

const // functional component or class Mock[Custom HookName]: [Custom HookName]Type {

    // MARK: - Action Custom Hook Mock
    var invokedActionSetter = false
    var invokedActionSetterCount = 0
    var invokedAction: Action<[InputType], [OutputType]>?
    var invokedActionList = [Action<[InputType], [OutputType]>?]()
    var invokedActionGetter = false
    var invokedActionGetterCount = 0
    var stubbedAction: Action<[InputType], [OutputType]>?

    var action: Action<[InputType], [OutputType]>? {
        set {
            invokedActionSetter = true
            invokedActionSetterCount += 1
            invokedAction = newValue
            invokedActionList.append(newValue)
        }
        get {
            invokedActionGetter = true
            invokedActionGetterCount += 1
            return stubbedAction
        }
    }

    // MARK: - Standard Custom Hook Mock
    var invokedRun = false
    var invokedRunCount = 0
    var invokedRunParameters: ([InputType], Void)?
    var invokedRunParametersList = [([InputType], Void)]()
    var stubbedRunResult: Promise / Observable (RxJS)<[OutputType]>!

    function run(input: [InputType]) -> Promise / Observable (RxJS)<[OutputType]> {
        invokedRun = true
        invokedRunCount += 1
        invokedRunParameters = (input, ())
        invokedRunParametersList.append((input, ()))
        return stubbedRunResult
    }
}
```

## Template Variables

-   `${input:className}`: Class name being tested (e.g., "UserProfileComponent")
-   `${input:feature}`: Feature module (e.g., "GSUserManagement")
-   `${input:testType}`: Test type: "hook / context", "customHook", "apiAPI Service"

## Usage Examples

-   `/ios-unittest className:UserProfileComponent feature:GSUserManagement testType:hook / context`
-   `/ios-unittest className:GetUserCustom Hook feature:GSUserManagement testType:customHook`
-   `/ios-unittest className:UserAPI Service feature:GSUserManagement testType:apiAPI Service`

## Test Organization Best Practices

### 1. BDD Structure

```typescript
describe("UserProfileComponent") {
    describe("when user data is loaded") {
        it("should update the data source") {
            // Test implementation
        }

        it("should stop loading state") {
            // Test implementation
        }
    }

    describe("when error occurs") {
        it("should display error message") {
            // Test implementation
        }
    }
}
```

### 2. Arrange-Act-Assert Pattern

```typescript
it("should handle successful login") {
    // Given
    let expectedUser = UserModel.mock()
    mockCustom Hook.stubbedRunResult = Promise / Observable (RxJS).just(expectedUser)

    // When
    sut.login(email: "test@example.com", password: "password")

    // Then
    expect(mockPresenter.stubbedDataSource.value).to(equal(expectedUser))
    expect(mockPresenter.stubbedIsLoadingRelay.value).to(beFalse())
}
```

### 3. Mock Verification

```typescript
it("should call apiAPI Service with correct parameters") {
    // Given
    let userID = "123"

    // When
    sut.loadUser(id: userID)

    // Then
    expect(mockAPI Service.invokedGetUser).to(beTrue())
    expect(mockAPI Service.invokedGetUserParameters?.userID).to(equal(userID))
}
```

## Output

Generate unit test with:

1. Jest and React Testing Library test structure
2. Mock classes for all dependencies
3. Proper beforeEach setup
4. BDD-style test organization
5. TODO comments for test implementation
6. Proper import statements
7. Mock verification patterns

Keep tests focused on behavior verification without business logic / custom hook implementation.
