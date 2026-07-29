# Alisha Batool — Portfolio Website

A premium, animated, glassmorphic portfolio site for a creative digital freelancer.

## Structure
```
alisha-portfolio/
├── index.html        # all page content & sections
├── css/
│   └── style.css     # design tokens, glassmorphism, layout, animations
├── js/
│   └── script.js      # data (services/portfolio/testimonials/FAQ), interactions
└── README.md
```

## Features
- Dark/light mode toggle (session-based; no external storage used)
- Glassmorphism cards, animated aurora hero background
- Scroll-reveal animations, animated stat counters, animated skill bars
- Filterable portfolio grid, accordion FAQ, front-end contact form
- Fully responsive, keyboard-accessible focus states, reduced-motion support

## Customize
- **Colors / fonts:** edit the `:root` and `[data-theme="light"]` variables at the top of `css/style.css`.
- **Copy & content:** edit the arrays in `js/script.js` (`services`, `projects`, `testimonials`, `faqs`, `whyItems`) or the hero/about text directly in `index.html`.
- **Images:** portfolio thumbnails currently use CSS gradient placeholders (`.project-card__media`). Replace with `<img>` tags pointing to real project images when ready.
- **Contact form:** currently front-end only (shows a "Sent" confirmation). Wire it to an email service (Formspree, EmailJS, etc.) or your own backend before going live.

## Deploy
This is a static site — upload the folder as-is to Netlify, Vercel, GitHub Pages, or any static host. No build step required.
