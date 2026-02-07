# ElectroBid AI Landing Page - Deployment Guide

## Status
✅ Landing page built (`index.html`) — single-file, no build step needed
⚠️ NOT YET LIVE — needs hosting + Formspree setup

## Quick Deploy (Pick One)

### Option 1: Netlify Drop (Easiest, 30 seconds)
1. Go to https://app.netlify.com/drop
2. Drag the `projects/electrical-estimator/` folder onto the page
3. Done! You'll get a `.netlify.app` URL instantly
4. Optional: Add a custom domain in Netlify settings

### Option 2: GitHub Pages (Free, permanent)
1. Create a new GitHub repo (e.g., `electrobid-ai`)
2. Push `index.html` to the `main` branch
3. Go to repo Settings → Pages → Source: main branch
4. Site will be live at `https://yourusername.github.io/electrobid-ai/`

### Option 3: Vercel
1. Go to https://vercel.com/new
2. Import from GitHub or upload the folder
3. Auto-deploys on push

## Email Signup Setup (Formspree)
1. Go to https://formspree.io and sign up (free tier = 50 submissions/month)
2. Create a new form
3. Copy your form ID (looks like `mwpkgpvq`)
4. In `index.html`, replace both instances of `YOUR_FORM_ID` with your actual ID
5. Deploy again

## What's Included
- Hero section with animated estimate mockup
- Pain points section
- 6 feature cards
- Stats bar
- Testimonial placeholders (for beta testers)
- Pricing with competitor comparison
- Email waitlist form with pain-point survey
- FAQ section
- Fully responsive (mobile-ready)
- Tailwind CSS via CDN (no build step)
