# 🍓 poprocks – A Psychedelic Pop Tart Appreciation Site

A playful, grungy, psychedelic static site celebrating the superiority of Pop Tarts over Pop Rocks, built with vanilla HTML, CSS, and JavaScript.

## 🎨 Visual System

### Color Themes
The site features 7 dynamic color themes that randomly cycle on each page load:
- **Warm Psychedelic** (Hot pink, yellow, purple)
- **Cool Neon** (Cyan, hot pink, magenta)
- **Earthy Grungy** (Brown, tan, dark brown)
- **Vibrant Sunset** (Red-orange, yellow, deep red)
- **Retro Digital** (Magenta, cyan, bright yellow)
- **Bubblegum Dream** (Deep pink, hot pink, violet)
- **Forest Mystique** (Deep green, light teal, white)

### Design Elements
- **Grungy Textures**: Grainy overlays and rough borders created with pure CSS
- **Sticker Aesthetic**: Bold borders, offset shadows, tilted containers, and peeling effects
- **Heart Motif**: Floating, pulsing, and glowing heart sticker decorations scattered throughout
- **Hand-Drawn Typography**: Uses `Caveat` and `Fredoka One` for a DIY zine aesthetic
- **Psychedelic Color Shifts**: Smooth transitions between theme colors on each page load

## 📁 Project Structure

```
poprocks/
├── index.html          # Homepage with hero and feature cards
├── random.html         # Random Pop Tart image viewer
├── reviews.html        # Flavor battle reviews & matchups
├── css/
│   ├── base.css        # Core styles, variables, animations, components
│   ├── home.css        # Homepage specific styles
│   ├── random.css      # Random page styles (polaroid effect)
│   └── reviews.css     # Review card component & celebratory animations
├── js/
│   ├── theme.js        # Dynamic color theming system
│   ├── random-image.js # Random Pop Tart selection logic
│   └── utils.js        # Keyboard shortcuts & interactive enhancements
└── images/
    ├── poptarts/       # 12 Pop Tart flavor SVG illustrations
    └── stickers/       # Decorative sticker assets (placeholder)
```

## 🚀 Features

### Homepage (`index.html`)
- Hero section introducing the Pop Tarts vs. Pop Rocks concept
- Dynamic color theme applied on page load
- Feature cards highlighting why Pop Tarts win
- Navigation to Random and Reviews pages
- Scattered heart sticker decorations

### Random Pop Tart Page (`random.html`)
- Displays a random Pop Tart image on load
- Polaroid-style image container with drop shadow and tilt
- "Show Me Another" button to cycle through flavors without page reload
- Smooth fade transitions between images
- **Keyboard shortcut**: Press `Space` to get another Pop Tart

### Reviews Page (`reviews.html`)
- 5 Pop Tarts vs. Pop Rocks flavor matchups
- Review cards with winner/loser styling (winner is larger and glowing)
- Heart-based rating system (1-5 hearts for Pop Tart deliciousness)
- Victory badges and humorous verdicts
- Celebratory animations: glowing halos, floating hearts, sparkle effects
- Final verdict section with grand celebration

## 🎮 Interactive Features

### Keyboard Shortcuts
- **Ctrl + T**: Cycle through color themes
- **Ctrl + R**: Randomize to a different theme
- **Space** (on Random page): Get next Pop Tart
- **↑ ↑ ↓ ↓ ← → ← → B A** (Konami Code): Activate psychedelic mode!

### Animations
- Smooth color transitions when theme changes
- Sticker wobble and hover effects
- Floating heart animations with variable delays
- Entry animations on scroll (stagger effect)
- Winner card glow pulses and celebratory sparkles
- Button press feedback with scale transforms

## 🛠️ Technical Details

### CSS Architecture
- **CSS Custom Properties**: Dynamically updated by `theme.js` for instant theming
- **Grungy Textures**: Pure CSS radial gradients creating grainy overlay effect
- **Responsive Design**: Mobile-first approach with breakpoints at 768px and 480px
- **No Frameworks**: Pure vanilla CSS with strategic use of Grid and Flexbox

### JavaScript
- **theme.js**: 7 color theme objects, localStorage persistence, smooth color transitions
- **random-image.js**: Image array with flavor names, prevents repeat selections
- **utils.js**: Keyboard shortcuts, easter eggs, smooth transitions
- **No Dependencies**: Pure vanilla JavaScript, no jQuery or frameworks needed

### Web Fonts
- **Fredoka One & Righteous**: Bold display typefaces for headings
- **Caveat**: Handwritten-style font for accents and special text
- **Permanent Marker**: Marker-style mono font for authentic DIY feel

## 📱 Responsive Design
- Mobile-optimized layouts
- Touch-friendly button sizes
- Adaptive grid layouts
- Readable typography at all screen sizes
- Optimized heart sticker sizes for mobile

## 🎯 Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox support required
- JavaScript ES6+ features

## ✨ Future Enhancements
- Add more Pop Tart flavor images (replace SVG placeholders with photography)
- Expand review collection with user submissions
- Add a flavor voting system
- Create shareable review cards (canvas-to-image)
- Add animation preferences toggle
- Mobile app version with offline support

## 📝 License
Feel free to customize and remix this site for your own psychedelic snack appreciation!

---

**Remember: Pop Tarts always win. It's not a debate, it's a fact.** 🍓💜

Made with ❤️ and chaos
