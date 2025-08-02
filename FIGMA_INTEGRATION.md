# Figma Integration Guide

This guide shows you how to integrate the Typist Effect components into your Figma designs.

## Quick Setup

### 1. Build the Figma Bundle
```bash
npm run build:figma
```

This creates:
- `dist/typist-effect.umd.js` - The component bundle
- `dist/style.css` - Required styles

### 2. HTML Integration Example

Create an HTML file that includes the components:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Typist Effect Demo</title>
    <link rel="stylesheet" href="./dist/style.css">
</head>
<body>
    <!-- Container for iPhone style -->
    <div id="iphone-container"></div>
    
    <!-- Container for basic style -->
    <div id="basic-container"></div>

    <!-- Include React dependencies -->
    <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    
    <!-- Include the typist effect bundle -->
    <script src="./dist/typist-effect.umd.js"></script>
    
    <script>
        // iPhone keyboard style
        window.renderIPhoneTypistEffect(
            document.getElementById('iphone-container'),
            {
                baseText: "I want",
                suggestions: ["", " to", " to go", " to go to LA"],
                typingSpeed: 120,
                pauseDuration: 2000,
                loop: true
            }
        );

        // Basic typist style
        window.renderTypistEffect(
            document.getElementById('basic-container'),
            {
                textSequence: [
                    "Hello World!",
                    "Welcome to Figma",
                    "Start designing..."
                ],
                typingSpeed: 80,
                pauseDuration: 1500,
                loop: true,
                showCursor: true
            }
        );
    </script>
</body>
</html>
```

## Figma Plugin Integration

### Option 1: iframe Approach
1. Create the HTML file above
2. Host it online or locally
3. Use an iframe in your Figma plugin to embed the HTML

### Option 2: Direct DOM Manipulation
```javascript
// In your Figma plugin code
const container = document.createElement('div');
document.body.appendChild(container);

// Make sure React and ReactDOM are available
// Then use the global functions:
window.renderIPhoneTypistEffect(container, {
    baseText: "I want",
    suggestions: ["", " to", " to go", " to go to LA"],
    typingSpeed: 120
});
```

## Component APIs

### iPhone Typist Effect

```javascript
window.renderIPhoneTypistEffect(container, {
    baseText: "I want",           // Initial text
    suggestions: [                // Progressive completions
        "", 
        " to", 
        " to go", 
        " to go to LA"
    ],
    typingSpeed: 120,            // ms per character
    pauseDuration: 2000,         // ms between suggestions
    loop: true,                  // Whether to repeat
    className: "custom-class"    // Additional CSS class
});
```

### Basic Typist Effect

```javascript
window.renderTypistEffect(container, {
    textSequence: [              // Array of texts to type
        "Hello World!",
        "Welcome to our app",
        "Start typing..."
    ],
    typingSpeed: 80,            // ms per character
    pauseDuration: 1500,        // ms between texts
    loop: true,                 // Whether to repeat
    showCursor: true,           // Show blinking cursor
    cursorChar: "|",           // Cursor character
    className: "custom-class",  // Additional CSS class
    onComplete: () => {         // Callback when done
        console.log("Animation complete!");
    }
});
```

## Styling

The components come with built-in styles, but you can customize them:

```css
/* iPhone keyboard customization */
.iphone-typist-container.figma-export {
    /* Your custom styles */
    transform: scale(0.8);
    border-radius: 20px;
}

/* Basic typist customization */
.typist-effect.figma-export {
    font-size: 24px;
    color: #007aff;
    font-weight: bold;
}

.typist-effect.figma-export .typist-cursor {
    color: #ff6b6b;
}
```

## Use Cases in Figma

1. **Mobile App Mockups**: Use iPhone style for realistic keyboard interactions
2. **Landing Page Prototypes**: Use basic style for hero text animations  
3. **Chat Interface Designs**: Show typing indicators
4. **Presentation Mockups**: Progressive text reveals
5. **Loading States**: Animated status messages

## Performance Tips

1. **Preload Dependencies**: Include React/ReactDOM before your bundle
2. **Optimize Bundle Size**: Only include needed components
3. **CSS Optimization**: Use the `figma-export` class for Figma-specific styling
4. **Memory Management**: Dispose of components when switching frames

## Troubleshooting

### Common Issues

**Components not rendering:**
- Ensure React and ReactDOM are loaded first
- Check that containers exist in DOM
- Verify the bundle path is correct

**Styling issues:**
- Include the CSS file
- Check for CSS conflicts
- Use browser dev tools to debug

**Animation not working:**
- Verify container is visible
- Check console for JavaScript errors
- Ensure proper props are passed

### Debug Mode

Add this to check if components loaded correctly:

```javascript
console.log('TypistEffect available:', typeof window.TypistEffect);
console.log('IPhoneTypistEffect available:', typeof window.IPhoneTypistEffect);
console.log('Render functions available:', 
    typeof window.renderTypistEffect,
    typeof window.renderIPhoneTypistEffect
);
```

## Advanced Configuration

### Custom Animations

You can extend the components with custom CSS animations:

```css
@keyframes customFade {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

.typist-effect.figma-export {
    animation: customFade 0.5s ease-out;
}
```

### Multiple Instances

```javascript
// Create multiple typist effects
const containers = ['container1', 'container2', 'container3'];
const texts = [
    ['Hello', 'World'],
    ['Figma', 'Design'],
    ['React', 'Components']
];

containers.forEach((id, index) => {
    window.renderTypistEffect(
        document.getElementById(id),
        {
            textSequence: texts[index],
            typingSpeed: 80 + (index * 20),
            loop: true
        }
    );
});
```

Now you're ready to create amazing animated prototypes in Figma! 🎨✨