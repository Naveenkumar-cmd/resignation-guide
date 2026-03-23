# Resignation Guide 🏢➡️🚀

> **Should you resign?** A fully functional, multi-page career guidance platform helping corporate professionals make smarter, data-backed resignation decisions.

![License](https://img.shields.io/badge/license-MIT-green)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## 📌 Overview

**Resignation Guide** is a static, zero-dependency career guidance platform for corporate employees wrestling with the decision to resign. It combines a structured self-assessment engine, AI-style scoring logic, rich career guidance content, a full blog, counselor profiles, legal pages, and a booking form — all in pure HTML, CSS, and vanilla JavaScript. No build step. No framework. No backend.

**Founded and built by Naveen Kumar** — 4 years of experience in Sales and IT Consulting, with a deep passion for AI, SaaS, and emerging technologies, and a mission to help working professionals make better career decisions.

### Live Demo
> Deploy to any static host (GitHub Pages, Netlify, Vercel) — works out of the box.

---

## 🗂️ File Structure

```
resignation-guide/
│
├── index.html                              # Homepage — entry point
│
├── pages/                                  # All inner pages
│   │
│   ├── platform/                           # ── PLATFORM PAGES ─────────────────
│   │   ├── assessment.html                 # 5-step self-assessment + scored results modal
│   │   ├── guidance.html                   # Career guidance — 4-tab interactive content hub
│   │   ├── resources.html                  # Templates, checklists, salary benchmarks, FAQ
│   │   ├── consult.html                    # Session types + appointment booking form
│   │   └── thank-you.html                  # Post-booking confirmation page
│   │
│   ├── company/                            # ── COMPANY PAGES ───────────────────
│   │   ├── about.html                      # About Resignation Guide & founder Naveen Kumar
│   │   ├── counselors.html                 # All 6 counselor profiles
│   │   ├── privacy.html                    # Privacy Policy (with sticky TOC)
│   │   └── terms.html                      # Terms of Service (with sticky TOC)
│   │
│   └── blog/                               # ── BLOG ────────────────────────────
│       ├── blog.html                       # Blog index — all articles + sidebar
│       ├── newsletter-thanks.html          # Post-newsletter-subscription confirmation page
│       ├── blog-financial-checkpoints.html # The 5 Financial Checkpoints Before Resigning
│       ├── blog-counter-offer.html         # How to Negotiate a Counter-Offer
│       ├── blog-switching-industries.html  # Switching Industries at 30+
│       ├── blog-burnout-vs-boredom.html    # Burnout vs. Boredom: How to Tell the Difference
│       ├── blog-salary-benchmark-2026.html # 2026 Salary Benchmark Report
│       └── blog-90-day-bridge.html         # The 90-Day Bridge: Job to Business Safely
│
├── assets/
│   ├── css/
│   │   └── styles.css                      # Master stylesheet — tokens, all components, all pages, responsive
│   │
│   ├── js/
│   │   ├── main.js                         # Shared JS — navbar scroll, hamburger menu, scroll-reveal
│   │   └── assessment.js                   # Assessment logic — multi-step form, scoring engine, results modal
│   │
│   └── images/
│       ├── favicons/                        # Full favicon set (consistent across all pages)
│       │   ├── favicon.ico                 # Legacy ICO (16, 32, 48px)
│       │   ├── favicon.svg                 # Modern SVG favicon
│       │   ├── favicon-16x16.png
│       │   ├── favicon-32x32.png
│       │   ├── favicon-48x48.png
│       │   ├── favicon-96x96.png
│       │   ├── favicon-180x180.png
│       │   ├── favicon-192x192.png
│       │   ├── favicon-512x512.png
│       │   └── apple-touch-icon.png        # iOS home screen icon (180×180)
│       │
│       └── logo/
│           ├── logo.svg                    # Full horizontal wordmark (vector)
│           ├── logo.png                    # Rasterised logo
│           └── og-image.png               # Social share card (1200×630)
│
├── README.md
└── LICENSE
```

---

## ✨ Features

### 🏠 Homepage (`index.html`)
- Animated hero section with floating glows and leaf-pattern background
- Animated "Decision Card" visual showing a sample readiness score
- 4-feature grid explaining the platform
- 4-step "How It Works" process section
- 6 common resignation dilemma cards (burnout, no growth, better offer, etc.)
- Real testimonials from professionals
- Stats bar: 87% better decisions · 3.2× salary growth · 94% satisfaction

### 📋 Self-Assessment (`assessment.html`)
- **5-step multi-page form** with sticky progress bar:
  - Step 1: Personal profile, financial dependents, savings runway
  - Step 2: Company, industry, role, tenure, salary, last promotion
  - Step 3: Resignation reasons, satisfaction ratings (1–5), work-life balance, job offers
  - Step 4: Career goals, skills built, network strength, market demand, timeline
  - Step 5: Review & consent to submit
- **Scoring engine** across 5 dimensions:
  - Financial Safety (0–25 pts)
  - Career Readiness (0–25 pts)
  - Leave Urgency (0–25 pts)
  - Timing (0–15 pts)
  - Goal Clarity (0–10 pts)
- **Results modal** with:
  - Animated SVG score ring (0–100)
  - Verdict: ✅ Go / ⚠️ Caution / 🛑 Wait
  - Dimension breakdown progress bars
  - Personalised next-step recommendations
  - Top 3 career opportunities to explore

### 🗺️ Career Guidance (`guidance.html`)
- **4-tab interactive panel:**
  - *Before You Resign* — 5 must-do steps before handing in notice
  - *Alternatives* — 6 alternatives to quitting (internal transfer, sabbatical, role redesign, etc.)
  - *When to Go* — green flags, red flags, best times of year to resign
  - *After You Leave* — 4-phase 90-day roadmap post-resignation

### 📦 Resources (`resources.html`)
- **3 resignation letter templates** (Standard, Short Notice, Career Change) — one-click copy
- **2 interactive checklists** with live progress bars (Financial Readiness, Job Search Readiness)
- **Salary benchmark table** — 8 roles × 4 experience bands (India, 2026)
- **FAQ accordion** — 5 common questions (counter-offers, PF/gratuity, short tenure, gaps, etc.)

### 👥 Our Counselors (`counselors.html`)
Six certified career counselors — no rates or booking links shown here (those are on the booking page):

| Counselor | Specialisation |
|-----------|---------------|
| **Sunita Rao** | Resignations & Leadership · 14+ yrs |
| **Arjun Verma** | Career Pivots & Entrepreneurship · 9+ yrs |
| **Priya Krishnan** | IT / Tech & Salary Negotiation · 11+ yrs |
| **Vikram Nair** | Burnout & Workplace Wellness · 7+ yrs |
| **Deepika Menon** | Women in Leadership & Return to Work · 9+ yrs |
| **Rajesh Pillai** | Resume, LinkedIn & Interview Prep · 10+ yrs |

### 📅 Book a Counselor (`consult.html`)
- 3 session types with pricing (₹1,499 / ₹2,799 / ₹5,999)
- **FormSubmit-powered appointment form** — zero backend required
- Counselor selection dropdown (all 6 counselors)
- Auto-redirect to `thank-you.html` on successful submission

### 🧑‍💼 About (`about.html`)
- Founder profile: **Naveen Kumar** — Founder & CEO
- Mission, company story, and core values
- Impact stats: 12,000+ professionals guided

### 📝 Blog (`blog.html` + 6 article pages)
All articles are written by counselors on the platform or the founder:

| Article | Author |
|---------|--------|
| The 5 Financial Checkpoints Before Resigning | Naveen Kumar |
| How to Negotiate a Counter-Offer | Priya Krishnan |
| Switching Industries at 30+ | Arjun Verma |
| Burnout vs. Boredom: How to Tell the Difference | Vikram Nair |
| 2026 Salary Benchmark Report | Naveen Kumar |
| The 90-Day Bridge: Job to Business Safely | Rajesh Pillai |

- "Load More" button shows a "You're all caught up" notice when no more articles exist
- Sidebar: newsletter signup, most-read articles, assessment CTA

### ⚖️ Legal Pages (`privacy.html`, `terms.html`)
- Sticky table of contents sidebar (desktop), inline on mobile
- Comprehensive Privacy Policy and Terms of Service
- Fully responsive legal layout

---

## 🚀 Getting Started

### Option 1 — Open Locally
```bash
git clone https://github.com/yourusername/resignation-guide.git
cd resignation-guide
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```
No build step, no server, no dependencies needed.

### Option 2 — Deploy to GitHub Pages
1. Push the repo to GitHub
2. Go to **Settings → Pages**
3. Set source to `main` branch, `/ (root)` folder
4. Live at `https://yourusername.github.io/resignation-guide/`

### Option 3 — Deploy to Netlify (Recommended)
1. Push to GitHub
2. Log in to [netlify.com](https://netlify.com)
3. **Add new site → Import an existing project**
4. Select your repo — no build command, publish directory is `/`
5. Add a custom domain under **Site Settings → Domain Management**

### Option 4 — Deploy to Vercel
```bash
npm i -g vercel
cd resignation-guide
vercel
```

---


---

## 📧 Setting Up the Newsletter Form

The newsletter subscription form in `pages/blog/blog.html` uses **[FormSubmit](https://formsubmit.co/)** — same zero-backend approach as the booking form.

1. Open `pages/blog/blog.html`
2. Find:
   ```html
   <form action="https://formsubmit.co/YOUR_EMAIL" method="POST">
   ```
3. Replace `YOUR_EMAIL` with your actual receiving email address
4. Update the `_next` hidden field to your live domain:
   ```html
   <input type="hidden" name="_next" value="https://YOUR_DOMAIN/pages/blog/newsletter-thanks.html"/>
   ```
5. On first submission, FormSubmit sends a confirmation email — click to activate

## 📧 Setting Up the Booking Form

The appointment form in `consult.html` uses **[FormSubmit](https://formsubmit.co/)** — free, no-backend required.

1. Open `pages/consult.html`
2. Find:
   ```html
   <form action="https://formsubmit.co/YOUR_EMAIL" method="POST">
   ```
3. Replace with your actual receiving email address
4. On first submission, FormSubmit sends a confirmation email — click to activate
5. All booking requests arrive in your inbox, formatted as a table

**Hidden configuration fields already included:**
```html
<input type="hidden" name="_subject" value="New Counseling Session Request — Resignation Guide"/>
<input type="hidden" name="_next" value="https://YOUR_DOMAIN/pages/thank-you.html"/>
<input type="hidden" name="_captcha" value="false"/>
<input type="hidden" name="_template" value="table"/>
```
Update `_next` to your live domain URL before going live.

---

## 🎨 Design System

**Palette — Organic Forest Green on Warm White:**

| CSS Token | Value | Usage |
|-----------|-------|-------|
| `--g900` | `#0c2b18` | Darkest green — hero backgrounds |
| `--g800` | `#134a2a` | Dark green — hero, CTA strip |
| `--g600` | `#228048` | Primary accent — buttons, links |
| `--g400` | `#3db870` | Mid green — fills, indicators |
| `--g300` | `#72d09a` | Light green — hero text, glows |
| `--g100` | `#dff5ea` | Pale green — pill backgrounds |
| `--white` | `#ffffff` | Page background |
| `--n900` | `#0e1912` | Primary text |
| `--n500` | `#5e7d6c` | Muted text |

**Typography:**
- Display / Headings: [Lora](https://fonts.google.com/specimen/Lora) (serif)
- Body / UI: [DM Sans](https://fonts.google.com/specimen/DM+Sans) (sans-serif)

Both loaded via Google Fonts CDN in `styles.css`.

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout Changes |
|------------|---------------|
| `≤ 1024px` | 4-col grids → 2-col; sidebar narrows; featured blog card stays row |
| `≤ 768px` | Hamburger nav activates; all grids → 1-col; blog sidebar stacks below; legal TOC goes inline |
| `≤ 480px` | CTA buttons stack; stat rows collapse; blog sidebar → 1-col |
| `≤ 375px` | Extra small screen pass — nav padding tightens, hero card shrinks, session cards stack, font sizes reduce |

All font sizes use `clamp()` for fluid scaling between breakpoints.

---

## 🧩 Navigation Structure

**Header Navigation** (all pages):
- Home · Assessment · Guidance · Resources · About · Our Counselors · **Book a Counselor** (CTA button)

**Footer — Company Column:**
- About Us · Our Counselors · Blog · Privacy Policy · Terms of Service

**Footer — Platform Column:**
- Self-Assessment · Career Guidance · Resources · Book a Counselor

---

## 🔍 SEO

Each page includes:
- Unique `<title>` and `<meta name="description">`
- Open Graph tags (`og:title`, `og:description`, `og:image`, `og:type`)
- Twitter Card meta (`twitter:card`)
- Full favicon set for all browsers and devices

When deploying, add `<link rel="canonical">` and update `og:url` in each page's `<head>`.

---

## 🛠️ Customisation Guide

**Change brand colours:** Edit the `:root` block at the top of `assets/css/styles.css`.

**Update counselor profiles:** Edit the `.counselor-card` blocks in `pages/counselors.html` and update the `<select>` dropdown options in `pages/consult.html`.

**Add a new blog article:**
1. Create `pages/blog-your-topic.html` using an existing article as a template
2. Add the card to the grid in `pages/blog.html`
3. Link the "Read →" button and article title to the new file

**Adjust scoring weights:** The algorithm lives in `assets/js/assessment.js` inside the `calculateScore()` function.

**Update salary benchmarks:** The table is in `pages/resources.html` inside `.salary-tbl` — update figures annually.

**Add Google Analytics:** Paste your GA4 `<script>` tag just before `</head>` in each HTML file, or add it once to a shared include if using a static site generator.

---

## 📄 License

MIT License — free to use, modify, and deploy commercially. See `LICENSE` for full terms.

---

## 🤝 Contributing

Pull requests are welcome. For major changes, open an issue first to discuss what you'd like to change.

---

## 📬 Contact

**Resignation Guide** — a career guidance platform for corporate professionals.  
Founded by **Naveen Kumar**
