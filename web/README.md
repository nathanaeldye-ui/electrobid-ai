# ElectroBid AI - Landing Page

AI-powered electrical estimating software for SMB contractors.

## Files

- `index.html` — Responsive, mobile-first landing page
- `style.css` — Custom CSS (no build step, pure CSS with CSS variables)
- `script.js` — Vanilla JS (nav, form handling, FAQ accordion, scroll animations)

## Features

- ⚡ Hero with animated estimate mockup
- 🎯 Pain points section targeting contractor frustrations
- 📊 Feature comparison table (vs Excel, vs $2-3K enterprise tools)
- 💰 3-tier pricing: Free / Solo $39/mo / Team $99/mo
- 📝 Waitlist signup form with pain-point survey
- ❓ FAQ accordion
- 📱 Fully responsive (mobile-first)
- 🎨 Google Fonts (Inter), custom CSS variables

## Form / Waitlist

The waitlist form logs submissions to `localStorage` as a backup. To receive email notifications:

### Option A: Formspree (Recommended)
1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form → copy the form ID (e.g., `xpzgabcd`)
3. In `index.html`, replace the form action:
   ```html
   <form action="https://formspree.io/f/xpzgabcd" method="POST">
   ```
4. Submissions will be emailed to your Formspree account email

### Option B: Netlify Forms
1. Add `data-netlify="true"` to the `<form>` tag
2. Remove the `action` attribute
3. Netlify auto-detects and captures submissions

### Option C: Export from localStorage
Open browser console on the deployed site:
```js
JSON.parse(localStorage.getItem('electrobid_signups'))
```

## Deploy

### Netlify (Recommended — Free)
```bash
# Drag & drop the web/ folder at https://app.netlify.com/drop
# Or connect a GitHub repo
```

### Vercel (Free)
```bash
cd web/
npx vercel
```

### GitHub Pages (Free)
1. Push to a GitHub repo
2. Settings → Pages → Source: main branch, `/web` folder
3. Site goes live at `https://username.github.io/repo-name/`

### Custom Domain
After deploying, add a custom domain in your hosting provider's dashboard and point DNS accordingly.

## Next Steps

- [ ] Set up Formspree (or Netlify Forms) for email capture
- [ ] Add Google Analytics (GA4)
- [ ] Add Meta Pixel for retargeting
- [ ] Custom domain setup
- [ ] A/B test headlines
