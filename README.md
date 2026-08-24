# 🏎️ MÉCANIQUE STORE

> **Engineered for Perfection** - A premium automotive e-commerce platform with an industrial mechanic aesthetic and cutting-edge animations.

## ✨ Features

### Design & Aesthetics
- **Mechanic-Inspired Theme**: Industrial dark background with metallic accents
- **Vibrant Color Palette**: 
  - Primary Orange (`#ff6b35`) - Energy & Power
  - Gold Accents (`#d4af37`) - Luxury & Premium
  - Deep Black (`#1a1a1a`) - Sophistication
  
### Interactive Elements
- ⚙️ **Animated Gears**: Rotating gears in hero section
- 🎬 **Smooth Transitions**: Every element transitions smoothly
- 🎯 **Letter-by-Letter Animation**: Hero title animates letter by letter
- 🔄 **Parallax Effects**: Dynamic background scrolling
- ✨ **Floating Cards**: Car cards with hover transforms
- 🌈 **Gradient Flows**: Dynamic color gradients throughout

### Sections

1. **Navigation Bar**
   - Sticky navigation with glowing accent border
   - Smooth link underlines on hover
   - Spinning gear logo

2. **Hero Section**
   - Large, animated title with staggered letter animations
   - Animated subtitle with fade-in effect
   - Call-to-action button with glass morphism
   - Floating gear animations in background

3. **Featured Car**
   - Spotlight on premium vehicle
   - Detailed specs with hover effects
   - Floating car emoji animation

4. **Collection Showcase**
   - Responsive grid layout (6 cars)
   - Cards with 3D perspective effects
   - Hover animations with glow effects
   - Staggered entrance animations

5. **Statistics Section**
   - 4 key metrics displayed
   - Scale-up animations on scroll

6. **Contact Section**
   - Professional contact form
   - Success message popup with animation
   - Smooth form interactions

7. **Footer**
   - Social media links
   - Copyright information

## 🎨 Animation Highlights

### Key Animations
- `slideDown` - Navigation entrance
- `letterBounce` - Title letters bouncing in
- `float` - Floating car animation
- `pulse` - Background pulse effect
- `cardFadeIn` - Card entrance animation
- `statScale` - Statistics scaling
- `spin` - Gear rotation

### Hover Effects
- **Cards**: Lift up with 3D perspective
- **Links**: Underline slides across
- **Buttons**: Gradient shift + glow
- **Text**: Color transitions

## 🛠️ Technologies Used

- **HTML5**: Semantic structure
- **CSS3**: Modern styling with:
  - CSS Grid & Flexbox
  - Gradients & Transforms
  - Animations & Transitions
  - Backdrop Filters
  - Perspective 3D

- **JavaScript**: Interactivity with:
  - Intersection Observer
  - Event Listeners
  - Dynamic DOM manipulation
  - Scroll Effects

## 📱 Responsive Design

Fully responsive across all devices:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🎯 Color Scheme

| Color | Hex | Usage |
|-------|-----|-------|
| Primary | `#1a1a1a` | Background |
| Secondary | `#2d2d2d` | Cards & Sections |
| Accent | `#ff6b35` | Highlights & Borders |
| Accent Light | `#ff8c5a` | Hover States |
| Accent Dark | `#e64620` | Active States |
| Gold | `#d4af37` | Premium Elements |
| Text Primary | `#f5f5f5` | Main Text |
| Text Secondary | `#b0b0b0` | Secondary Text |

## 🚀 Getting Started

### Live Site
Visit: https://namosforeal.github.io/mecanique-store

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/namosforeal/mecanique-store.git
cd mecanique-store
```

2. Open `index.html` in your browser:
```bash
# Option 1: Direct file open
open index.html

# Option 2: Using Live Server (VS Code)
# Install "Live Server" extension and click "Go Live"

# Option 3: Using Python
python3 -m http.server 8000
# Visit http://localhost:8000
```

## 📁 File Structure

```
mecanique-store/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript interactions
└── README.md          # Documentation
```

## ✅ Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🎮 Interactive Features

### Mouse Effects
- Gear parallax on mouse movement
- Dynamic gradient background on card hover
- Smooth scrolling navigation

### Scroll Effects
- Fade-in animations for cards
- Statistics counter animations
- Parallax hero background

### Form Interactions
- Input focus effects with glow
- Success message popup
- Form validation feedback

## 🔧 Customization

### Change Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --accent: #ff6b35;        /* Main accent color */
    --gold: #d4af37;          /* Premium color */
    --primary: #1a1a1a;       /* Background */
}
```

### Add More Cars
Duplicate a car card in `index.html`:
```html
<div class="car-card">
    <div class="car-image">
        <span class="emoji">🏎️</span>
    </div>
    <div class="card-content">
        <h3>Your Car Name</h3>
        <p>Engine specs</p>
        <span class="price">$XXX,XXX</span>
    </div>
</div>
```

### Adjust Animation Speed
Modify animation durations in `styles.css`:
```css
animation: slideDown 0.6s ease-out;  /* Change 0.6s to desired speed */
```

## 💡 Performance Optimization

- Minimal dependencies (vanilla JS/CSS)
- GPU-accelerated animations (transform, opacity)
- Lazy loading via Intersection Observer
- Optimized for mobile devices

## 📊 Feature Stats

- **6 Car Cards** with unique animations
- **50+ CSS Animations** for smooth transitions
- **10+ Interactive Hover Effects**
- **Fully Responsive** across all device sizes
- **Accessibility Friendly** with semantic HTML

## 🎓 Learning Resources

This project demonstrates:
- Advanced CSS animations & transitions
- CSS Grid & Flexbox layouts
- JavaScript DOM manipulation
- Intersection Observer API
- Responsive Design Patterns
- Modern Web Design Principles

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest improvements
- Submit pull requests
- Share ideas

## 📞 Contact

For inquiries about the MÉCANIQUE STORE:
- Check the contact form on the website
- Follow us on social media
- Visit our GitHub repository

---

**Built with ❤️ for car enthusiasts**

*Engineered for Perfection* ⚙️🏎️
