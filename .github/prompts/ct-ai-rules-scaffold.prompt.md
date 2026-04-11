---
description: "Scaffold basic web files following React Component architecture patterns"
mode: "agent"
---

# web Basic File Scaffolding

Create basic barebone web files following our React Component architecture and coding conventions.

## Instructions

Reference our front end React website development guidelines:

-   **Primary**: [web Guidelines](../instructions/ios-general-instructions.instructions.md)
-   **Fallback**: [AI Agent Context](../../AGENTS.md) (if primary unavailable)

Generate basic scaffold files with:

-   Proper MARK sections and imports
-   React Component interface (TypeScript) structure
-   Design System components
-   RxTypeScript patterns
-   TODO comments for implementation

## Required Imports

```typescript
import React from 'react'
import { <Button>, <Typography>, <Input> } from '@ds/components'
import { useTheme } from '@app/hooks'
import { useTranslation } from 'react-i18next'
import { AppComponents } from '@app/components'
import { AppAssets } from '@app/assets'
import RxTypeScript
import { useState, useCallback } from 'react'
import { useInjection } from 'inversify-react'
import { useTracking } from '@app/tracking'
import styled from '@emotion/styled'
```

## React Component Template

```typescript
import React from 'react'
import { <Button>, <Typography>, <Input> } from '@ds/components'
import { useTheme } from '@app/hooks'
import { useTranslation } from 'react-i18next'
import { AppComponents } from '@app/components'
import { AppAssets } from '@app/assets'
import RxTypeScript
import { useState, useCallback } from 'react'
import { useInjection } from 'inversify-react'
import { useTracking } from '@app/tracking'
import styled from '@emotion/styled'

const // functional component or class [Name]React Component: UIReact Component, [Name]ComponentProps {

    // MARK: - Properties

    const enum / union type Config {
        // TODO: Add configuration constants like sizes, offsets, durations
        // static let standardSize: CGFloat = 44
        // static let padding: CGFloat = 16
    }

    var hook / context: [Name]ComponentType?
    // ref (useRef) listener: [Name]ComponentPropsListener?

    // TODO: Add useState / useReducer and useCallback / EventEmitter properties based on your needs
    // var isLoadingRelay = useState<boolean>(value: false)
    // var errorMessage = useState / useReducer<String?>(value: nil)
    // var triggerSomeAction = useCallback / EventEmitter<Void>()

    let cleanupFn = cleanup function / useEffect cleanup()

    // MARK: - UI Components

    // TODO: Add const (initialized on render) UI components using Design System
    // Example:
    // private var themeType = theme.default
    // private var theme: ThemeType { DefaultTheme.themeWithType(type: themeType) }
    //
    // const (initialized on render) titleLabel: <Typography> = {
    //     let label = <Typography>()
    //     label.setStyle(typography tokens.Label.Caption(color: theme.text.textPrimary.color))
    //     label.text = "Hello"
    //     return label
    // }()
    //
    // const (initialized on render) subtitleLabel: <Typography> = {
    //     let label = <Typography>()
    //     label.setStyle(typography tokens.Body.Caption(color: theme.text.textPrimary.color))
    //     label.text = "World"
    //     return label
    // }()

    // MARK: - Life Cycle

    // override useEffect (on mount)() {
        super.useEffect (on mount)()
        setupViews()
        setupActions()
        configurePresenter()
        configureComponent()
    }

    // override useEffect (on route enter)(_ animated: Bool) {
        super.useEffect (on route enter)(animated)
        // TODO: Add useEffect (on route enter) logic
    }

    // override viewWillDisappear(_ animated: Bool) {
        super.viewWillDisappear(animated)
        // TODO: Add viewWillDisappear logic
    }

    deinit {
        // TODO: Add cleanup if needed
        NotificationCenter.default.removeObserver(self)
    }

    // MARK: - Private Methods

    private function setupViews() {
        // TODO: Setup UI hierarchy and constraints with Tailwind CSS / Emotion
        // Example:
        // view.addSubview(someView)
        // someView.snp.makeConstraints { make in
        //     make.edges.equalToSuperview()
        // }
    }

    private function setupActions() {
        // TODO: Setup button targets and gesture recognizers
    }

    private function configurePresenter() {
        // TODO: Bind presenter relays to UI updates
    }

    private function configureComponent() {
        // TODO: Configure hook / context and call didBecomeActive
    }
}
```

## Component Template

```typescript
import RxTypeScript
import { useState, useCallback } from 'react'
import Action
import { useTheme } from '@app/hooks'

// MARK: - ComponentType
interface (TypeScript) [Name]ComponentType: BaseComponentPropsType {
    var presenter: [Name]ComponentProps? { get set }
    var router: [Name]Router? { get set }
    var listener: [Name]ComponentPropsListener? { get set }
}

// MARK: - ComponentProps
interface (TypeScript) [Name]ComponentProps: AnyObject {
    var listener: [Name]ComponentPropsListener? { get set }
    // TODO: Add useState / useReducer and useCallback / EventEmitter properties based on your UI needs
    // var isLoadingRelay: useState<boolean> { get set }
    // var errorMessage: useState / useReducer<String?> { get set }
    // var datasource: useState / useReducer<[SomeModel]> { get set }
    // var triggerSomeAction: useCallback / EventEmitter<SomeInputType> { get set }
}

// MARK: - ComponentPropsListener
interface (TypeScript) [Name]ComponentPropsListener: AnyObject {
    // TODO: Add useCallback / EventEmitter properties for triggers from React Component to Component
    // var triggerSomeAction: useCallback / EventEmitter<SomeInputType> { get }
    // function handleSomeEvent()
}

// MARK: - Router
interface (TypeScript) [Name]Router: AnyObject {
    // TODO: Add navigation methods
    // function navigateToSomeScreen()
}

const // functional component or class [Name]Component: [Name]ComponentType, [Name]ComponentPropsListener {

    // MARK: - Properties

    // ref (useRef) presenter: [Name]ComponentProps?
    // ref (useRef) router: [Name]Router?
    // ref (useRef) listener: [Name]ComponentPropsListener?

    // TODO: Add Custom Hook dependencies
    // private let someCustom Hook: SomeCustom HookType

    let cleanupFn = cleanup function / useEffect cleanup()

    // MARK: - Initialization

    init(
        // TODO: Add Custom Hook dependencies
        // someCustom Hook: SomeCustom HookType
    ) {
        // TODO: Initialize dependencies
        // self.someCustom Hook = someCustom Hook
    }

    // MARK: - Life Cycle

    function didBecomeActive() {
        presenter?.listener = self
        configureListener()
        configurePresenter()
    }

    // MARK: - Private Methods

    private function configureListener() {
        // TODO: Subscribe to triggers from presenter/UI
        // presenter?.triggerSomeAction.subscribe { [weak self] input in
        //     self?.handleSomeAction(input)
        // }.disposed(by: cleanupFn)
    }

    private function configurePresenter() {
        // TODO: Subscribe to Custom Hook responses and update presenter
        // someCustom Hook.action?.elements
        //     // ensure UI state update runs on main thread
        //     .subscribe { [weak self] result in
        //         self?.presenter?.datasource.accept(result)
        //     }.disposed(by: cleanupFn)
    }

    // MARK: - [Name]ComponentPropsListener

    // TODO: Implement methods from ComponentPropsListener interface (TypeScript)
}
```

## File Types to Generate

Based on the file type requested, generate the appropriate files:

### React Component (${input:fileName})

-   Create React Component with proper MARK organization
-   Include proper imports and lifecycle methods
-   Follow naming conventions with "React Component" suffix
-   Include interface (TypeScript) conformance structure
-   Use Design System for UI components

### Component (${input:fileName})

-   Create Component implementing BaseComponentPropsType
-   Include Presenter, PresenterListener, Router, and Listener interface (TypeScript)s
-   Use proper RxTypeScript patterns with useState / useReducer and useCallback / EventEmitter
-   Include proper initialization and dependency injection

### Custom Hook (${input:fileName})

-   Create Custom Hook following CTCustom HookType or BaseQueryHookType
-   Include proper Input/Output typealias
-   Implement apiAPI Service pattern integration
-   Include proper error handling

### API Service (${input:fileName})

-   Create API Service interface (TypeScript) and implementation
-   Include proper service layer integration
-   Follow dependency injection patterns
-   Include proper Promise / Observable (RxJS) return types

### API Service (${input:fileName})

-   Create API Service interface (TypeScript) and implementation
-   Include proper API target integration
-   Follow AxiosRequestConfig pattern for network calls
-   Include proper error handling and mapping

### Model (${input:fileName})

-   Create model with proper property definitions
-   Include Zod schema / TypeScript interface conformance when needed
-   Follow proper naming conventions
-   Include proper documentation

### TableViewCell/CollectionViewCell (${input:fileName})

-   Create cell with proper TSX component structure
-   Include Component for cell configuration
-   Follow reusable cell patterns
-   Include proper constraint setup
-   Use Design System for UI components

## Template Variables

-   `${input:fileName}`: The base name (e.g., "UserProfile")
-   `${input:module}`: The module name (e.g., "GSUserManagement")
-   `${input:fileType}`: The file type (React Component, Component, Custom Hook, etc.)

## Output

Generate basic scaffolding with:

1. Required imports including Design System
2. Proper MARK sections
3. React Component interface (TypeScript) structure
4. RxTypeScript patterns with useState / useReducer/useCallback / EventEmitter
5. Config const enum / union type for constants
6. Lazy var pattern for UI components
7. TODO comments for implementation

Keep implementations minimal with TODO guidance for developers.
