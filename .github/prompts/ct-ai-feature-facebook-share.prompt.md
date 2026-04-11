Prompt instructions file:
---
agent: Create comprehensive Facebook sharing functionality with analytics
always: Use Design System components, implement proper error handling, analytics tracking
description: "Template for implementing Facebook sharing with ShareDialog, multiple content types, error handling, analytics tracking, and UI feedback following Cho Tot web architecture standards"
---

## Instructions
Follow instructions in [ct-ai-feature-video-player.prompt.md](file:///Users/hai.phan/Desktop/haiphan/ct-ios-app--v3/src/features/GSOrder/GSOrder/Features/ct-ai-feature-video-player.prompt.md).

# Facebook Share Implementation Prompt

## Task
Create comprehensive Facebook sharing functionality supporting multiple content types (link, photo, video), error handling, fallback mechanisms, delegate pattern, and analytics tracking.

## Requirements
- Must follow Component-Based Architecture with React patterns
- Use Design System components only (no UIKit components)
- Support multiple content types (link, photo, video)
- Include proper error handling and fallback to system share
- Implement delegate pattern for callbacks
- Add analytics tracking for all share events
- Follow Cho Tot web coding standards

## Important Note: Facebook Ref Parameter
**What is `ref: "giat_say_trang_dang_ios"`?**
The `ref` parameter in Facebook sharing serves as a tracking identifier with these purposes:
- **Attribution Tracking**: Identifies shares coming from Giặt Sấy Trắng Đáng React web app vs other platforms (web, Android)
- **Analytics Segmentation**: Helps Facebook Analytics distinguish traffic sources
- **Campaign Tracking**: Enables tracking of share performance by platform
- **User Journey Mapping**: Allows tracking how users interact with shared content across platforms
- **Business Intelligence**: Provides insights into which platform generates more engagement

**Usage Examples**:
- `"giat_say_trang_dang_ios"` - for React web app shares
- `"giat_say_trang_dang_android"` - for Android app shares  
- `"giat_say_trang_dang_web"` - for website shares
- `"giat_say_trang_dang_ios_order"` - for specific feature/module shares

## Implementation Instructions

### Step 1: Import Required Dependencies
Include all necessary imports at the top of your file:

```typescript
import React from 'react'
import { z } from 'zod'
import { useTheme } from '@app/hooks'
import { <Button>, <Typography>, <Input> } from '@ds/components'
import { AppComponents } from '@app/components'
import { AppAssets } from '@app/assets'
import { useTracking } from '@app/tracking'
import FBSDKShareKit
import RxTypeScript
import { useState, useCallback } from 'react'
```

### Step 2: Define Core Enums and Models
Add these data structures to support various sharing scenarios:

```typescript
// MARK: - Facebook Share Content Types
const enum / union type FacebookShareContentType {
    case link
    case photo
    case video
    case story
}

// MARK: - Facebook Share Result
const enum / union type FacebookShareResult {
    case success([String: Any])
    case failure(Error)
    case cancelled
}

// MARK: - Facebook Share Configuration
interface / type FacebookShareConfig {
    let contentType: FacebookShareContentType
    let url: String?
    let image: UIImage?
    let videoURL: URL?
    let title: String
    let description: String?
    let hashtag: String?
    let peopleIDs: [String]?
    let placeID: String?
    let ref: String?
    
    static function linkShare(url: String, title: String, description: String? = nil, hashtag: String? = nil) -> FacebookShareConfig {
        return FacebookShareConfig(
            contentType: .link,
            url: url,
            image: nil,
            videoURL: nil,
            title: title,
            description: description,
            hashtag: hashtag,
            peopleIDs: nil,
            placeID: nil,
            ref: "giat_say_trang_dang_ios"
        )
    }
    
    static function photoShare(image: UIImage, title: String, hashtag: String? = nil) -> FacebookShareConfig {
        return FacebookShareConfig(
            contentType: .photo,
            url: nil,
            image: image,
            videoURL: nil,
            title: title,
            description: nil,
            hashtag: hashtag,
            peopleIDs: nil,
            placeID: nil,
            ref: "giat_say_trang_dang_ios"
        )
    }
    
    static function videoShare(videoURL: URL, title: String, hashtag: String? = nil) -> FacebookShareConfig {
        return FacebookShareConfig(
            contentType: .video,
            url: nil,
            image: nil,
            videoURL: videoURL,
            title: title,
            description: nil,
            hashtag: hashtag,
            peopleIDs: nil,
            placeID: nil,
            ref: "giat_say_trang_dang_ios"
        )
    }
}

// MARK: - Facebook Share Error
const enum / union type FacebookShareError: LocalizedError {
    case invalidURL
    case invalidImage
    case invalidVideoURL
    case cannotShow
    case networkUnavailable
    case facebookNotInstalled
    case unknownError(String)
    
    var errorDescription: String? {
        switch self {
        case .invalidURL:
            return "URL không hợp lệ"
        case .invalidImage:
            return "Hình ảnh không hợp lệ"
        case .invalidVideoURL:
            return "Video URL không hợp lệ"
        case .cannotShow:
            return "Không thể hiển thị Facebook share dialog"
        case .networkUnavailable:
            return "Không có kết nối mạng"
        case .facebookNotInstalled:
            return "Chưa cài đặt ứng dụng Facebook"
        case .unknownError(let message):
            return message
        }
    }
}
```

### Step 3: Create Facebook Share Manager Protocol
Define the main interface (TypeScript) for Facebook sharing functionality:

```typescript
// MARK: - Facebook Share Manager Protocol
interface (TypeScript) FacebookShareManagerType: AnyObject {
    var shareResult: useCallback / EventEmitter<FacebookShareResult> { get }
    
    function shareToFacebook(config: FacebookShareConfig, from component: UIReact Component)
    function canShowFacebookShare() -> Bool
    function validateShareConfig(_ config: FacebookShareConfig) -> Result<Void, FacebookShareError>
}

// MARK: - Facebook Share Delegate Protocol
interface (TypeScript) FacebookShareDelegate: AnyObject {
    function facebookShareDidComplete(with result: FacebookShareResult)
    function facebookShareWillShow()
    function facebookShareDidShow()
}
```

### Step 4: Implement Core Facebook Share Manager
Create the main manager class with full functionality:

```typescript
// MARK: - Facebook Share Manager Implementation
const // functional component or class FacebookShareManager: NSObject {
    
    // MARK: - Properties
    private let theme = useTheme hook.defaultTheme
    private let cleanupFn = cleanup function / useEffect cleanup()
    
    // RxTypeScript Relays
    let shareResult = useCallback / EventEmitter<FacebookShareResult>()
    
    // Delegate
    // ref (useRef) delegate: FacebookShareDelegate?
    
    // Current sharing context
    private var currentReact Component: UIReact Component?
    private var currentConfig: FacebookShareConfig?
    
    // MARK: - Initializer
    override init() {
        super.init()
        setupObservers()
    }
    
    deinit {
        NotificationCenter.default.removeObserver(self)
    }
    
    // MARK: - Setup
    private function setupObservers() {
        // Observe network changes
        NotificationCenter.default.addObserver(
            self,
            selector: #selector(networkStatusChanged),
            name: .networkStatusChanged,
            object: nil
        )
    }
    
    @objc private function networkStatusChanged() {
        // Handle network status changes if needed
        Logger.print("Network status changed for Facebook sharing", level: .info)
    }
}
```

### Step 5: Implement FacebookShareManagerType Protocol
Add the main sharing functionality:

```typescript
// MARK: - FacebookShareManagerType Implementation
// additional methods or utility functions FacebookShareManager: FacebookShareManagerType {
    
    function shareToFacebook(config: FacebookShareConfig, from component: UIReact Component) {
        // Store current context
        currentReact Component = component
        currentConfig = config
        
        // Pre-validation
        let validationResult = validateShareConfig(config)
        switch validationResult {
        case .success:
            performShare(config: config, from: component)
        case .failure(let error):
            handleShareError(error)
        }
    }
    
    function canShowFacebookShare() -> Bool {
        return ShareDialog.canShow
    }
    
    function validateShareConfig(_ config: FacebookShareConfig) -> Result<Void, FacebookShareError> {
        // Check network connectivity
        guard NetworkReachability.shared.isConnected else {
            return .failure(.networkUnavailable)
        }
        
        // Check if Facebook share dialog can be shown
        guard canShowFacebookShare() else {
            return .failure(.cannotShow)
        }
        
        // Validate based on content type
        switch config.contentType {
        case .link:
            guard let urlString = config.url, 
                  !urlString.isEmpty,
                  URL(string: urlString) != nil else {
                return .failure(.invalidURL)
            }
            
        case .photo:
            guard config.image != nil else {
                return .failure(.invalidImage)
            }
            
        case .video:
            guard config.videoURL != nil else {
                return .failure(.invalidVideoURL)
            }
            
        case .story:
            // Add story validation if needed
            break
        }
        
        return .success(())
    }
    
    private function performShare(config: FacebookShareConfig, from component: UIReact Component) {
        Logger.print("Starting Facebook share with type: \(config.contentType)", level: .info)
        
        // Notify delegate
        delegate?.facebookShareWillShow()
        
        // Track analytics
        trackShareAttempt(config: config)
        
        // Create share content based on type
        let shareContent = createShareContent(from: config)
        
        // Create and configure share dialog
        let shareDialog = ShareDialog(component: component, content: shareContent, delegate: self)
        shareDialog.mode = .automatic
        
        // Show dialog
        guard shareDialog.canShow else {
            handleShareError(.cannotShow)
            return
        }
        
        shareDialog.show()
        delegate?.facebookShareDidShow()
    }
    
    private function createShareContent(from config: FacebookShareConfig) -> SharingContent {
        switch config.contentType {
        case .link:
            return createLinkContent(from: config)
        case .photo:
            return createPhotoContent(from: config)
        case .video:
            return createVideoContent(from: config)
        case .story:
            return createStoryContent(from: config)
        }
    }
    
    private function createLinkContent(from config: FacebookShareConfig) -> ShareLinkContent {
        let content = ShareLinkContent()
        
        if let urlString = config.url, let url = URL(string: urlString) {
            content.contentURL = url
        }
        
        content.quote = config.title
        
        if let hashtag = config.hashtag {
            content.hashtag = Hashtag(hashtag)
        }
        
        if let peopleIDs = config.peopleIDs {
            content.peopleIDs = peopleIDs
        }
        
        if let placeID = config.placeID {
            content.placeID = placeID
        }
        
        if let ref = config.ref {
            content.ref = ref
        }
        
        return content
    }
    
    private function createPhotoContent(from config: FacebookShareConfig) -> SharePhotoContent {
        let content = SharePhotoContent()
        
        if let image = config.image {
            let photo = SharePhoto(image: image, isUserGenerated: true)
            content.photos = [photo]
        }
        
        content.quote = config.title
        
        if let hashtag = config.hashtag {
            content.hashtag = Hashtag(hashtag)
        }
        
        if let peopleIDs = config.peopleIDs {
            content.peopleIDs = peopleIDs
        }
        
        if let placeID = config.placeID {
            content.placeID = placeID
        }
        
        if let ref = config.ref {
            content.ref = ref
        }
        
        return content
    }
    
    private function createVideoContent(from config: FacebookShareConfig) -> ShareVideoContent {
        let content = ShareVideoContent()
        
        if let videoURL = config.videoURL {
            let video = ShareVideo(videoURL: videoURL)
            content.video = video
        }
        
        content.quote = config.title
        
        if let hashtag = config.hashtag {
            content.hashtag = Hashtag(hashtag)
        }
        
        if let peopleIDs = config.peopleIDs {
            content.peopleIDs = peopleIDs
        }
        
        if let placeID = config.placeID {
            content.placeID = placeID
        }
        
        if let ref = config.ref {
            content.ref = ref
        }
        
        return content
    }
    
    private function createStoryContent(from config: FacebookShareConfig) -> ShareStoryContent {
        // Implement story content creation if needed
        let content = ShareStoryContent()
        
        if let image = config.image {
            let photo = SharePhoto(image: image, isUserGenerated: true)
            content.backgroundAsset = photo
        }
        
        return content
    }
}
```

### Step 6: Implement SharingDelegate Protocol
Add delegate handling for Facebook SDK callbacks:

```typescript
// MARK: - SharingDelegate Implementation
// additional methods or utility functions FacebookShareManager: SharingDelegate {
    
    function sharer(_ sharer: Sharing, didCompleteWithResults results: [String : Any]) {
        Logger.print("Facebook share completed successfully: \(results)", level: .info)
        
        // Track success
        trackShareSuccess(results: results)
        
        // Notify via RxTypeScript
        shareResult.accept(.success(results))
        
        // Notify delegate
        delegate?.facebookShareDidComplete(with: .success(results))
        
        // Show success message
        showSuccessMessage()
        
        // Cleanup
        cleanup()
    }
    
    function sharer(_ sharer: Sharing, didFailWithError error: Error) {
        Logger.print("Facebook share failed: \(error.localizedDescription)", level: .error)
        
        // Track failure
        trackShareFailure(error: error)
        
        // Try fallback
        handleShareError(.unknownError(error.localizedDescription))
    }
    
    function sharerDidCancel(_ sharer: Sharing) {
        Logger.print("Facebook share cancelled by user", level: .info)
        
        // Track cancellation
        trackShareCancelled()
        
        // Notify via RxTypeScript
        shareResult.accept(.cancelled)
        
        // Notify delegate
        delegate?.facebookShareDidComplete(with: .cancelled)
        
        // Cleanup
        cleanup()
    }
    
    private function handleShareError(_ error: FacebookShareError) {
        Logger.print("Handling Facebook share error: \(error.localizedDescription ?? "Unknown")", level: .error)
        
        // Notify via RxTypeScript
        shareResult.accept(.failure(error))
        
        // Notify delegate
        delegate?.facebookShareDidComplete(with: .failure(error))
        
        // Show error with fallback option
        showErrorWithFallback(error: error)
        
        // Cleanup
        cleanup()
    }
    
    private function cleanup() {
        currentReact Component = nil
        currentConfig = nil
    }
}
```

### Step 7: Implement UI Feedback and Fallback Mechanisms
Add user feedback and system share fallback:

```typescript
// MARK: - UI Feedback and Fallback
// additional methods or utility functions FacebookShareManager {
    
    private function showSuccessMessage() {
        guard let topVC = UIApplication.topReact Component() else { return }
        
        // Show success toast using Design System
        let successView = DSToastView()
        successView.configure(
            message: "Đã chia sẻ lên Facebook thành công!",
            type: .success,
            duration: 3.0
        )
        successView.show(in: topVC.view)
    }
    
    private function showErrorWithFallback(error: FacebookShareError) {
        guard let topVC = UIApplication.topReact Component(),
              let config = currentConfig else { return }
        
        // Create alert with fallback option
        let alertController = UIAlertController(
            title: "Không thể chia sẻ lên Facebook",
            message: error.errorDescription,
            preferredStyle: .alert
        )
        
        // Retry action
        let retryAction = UIAlertAction(title: "Thử lại", style: .default) { [weak self] _ in
            self?.shareToFacebook(config: config, from: topVC)
        }
        
        // Fallback to system share
        let systemShareAction = UIAlertAction(title: "Chia sẻ khác", style: .default) { [weak self] _ in
            self?.fallbackToSystemShare(config: config, from: topVC)
        }
        
        // Cancel action
        let cancelAction = UIAlertAction(title: "Hủy", style: .cancel)
        
        alertController.addAction(retryAction)
        alertController.addAction(systemShareAction)
        alertController.addAction(cancelAction)
        
        topVC.present(alertController, animated: true)
    }
    
    private function fallbackToSystemShare(config: FacebookShareConfig, from component: UIReact Component) {
        var items: [Any] = [config.title]
        
        if let urlString = config.url, let url = URL(string: urlString) {
            items.append(url)
        }
        
        if let image = config.image {
            items.append(image)
        }
        
        if let videoURL = config.videoURL {
            items.append(videoURL)
        }
        
        let activityReact Component = UIActivityReact Component(
            activityItems: items,
            applicationActivities: nil
        )
        
        // Exclude some activities if needed
        activityReact Component.excludedActivityTypes = [
            .print,
            .assignToContact,
            .postToWeibo
        ]
        
        // Present system share
        component.present(activityReact Component, animated: true)
        
        // Track fallback usage
        trackFallbackShare()
    }
}
```

### Step 8: Implement Analytics Tracking
Add comprehensive analytics tracking:

```typescript
// MARK: - Analytics Tracking
// additional methods or utility functions FacebookShareManager {
    
    private function trackShareAttempt(config: FacebookShareConfig) {
        CTTracking.track(event: "facebook_share_attempt", parameters: [
            "content_type": "\(config.contentType)",
            "has_hashtag": config.hashtag != nil,
            "has_people_tags": config.peopleIDs?.isEmpty == false,
            "has_place_tag": config.placeID != nil,
            "ref": config.ref ?? ""
        ])
    }
    
    private function trackShareSuccess(results: [String: Any]) {
        CTTracking.track(event: "facebook_share_success", parameters: [
            "results": results,
            "content_type": currentConfig?.contentType.description ?? "unknown"
        ])
    }
    
    private function trackShareFailure(error: Error) {
        CTTracking.track(event: "facebook_share_failed", parameters: [
            "error_description": error.localizedDescription,
            "error_domain": (error as NSError).domain,
            "error_code": (error as NSError).code,
            "content_type": currentConfig?.contentType.description ?? "unknown"
        ])
    }
    
    private function trackShareCancelled() {
        CTTracking.track(event: "facebook_share_cancelled", parameters: [
            "content_type": currentConfig?.contentType.description ?? "unknown"
        ])
    }
    
    private function trackFallbackShare() {
        CTTracking.track(event: "facebook_share_fallback_used", parameters: [
            "content_type": currentConfig?.contentType.description ?? "unknown"
        ])
    }
}

// MARK: - FacebookShareContentType Description
// additional methods or utility functions FacebookShareContentType: CustomStringConvertible {
    var description: String {
        switch self {
        case .link: return "link"
        case .photo: return "photo"
        case .video: return "video"
        case .story: return "story"
        }
    }
}
```

### Step 9: Create Convenience Extensions and Helper Methods
Add utility methods for easier usage:

```typescript
// MARK: - Convenience Methods
// additional methods or utility functions FacebookShareManager {
    
    // Jest share methods for common custom hooks
    function shareLink(
        url: String,
        title: String,
        description: String? = nil,
        from component: UIReact Component
    ) {
        let config = FacebookShareConfig.linkShare(
            url: url,
            title: title,
            description: description,
            hashtag: "#ChoTot"
        )
        shareToFacebook(config: config, from: component)
    }
    
    function sharePhoto(
        image: UIImage,
        caption: String,
        from component: UIReact Component
    ) {
        let config = FacebookShareConfig.photoShare(
            image: image,
            title: caption,
            hashtag: "#ChoTot"
        )
        shareToFacebook(config: config, from: component)
    }
    
    function shareVideo(
        videoURL: URL,
        title: String,
        from component: UIReact Component
    ) {
        let config = FacebookShareConfig.videoShare(
            videoURL: videoURL,
            title: title,
            hashtag: "#ChoTot"
        )
        shareToFacebook(config: config, from: component)
    }
    
    // Reactive sharing with RxTypeScript
    function shareToFacebookRx(config: FacebookShareConfig, from component: UIReact Component) -> Promise / Observable (RxJS)<FacebookShareResult> {
        return Promise / Observable (RxJS).create { [weak self] observer in
            guard let self = self else {
                observer.onError(FacebookShareError.unknownError("FacebookShareManager deallocated"))
                return Disposables.create()
            }
            
            let subscription = self.shareResult
                .take(1)
                .subscribe(onNext: { result in
                    observer.onNext(result)
                    observer.onCompleted()
                })
            
            self.shareToFacebook(config: config, from: component)
            
            return subscription
        }
    }
}
```

### Step 10: Create Integration Example for Components
Provide example of how to integrate with React (Component/Hook/API Service):

```typescript
// MARK: - Component Integration Example
class ShareComponent {
    
    // MARK: - Properties
    private let facebookShareManager: FacebookShareManagerType
    private let cleanupFn = cleanup function / useEffect cleanup()
    
    // Output Relays
    let shareResult = useCallback / EventEmitter<FacebookShareResult>()
    let isSharing = useState<boolean>(value: false)
    let errorMessage = useCallback / EventEmitter<String>()
    
    // MARK: - Initializer
    init(facebookShareManager: FacebookShareManagerType = FacebookShareManager()) {
        self.facebookShareManager = facebookShareManager
        bindShareManager()
    }
    
    // MARK: - Public Methods
    function shareToFacebook(url: String, title: String, description: String?, from component: UIReact Component) {
        isSharing.accept(true)
        
        let config = FacebookShareConfig.linkShare(
            url: url,
            title: title,
            description: description,
            hashtag: "#ChoTot"
        )
        
        facebookShareManager.shareToFacebook(config: config, from: component)
    }
    
    // MARK: - Private Methods
    private function bindShareManager() {
        facebookShareManager.shareResult
            .subscribe(onNext: { [weak self] result in
                self?.isSharing.accept(false)
                self?.shareResult.accept(result)
                
                if case .failure(let error) = result {
                    self?.errorMessage.accept(error.localizedDescription)
                }
            })
            .disposed(by: cleanupFn)
    }
}
```

## Critical Implementation Notes

### Facebook SDK Configuration
**MUST DO**: Ensure Facebook SDK is properly configured in your app:
- Add Facebook App ID to Info.plist
- Configure URL schemes in Info.plist
- Initialize Facebook SDK in AppDelegate
- Add required permissions and capabilities

### Error Handling Strategy
**MUST DO**: Implement comprehensive error handling:
- Validate all inputs before attempting to share
- Provide meaningful error messages to users
- Implement fallback to system share when Facebook sharing fails
- Log all errors using `Logger.print()` from CTCommon

### Memory Management
**MUST DO**: Proper resource cleanup:
- Use weak references to prevent stale closures
- Clean up observers and subscriptions
- Handle view controller deallocation gracefully

### Analytics Requirements
**MUST DO**: Track all sharing events:
- Share attempts (success/failure/cancellation)
- Fallback usage when Facebook sharing fails
- Content type and configuration details
- Error types and frequencies

### UI/UX Guidelines
**MUST DO**: Follow these UX patterns:
- Show loading states during share operations
- Provide clear error messages with retry options
- Offer fallback to system share when Facebook fails
- Use Design System components for all UI feedback

## Complete Integration Example

```typescript
// In your React Component or Module
class PaymentReact Component: UIReact Component {
    
    private let facebookShareManager = FacebookShareManager()
    private let cleanupFn = cleanup function / useEffect cleanup()
    
    // override useEffect (on mount)() {
        super.useEffect (on mount)()
        setupFacebookSharing()
    }
    
    private function setupFacebookSharing() {
        facebookShareManager.delegate = self
        
        facebookShareManager.shareResult
            .subscribe(onNext: { [weak self] result in
                self?.handleShareResult(result)
            })
            .disposed(by: cleanupFn)
    }
    
    @IBAction private function shareToFacebookTapped() {
        facebookShareManager.shareLink(
            url: "https://chotot.com/ad/123456",
            title: "Xem tin đăng tuyệt vời này!",
            description: "Sản phẩm chất lượng với giá tốt nhất",
            from: self
        )
    }
    
    private function handleShareResult(_ result: FacebookShareResult) {
        switch result {
        case .success(let results):
            Logger.print("Share successful: \(results)")
        case .failure(let error):
            Logger.print("Share failed: \(error)")
        case .cancelled:
            Logger.print("Share cancelled")
        }
    }
}

// additional methods or utility functions PaymentReact Component: FacebookShareDelegate {
    function facebookShareDidComplete(with result: FacebookShareResult) {
        // Handle completion if needed
    }
    
    function facebookShareWillShow() {
        // Handle will show if needed
    }
    
    function facebookShareDidShow() {
        // Handle did show if needed
    }
}
```

## Expected Outcome
You should have a comprehensive Facebook sharing system that:
- ✅ Supports multiple content types (link, photo, video, story)
- ✅ Includes robust error handling and validation
- ✅ Provides fallback to system share when Facebook fails
- ✅ Tracks detailed analytics for all share events
- ✅ Follows Component-Based Architecture with React patterns
- ✅ Uses only Design System components
- ✅ Implements proper memory management (cleanup in useEffect) and cleanup
- ✅ Provides both imperative and reactive (RxTypeScript) APIs
- ✅ Offers convenient methods for common custom hooks