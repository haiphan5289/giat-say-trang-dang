# [AI] Deeplink Implementation Template

## 🎯 **Auto-Execute Deeplink Implementation Workflow**

### **🤖 AI TRIGGER PATTERNS:**
When you type any of these patterns, AI will automatically execute the full workflow:

```
[AI] Deeplink {WorkGroup}: 
1. Work Groups: {workgroup_name}
2. Deeplink: chotot-app://www.chotot.org/{path}
3. Feature Name: {featureName}
4. Target Screen: {targetScreen}  
5. Navigation Method: {navigationMethod}
OR

Deeplink {workgroup_name}: {path} -> {featureName} -> {targetScreen}

OR

Create deeplink for {path} in {workgroup_name} to {targetScreen}
```

### **Input Information Required:**
1. **Work Groups**: `{workgroup_name}` (revenue | ecommerce | goods | chat | etc.)
2. **Deeplink URL**: `chotot-app://www.chotot.org/{path}`
3. **Feature Name**: `{featureName}`
4. **Target Screen**: `{targetScreen}`
5. **Navigation Method**: `{navigationMethod}` (actual implementation - PosManager.shared.openPos..., GSLoyaltyManager.shared.startModule...)
6. **Parameters**: `{parameters}` (optional)

**🔴 CRITICAL: Navigation Method Logic Requirements:**
- ✅ ALL business logic / custom hook MUST be implemented in dedicated `goto{FeatureName}()` functions
- ✅ Handler switch cases MUST only call the navigation method functions
- ✅ Navigation method functions MUST contain parameter validation, login checks, and actual navigation calls
- ✅ NO direct navigation logic should be in handler switch cases

---

### **🚀 AUTO-EXECUTION WORKFLOW:**

**When AI detects deeplink request patterns above, AI will AUTOMATICALLY:**

1. **🔍 Execute Step 0: AI Processing Log** (MANDATORY FILE SCANNING)
2. **📝 Execute Steps 1-5: Implementation** (Based on workgroup and navigation method)
3. **✅ Provide Implementation Summary** (Show what was modified)

**NO NEED TO ASK - AI WILL JUST DO IT!**

---

### **Implementation Steps:**

#### **🔍 Step 0: AI Processing Log**

## 🔴 CRITICAL AI EXECUTION RULES

**MANDATORY FILE LOGGING:**
- ✅ AI MUST read and log Parser file content immediately (Step 0.1)
- ✅ AI MUST read and log Handler file content (Step 0.2)
- ✅ AI MUST read and log Navigator folder structure (Step 0.3)
- ✅ AI MUST display existing const enum / union types, functions, and patterns clearly
- ✅ AI MUST analyze and report conflict detection results
- ✅ AI MUST show all file paths and line numbers for modifications

**MANDATORY DEEPLINK FILE READING:**
- ✅ AI MUST read "{WorkGroup}DeeplinkParser.ts" before any generation
- ✅ AI MUST read "{WorkGroup}DeeplinkHandler.ts" before any generation
- ✅ AI MUST scan "src/features/GSOrder/GSOrder/PaymentManager/" (revenue only)
- ✅ AI MUST scan "Features/CorePayment/PaymentManager/" (revenue only)
- ✅ AI MUST list_dir and read ALL Navigator files with read_file tool
- ✅ AI MUST search for existing navigation functions with grep_search
- ✅ AI MUST analyze existing patterns and avoid duplicates
- ✅ AI MUST NOT skip file analysis under any circumstances
- ✅ AI MUST show file content BEFORE making any modifications
- ✅ AI MUST verify navigation methods exist in Navigator files

**POS FEATURE MANDATORY READING:**
- ✅ If feature is POS, AI MUST read both files before any generation:
    - `src/Features/Pos/PosManager.ts` ([link](src/Features/Pos/PosManager.ts))
    - `src/features/GSPos/GSPos/POSModule.ts` ([link](src/features/GSPos/GSPos/POSModule.ts))

**POST-IMPLEMENTATION VERIFICATION:**
- ✅ AI MUST verify all changes were applied correctly by reading modified files
- ✅ AI MUST provide exact line numbers for all modifications
- ✅ AI MUST show before/after code snippets for critical changes
- ✅ AI MUST validate that const enum / union type cases, parser logic, and handler logic are consistent



#### **Step 1: Add Path Enum Case** 
📁 File: 
- If `workgroup_name == revenue` => `RevenueDeeplinkParser.ts`
- If `workgroup_name == ecommerce` => `EcommerceDeeplinkParser.ts`
- If `workgroup_name == goods` => `GoodsDeeplinkParser.ts`
```typescript
// In Path{WorkGroup}DeepLinkType const enum / union type (around line 25-55)
case {featureName} = "/{path}"
```

#### **Step 2: Add Deeplink Type Enum Case**
📁 File: Same as Step 1
```typescript
// In {WorkGroup}DeeplinkType const enum / union type (around line 57-85)
case goto{FeatureName}({parameters})
```

#### **Step 3: Add Parser Logic**
📁 File: Same as Step 1
```typescript
// In parse() method (around line 110-250) or parseRewardDeeplink() for reward features
if deeplinkModel.url.absoluteString.contains("\(Path{WorkGroup}DeepLinkType.{featureName}.rawValue)") {
    return .{workgroup_name}({WorkGroup}DeeplinkType.goto{FeatureName}({extractedParams}))
}

// OR for reward features, add in parseRewardDeeplink() switch statement:
case .{featureName}:
    return .{workgroup_name}({WorkGroup}DeeplinkType.goto{FeatureName})
```

#### **Step 4: Add Handler Logic**
📁 File: 
- If `workgroup_name == revenue` => `RevenueDeeplinkHandler.ts`
- If `workgroup_name == ecommerce` => `EcommerceDeeplinkHandler.ts`
- If `workgroup_name == goods` => `GoodsDeeplinkHandler.ts`

**🔴 CRITICAL RULE: ALL LOGIC MUST BE PUT INTO NAVIGATION METHOD FUNCTIONS**

```typescript
// In handleDeeplink() switch statement (around line 25-95)
case .goto{FeatureName}({parameters}):
    goto{FeatureName}({parameters}) // MUST call navigation method function

// OR for reward features, add in handleRewardDeeplink() switch statement:
case .goto{FeatureName}:
    goto{FeatureName}() // MUST call navigation method function
```

#### **Step 5: Create Navigation Method Function (MANDATORY)**
📁 File: Same as Step 4

**🔴 IMPORTANT: Always create a dedicated navigation method function for the logic**

```typescript
// MANDATORY: Add navigation method function in // additional methods or utility functions
private function goto{FeatureName}({parameters}) {
    // ✅ ALL BUSINESS LOGIC GOES HERE
    // ✅ Parameter validation, login checks, navigation calls, etc.
    
    // Example implementation patterns:
    loginIfNeeded { [weak self] in
        // Navigation logic here
        {actualNavigationMethod}
    }
}
```

---

### **Common Navigation Patterns:**

### **🏆 POS Module Navigation:**
```typescript
// For Premium Features
PosManager.shared.openPosPremiumFeatures(cateId: cateId, adId: adId, sourceType: .{sourceType})

// For Listing Fee
PosManager.shared.openPosListingFee(cateId: cateId, adId: adId, sourceType: .{sourceType})

```

#### **🏆 Reward Module Navigation:**
```typescript
GSLoyaltyManager.shared.startModule(on: navigationController, with: .{targetType}({params}))
```

#### **💰 Revenue Module Navigation:**
```typescript
AccountManager.shared.navigateTo{Feature}({params})
```

#### **🛒 Commerce Navigation:**
```typescript
GSDashboardManager.shared.{method}({params})
```

#### **📱 Tab Navigation:**
```typescript
MainTabReact Component.shared.navigateTo{Feature}({params})
```

#### **🆕 Navigation Method Function Pattern:**
```typescript
// ✅ MANDATORY PATTERN: All logic goes into dedicated navigation method functions
private function goto{FeatureName}({parameters}) {
    // ✅ Parameter validation
    // ✅ Login checks with loginIfNeeded
    // ✅ Actual navigation method calls
    // ✅ Error handling
    
    loginIfNeeded { [weak self] in
        // Actual navigation implementation here
    }
}
```

#### **🔄 Handler Switch Case Pattern:**
```typescript
// ✅ Handler switch cases MUST only call navigation method functions
case .goto{FeatureName}({parameters}):
    goto{FeatureName}({parameters}) // Simple function call only
```

---

### **🏗️ Workgroup File Mapping:**

| Workgroup | Parser File | Handler File | Navigator Pattern | Example Path |
|-----------|------------|--------------|------------------|--------------|
| `revenue` | `RevenueDeeplinkParser.ts` | `RevenueDeeplinkHandler.ts` | `CRNavigator+Extension.ts` | `/uu-dai/*`, `/revenue/*` |
| `ecommerce` | `EcommerceDeeplinkParser.ts` | `EcommerceDeeplinkHandler.ts` | - | `/mua-ban/*`, `/shop/*` |
| `goods` | `GoodsDeeplinkParser.ts` | `GoodsDeeplinkHandler.ts` | - | `/tin-dang/*`, `/ad/*` |
| `chat` | `ChatDeeplinkParser.ts` | `ChatDeeplinkHandler.ts` | - | `/chat/*`, `/message/*` |

### **Example Usage:**

#### **Revenue Workgroup Example:**
```markdown
[AI] Deeplink Revenue: 
1. Work Groups: revenue
2. Deeplink: chotot-app://www.chotot.org/uu-dai/diem-tot/da-dung
3. Feature Name: rewardUsed
4. Target Screen: MyDiemTot screen
5. Navigation Method: GSLoyaltyManager.shared.startModule(with: .myDiemTot(type: "used"))
```

#### **Ecommerce Workgroup Example:**
```markdown
[AI] Deeplink Ecommerce: 
1. Work Groups: ecommerce
2. Deeplink: chotot-app://www.chotot.org/shop/products
3. Feature Name: shopProducts
4. Target Screen: Products listing screen
5. Navigation Method: ShopManager.shared.navigateToProducts()
```

#### **POS Feature Example:**
```markdown
[AI] Deeplink Revenue: 
1. Work Groups: revenue
2. Deeplink: chotot-app://www.chotot.org/pos?cateId=7010&adId=165712553&sourceType=bumpDashboard
3. Feature Name: POS
4. Target Screen: POS Premium Features screen
5. Navigation Method: PosManager.shared.openPosPremiumFeatures()
```

#### **New Function Example:**
```markdown
[AI] Deeplink Revenue: 
1. Work Groups: revenue
2. Deeplink: chotot-app://www.gstrangdang.vn/pos/laundry-order
3. Feature Name: posCheckout
4. Target Screen: POS Checkout screen
5. Navigation Method: PosManager.shared.openPosCheckout(type: "stickAd")
6. Parameters: type = "stickAd"
```

**Generated Navigation Method Function:**
```typescript
private function gotoPosCheckout(type: String?) {
    let orderType = type ?? "default"
    loginIfNeeded { [weak self] in
        PosManager.shared.openPosCheckout(type: orderType)
    }
}
```

**Handler Implementation:**
```typescript
case .gotoPosCheckout(let type):
    gotoPosCheckout(type: type) // Only calls the navigation method
```

---

### **🔍 Implementation Checklist:**

- [ ] Add path const enum / union type case in `Path{WorkGroup}DeepLinkType`
- [ ] Add deeplink type const enum / union type case in `{WorkGroup}DeeplinkType`  
- [ ] Add parser logic in appropriate method
- [ ] **🔴 CRITICAL**: Create dedicated navigation method function `goto{FeatureName}()` with ALL business logic / custom hook
- [ ] Add handler logic in switch case that ONLY calls the navigation method function
- [ ] Test deeplink functionality
- [ ] Verify navigation works correctly
- [ ] Check login requirements if needed
- [ ] **🔴 VERIFY**: Handler switch cases contain NO business logic / custom hook, only function calls

---

### **📋 Common Path Patterns:**

| Category | Pattern | Example |
|----------|---------|---------|
| Reward | `/uu-dai/{feature}` | `/uu-dai/diem-tot/da-nhan` |
| Transaction | `/lich-su-giao-dich/{type}` | `/lich-su-giao-dich/hop-dong-dong-tot` |
| Revenue | `/revenue/{feature}` | `/revenue/private_dashboard` |
| Payment | `/thanh-toan/{type}` | `/thanh-toan/gio-hang` |
| Package | `/goi-pro/{type}` | `/goi-pro/premium` |
| POS | `/pos` | `/pos?cateId=7010&adId=123&sourceType=bumpDashboard` |

---

### **⚠️ Important Notes:**

1. **Path Format**: Always include leading `/` in const enum / union type case
2. **Naming Convention**: Use camelCase for const enum / union type cases
3. **Parameter Extraction**: Handle URL parameters properly
4. **Login Check**: Add `loginIfNeeded` for authenticated features
5. **Navigation Context**: Use appropriate navigation controller
6. **Error Handling**: Return `.unknown` for unhandled cases
7. **🔴 CRITICAL - Navigation Method Functions**: 
   - ALL logic MUST be implemented in dedicated `goto{FeatureName}()` functions
   - Handler switch cases MUST only call these navigation method functions
   - Navigation method functions MUST contain ALL business logic / custom hook, parameter validation, login checks, and navigation calls
8. **Function Naming**: Follow pattern `goto{FeatureName}()` with proper parameters
9. **Parameter Validation**: Always provide default values for extracted parameters to avoid crashes
10. **Source Type Mapping**: For POS features, map string sourceType to appropriate const enum / union type values
11. **Login Protection**: Always wrap navigation in `loginIfNeeded` for authenticated features
12. **🔴 NO DIRECT LOGIC IN HANDLERS**: Never put business logic / custom hook directly in handler switch cases

---

### **🧪 Testing Commands:**

```bash
# Test deeplink in simulator
xcrun simctl openurl booted "chotot-app://www.chotot.org/{path}"

# Test with parameters  
xcrun simctl openurl booted "chotot-app://www.chotot.org/{path}?param1=value1&param2=value2"
```
