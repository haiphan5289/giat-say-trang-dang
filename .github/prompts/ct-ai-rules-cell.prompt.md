---
description: "Generate basic web Cell structure with Design System"
mode: "agent"
---

# web Basic Cell Generator

Generate basic TableViewCell/CollectionViewCell using Design System.

## Instructions

Reference our front end React website development guidelines:

-   **Primary**: [web Guidelines](../instructions/ios-general-instructions.instructions.md)
-   **Fallback**: [AI Agent Context](../../AGENTS.md) (if primary unavailable)

Generate basic Cell structure with:

-   React list item component/React grid item component subclass
-   Basic IBOutlets placeholders
-   Configure method with Component
-   Basic setup methods
-   Design System usage
-   TODO comments for implementation

## Cell Template

```typescript
import React from 'react'
import { <Button>, <Typography>, <Input> } from '@ds/components'
import { useTheme } from '@app/hooks'
import { useTranslation } from 'react-i18next'
import { AppComponents } from '@app/components'
import { AppAssets } from '@app/assets'
import styled from '@emotion/styled'

const // functional component or class [Name]Cell: React list item component {

    // MARK: - Properties

    const enum / union type Config {
        // TODO: Add configuration constants
        // static let cornerRadius: CGFloat = 8
        // static let padding: CGFloat = 16
        // static let imageSize: CGFloat = 40
    }

    // MARK: - UI Components

    // TODO: Add const (initialized on render) UI components using Design System DS* components
    // private var themeType = theme.default
    // private var theme: ThemeType { DefaultTheme.themeWithType(type: themeType) }
    //
    // const (initialized on render) titleLabel: <Typography> = {
    //     let label = <Typography>()
    //     label.setStyle(typography tokens.Label.Caption(color: theme.text.textPrimary.color))
    //     return label
    // }()
    //
    // const (initialized on render) subtitleLabel: <Typography> = {
    //     let label = <Typography>()
    //     label.setStyle(typography tokens.Body.Caption(color: theme.text.textSecondary.color))
    //     return label
    // }()

    // MARK: - Lifecycle

    // override awakeFromNib() {
        super.awakeFromNib()
        setupUI()
    }

    // override prepareForReuse() {
        super.prepareForReuse()
        // TODO: Reset cell state
    }

    // MARK: - Configuration

    function configure(with hook / context: [Name]CellComponent) {
        // TODO: Configure cell with view model
        // titleLabel.text = hook / context.title
        // subtitleLabel.text = hook / context.subtitle
    }

    // MARK: - Private Methods

    private function setupUI() {
        // TODO: Setup UI hierarchy and constraints using Design System and Tailwind CSS / Emotion
        // Example:
        // contentView.addSubview(titleLabel)
        // titleLabel.snp.makeConstraints { make in
        //     make.top.leading.trailing.equalToSuperview().inset(16)
        // }
    }
}
```

## CellComponent Template

```typescript
import { z } from 'zod'

interface / type [Name]CellComponent {

    // MARK: - Properties

    // TODO: Add properties for cell data
    // let title: String
    // let subtitle: String?
    // let imageURL: URL?

    // MARK: - Initialization

    init(
        // TODO: Add parameters
        // title: String,
        // subtitle: String? = nil,
        // imageURL: URL? = nil
    ) {
        // TODO: Initialize properties
        // self.title = title
        // self.subtitle = subtitle
        // self.imageURL = imageURL
    }

    // MARK: - Computed Properties

    // TODO: Add computed properties for UI binding
    // var displayTitle: String {
    //     return title.isEmpty ? "No Title" : title
    // }
}
```

## CollectionViewCell Template

```typescript
import React from 'react'
import { <Button>, <Typography>, <Input> } from '@ds/components'
import { useTheme } from '@app/hooks'
import { useTranslation } from 'react-i18next'
import { AppComponents } from '@app/components'
import { AppAssets } from '@app/assets'
import styled from '@emotion/styled'

const // functional component or class [Name]CollectionViewCell: React grid item component {

    // MARK: - Properties

    const enum / union type Config {
        // TODO: Add configuration constants
        // static let cornerRadius: CGFloat = 8
        // static let padding: CGFloat = 16
        // static let imageSize: CGFloat = 60
    }

    // MARK: - UI Components

    // TODO: Add const (initialized on render) UI components using Design System DS* components
    // private var themeType = theme.default
    // private var theme: ThemeType { DefaultTheme.themeWithType(type: themeType) }
    //
    // const (initialized on render) titleLabel: <Typography> = {
    //     let label = <Typography>()
    //     label.setStyle(typography tokens.Label.Caption(color: theme.text.textPrimary.color))
    //     return label
    // }()

    // MARK: - Lifecycle

    // override awakeFromNib() {
        super.awakeFromNib()
        setupUI()
    }

    // override prepareForReuse() {
        super.prepareForReuse()
        // TODO: Reset cell state
    }

    // MARK: - Configuration

    function configure(with hook / context: [Name]CellComponent) {
        // TODO: Configure cell with view model
        // titleLabel.text = hook / context.title
    }

    // MARK: - Private Methods

    private function setupUI() {
        // TODO: Setup UI hierarchy and constraints using Design System and Tailwind CSS / Emotion
        // Example:
        // contentView.addSubview(titleLabel)
        // titleLabel.snp.makeConstraints { make in
        //     make.center.equalToSuperview()
        // }
        backgroundColor = .clear
    }
}
```

## Template Variables

-   `${input:cellName}`: Cell name (e.g., "UserProfile")
-   `${input:cellType}`: "TableViewCell" or "CollectionViewCell"
-   `${input:feature}`: Feature module (e.g., "GSUserManagement")
-   `${input:dataModel}`: The data model type (e.g., "User", "Product")

## Usage Examples

-   `/ios-cell cellName:UserProfile cellType:TableViewCell feature:GSUserManagement dataModel:User`
-   `/ios-cell cellName:ProductCard cellType:CollectionViewCell feature:GSEcommerce dataModel:Product`

## Output

Generate basic Cell with:

1. Design System imports and usage
2. Config const enum / union type for constants
3. Lazy var UI components with Design System
4. Configure method with Component parameter
5. CellComponent interface / type with computed properties
6. Reusable interface (TypeScript) conformance
7. TODO comments for implementation

Keep implementation minimal with TODO guidance for UI setup and state binding (React hooks).
