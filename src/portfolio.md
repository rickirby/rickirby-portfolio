---
outline: deep
---

# Portfolio

### Stockbit
![Stockbit](/company/sb_logo_light.png){.light-only width=137.39}
![Stockbit](/company/sb_logo_dark.png){.dark-only width=137.39}

#### 🏢 iOS Infra Stuff
::: item-details Enablement of Linux Runner in Gitlab-CI for `danger-swiftlint`
Since we can run `Swift` in Linux by using `Swift Toolchain`, I enabled `danger-swiftlint` to run on a CI Linux Runner.<br><br>
![Danger-SwiftLint](/portfolio/port_sb_danger_lint.png){width=500}<br>
The process was significantly faster on Linux, completing in just `38 seconds`, compared to over `3 minutes` on Xcode Cloud CI.<br><br>
[See Details](){.rounded-button}
:::
::: item-details `SwiftLint` Quarantine Strategy to resolve thousands of Lint Violation
To address the numerous `SwiftLint` violations scattered across hundreds of files in our project, I'm introducing a new approach known as the **Quarantine Strategy**.<br><br>
![Quarantine Diagram](/portfolio/port_sb_swiftlint_quarantine_diagram.png)<br>
The Quarantine Strategy involves categorizing files into two groups: healthy and infected. We keep the health of healthy files by implementing `danger-swiftlint` on Pull Request, while on other side we reduce the number of infected files<br><br>
[See Details](/portfolio/swiftlint_quarantine_strategy){.rounded-button}
:::
::: item-details AI-Powered Pull Request Reviewer
Here is some detailed content inside the custom details block.
:::
::: item-details Create Default Release Notes for `TestFlight` and `Firebase` Build
Here is some detailed content inside the custom details block.
:::
::: item-details Create Release Script for Simplicity in Weekly Release Ritual
Here is some detailed content inside the custom details block.
:::

#### ⚙️ iOS Core Stuff
* `OneSignal` to `FCM` Migration (Save USD 20,000 per Year)
* Integration of Live Update Remote Config
<br><br>
#### 📈 Feature Related
* Bilingual Feature Enablement on Stockbit Apps
* Dynamic Deeplink Handler for Stockbit Screener Feature and Its Child
* Change Hamburger Menu into Profile Picture Button
* SNAP-BI
<br><br>
#### ♺ Modularization
* Create `Dependency Injection` Engine and Implement to the Project
<br><br>
#### ⏱️ Build Time Optimization
* The Usage of Pre-Built Static Framework
* Enhance Image Asset Catalog Compilation Time
<br><br>
#### 📚 3rd Party Library Removal
* Sunset `Realm` and Change into Native `CoreData`
* Sunset `LGSideMenu` and Change into Native Navigation
* Sunset `M13Checkbox` and Create Native-Base Checkbox Component
* Best Practice of `Parchment` Implementation (Paging View)
<br><br>
#### 🛠️ Developer Experience
* Remote Config Inspection Tools
* `Wormholy` Framework Bugfix (3rd Party Lib for Network Chucker)
* `Hyperion` Framework Improvement (3rd Party Lib for iOS Layout Inspection)
<br><br>
#### 🔐 Security
* Integration of `Talsec Security` Framework to Detect Jailbreak and Other Device Manipulation

### Traveloka
![Traveloka](/company/tvlk_logo_light.png){.light-only width=200}
![Traveloka](/company/tvlk_logo_dark.png){.dark-only width=200}

#### 💸 Feature Related - Payment
* Financials Service Page Relayout
* PIN Challenge Handling
<br><br>
#### 🔨 Other Tech Stack
* Migrate Legacy `Objective-C` code into `Swift` code
* Unit Test Pattern to Check Code Sequence

### RCTI+
![RCTI+](/company/rcti_logo.png){width=127.41}

#### 🎥 Feature Related - Video
* Create Video Player Interaction
<br><br>
#### 🔐 Security
* Prevent Screen Recording and Screen Capturing
<br><br>
#### 🔨 Other Tech Stack
* Manage `JavaScript` bridge to handle communication between web apps and native apps

<style scoped>
h3 {
    visibility: hidden;
}

h4 { 
    margin-bottom: 16px; 
}
</style>