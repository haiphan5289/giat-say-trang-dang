# Theme Best Practices for web TypeScript UIKit - Giặt Sấy Trắng Đáng

## Overview

Hướng dẫn best practices cho việc sử dụng theme system trong web TypeScript UIKit dựa trên chuẩn mới nhất và architecture của Giặt Sấy Trắng Đáng app.

## Core Theme Architecture

### 1. Theme System Structure

```typescript
// Theme hierarchy trong project
Design System/
├── Theme/
│   ├── CMDefaultTheme.ts      // Định nghĩa các theme types
│   ├── ThemeType.ts             // Theme interface (TypeScript) và structure
│   └── ThemeType.ts           // Enum các loại theme

CTCommon/
├── Theme/
│   ├── useTheme hook.ts // Static theme loader
│   ├── ThemeProvider consumer.ts   // Theme changeable interface (TypeScript)
│   ├── ThemeTypeData.ts         // Theme data management
│   └── NavigationBar/            // Navigation bar theming
```

### 2. Theme Types Available

```typescript
// Các theme types hiện có
public const enum / union type ThemeType {
    case `default`  // Theme chính của Giặt Sấy Trắng Đáng
    case job        // Theme cho JOB module
    case pty        // Theme cho Property module
}
```

## Essential Patterns

### 1. Static Theme Access (Recommended)

```typescript
// ✅ PREFERRED - Sử dụng static theme loader
import React from 'react'
import { useTheme } from '@app/hooks'
import { <Button>, <Typography>, <Input> } from '@ds/components'
import styled from '@emotion/styled'

class MyReact Component: UIReact Component {
    private let theme = useTheme hook.defaultTheme
    // private let theme = useTheme hook.jobTheme
    // private let theme = useTheme hook.ptyTheme
    
    private function setupUI() {
        titleLabel.setStyle(typography tokens.Label.Section(color: theme.text.textPrimary.color))
        backgroundColor = theme.background.backgroundPrimary.color
    }
}
```

### 2. Dynamic Theme Support với ThemeProvider consumer

```typescript
// ✅ Cho React Components cần dynamic theme switching
import React from 'react'
import { useTheme } from '@app/hooks'
import { <Button>, <Typography>, <Input> } from '@ds/components'
import RxTypeScript
import styled from '@emotion/styled'

class MyReact Component: UIReact Component, ThemeProvider consumer {
    private let cleanupFn = cleanup function / useEffect cleanup()
    
    // override useEffect (on mount)() {
        super.useEffect (on mount)()
        setupUI()
        
        // Subscribe to theme changes
        subscribeThemeChange()
            .disposed(by: cleanupFn)
    }
    
    // MARK: - ThemeProvider consumer
    function changeTheme(_ theme: ThemeType) {
        setupTheme(theme)
    }
    
    private function setupTheme(_ theme: ThemeType) {
        titleLabel.setStyle(typography tokens.Label.Section(color: theme.text.textPrimary.color))
        subtitleLabel.setStyle(typography tokens.Body.Caption(color: theme.text.textSecondary.color))
        view.backgroundColor = theme.background.backgroundPrimary.color
    }
}
```

### 3. Cell/Custom View Theming

```typescript
// ✅ Theme setup cho custom cells
import { useTheme } from '@app/hooks'
import { <Button>, <Typography>, <Input> } from '@ds/components'

class MyTableViewCell: React list item component, ThemeProvider consumer {
    private let theme = useTheme hook.defaultTheme
    
    // override awakeFromNib() {
        super.awakeFromNib()
        setupTheme()
    }
    
    // MARK: - ThemeProvider consumer
    function changeTheme(_ theme: ThemeType) {
        setupTheme(theme)
    }
    
    private function setupTheme(_ theme: ThemeType? = nil) {
        let currentTheme = theme ?? self.theme
        
        titleLabel.setStyle(typography tokens.Label.Section(color: currentTheme.text.textPrimary.color))
        descriptionLabel.setStyle(typography tokens.Body.Caption(color: currentTheme.text.textSecondary.color))
        containerView.backgroundColor = currentTheme.background.backgroundSecondary.color
    }
}
```

### 4. Module-Specific Theme Usage

```typescript
// ✅ Theme specific cho module PTY
class PropertyReact Component: UIReact Component {
    private let theme = useTheme hook.ptyTheme
    
    private function setupUI() {
        // Sử dụng PTY theme colors
        navigationController?.navigationBar.barTintColor = theme.background.backgroundBrand.color
        titleLabel.setStyle(typography tokens.Label.Page(color: theme.text.textPrimary.color))
    }
}

// ✅ Theme specific cho module JOB
class JobReact Component: UIReact Component {
    private let theme = useTheme hook.jobTheme
    
    private function setupUI() {
        // Sử dụng Job theme colors
        primaryButton.setStyle(DS.Button.primary(themeType: .job))
        titleLabel.setStyle(typography tokens.Label.Page(color: theme.text.textPrimary.color))
    }
}
```

## Component Theming Best Practices

### 1. <Button> với Theme Support

```typescript
// ✅ Button theming với theme type
primaryButton.setStyle(DS.Button.primary(size: .medium, themeType: .default))
secondaryButton.setStyle(DS.Button.secondary(size: .medium, themeType: .pty))

// ✅ Custom button colors từ theme
customButton.backgroundColor = theme.button.buttonPrimary.color
customButton.setTitleColor(theme.text.textInverted.color, for: .normal)
```

### 2. <Typography>/<Input> với Theme Colors

```typescript
// ✅ Typography với theme colors
titleLabel.setStyle(typography tokens.Label.Page(color: theme.text.textPrimary.color))
bodyLabel.setStyle(typography tokens.Body.Section(color: theme.text.textSecondary.color))
errorLabel.setStyle(typography tokens.Body.Caption(color: theme.text.textError.color))

// ✅ Input fields
textField.textColor = theme.text.textPrimary.color
textField.backgroundColor = theme.background.backgroundSecondary.color
textField.layer.borderColor = theme.border.borderRegular.color.cgColor
```

### 3. Background và Border Colors

```typescript
// ✅ Background theming
view.backgroundColor = theme.background.backgroundPrimary.color
containerView.backgroundColor = theme.background.backgroundSecondary.color
overlayView.backgroundColor = theme.background.backgroundOverlay.color

// ✅ Border theming
separatorView.backgroundColor = theme.border.borderThin.color
cardView.layer.borderColor = theme.border.borderRegular.color.cgColor
```

## Navigation Bar Theming

### 1. CTNavigationBarVeritcalizable Protocol

```typescript
// ✅ Navigation bar theming
class MyReact Component: UIReact Component, CTNavigationBarVeritcalizable {
    
    // Default implementation returns .chotot
    // Override for different themes:
    var ctNavigationBarData: CTNavigationBarData {
        return .pty  // hoặc .gds, .job
    }
    
    // override useEffect (on route enter)(_ animated: Bool) {
        super.useEffect (on route enter)(animated)
        applyNavigationBarData()
    }
}
```

### 2. Custom Navigation Bar Styling

```typescript
// ✅ Manual navigation bar theming
private function setupNavigationBar() {
    navigationController?.navigationBar.barTintColor = theme.background.backgroundBrand.color
    navigationController?.navigationBar.tintColor = theme.text.textPrimary.color
    navigationController?.navigationBar.titleTextAttributes = [
        .foregroundColor: theme.text.textPrimary.color,
        .font: typography tokens.Label.Page().font
    ]
}
```

## Advanced Theme Patterns

### 1. Theme Subscription Management

```typescript
// ✅ Proper theme subscription management
class MyReact Component: UIReact Component, ThemeProvider consumer {
    private let cleanupFn = cleanup function / useEffect cleanup()
    
    // override useEffect (on mount)() {
        super.useEffect (on mount)()
        setupThemeSubscription()
    }
    
    private function setupThemeSubscription() {
        // Subscribe to theme changes
        subscribeThemeChange()
            .disposed(by: cleanupFn)
        
        // Or subscribe to specific theme
        subscribeTheme(theme: useTheme hook.ptyTheme)
            .disposed(by: cleanupFn)
    }
    
    function changeTheme(_ theme: ThemeType) {
        React component / HTML div.animate(withDuration: 0.3) {
            self.applyTheme(theme)
        }
    }
}
```

### 2. Theme-Aware Custom Components

```typescript
// ✅ Custom component với theme support
class ThemedCardView: React component / HTML div, ThemeProvider consumer {
    private var currentTheme: ThemeType = useTheme hook.defaultTheme
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        setupUI()
        setupTheme(currentTheme)
    }
    
    function changeTheme(_ theme: ThemeType) {
        currentTheme = theme
        setupTheme(theme)
    }
    
    private function setupTheme(_ theme: ThemeType) {
        backgroundColor = theme.background.backgroundSecondary.color
        layer.borderColor = theme.border.borderRegular.color.cgColor
        
        // Update child views
        titleLabel.setStyle(typography tokens.Label.Section(color: theme.text.textPrimary.color))
        subtitleLabel.setStyle(typography tokens.Body.Caption(color: theme.text.textSecondary.color))
    }
}
```

### 3. Theme Context Passing

```typescript
// ✅ Pass theme context to child components
class ParentReact Component: UIReact Component {
    private let theme = useTheme hook.defaultTheme
    
    private function setupChildReact Component() {
        let childVC = ChildReact Component(theme: theme)
        addChild(childVC)
        view.addSubview(childVC.view)
        childVC.didMove(toParent: self)
    }
}

class ChildReact Component: UIReact Component {
    private let theme: ThemeType
    
    init(theme: ThemeType) {
        self.theme = theme
        super.init(nibName: nil, bundle: nil)
    }
}
```

## Common Anti-Patterns

### ❌ Avoid Hardcoded Colors

```typescript
// ❌ BAD - Hardcoded colors
titleLabel.textColor = UIColor.black
backgroundColor = UIColor.white
button.backgroundColor = UIColor.blue

// ✅ GOOD - Theme colors
titleLabel.setStyle(typography tokens.Label.Section(color: theme.text.textPrimary.color))
backgroundColor = theme.background.backgroundPrimary.color
button.backgroundColor = theme.button.buttonPrimary.color
```

### ❌ Avoid Direct Theme Access Without Context

```typescript
// ❌ BAD - Accessing theme without proper context
let theme = DefaultTheme.defaultTheme // Direct access

// ✅ GOOD - Use static loader
let theme = useTheme hook.defaultTheme
```

### ❌ Avoid Theme Switching Without Animation

```typescript
// ❌ BAD - Abrupt theme change
function changeTheme(_ theme: ThemeType) {
    view.backgroundColor = theme.background.backgroundPrimary.color
}

// ✅ GOOD - Animated theme change
function changeTheme(_ theme: ThemeType) {
    React component / HTML div.animate(withDuration: 0.3) {
        self.view.backgroundColor = theme.background.backgroundPrimary.color
    }
}
```

## Testing Theme Implementation

### 1. Theme Testing Pattern

```typescript
// ✅ Unit testing với themes
class MyReact ComponentTests: XCTestCase {
    
    function testThemeApplication() {
        let sut = MyReact Component()
        let testTheme = useTheme hook.ptyTheme
        
        sut.changeTheme(testTheme)
        
        XCTAssertEqual(sut.view.backgroundColor, testTheme.background.backgroundPrimary.color)
    }
    
    function testThemeSubscription() {
        let sut = MyReact Component()
        let expectation = XCTestExpectation(description: "Theme changed")
        
        // Test theme subscription
        ThemeTypeData.shared.updateTheme(themeType: .pty)
        
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.1) {
            expectation.fulfill()
        }
        
        wait(for: [expectation], timeout: 1.0)
    }
}
```

## Performance Considerations

### 1. Theme Caching

```typescript
// ✅ Cache theme objects
class ThemeCacheManager {
    private static var cachedThemes: [ThemeType: ThemeType] = [:]
    
    static function theme(for type: ThemeType) -> ThemeType {
        if let cached = cachedThemes[type] {
            return cached
        }
        
        let theme = DefaultTheme.themeWithType(type: type)
        cachedThemes[type] = theme
        return theme
    }
}
```

## Summary

1. **Always use `useTheme hook`** cho static theme access
2. **Implement `ThemeProvider consumer`** cho dynamic theme support  
3. **Use proper theme types** (.default, .job, .pty) based on module
4. **Leverage Design System components** với theme support
5. **Animate theme transitions** for better UX
6. **Test theme implementations** thoroughly
7. **Avoid hardcoded colors** - always use theme properties
8. **Cache themes** for performance optimization

Tuân thủ những best practices này sẽ đảm bảo theme system được sử dụng một cách consistent và maintainable trong toàn bộ React web app.