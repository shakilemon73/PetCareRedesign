# Qubi Mobile App Design Guidelines

## Design Approach
**Reference-Based Approach**: Following modern mobile app design patterns similar to educational tech apps like Duolingo and Khan Academy, combined with quantum computing visualization interfaces. The design prioritizes visual engagement and gamification to make quantum concepts accessible.

## Core Design Elements

### A. Color Palette
**Primary Colors (Dark Mode):**
- Background: 15 8% 12% (deep dark base)
- Surface: 20 10% 18% (elevated surfaces)
- Primary Brand: Use vibrant gradients from your brand kit as accent overlays and highlights

**Light Mode:**
- Background: 220 20% 98% (clean white base)  
- Surface: 210 15% 95% (subtle gray surfaces)
- Primary: Incorporate your gradient colors as strategic accent elements

**Gradients**: Apply your brand gradient collection prominently on:
- Device connection status indicators
- Theme unlock rewards
- Progress bars and completion states
- Call-to-action buttons
- Header backgrounds

### B. Typography
**Font Stack**: Inter (via Google Fonts CDN)
- Headings: Inter 600-700 (16px-24px mobile)
- Body: Inter 400-500 (14px-16px mobile)
- Captions: Inter 400 (12px-13px mobile)
- Quantum gate labels: Inter 500 (11px-12px mobile)

### C. Layout System
**Tailwind Spacing**: Consistent use of 2, 4, 6, 8, 12 units
- Card padding: p-4, p-6
- Section spacing: mb-6, mb-8
- Button padding: px-4 py-2, px-6 py-3
- Touch targets: minimum h-12 for all interactive elements

### D. Component Library

**Core Components:**
- **Device Cards**: Rounded corners (rounded-2xl), gradient borders showing connection status
- **Quantum Gate Buttons**: Circular touch targets with your brand gradients for active states
- **Progress Indicators**: Animated gradient fills matching your color palette
- **Navigation**: Bottom tab bar with gradient active state indicators
- **Scan Interface**: Clean scanning overlay with gradient accent elements

**Mobile Optimization:**
- All touch targets minimum 44px (h-12)
- Generous spacing for thumb navigation
- Large, readable text throughout
- Swipe gestures for device management

### E. Page Structure

**Dashboard**: Device grid with quantum circuit builder, gradient status indicators
**Device Connection**: Scanning interface with battery status and gradient connection states  
**Settings**: Clean list layout with your gradient accent colors
**Themes Gallery**: Grid showcasing unlockable themes using your gradient collection
**Learning Hub**: Progress-tracked modules with gradient completion states
**Profile**: Achievement showcase with gradient reward elements

## Visual Hierarchy
- Use your vibrant gradients strategically for primary actions and status indicators
- Maintain high contrast ratios for accessibility
- Create clear information architecture through consistent spacing
- Employ your gradient palette to guide user attention to key interactive elements

## Images
**Device Visualization**: 3D-rendered Qubi device mockups showing quantum states
**Learning Illustrations**: Simple, colorful diagrams explaining quantum concepts
**Theme Previews**: Thumbnail representations of unlockable visual themes
**No large hero image required** - focus on functional interface elements and device interaction