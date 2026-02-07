# ElectroBid AI - Landing Page MVP

AI Electrical Estimating Software for SMB contractors.

## Quick Start

1. Open `index.html` in a browser
2. Deploy to any static hosting (Netlify, Vercel, GitHub Pages)

## Features

- ✅ Responsive design (mobile-first)
- ✅ Tailwind CSS via CDN (no build step)
- ✅ Waitlist form with email capture + pain point survey
- ✅ Professional conversion-focused layout
- ✅ NEC code compliance messaging
- ✅ Competitor pricing comparison

## Tech Stack

- HTML5
- Tailwind CSS (CDN)
- Vanilla JavaScript
- Google Fonts (Inter)

## Form Integration

The waitlist form currently stores to localStorage for demo purposes. 

**To integrate with a real backend:**

Replace the `setTimeout` block in the form handler with:

```javascript
// Example: Netlify Forms
fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(formData).toString()
})

// Example: Airtable
fetch('https://api.airtable.com/v0/YOUR_BASE/Waitlist', {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ fields: formData })
})

// Example: Formspree
fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: { 'Content-Type': 'application/json' }
})
```

---

## 📊 Google Ads Keywords ($150/month Budget)

### Primary Keywords (High Intent)

| Keyword | Est. CPC | Monthly Searches | Notes |
|---------|----------|------------------|-------|
| electrical estimating software cheap | $3-5 | 200-400 | High intent, low competition |
| AI bid calculator electrical | $2-4 | 100-200 | Novel search, less competition |
| electrical contractor estimating app | $4-7 | 300-500 | Mobile-focused |
| electrical takeoff software free trial | $5-8 | 150-300 | Bottom funnel |
| electrical bid software small contractor | $3-5 | 100-200 | Perfect targeting |

### Long-Tail Keywords (Lower CPC)

| Keyword | Est. CPC | Notes |
|---------|----------|-------|
| how to estimate electrical jobs faster | $1-2 | Content/problem aware |
| best electrical estimating software 2026 | $4-6 | Comparison shoppers |
| electrical material takeoff calculator | $2-4 | Feature-specific |
| NEC code electrical estimating | $2-3 | Differentiator |
| mobile electrical estimating app | $3-5 | Feature-specific |
| affordable electrical bid software | $2-4 | Price-conscious |
| AI electrical contractor software | $3-5 | Early adopters |
| panel upgrade estimate calculator | $1-3 | Specific job type |

### Negative Keywords (Add These!)

- enterprise
- large contractor
- free download
- crack
- pirated
- training
- course
- jobs (as in employment)

### Recommended Campaign Structure

**Campaign 1: High Intent ($80/mo)**
- Keywords: "electrical estimating software cheap", "affordable electrical bid software", "electrical bid software small contractor"
- Ad copy focus: $39/mo price, 60-second bids

**Campaign 2: AI/Innovation ($40/mo)**  
- Keywords: "AI bid calculator electrical", "AI electrical contractor software"
- Ad copy focus: AI-powered, faster than competitors

**Campaign 3: Pain Point ($30/mo)**
- Keywords: "how to estimate electrical jobs faster", "electrical material takeoff calculator"
- Ad copy focus: Problem → solution messaging

### Sample Ad Copy

**Headline 1:** AI Bids in 60 Seconds | $39/mo
**Headline 2:** Stop Losing Jobs to Slow Estimates
**Headline 3:** NEC 2023 Compliant | Mobile Ready

**Description:** ElectroBid AI generates accurate electrical estimates with material takeoffs & labor costs. Built by electricians. Try it free.

### Landing Page A/B Tests to Run

1. Headline: "60 Seconds" vs "Under a Minute" vs "Instant Bids"
2. Price anchor: Show $99 crossed out vs. just show $39
3. CTA: "Join Waitlist" vs "Get Early Access" vs "Start Free Trial"
4. Hero image: Estimate mockup vs phone mockup vs contractor photo

---

## Deployment Options

### Netlify (Recommended - Free)
```bash
# Drag & drop folder to netlify.com/drop
# Or connect GitHub repo
```

### Vercel (Free)
```bash
npx vercel
```

### GitHub Pages (Free)
```bash
# Push to repo, enable Pages in settings
```

### Custom Domain
Point DNS to hosting provider, add custom domain in dashboard.

---

## Next Steps

1. [ ] Connect form to Airtable/Mailchimp/ConvertKit
2. [ ] Add Google Analytics (GA4)
3. [ ] Add Meta Pixel for retargeting
4. [ ] Set up Google Ads campaigns
5. [ ] A/B test headlines
6. [ ] Add live chat (Crisp/Intercom)
7. [ ] Create blog content for SEO
