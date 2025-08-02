# Typist Effect Components for Figma

A collection of beautiful, animated typing effects that you can easily integrate into your Figma designs. Inspired by the iPhone keyboard suggestion interface, these components provide smooth, realistic typing animations.

## ✨ Features

- **iPhone Keyboard Style**: Complete iPhone interface mockup with progressive text suggestions
- **Basic Typist Effect**: Customizable typing animation with various text sequences  
- **Figma Ready**: Pre-built for easy integration into Figma designs
- **Fully Customizable**: Control typing speed, pause duration, cursor style, and more
- **TypeScript Support**: Full type safety and IntelliSense
- **Responsive Design**: Works perfectly on all screen sizes

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Build for Figma Integration
```bash
npm run build:figma
```

## 📱 Components

### iPhone Typist Effect
Replicates the exact iPhone keyboard interface with progressive text completion:

```tsx
<iPhoneTypistEffect
  baseText="I want"
  suggestions={["", " to", " to go", " to go to LA"]}
  typingSpeed={120}
  pauseDuration={2000}
  loop={true}
/>
```

### Basic Typist Effect
A flexible typing animation component:

```tsx
<TypistEffect
  textSequence={[
    "Hello World!",
    "Welcome to our app",
    "Start typing..."
  ]}
  typingSpeed={80}
  pauseDuration={1500}
  loop={true}
  showCursor={true}
/>
```

## 🎨 Figma Integration

After building with `npm run build:figma`, you'll get a UMD bundle that can be directly used in Figma:

### 1. Include the Script
```html
<script src="./dist/typist-effect.umd.js"></script>
```

### 2. Use the Components
```javascript
// iPhone Style
window.renderiPhoneTypistEffect(container, {
  baseText: "I want",
  suggestions: ["", " to", " to go", " to go to LA"],
  typingSpeed: 120
});

// Basic Style  
window.renderTypistEffect(container, {
  textSequence: ["Hello", "World", "Figma!"],
  typingSpeed: 80,
  loop: true
});
```

## ⚙️ API Reference

### iPhoneTypistEffect Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `baseText` | `string` | `"I want"` | The initial text to display |
| `suggestions` | `string[]` | `["", " to", " to go", " to go to LA"]` | Progressive text completions |
| `typingSpeed` | `number` | `80` | Typing speed in milliseconds |
| `pauseDuration` | `number` | `1200` | Pause between suggestions in ms |
| `loop` | `boolean` | `true` | Whether to loop the animation |
| `className` | `string` | `''` | Custom CSS class |

### TypistEffect Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `textSequence` | `string[]` | Required | Array of texts to type |
| `typingSpeed` | `number` | `100` | Typing speed in milliseconds |
| `pauseDuration` | `number` | `1500` | Pause between texts in ms |
| `loop` | `boolean` | `true` | Whether to loop the animation |
| `showCursor` | `boolean` | `true` | Show blinking cursor |
| `cursorChar` | `string` | `'|'` | Custom cursor character |
| `className` | `string` | `''` | Custom CSS class |
| `onComplete` | `() => void` | `undefined` | Callback when animation completes |

## 🎯 Use Cases

- **Landing Pages**: Eye-catching hero text animations
- **Chat Interfaces**: Realistic typing indicators
- **Code Demos**: Animated code completion
- **Marketing Sites**: Dynamic tagline displays
- **Mobile App Mockups**: iPhone keyboard simulations
- **Presentations**: Progressive text reveals

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Build for Figma
npm run build:figma

# Preview production build
npm run preview
```

## 📦 Project Structure

```
src/
├── components/
│   ├── TypistEffect.tsx          # Basic typist component
│   ├── TypistEffect.css          # Basic typist styles
│   ├── iPhoneTypistEffect.tsx    # iPhone keyboard component
│   └── iPhoneTypistEffect.css    # iPhone keyboard styles
├── App.tsx                       # Demo application
├── App.css                       # Demo styles
├── main.tsx                      # Development entry point
└── figma-export.tsx              # Figma integration entry point
```

## 🎨 Customization

The components are highly customizable through CSS classes and props. You can:

- Modify colors and fonts through CSS variables
- Adjust timing and animation curves
- Create custom cursor styles
- Add sound effects or haptic feedback
- Extend with additional keyboard layouts

## 📄 License

MIT License - feel free to use in your projects!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Ready to make your designs come alive with beautiful typing animations! 🚀
