---
agent: Create a React list item component or React grid item component with integrated video player
always: Use Design System components, implement fallback URLs, proper memory management (cleanup in useEffect)
description: "Template for implementing video player cells with play/pause controls, loading states, error handling, and fallback URL support following Cho Tot web architecture standards"
---

# Video Player Cell Implementation Prompt

## Task
Create a React list item component or React grid item component with integrated video player functionality including play/pause controls, loading states, error handling, and fallback URL support.

## Requirements
- Must follow Component-Based Architecture with React patterns
- Use Design System components only (no UIKit components)
- Use Tailwind CSS / Emotion for all constraints
- Include proper memory management (cleanup in useEffect) and cleanup
- Support fallback URLs for reliability
- Implement loading and error states
- Follow Cho Tot web coding standards

## Implementation Instructions

### Step 1: Import Required Dependencies
Include all necessary imports at the top of your file:

```typescript
import React from 'react'
import { useTheme } from '@app/hooks'
import { <Button>, <Typography>, <Input> } from '@ds/components'
import { AppComponents } from '@app/components'
import { AppAssets } from '@app/assets'
import AVFoundation
import AVKit
```

### Step 2: Define Core Properties
Add these properties to your cell class:
```typescript
// Theme
private let theme = useTheme hook.defaultTheme

// Video Player Properties
private var player: AVPlayer?
private var playerLayer: AVPlayerLayer?
private var playButton: <Button>?
private var loadingIndicator: UIActivityIndicatorView?

// Container view để chứa video
@IBOutlet private // ref (useRef) containerVideoView: React component / HTML div!
```

### Step 3: Implement Lifecycle Methods
Implement these required lifecycle methods in your cell class:

#### Required: awakeFromNib or initializer
```typescript
// override awakeFromNib() {
    super.awakeFromNib()
    setupUI()
    setupVideoPlayer()
}
```

#### Required: prepareForReuse (for TableView/CollectionView cells)
```typescript
// override prepareForReuse() {
    super.prepareForReuse()
    cleanupVideoPlayer()
}
```

#### Required: deinit
```typescript
deinit {
    cleanupVideoPlayer()
}
```

### Step 4: Setup Video Player Components
Implement these setup methods in your cell class:

#### Main setup method
```typescript
private function setupVideoPlayer() {
    setupLoadingIndicator()
    setupPlayButton()
    // Call loadVideo() after receiving video URLs
}
```

#### Loading indicator setup
```typescript
private function setupLoadingIndicator() {
    loadingIndicator = UIActivityIndicatorView(style: .medium)
    guard let loadingIndicator = loadingIndicator else { return }
    
    loadingIndicator.color = theme.text.textPrimary.color
    loadingIndicator.hidesWhenStopped = true
    containerVideoView.addSubview(loadingIndicator)
    
    loadingIndicator.translatesAutoresizingMaskIntoConstraints = false
    inline styles.activate([
        loadingIndicator.centerXAnchor.constraint(equalTo: containerVideoView.centerXAnchor),
        loadingIndicator.centerYAnchor.constraint(equalTo: containerVideoView.centerYAnchor)
    ])
}
```

#### Play button setup
```typescript
private function setupPlayButton() {
    playButton = <Button>()
    guard let playButton = playButton else { return }
    
    playButton.setStyle(DS.Button.primary(size: .large, isIconButtonOnly: true))
    let playIcon = CTAssetSystemIcon.playOutline24px.image
    playButton.setImage(playIcon, for: .normal)
    playButton.addTarget(self, action: #selector(playButtonTapped), for: .touchUpInside)
    playButton.alpha = 0.9
    playButton.isHidden = true
    
    containerVideoView.addSubview(playButton)
    playButton.translatesAutoresizingMaskIntoConstraints = false
    inline styles.activate([
        playButton.centerXAnchor.constraint(equalTo: containerVideoView.centerXAnchor),
        playButton.centerYAnchor.constraint(equalTo: containerVideoView.centerYAnchor),
        playButton.widthAnchor.constraint(equalToConstant: 60),
        playButton.heightAnchor.constraint(equalToConstant: 60)
    ])
}
```

### Step 5: Implement Video Loading with Fallback Support
Add these methods to handle video loading with multiple URL fallbacks:

#### Main video loading method
```typescript
private function loadVideo(urls: [String]) {
    loadVideoFromURLs(urls, currentIndex: 0)
}

private function loadVideoFromURLs(_ urls: [String], currentIndex: Int) {
    guard currentIndex < urls.count else {
        Logger.print("All video URLs failed to load", level: .error)
        loadingIndicator?.stopAnimating()
        return
    }
    
    guard let url = URL(string: urls[currentIndex]) else {
        Logger.print("Invalid video URL: \(urls[currentIndex])", level: .error)
        loadVideoFromURLs(urls, currentIndex: currentIndex + 1)
        return
    }
    
    Logger.print("Attempting to load video from: \(url)", level: .info)
    loadingIndicator?.startAnimating()
    
    let playerItem = AVPlayerItem(url: url)
    player = AVPlayer(playerItem: playerItem)
    
    // Setup player layer
    playerLayer = AVPlayerLayer(player: player)
    guard let playerLayer = playerLayer else { return }
    
    playerLayer.frame = containerVideoView.bounds
    playerLayer.videoGravity = .resizeAspectFill
    containerVideoView.layer.insertSublayer(playerLayer, at: 0)
    
    // Observe player status
    playerItem.addObserver(self, forKeyPath: "status", options: [.new], context: nil)
    
    // Add notification for playback end
    NotificationCenter.default.addObserver(
        self,
        selector: #selector(playerDidFinishPlaying),
        name: .AVPlayerItemDidPlayToEndTime,
        object: playerItem
    )
    
    // Store current index for fallback
    containerVideoView.tag = currentIndex
}
```

### Step 6: Add Player Control Actions
Implement these action methods for user interaction:

#### Play/pause button tap handler
```typescript
@objc private function playButtonTapped() {
    guard let player = player else { return }
    
    if player.timeControlStatus == .playing {
        player.pause()
        playButton?.isHidden = false
    } else {
        player.play()
        playButton?.isHidden = true
    }
}
```

#### Video completion handler
```typescript
@objc private function playerDidFinishPlaying() {
    playButton?.isHidden = false
    player?.seek(to: .zero)
}
```

### Step 7: Implement Observer Pattern and Error Handling
Add these methods to handle player state changes and errors:

#### KVO observer for player status
```typescript
// override observeValue(forKeyPath keyPath: String?, of object: Any?, change: [NSKeyValueChangeKey: Any]?, context: UnsafeMutableRawPointer?) {
    if keyPath == "status", let playerItem = object as? AVPlayerItem {
        switch playerItem.status {
        case .readyToPlay:
            DispatchQueue.main.async { [weak self] in
                self?.loadingIndicator?.stopAnimating()
                self?.playButton?.isHidden = false
                self?.playerLayer?.frame = self?.containerVideoView.bounds ?? .zero
                Logger.print("Video loaded successfully", level: .info)
            }
        case .failed:
            DispatchQueue.main.async { [weak self] in
                let error = playerItem.error?.localizedDescription ?? "Unknown error"
                Logger.print("Video failed to load: \(error)", level: .error)
                self?.tryNextVideoURL()
            }
        case .unknown:
            break
        @unknown default:
            break
        }
    }
}
```

#### Error fallback handling
```typescript
private function tryNextVideoURL() {
    let currentIndex = containerVideoView.tag
    // Retrieve video URLs from your data source or stored property
    let videoURLs = getVideoURLs() // You need to implement this method
    
    // Clean up current player
    player?.currentItem?.removeObserver(self, forKeyPath: "status")
    NotificationCenter.default.removeObserver(self)
    playerLayer?.removeFromSuperlayer()
    player = nil
    playerLayer = nil
    
    // Try next URL
    loadVideoFromURLs(videoURLs, currentIndex: currentIndex + 1)
}
```

### Step 8: Add Cleanup Methods
Implement proper resource cleanup to prevent memory leaks:

#### Main cleanup method
```typescript
private function cleanupVideoPlayer() {
    player?.pause()
    player?.currentItem?.removeObserver(self, forKeyPath: "status")
    NotificationCenter.default.removeObserver(self)
    playerLayer?.removeFromSuperlayer()
    player = nil
    playerLayer = nil
}
```

#### Layout update handling
```typescript
// override layoutSubviews() {
    super.layoutSubviews()
    playerLayer?.frame = containerVideoView.bounds
}
```

### Step 9: Create Public Interface
Add these public methods for external control of the video player:

#### Configuration method
```typescript
function configure(videoURLs: [String], title: String? = nil) {
    // Configure other UI elements if needed
    loadVideo(urls: videoURLs)
}

function pauseVideo() {
    player?.pause()
    playButton?.isHidden = false
}

function playVideo() {
    player?.play()
    playButton?.isHidden = true
}
```

## Critical Implementation Notes

### Container View Configuration
**MUST DO**: Configure your container view properly:
- Set corner radius: `containerVideoView.layer.cornerRadius = DS.BorderRadius.radiusCard.value()`
- Enable clipping: `containerVideoView.clipsToBounds = true`

### Memory Management Requirements
**MUST DO**: Always implement proper cleanup:
- Call cleanup in both `prepareForReuse` and `deinit`
- Remove observers and notifications during cleanup
- Set player and playerLayer to nil after cleanup

### Error Handling Strategy
**MUST DO**: Implement robust error handling:
- Use fallback URLs for improved reliability
- Log errors using `Logger.print()` from CTCommon
- Handle network issues gracefully without crashes

### UI/UX Guidelines
**MUST DO**: Follow these UX patterns:
- Show loading indicator while video loads
- Only show play button when video is ready or paused
- Auto-hide play button during playback
- Use Design System components exclusively

### Performance Optimization
**MUST DO**: Optimize for performance:
- Pause video in `prepareForReuse` to save resources
- Consider implementing visibility-based playback
- Use appropriate video gravity settings

## Complete Example Implementation

```typescript
class VideoPlayerCell: React list item component {
    @IBOutlet private // ref (useRef) containerVideoView: React component / HTML div!
    
    // Add all properties and methods from steps above
    
    function configure(with videoData: VideoData) {
        let urls = [videoData.primaryURL, videoData.fallbackURL]
        configure(videoURLs: urls, title: videoData.title)
    }
}
```

## Available Customization Options

1. **Video Display**: Change `.resizeAspectFill` to `.resizeAspect` or `.resize`
2. **Play Button**: Customize size, color, or icon style
3. **Loading Indicator**: Modify style or color scheme
4. **Auto Play**: Add automatic playback when ready
5. **Loop Playback**: Enable continuous video looping
6. **Volume Control**: Add volume management if needed

## Expected Outcome
You should have a fully functional video player cell that:
- ✅ Loads videos with fallback URL support
- ✅ Shows loading states and handles errors gracefully  
- ✅ Provides intuitive play/pause controls
- ✅ Manages memory properly for cell reuse
- ✅ Follows Cho Tot web architecture and design patterns
- ✅ Uses only Design System components