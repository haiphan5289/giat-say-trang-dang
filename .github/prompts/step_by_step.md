# 📚 Complete Custom Hook Generation Guide for Beginners

**A Step-by-Step Tutorial for web React Clean Architecture Development**

---

## 🎯 Table of Contents
1. [Prerequisites & Setup](#prerequisites--setup)
2. [Understanding React Clean Architecture](#understanding-clean-architecture)
3. [Project Structure Overview](#project-structure-overview)
4. [Step-by-Step Custom Hook Implementation](#step-by-step-usecase-implementation)

---

## 📋 Prerequisites & Setup

### Step 1: Install Required Software

#### 1.1 Install Visual Studio Code
1. **Download VS Code:**
   - Go to [https://code.visualstudio.com/](https://code.visualstudio.com/)
   - Click "Download for macOS"
   - Open the downloaded `.dmg` file
   - Drag Visual Studio Code to Applications folder

2. **Install Essential Extensions:**
   ```bash
   # Open VS Code and press Cmd+Shift+P, then type "Extensions"
   # Install these // additional methods or utility functionss:
   - TypeScript (by TypeScript Server Work Group)
   - GitHub Copilot (by GitHub)
   - GitLens (by GitKraken)
   - Markdown All in One (by Yu Zhang)
   ```

#### 1.2 Install VS Code
1. **From App Store:**
   - Open Mac App Store
   - Search "VS Code"
   - Click "Get" or "Install"
   - Wait for download (this takes time, it's ~10GB)

2. **Command Line Tools:**
   ```bash
   # Open Terminal and run:
   xcode-select --install
   ```

#### 1.3 Install GitHub Copilot
1. **Setup GitHub Copilot:**
   - Open VS Code
   - Press `Cmd+Shift+P`
   - Type "GitHub Copilot: Sign In"
   - Follow the authentication process
   - Verify installation by typing a comment in TypeScript file

### Step 2: Clone the Project
```bash
# Open Terminal and navigate to your desired folder
cd ~/Desktop
git clone [your-project-url]
cd ct-ios-app--v3
```

### Step 3: Open Project in Tools
```bash
# Open in VS Code
code .

# Open web project in VS Code
open CTweb.xcworkspace
```

---

## 🤖 AI Custom Hook Generation Prompt

**Copy and paste this prompt to any AI assistant (GitHub Copilot, ChatGPT, Claude) to generate complete Custom Hook implementation:**

```
Generate and implement a complete Custom Hook following GSOrder 6-layer React Clean Architecture:

Custom Hook: FetchDongtotProfile
Input: String
Output: String 
Endpoint: "v1/dongtot/profile"
Method: get

Implement all 6 layers by adding code directly to project files:

1. Add Api.FetchDongtotProfile = "v1/dongtot/profile" to GSAPI Config (apiConfig).ts
2. Add FetchDongtotProfileTarget interface / type to GSOrderTargets.ts
3. Add FetchDongtotProfile method to GSOrderAPI Service.ts (interface (TypeScript) + implementation)
4. Add FetchDongtotProfile method to GSOrderAPI Service.ts (interface (TypeScript) + implementation)
5. Add CRFetchDongtotProfileCustom Hook class to GSOrderHook.ts
6. Add executeFetchDongtotProfile method to GSOrderHook / Context.ts (with RxTypeScript bindings + error handling)
```

**Customize the prompt by changing:**
- Custom Hook name (e.g., FetchUserData, SaveSettings)
- Input/Output types (e.g., UserID, CustomModel)
- Endpoint URL and HTTP method
- Add your specific business logic / custom hook requirements

**Usage:**
1. Copy the prompt above
2. Customize for your specific Custom Hook
3. Paste into your AI assistant
4. Review and implement the generated code

---

## 🏗️ Understanding React Clean Architecture

### What is React Clean Architecture?
React Clean Architecture is a software design pattern that separates code into layers, making it:
- **Testable** - Each layer can be tested independently
- **Maintainable** - Changes in one layer don't affect others
- **Scalable** - Easy to add new features
- **Readable** - Clear separation of concerns

### The 6 Layers in Our web App:

```
┌─────────────────────────────────────┐
│         6. Component                │ ← Handles UI logic and user interactions
├─────────────────────────────────────┤
│         5. Custom Hook                  │ ← Contains business logic / custom hook and rules
├─────────────────────────────────────┤
│         4. API Service               │ ← Coordinates data from different sources
├─────────────────────────────────────┤
│         3. API Service                  │ ← Handles network requests and responses
├─────────────────────────────────────┤
│         2. Targets                  │ ← Defines specific API endpoints
├─────────────────────────────────────┤
│         1. API Config (apiConfig)            │ ← Contains API endpoint constants
└─────────────────────────────────────┘
```

### Real-World Analogy:
Think of ordering food from a restaurant app:

1. **API Config (apiConfig)** = Restaurant menu with all dish names
2. **Targets** = Specific order details (dish name, quantity, special requests)
3. **API Service** = Waiter who takes your order to the kitchen
4. **API Service** = Kitchen manager who coordinates between different stations
5. **Custom Hook** = Chef who applies cooking rules and recipes
6. **Component** = The app interface that shows you order status and handles your taps

---

## 📁 Project Structure Overview

### Understanding the File Structure
```
ct-ios-app--v3/
└── src/features/
    └── GSOrder/
        └── GSOrder/
            ├── API Config (apiConfig)/
            │   ├── GSAPI Config (apiConfig).ts          ← Layer 1: API endpoints
            │   └── ...
            ├── Data/
            │   ├── API Services/
            │   │   └── Checkout/
            │   │       ├── GSOrderTargets.ts ← Layer 2: API targets
            │   │       └── GSOrderAPI Service.ts ← Layer 3: API Service methods
            │   └── API Services/
            │       └── Checkout/
            │           └── Cart/
            │               └── GSOrderAPI Service.ts ← Layer 4: API Service
            ├── Domain/
            │   └── Custom Hooks/
            │       └── Checkout/
            │           └── GSOrderHook.ts ← Layer 5: Business logic / custom hook
            └── Features/
                └── CheckoutPage/
                    └── GSOrderHook / Context.ts ← Layer 6: Presentation logic
```

### File Naming Conventions:
- **CR** = CorePayment module prefix
- **Checkout** = Feature name
- **API Service/API Service/Custom Hook** = Layer type
- **Component** = UI / Component layer

---

## 🛠️ Step-by-Step Custom Hook Implementation

Let's implement a **FetchAdProfile** Custom Hook step by step!

### 📝 Our Implementation Plan:
- **Custom Hook:** FetchAdProfile
- **Input:** String (ad identifier)
- **Output:** AdProfile (ad data)
- **Endpoint:** "v1/ads/profile"
- **Method:** GET

---

### 🔥 Layer 1: API Config (apiConfig) (API Constants)

#### What it does:
Stores all API endpoint URLs in one place for easy management.

#### Implementation:
1. **Open the file:**
   ```bash
   # In VS Code, press Cmd+P and type:
   GSAPI Config (apiConfig).ts
   ```

2. **Find the Api // additional methods or utility functions:**
   ```typescript
   // additional methods or utility functions Api {
       // You'll see existing endpoints like:
       static let fetchCopilot = "v1/private/ai/fetch-copilot"
   }
   ```

3. **Add your new endpoint:**
   ```typescript
   // additional methods or utility functions Api {
       // Existing endpoints...
       static let fetchCopilot = "v1/private/ai/fetch-copilot"
       
       // 🆕 Add this line:
       static let FetchAdProfile = "v1/ads/profile"
   }
   ```

#### ✅ Verification:
- Save the file (`Cmd+S`)
- No compilation errors should appear
- Your endpoint is now available throughout the app

---

### 🎯 Layer 2: Targets (API Request Configuration)

#### What it does:
Defines how to make specific API requests (method, parameters, response handling).

#### Implementation:
1. **Open the file:**
   ```bash
   # In VS Code, press Cmd+P and type:
   GSOrderTargets.ts
   ```

2. **Find the GSOrderTargets const enum / union type:**
   ```typescript
   const enum / union type GSOrderTargets {
       // You'll see existing targets
   }
   ```

3. **Add your new target:**
   ```typescript
   const enum / union type GSOrderTargets {
       // Existing targets...
       
       // 🆕 Add this interface / type:
       interface / type FetchAdProfileTarget: AxiosRequestConfig {
           typealias Output = CRAdProfileResponseModel?
           
           var httpMethod: HTTPMethod { return .get }
           var endpoint: String { return Api.FetchAdProfile }
           var parameterEncoding: ParameterEncoding { return URLEncoding.default }
           
           let input: String
           
           var parameters: [String: Any]? {
               return ["data": input, "timestamp": Date().timeIntervalSince1970]
           }
           
           function decode(data: Any) -> Output {
               guard let data = data as? [String: Any] else { return nil }
               return CRAdProfileResponseModel(JSON: data)
           }
       }
   }
   ```

#### 🧠 Understanding the Code:
- **`typealias Output`** = What type of data this API returns
- **`httpMethod`** = GET, POST, PUT, DELETE
- **`endpoint`** = Uses our API constant from Layer 1
- **`parameterEncoding`** = How to format the request parameters
- **`input`** = The data we send to the API
- **`parameters`** = The actual data packet sent to server
- **`decode`** = Converts server response to TypeScript objects

#### ✅ Verification:
- Save the file
- Build project (`Cmd+B` in VS Code) - should compile without errors

---

### ⚙️ Layer 3: API Service (Network Communication)

#### What it does:
Makes the actual network calls and handles responses.

#### Implementation:
1. **Open the file:**
   ```bash
   # In VS Code, press Cmd+P and type:
   GSOrderAPI Service.ts
   ```

2. **Add method to interface (TypeScript):**
   ```typescript
   interface (TypeScript) GSOrderAPI ServiceType {
       // Existing methods...
       function fetchCopilot(input: String) -> Promise / Observable (RxJS)<CRCopilotResponseModel?>
       
       // 🆕 Add this line:
       function FetchAdProfile(input: String) -> Promise / Observable (RxJS)<CRAdProfileResponseModel?>
   }
   ```

3. **Add implementation:**
   ```typescript
   // additional methods or utility functions GSOrderAPI Service: GSOrderAPI ServiceType {
       // Existing implementations...
       
       // 🆕 Add this method:
       function FetchAdProfile(input: String) -> Promise / Observable (RxJS)<CRAdProfileResponseModel?> {
           return GSOrderTargets.FetchAdProfileTarget(input: input)
               .execute()
               .observe(on: resultScheduler)
       }
   }
   ```

#### 🧠 Understanding the Code:
- **`Promise / Observable (RxJS)<CRAdProfileResponseModel?>`** = Returns data asynchronously using RxTypeScript
- **`FetchAdProfileTarget(input: input)`** = Creates our API request from Layer 2
- **`.execute()`** = Actually makes the network call
- **`.observe(on: resultScheduler)`** = Ensures response comes back on the correct thread

#### ✅ Verification:
- Save the file
- No errors should appear
- The method is now available for apiAPI Services to use

---

### 🗄️ Layer 4: API Service (Data Coordination)

#### What it does:
Coordinates data access - could combine network, database, cache, etc.

#### Implementation:
1. **Open the file:**
   ```bash
   # In VS Code, press Cmd+P and type:
   GSOrderAPI Service.ts
   ```

2. **Add method to interface (TypeScript):**
   ```typescript
   interface (TypeScript) GSOrderAPI ServiceType {
       // Existing methods...
       function fetchCopilot(input: String) -> Promise / Observable (RxJS)<CRCopilotResponseModel?>
       
       // 🆕 Add this line:
       function FetchAdProfile(input: String) -> Promise / Observable (RxJS)<CRAdProfileResponseModel?>
   }
   ```

3. **Add implementation:**
   ```typescript
   // additional methods or utility functions GSOrderAPI Service: GSOrderAPI ServiceType {
       // Existing implementations...
       
       // 🆕 Add this method:
       function FetchAdProfile(input: String) -> Promise / Observable (RxJS)<CRAdProfileResponseModel?> {
           return service.FetchAdProfile(input: input)
       }
   }
   ```

#### 🧠 Understanding the Code:
- **API Service pattern** = Abstracts where data comes from
- **`service.FetchAdProfile`** = Delegates to our service from Layer 3
- In the future, we could add caching, database storage, etc. here

#### ✅ Verification:
- Save the file
- API Service now provides clean interface for business logic / custom hook

---

### 🧠 Layer 5: Custom Hook (Business Logic)

#### What it does:
Contains the business rules and logic for specific user actions.

#### Implementation:
1. **Open the file:**
   ```bash
   # In VS Code, press Cmd+P and type:
   GSOrderHook.ts
   ```

2. **Add your Custom Hook class:**
   ```typescript
   // 🆕 Add this complete class:
   const // functional component or class CRFetchAdProfileCustom Hook: BaseQueryHookType {
       typealias Output = CRAdProfileResponseModel?
       typealias Input = String
       
       let apiAPI Service: GSOrderAPI ServiceType
       var action: QueryFn<Input, Output>?
       
       init(apiAPI Service: GSOrderAPI ServiceType) {
           self.apiAPI Service = apiAPI Service
           self.action = initAction()
       }
       
       private function initAction() -> QueryFn<Input, Output> {
           QueryFn<Input, Output> { [unowned self] input in
               self.apiAPI Service.FetchAdProfile(input: input)
           }
       }
   }
   ```

#### 🧠 Understanding the Code:
- **`BaseQueryHookType`** = Our app's base Custom Hook interface (TypeScript)
- **`QueryFn<Input, Output>`** = RxTypeScript pattern for handling async operations
- **`[unowned self]`** = Memory management (cleanup in useEffect) to prevent stale closures
- **`apiAPI Service.FetchAdProfile`** = Uses our apiAPI Service from Layer 4

#### ✅ Verification:
- Save the file
- Custom Hook is now ready to be called by Components

---

### 🖥️ Layer 6: Component (Presentation Logic)

#### What it does:
Handles UI state, user interactions, and coordinates with Custom Hooks.

#### Implementation:
1. **Open the file:**
   ```bash
   # In VS Code, press Cmd+P and type:
   GSOrderHook / Context.ts
   ```

2. **Add the main execution method:**
   ```typescript
   // 🆕 Add this method to GSOrderHook / Context class:
   function executeFetchAdProfile(input: String) {
       let customHook = CRFetchAdProfileCustom Hook(apiAPI Service: orderRepo)
       
       // Handle success
       customHook.action?.elements
           .subscribe({next: { [weak self] result in
               guard let self = self, let result = result else { return }
               self.handleFetchAdProfileSuccess(result)
           })
           .disposed(by: cleanupFn)
       
       // Handle loading
       customHook.action?.executing
           .subscribe({next: { [weak self] loading in
               self?.presenter?.loading.accept(loading)
           })
           .disposed(by: cleanupFn)
       
       // Handle errors
       customHook.action?.underlyingError
           .subscribe({next: { [weak self] error in
               self?.handleFetchAdProfileError(error)
           })
           .disposed(by: cleanupFn)
       
       // Execute
       customHook.action?.execute(input)
   }
   ```

3. **Add helper methods:**
   ```typescript
   // 🆕 Add these helper methods:
   private function handleFetchAdProfileSuccess(_ response: CRAdProfileResponseModel) {
       // Handle success response
       guard let adProfile = response.data else { return }
       // Process AdProfile data
       print("FetchAdProfile success: \(adProfile)")
       // Update UI here
   }
   
   private function handleFetchAdProfileError(_ error: Error) {
       presenter?.loading.accept(false)
       // Handle error
       print("FetchAdProfile error: \(error.localizedDescription)")
       // Show error message to user
   }
   ```

#### 🧠 Understanding the Code:
- **`.subscribe({next:)`** = RxTypeScript way to handle async responses
- **`[weak self]`** = Prevents memory leaks by avoiding strong reference cycles
- **`.disposed(by: cleanupFn)`** = Automatic cleanup when Component is destroyed
- **`customHook.action?.execute(input)`** = Triggers the entire chain from Layer 5 → 1

#### ✅ Verification:
- Save the file
- Component can now trigger the complete Custom Hook flow

---

### 📦 Data Models (Response Handling)

#### What it does:
Defines the data structures for API responses.

#### Implementation:

1. **Create CRAdProfileResponseModel:**
   ```typescript
   // 🆕 Create new file: CRAdProfileResponseModel.ts
   import { z } from 'zod'
   import ObjectMapper

   interface / type CRAdProfileResponseModel: Mappable {
       var success: Bool?
       var data: AdProfile?
       var message: String?
       var timestamp: TimeInterval?
       
       init?(map: Map) {}
       
       mutating function mapping(map: Map) {
           success <- map["success"]
           data <- map["data"]
           message <- map["message"]
           timestamp <- map["timestamp"]
       }
   }
   ```

2. **Create AdProfile model:**
   ```typescript
   // 🆕 Create new file: AdProfile.ts
   import { z } from 'zod'
   import ObjectMapper

   interface / type AdProfile: Mappable {
       var adId: String?
       var title: String?
       var description: String?
       var imageUrl: String?
       var targetUrl: String?
       var category: String?
       var priority: Int?
       var isActive: Bool?
       var createdAt: String?
       var updatedAt: String?
       
       init?(map: Map) {}
       
       mutating function mapping(map: Map) {
           adId <- map["ad_id"]
           title <- map["title"]
           description <- map["description"]
           imageUrl <- map["image_url"]
           targetUrl <- map["target_url"]
           category <- map["category"]
           priority <- map["priority"]
           isActive <- map["is_active"]
           createdAt <- map["created_at"]
           updatedAt <- map["updated_at"]
       }
   }
   ```

#### 🧠 Understanding the Code:
- **`Mappable`** = ObjectMapper interface (TypeScript) for JSON ↔ TypeScript object conversion
- **`init?(map: Map)`** = Required initializer for Mappable
- **`<-`** = ObjectMapper operator to map JSON keys to TypeScript properties
- **`map["json_key"]`** = Maps JSON key to TypeScript property


---

## 🎓 Understanding the Flow

### Complete Data Flow Visualization:
```
User taps button
        ↓
Component.executeFetchAdProfile("ad123")
        ↓
Custom Hook.action.execute("ad123")
        ↓
API Service.FetchAdProfile("ad123")
        ↓
API Service.FetchAdProfile("ad123")
        ↓
Target.execute() → HTTP GET to "v1/ads/profile"
        ↓
Server responds with JSON
        ↓
Target.decode() → CRAdProfileResponseModel
        ↓
API Service returns Promise / Observable (RxJS)<CRAdProfileResponseModel?>
        ↓
API Service returns Promise / Observable (RxJS)<CRAdProfileResponseModel?>
        ↓
Custom Hook returns Promise / Observable (RxJS)<CRAdProfileResponseModel?>
        ↓
Component handles success/error/loading
        ↓
UI updates with ad profile data
```