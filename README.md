# Ilverzon Zarate - Portfolio

Professional portfolio showcasing QA expertise with design thinking approach.

Live Site: https://zarfet.github.io

---

## Features

- 50/50 Editorial Layout - Large hero image with professional presence
- Trilingual - English, Spanish, and Catalan versions with dropdown selector
- Mobile-Responsive - iOS-style drawer menu, adapts to all screen sizes
- Accessibility-Ready - ARIA attributes, keyboard navigation (ESC, Tab, Enter)
- Performance Optimized - Async font loading, optimized rendering
- Strategic Positioning - "QA that thinks like a designer" differentiation
- Social Sharing - Open Graph meta tags for LinkedIn, Twitter, Facebook
- CV Download - Multi-language PDF downloads

---

## Structure

```
├── index.html                    # English version (landing page)
├── minimal-es-optimized.html     # Spanish version
├── minimal-ca-optimized.html     # Catalan version
├── favicon.svg                   # Site icon
├── cv/                           # CV files by language
│   ├── cv-ilverzon-zarate-en.pdf
│   ├── cv-ilverzon-zarate-es.pdf
│   └── cv-ilverzon-zarate-ca.pdf
├── images/
│   └── og-image.png              # Open Graph share image (1200x630)
└── README.md
```

---

## Color Palette

```css
--black: #0a0a0a       /* Primary background */
--white: #ffffff       /* Primary text on dark */
--gray: #252525        /* Body text */
--light-gray: #f5f5f5  /* Section backgrounds */
--accent: #a50e1a      /* CTA buttons, highlights */
```

---

## Language Selector

Professional dropdown menu with automatic language detection:
- Shows current language (EN/ES/CA)
- Active language marked with checkmark
- Closes on click outside or ESC key
- Fully keyboard accessible
- Works on desktop and mobile

---

## Tech Stack

- HTML5 & CSS3 - Semantic structure, custom styling
- Vanilla JavaScript - Scroll animations, mobile menu, language dropdown
- Inter Font - Google Fonts typography, async loaded
- No frameworks - Pure code, no dependencies

---

## Performance Optimizations

- Async font loading (media print hack)
- Minimal render-blocking resources
- iOS Safari button styling fixes (-webkit-appearance)
- Optimized font weights (removed unused 300, 900)
- Lighthouse Performance Score: 95+

---

## Local Development

```bash
# Clone the repository
git clone https://github.com/Zarfet/zarfet.github.io.git

# Open in browser
open index.html
```

No build process needed - pure HTML/CSS/JS.

---

## Deployment

Deployed on GitHub Pages:
- Settings → Pages
- Source: Deploy from branch
- Branch: main, Folder: / (root)

Site available at: https://zarfet.github.io

---

## Testing

### Lighthouse
```bash
# Performance: 95+
# Accessibility: 100
# Best Practices: 100
# SEO: 100
```

### Cross-Browser
- Chrome/Edge (latest)
- Firefox (latest)
- Safari Desktop & iOS
- Mobile Chrome

### Open Graph Validation
- Facebook Debugger: https://developers.facebook.com/tools/debug/
- LinkedIn Inspector: https://www.linkedin.com/post-inspector/
- Twitter Card Validator: https://cards-dev.twitter.com/validator

---

## License

© 2025 Ilverzon Zarate. All rights reserved.

---

## Connect

- LinkedIn: https://www.linkedin.com/in/ilverzon/
- Email: ilverzonzarate@gmail.com
