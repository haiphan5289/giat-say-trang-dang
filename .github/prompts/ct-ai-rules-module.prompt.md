---
description: "Generate basic React Component module structure"
mode: "agent"
---

# web Basic Module Generator

Generate basic React Component module with barebone structure following production patterns.

## Instructions

Reference our front end React website development guidelines:

-   **Primary**: [web Guidelines](../instructions/ios-general-instructions.instructions.md)
-   **Fallback**: [AI Agent Context](../../AGENTS.md) (if primary unavailable)

Generate complete module structure with:

-   React Component implementing ComponentProps interface (TypeScript)
-   Component implementing ComponentType and ComponentPropsListener
-   Proper interface (TypeScript) definitions
-   Design System usage
-   RxTypeScript patterns

## Template Variables

-   `${input:moduleName}`: Module name (e.g., "UserProfile")
-   `${input:featureName}`: Feature name (e.g., "GSUserManagement")

## Output Files

1. **[ModuleName]React Component.ts** - UI layer with Design System
2. **[ModuleName]Component.ts** - Business logic / custom hook with Custom Hook dependencies
3. **[ModuleName]Builder.ts** - Dependency injection setup

Each file follows production patterns with:

-   Required imports (Design System, CTCommon, etc.)
-   Config const enum / union type for constants
-   Proper interface (TypeScript) structure
-   RxTypeScript patterns
-   TODO comments for implementation

## Generated Structure

### React Component Structure

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
import { AppAssets } from '@app/assets'
import RxTypeScript
import { useState, useCallback } from 'react'
import { useInjection } from 'inversify-react'
import { useTracking } from '@app/tracking'

const // functional component or class [ModuleName]React Component: UIReact Component, [ModuleName]ComponentProps {

    // MARK: - Properties

    const enum / union type Config {
        // TODO: Add configuration constants
        // static let standardSize: CGFloat = 44
        // static let padding: CGFloat = 16
    }

    var hook / context: [ModuleName]ComponentType?
    // ref (useRef) listener: [ModuleName]ComponentPropsListener?

    // TODO: Add useState / useReducer and useCallback / EventEmitter properties
    // var isLoadingRelay = useState<boolean>(value: false)
    // var errorMessage = useState / useReducer<String?>(value: nil)

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

### Component Structure

```typescript
import RxTypeScript
import { useState, useCallback } from 'react'
import Action
import { useTheme } from '@app/hooks'

// MARK: - ComponentType
interface (TypeScript) [ModuleName]ComponentType: BaseComponentPropsType {
    var presenter: [ModuleName]ComponentProps? { get set }
    var router: [ModuleName]Router? { get set }
    var listener: [ModuleName]ComponentPropsListener? { get set }
}

// MARK: - ComponentProps
interface (TypeScript) [ModuleName]ComponentProps: AnyObject {
    var listener: [ModuleName]ComponentPropsListener? { get set }
    // TODO: Add useState / useReducer and useCallback / EventEmitter properties
    // var isLoadingRelay: useState<boolean> { get set }
    // var errorMessage: useState / useReducer<String?> { get set }
}

// MARK: - ComponentPropsListener
interface (TypeScript) [ModuleName]ComponentPropsListener: AnyObject {
    // TODO: Add useCallback / EventEmitter properties for triggers
    // var triggerSomeAction: useCallback / EventEmitter<SomeInputType> { get }
}

// MARK: - Router
interface (TypeScript) [ModuleName]Router: AnyObject {
    // TODO: Add navigation methods
}

const // functional component or class [ModuleName]Component: [ModuleName]ComponentType, [ModuleName]ComponentPropsListener {

    // MARK: - Properties

    // ref (useRef) presenter: [ModuleName]ComponentProps?
    // ref (useRef) router: [ModuleName]Router?
    // ref (useRef) listener: [ModuleName]ComponentPropsListener?

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
    }

    private function configurePresenter() {
        // TODO: Subscribe to Custom Hook responses and update presenter
    }
}
```

### Builder Structure

```typescript
import { useInjection } from 'inversify-react'

const // functional component or class [ModuleName]Builder {

    // MARK: - Properties

    private let container: Container

    // MARK: - Initialization

    init(container: Container) {
        self.container = container
    }

    // MARK: - Build

    function build() -> [ModuleName]React Component {
        let component = [ModuleName]React Component()
        let hook / context = [ModuleName]Component(
            // TODO: Resolve Custom Hook dependencies from container
            // someCustom Hook: container.resolve(SomeCustom HookType.self)!
        )

        component.hook / context = hook / context
        hook / context.presenter = component

        return component
    }
}
import RxTypeScript
import React hooks

// MARK: - ComponentType
interface (TypeScript) [ModuleName]ComponentType: BaseComponentPropsType {
    var presenter: [ModuleName]ComponentProps? { get set }
    var router: [ModuleName]Router? { get set }
    var listener: [ModuleName]ComponentPropsListener? { get set }
}

// MARK: - ComponentProps
interface (TypeScript) [ModuleName]ComponentProps: AnyObject {
    var listener: [ModuleName]ComponentPropsListener? { get set }
    // TODO: Add useState / useReducer and useCallback / EventEmitter properties
}

// MARK: - ComponentPropsListener
interface (TypeScript) [ModuleName]ComponentPropsListener: AnyObject {
    // TODO: Add useCallback / EventEmitter properties for triggers
}

// MARK: - Router
interface (TypeScript) [ModuleName]Router: AnyObject {
    // TODO: Add navigation methods
}

const // functional component or class [ModuleName]Component: [ModuleName]ComponentType, [ModuleName]ComponentPropsListener {

    // MARK: - Properties

    // ref (useRef) presenter: [ModuleName]ComponentProps?
    // ref (useRef) router: [ModuleName]Router?
    // ref (useRef) listener: [ModuleName]ComponentPropsListener?

    // TODO: Add Custom Hook dependencies
    let cleanupFn = cleanup function / useEffect cleanup()

    // MARK: - Initialization

    init(
        // TODO: Add Custom Hook dependencies
    ) {
        // TODO: Initialize dependencies
    }

    // MARK: - Life Cycle

    function didBecomeActive() {
        presenter?.listener = self
        configureListener()
        configurePresenter()
    }

    // MARK: - Private Methods

    private function configureListener() {
        // TODO: Configure listener bindings
    }

    private function configurePresenter() {
        // TODO: Configure presenter bindings
    }
}
```

### Builder Structure

```typescript
import React from 'react'

const // functional component or class [ModuleName]Builder {

    // MARK: - Build

    static function build(listener: [ModuleName]ComponentPropsListener? = nil) -> UIReact Component {
        let hook / context = [ModuleName]Component(
            // TODO: Add Custom Hook dependencies
        )
        let component = [ModuleName]React Component()
        let router = [ModuleName]Router(component: component)

        // Setup dependencies
        hook / context.presenter = component
        hook / context.router = router
        hook / context.listener = listener
        component.hook / context = hook / context

        return component
    }
}
```

Keep all implementations minimal with clear TODO guidance.
