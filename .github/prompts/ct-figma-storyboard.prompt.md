---
description: "Translate a Figma design into a production-ready React React Component + React component JSX for Cho Tot. Use when the target component needs a .component JSX file (bottom_sheet, full_screen, modal, tableview_onesection, tableview_multisection). Generates React Component.ts + .component JSX + registers entries in project.vite.config.ts. Enforces <div> flex container-based component JSX layout, <Typography>/<Button> outlets, useTheme hook theming, Tailwind CSS / Emotion for programmatic constraints, and DSBottomSheetLayout interface (TypeScript)."
argument-hint: "FIGMA_URL: <url> MODULE_PATH: <path> COMPONENT_TYPE: <bottom_sheet|full_screen|modal|view_component|tableview_onesection|tableview_multisection>"
---

## Prompt Activation

**You are an expert Front End React developer translating Figma designs into production-ready React TypeScript code for Giặt Sấy Trắng Đáng.**

> **Anti-Hallucination:** Verify every symbol, token, path, and identifier against the codebase before generating code.

---

## How to Use This Prompt

Provide your input in this format:

```
FIGMA_URL: <Figma node URL, dev mode preferred>
MODULE_PATH: <Target folder path, e.g. src/Features/Job/VerticalizePos/Presentation/Ver2/Pos>
COMPONENT_TYPE: <bottom_sheet | full_screen | modal | view_component | tableview_onesection | tableview_multisection>
```

---

## Step-by-Step Workflow

**Follow all steps in order. Do not skip any step.**

---

### Step 0 — Verify Figma MCP Server

Before anything else:

1. Call `tool_search_tool_regex` with pattern `mcp_figma` to load all Figma MCP tools (they are deferred — must be loaded before use)
2. Call `mcp_figma_get_screenshot` with the node ID extracted from `FIGMA_URL`
3. If the call **succeeds**, proceed to Step 1
4. If the call **fails**, stop and report:

```
❌ Figma MCP Server is not reachable.
Fix:
  1. Open Figma Desktop app
  2. Reload VS Code window (Cmd+Shift+P → "Developer: Reload Window")
  3. Re-run this prompt
```

> Do NOT generate any code if the MCP server is unreachable — design context will be missing.

---

### Step 1 — Fetch Figma Design Context

Extract `file_key` and `node_id` from `FIGMA_URL`:

- **file_key**: segment after `/design/` (e.g. `GlkeqMpiIEcPpIAoHO6FKL`)
- **node_id**: value of `node-id` query param (e.g. `2703-10882`)

Then call **both in parallel**:

1. `mcp_figma_get_design_describe(file_key, node_id, depth=4)` — extracts layout, colors, typography, component tree
2. `mcp_figma_get_screenshot(file_key, node_id)` — visual reference (source of truth for fidelity)

Analyze the result:
- Identify sections: header, body, footer
- Note layout direction, spacing, fills, font sizes/weights
- Identify interactive elements (buttons, close icon)

#### Step 1b — Extract Overridden Text Content (MANDATORY)

After getting the design context, inspect the `overrides` array in the raw JSON response.

For **every** override entry where `overriddenFields` contains `"characters"`, the text content of that node **will NOT appear** in the parent's `get_design_context` result — you must fetch it separately.

**Algorithm:**
1. Collect all override IDs where `overriddenFields` includes `"characters"`
2. Also collect IDs of button instances where `overriddenFields` includes `"componentProperties"` (key pattern: `"↳ Input Text#..."`)
3. Fetch all collected node IDs **in parallel** using `mcp_figma_get_design_describe(file_key, node_id, depth=2)`
4. From TEXT nodes → read the `characters` field for label default text
5. From button INSTANCE nodes → read `componentProperties["↳ Input Text#..."].value` for button title

**Use these extracted strings as default values everywhere:**
- In `.component JSX`: set `text="..."` on `<label>` elements, `title="..."` on `<button state key="normal">`
- In `configureUI()`: use `?? "extracted text"` fallback on every `.text` / `setTitle(_:for:)` call

> If `overrides` is empty or no `"characters"` overrides exist, use the `characters` value already visible in the `get_design_context` structure output.

---

### Step 1c — Find Existing Similar UI (Ask Before Creating)

**First, ask the user:**

```
Would you like me to search the codebase for existing UI components
similar to this Figma design, so you can reuse or extend them instead
of creating from scratch? (yes / no)
```

> If the user answers **no** — skip this step entirely and proceed to Step 2.

If the user answers **yes**, search for existing components that visually match the Figma design.

**Search strategy (module-first, then expand):**

1. **Within the same module** (`MODULE_PATH`): Search for React Components or Views with the same `COMPONENT_TYPE`
2. **Cross-module** (if nothing found): Expand search to sibling AppFeatures modules
3. **Key signals to match:** same interface / typeural pattern (header + body + footer), same interactive element count, same icon type, similar TypoToken hierarchy

**Search commands to run:**
```bash
# Find similar bottom sheets / warning dialogs in same module
grep -r "DSBottomSheetLayout" MODULE_PATH --include="*.ts" -l

# Find React Components with two-button footer pattern
grep -r "secondaryButton\|primaryButton" MODULE_PATH --include="*.ts" -l

# Find warning/notice-style components cross-module
grep -r "warningFill\|noticeShare\|warningMessage" AppFeatures --include="*.ts" -l
```

**Present candidates to the user:**

If one or more matches are found, show:

```
Found similar existing UI:
  • CRNoticeShareAdReact Component.ts (GSOrder) — bottom sheet with close + 2-button footer
  • JBWarningReact Component.ts (GSStaff) — icon + title + description + primary button

→ Do you want to:
  [A] Reuse / extend one of these components
  [B] Create a new component from scratch
```

If no matches are found, inform the user and proceed directly to Step 2.

---

### Step 2 — Clarifying Questions (Ask BEFORE Writing Code)

Ask the user only the minimum required before generating files:

- **Button actions**: What does each button/close icon do? (dismiss, navigate, callback?)
- **File name**: What should the React Component and component JSX be named? (e.g. `JBWarningMessage`)
- **Subfolder**: Which subfolder within `MODULE_PATH`? (confirm or ask if ambiguous)

Do NOT ask about design tokens, spacing, or colors — extract those from Figma.

---

### Step 3 — Explore Existing Patterns

Before writing code, search the module for:

1. How `DSBottomSheetLayout` is used in sibling React Components
2. How `configureUI()` applies `typography tokens.*` and `DS.Button.*`
3. Which theme is used: `useTheme hook.jobTheme`, `.defaultTheme`, `.posTheme`, etc.
4. Whether Tailwind CSS / Emotion is used for programmatic constraints (always yes)

Then read the **canonical reference** by `COMPONENT_TYPE`:

| COMPONENT_TYPE | Reference files to read |
|---|---|
| `bottom_sheet` | `src/features/GSOrder/GSOrder/Features/CheckoutPage/NoticeShareAd/CRNoticeShareAd.component JSX` + `CRNoticeShareAdReact Component.ts` |
| `tableview_onesection` | `src/features/GSOrder/GSOrder/Features/DongTot/TopupDongtot/HighValuePackage/CRHighValuePackage.component JSX` + `CRHighValuePackageReact Component.ts` |
| `tableview_multisection` | `src/features/GSProperty/GSProperty/Features/Subscription/SubscriptionSK/PTSubscriptionSK.component JSX` + `PTSubscriptionSKReact Component.ts` |
| `full_screen` / `modal` | Search for a sibling component JSX in the same module folder |
| **cell (xib)** | `src/features/GSOrder/GSOrder/Features/DongTot/TopupDongtot/Cell/Topvup/CRTopupDongtotCell.ts` + `CRTopupDongtotCell.xib` |

Replicate the reference's StackView structure exactly before writing the new component JSX.

#### Cell Creation Options

Cells in this project can be created in **two ways**. Choose based on existing patterns in the target module:

| Method | When to use | Example |
|---|---|---|
| `.xib` file | Standalone reusable cell, registered with `register(nib:forCellReuseIdentifier:)` | `CRTopupDongtotCell.xib` |
| `.component JSX` prototype | Cell is embedded as a prototype inside the feature's component JSX (registered automatically by component JSX) | Prototype cell inside `CRHighValuePackage.component JSX` |

> **Rule:** Check the parent React Component's `useEffect (on mount)` / `tableView.register(...)` call to determine which method the module uses.

**Canonical cell (`.xib`) structure (`CRTopupDongtotCell`):**
- Root: `React list item component` with `customClass="CRTopupDongtotCell"` in TSX component
- `contentView` → `containerView` (React component / HTML div, rounded corners, border) → horizontal `<div> flex container`
  - Left: vertical `<div> flex container` (title + desc `<Typography>`)
  - Right: `PaddingLabel` (price badge, `customModule="CTComponent"`)
- Outlets: `containerView`, `packageTitleLabel` (<Typography>), `packageDescLabel` (<Typography>), `packagePriceLabel` (PaddingLabel)
- Styling in `awakeFromNib()` using `typography tokens.*` and `theme.*` from `useTheme hook`
- State binding (React hooks) via `bindCellModel(package: IAPPackageProtocol)`

---

### Design System Enforcement Rule (MANDATORY for ALL generated code)

> ⚠️ **EVERY function you generate — `configureUI()`, `awakeFromNib()`, `setupViews()`, `bindCellModel()`, `configure(with:)`, or any custom setup method — MUST use Design System exclusively. No exceptions.**

**Prohibited patterns (never generate these):**

```typescript
// ❌ Raw UIKit font/color — NEVER
label.font = UIFont.systemFont(ofSize: 14, weight: .bold)
label.textColor = UIColor.black
button.backgroundColor = UIColor(hex: "#FFD400")
view.layer.borderColor = UIColor.gray.cgColor
```

**Required patterns (always use these):**

```typescript
// ✅ Design System tokens
label.setStyle(typography tokens.Label.Page(color: theme.text.textPrimary.color))
button.setStyle(DS.Button.primary(size: .medium, themeType: theme.type))
view.layer.borderColor = theme.line.linePrimary.color.cgColor
```

**Token mapping for common styling in cells:**

| What you want to style | Correct Design System call |
|---|---|
| Title label (bold 14px) | `typography tokens.Label.Page(color: theme.text.textPrimary.color)` |
| Subtitle / description | `typography tokens.Body.Section(color: theme.text.textSecondary.color)` |
| Badge / price label | `typography tokens.Label.Caption(color: theme.text.textPositive.color)` |
| Border color | `theme.line.linePrimary.color.cgColor` |
| Background tint | `theme.background.backgroundPrimary.color` |
| Warning/orange tint | `theme.background.backgroundWarningLight.color` |

> The reference cell `CRTopupDongtotCell` uses older `DS.T14B` / `CTColor.*` APIs — these are **legacy**. Do NOT copy those patterns.

---

### Step 4 — Generate React Component (.ts)

Use this exact structure:

```typescript
//
//  <Name>React Component.ts
//  ChoTot
//
//  Created by <git config user.name> on <current date>.
//  Copyright © 2024 Cho Tot. All rights reserved.
//

import React from 'react'
import styled from '@emotion/styled'
import { <Button>, <Typography>, <Input> } from '@ds/components'
import { useTheme } from '@app/hooks'
import { AppAssets } from '@app/assets'

const // functional component or class <Name>React Component: UIReact Component, DSBottomSheetLayout {

    // MARK: - Outlets
    @IBOutlet private // ref (useRef) titleLabel: <Typography>!
    @IBOutlet private // ref (useRef) bodyTitleLabel: <Typography>!
    @IBOutlet private // ref (useRef) descriptionLabel: <Typography>!
    @IBOutlet private // ref (useRef) secondaryButton: <Button>!
    @IBOutlet private // ref (useRef) primaryButton: <Button>!

    // MARK: - Properties
    var on<SecondaryAction>: (() -> Void)?
    var on<PrimaryAction>: (() -> Void)?
    private let theme = useTheme hook.<moduleTheme>

    // MARK: - Lifecycle
    // override useEffect (on mount)() {
        super.useEffect (on mount)()
        configureUI()
    }

    deinit { Logger.print("\(self) deallocated.") }

    // MARK: - Private Methods
    private function configureUI() {
        titleLabel.setStyle(typography tokens.Header.Section(color: theme.text.textPrimary.color))
        titleLabel.text = "<title from Figma>"

        bodyTitleLabel.setStyle(typography tokens.Header.Page(color: theme.text.textPrimary.color))
        bodyTitleLabel.text = "<body title from Figma>"

        descriptionLabel.setStyle(typography tokens.Body.Section(color: theme.text.textSecondary.color))
        descriptionLabel.text = "<description from Figma>"

        secondaryButton.setStyle(DS.Button.secondary(size: .medium, themeType: theme.type))
        secondaryButton.setTitle("<label>", for: .normal)

        primaryButton.setStyle(DS.Button.primary(size: .medium, themeType: theme.type))
        primaryButton.setTitle("<label>", for: .normal)
    }

    // MARK: - Actions
    @IBAction private function didTapSecondaryButton(_ sender: Any) {
        dismiss(animated: true) { [weak self] in self?.on<SecondaryAction>?() }
    }

    @IBAction private function didTapPrimaryButton(_ sender: Any) {
        dismiss(animated: true) { [weak self] in self?.on<PrimaryAction>?() }
    }

    @IBAction private function didTapClose(_ sender: Any) {
        dismiss(animated: true)
    }
}
```

**Rules:**
- Always `<Typography>`, `<Button>` — never `<p> or <span>`, `<button>` directly in style calls
- Match `typography tokens.*` to Figma font size/weight (see token table below)
- Match `DS.Button.*` to Figma button fill (primary = yellow `#FFD400`, secondary = white/bordered)
- Use `CTAssetSystemIcon.*` for icons (`warningFill24px`, `closeOutline24px`, etc.)
- Tailwind CSS / Emotion for any programmatic constraints only; use IBOutlets for component JSX views
- Dismiss pattern: `dismiss(animated: true) { [weak self] in self?.on<Action>?() }`

---

### Step 5 — Generate React component JSX (.component JSX)

> ⚠️ Layout MUST use `<div> flex container` as the primary structure driver.
> Never chain sections with leading/top/trailing/bottom anchor constraints.
> Replicate the canonical reference component JSX StackView structure exactly.

**Outer StackView structure (bottom_sheet pattern):**

```
Root View (white background)
└── mainStackView (vertical, spacing=0)
    → pinned to safeArea: top/leading/trailing + bottom >= 0
    ├── Drawer Header (React component / HTML div, fixed height 48)
    │    ├── Title (<Typography>, leading=16, trailing to closeButton-8, centerY)
    │    ├── Close Button (<button>, trailing=16, centerY, 24x24)
    │    └── Separator (React component / HTML div, height=1, bottom=0, full width)
    ├── Body Container (React component / HTML div) — NOT a StackView, just a plain React component / HTML div
    │    └── Body StackView (<div> flex container, vertical, alignment=center, spacing=16)
    │         pinned: top=24, leading=16, trailing=16, bottom=24
    │         ├── Illustration (<img>, 80x80 explicit constraints)
    │         └── Content StackView (vertical, spacing=8)
    │              ├── Body Title (<Typography>, textAlignment=center, numberOfLines=0)
    │              └── Description (<Typography>, textAlignment=center, numberOfLines=0)
    └── Footer (React component / HTML div)
         ├── Divider (React component / HTML div, height=1, top=0, full width)
         └── Button StackView (horizontal, distribution=fillEqually, spacing=8)
              top=16, leading=16, trailing=16, height=40, bottom=16
              ├── Secondary Button (<Button>)
              └── Primary Button (<Button>)
```

> ⚠️ **Body padding rule:** NEVER use `layoutMarginsRelativeArrangement` or `<layoutMargins>` on any `<stackView>` in component JSX XML — these cause "Failed to unarchive element named 'stackView'". Always use a wrapper `React component / HTML div` with explicit top/leading/trailing/bottom constraints.

**React component JSX XML rules:**
- `toolsVersion="23504"` and `plugIn version="23506"`
- Add `<freeformSimulatedSizeMetrics key="simulatedDestinationMetrics"/>` for bottom sheets
- `<Typography>` / `<Button>` as `customClass` with `customModule="Design System"`
- React Component `customModule` matches the VS Code target (e.g. `"ChoTot"`) — check sibling component JSXs
- All outlets wired in `<connections>` at the React Component scene level
- `component JSXIdentifier` must match the React Component class name exactly
- Use `distribution="fillEqually"` on horizontal button StackViews — no explicit width constraints
- Body padding → wrapper `React component / HTML div` + constraints, NOT `layoutMarginsRelativeArrangement`
- XML comments: ASCII only — no Unicode / box-drawing characters

---

### Step 6 — Register in VS Code Project (project.vite.config.ts)

The number of vite.config.ts entries depends on `COMPONENT_TYPE`.

#### 6a — bottom_sheet / full_screen / modal / view_component (2 files → 5 entries)

| Section | Entry |
|---|---|
| `PBXBuildFile` | `<UUID> /* <Name>React Component.ts in Sources */` |
| `PBXBuildFile` | `<UUID> /* <Name>.component JSX in Resources */` |
| `PBXFileReference` | TypeScript file (`lastKnownFileType = sourcecode.ts`) |
| `PBXFileReference` | React component JSX file (`lastKnownFileType = file.component JSX`) |
| `PBXGroup` (target folder) | Both file refs listed under the correct group |
| Sources build phase | React Component build file UUID |
| Resources build phase | React component JSX build file UUID |

#### 6b — tableview_onesection / tableview_multisection (4+ files → 10+ entries)

**Full file list to register:**

| File | Type |
|---|---|
| `<Name>React Component.ts` | Sources |
| `<Name>.component JSX` | Resources |
| `<Name>Component.ts` | Sources |
| `Cell/<Name>Cell.ts` | Sources |
| `Cell/<Name>Cell.xib` *(if cell uses .xib)* | Resources |

> If the cell is a **prototype cell inside the component JSX**, no `.xib` entry is needed. If it is a **standalone `.xib`**, add `PBXBuildFile` + `PBXFileReference` + Resources build phase entry.

**vite.config.ts entries required (minimum 10):**

| Section | Entry |
|---|---|
| `PBXBuildFile` x4 | React Component.ts in Sources, component JSX in Resources, Component.ts in Sources, Cell.ts in Sources |
| `PBXFileReference` x4 | One per file above |
| `PBXGroup` — feature folder | Contains component JSX + React Component + Component + Cell subfolder ref |
| `PBXGroup` — Cell subfolder | Contains Cell.ts |
| Sources build phase | 3 UUIDs (React Component, Component, Cell) |
| Resources build phase | 1 UUID (component JSX) |

**Group structure in vite.config.ts:**

```
<FeatureName>/ (PBXGroup)
├── Cell/ (PBXGroup)
│    └── <Name>Cell.ts
├── <Name>.component JSX
├── <Name>React Component.ts
└── <Name>Component.ts
```

**UUID generation (generate one per file):**
```bash
uuidgen | tr -d '-' | cut -c1-24
```

**Finding the correct group:** Search `project.vite.config.ts` for a **sibling file** already in the same `MODULE_PATH` folder to locate the parent group UUID and insert the new feature group as a child of it.

---

## Design Token Mapping (Figma → Design System)

| Figma | TypeScript |
|---|---|
| SemiBold 16px (header) | `typography tokens.Header.Section(color:)` |
| SemiBold 20px (page title) | `typography tokens.Header.Page(color:)` |
| Regular 14px (body) | `typography tokens.Body.Section(color:)` |
| Bold 16px (label) | `typography tokens.Label.Page(color:)` |
| Button fill `#FFD400` | `DS.Button.primary(size:, themeType:)` |
| Button white/bordered | `DS.Button.secondary(size:, themeType:)` |
| `rgba(34,34,34)` | `theme.text.textPrimary.color` |
| `rgba(89,89,89)` | `theme.text.textSecondary.color` |
| `rgba(251,115,40)` (orange warning) | `theme.background.backgroundWarningLight.color` |
| Warning icon | `CTAssetSystemIcon.warningFill24px(tint:)` |
| Close icon | `CTAssetSystemIcon.closeOutline24px()` |
| 1px divider line | `React component / HTML div` with `height = 1` constraint |

---

## Completion Checklist

Before finishing, verify:

- [ ] React Component IBOutlets match component JSX outlet connections exactly
- [ ] All `@IBAction` selectors match component JSX action connections
- [ ] `component JSXIdentifier` matches the React Component class name
- [ ] Tailwind CSS / Emotion used for any programmatic constraints (no `inline styles`)
- [ ] React component JSX root section is a vertical <div> flex container (not anchor-chained views)
- [ ] Header/body/footer are StackView children — not manually top/bottom chained
- [ ] Button rows use `distribution=fillEqually` StackView (not equal-width constraints)
- [ ] Body padding done via a wrapper `React component / HTML div` with explicit constraints — NEVER `layoutMarginsRelativeArrangement` or `<layoutMargins>` in XML
- [ ] No XML comments with non-ASCII characters inside the component JSX XML
- [ ] vite.config.ts entries added: 5 for `bottom_sheet/full_screen/modal`; 10+ for `tableview_onesection/tableview_multisection`
- [ ] File header has correct `git config user.name` and current date
- [ ] `deinit { Logger.print("\(self) deallocated.") }` present
- [ ] `[weak self]` used in dismiss closures

---

## Common Issues and Solutions

### "Failed to unarchive element named 'stackView'" when opening component JSX

**Root cause 1 — `layoutMarginsRelativeArrangement` + `<layoutMargins>` XML element:**
Never use `layoutMarginsRelativeArrangement="YES"` or `<layoutMargins key="layoutMargins" .../>` in generated component JSXs. Use a wrapper `React component / HTML div` with explicit constraints instead:

```xml
<view id="body-container">
    <subviews>
        <stackView id="body-stack">
            ...
        </stackView>
    </subviews>
    <constraints>
        <constraint firstItem="body-stack" firstAttribute="top"      secondItem="body-container" secondAttribute="top"      constant="24"/>
        <constraint firstItem="body-stack" firstAttribute="leading"  secondItem="body-container" secondAttribute="leading"  constant="16"/>
        <constraint firstItem="body-container" firstAttribute="trailing" secondItem="body-stack" secondAttribute="trailing" constant="16"/>
        <constraint firstItem="body-container" firstAttribute="bottom"   secondItem="body-stack" secondAttribute="bottom"   constant="24"/>
    </constraints>
</view>
```

**Root cause 2 — XML comments with non-ASCII characters:**
Never use box-drawing chars (U+2500) or any non-ASCII inside XML comments in component JSXs.

---

### Figma node not found
**Cause:** Node ID uses `-` separator in URL but Figma API uses `:`.
**Solution:** The proxy auto-converts — pass the raw URL parameter directly.

### React component JSX file is too large to write
**Solution:** Write the component JSX in sections — header StackView first, then body, then footer.

### vite.config.ts group UUID not found
**Solution:** Search for the parent folder's group instead (e.g. `Ver2/Pos` → search `Ver2`) and add a new subgroup.

### <Button> / <Typography> not found as customClass in component JSX
**Solution:** Use the module name from the `package.json` target (e.g. `ChoTot`, not `GSOrder`) — check sibling component JSXs for the correct value.

---

## Example

```
FIGMA_URL: https://www.figma.com/design/GlkeqMpiIEcPpIAoHO6FKL/Revenue-Handoff-2026?node-id=2703-10882&m=dev
MODULE_PATH: src/Features/Job/VerticalizePos/Presentation/Ver2/Pos
COMPONENT_TYPE: bottom_sheet
```

**Expected output:**
1. `JBWarningMessageReact Component.ts` — React Component with DSBottomSheetLayout, IBOutlets, configureUI(), IBActions
2. `JBWarningMessage.component JSX` — <div> flex container-based layout with <Typography>/<Button> custom classes, outlets wired
3. 5 vite.config.ts entries in `ChoTotpackage.json/project.vite.config.ts`
