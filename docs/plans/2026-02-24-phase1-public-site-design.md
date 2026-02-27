# Phase 1: Public Club Website — Design Document

## Overview

A modern, responsive, mobile-first public website for Feering Falcons Youth Football Club. Built with Next.js (App Router), TypeScript, and Tailwind CSS. Statically generated — no database or backend needed for Phase 1.

## Club Identity

- **Founded:** 1978
- **Home ground:** Elm Farm, Elm Lane, Marks Tey, CO6 1HU
- **League:** Colchester and District Youth League (C&DYL)
- **Accreditation:** England Football Accredited Club
- **Colours:** Red and white (extracted from club logo)
- **Tagline:** "Join us as we take flight into a new era of youth football, where passion meets precision"
- **Origin line:** "Born in the fields of Feering and Kelvedon"
- **Values:** Positivity First, Built with Care, Pride of North Essex
- **Facebook:** https://www.facebook.com/feeringfalconsfc
- **Instagram:** https://www.instagram.com/feeringfalconsfc/
- **Tournament contact:** Andrew Booth, feeringfalcons5aside@btinternet.com, 07768 005378

## Visual Identity

### Colour Palette
- **Primary:** Feering Falcons red (extracted from logo — approx #C41E3A)
- **Secondary:** White (#FFFFFF)
- **Text:** Dark charcoal (#1A1A1A) — not pure black
- **Subtle backgrounds:** Light grey (#F5F5F5) for section breaks
- **Accent:** Red used sparingly for CTAs, nav highlights, borders

### Design Principles
- **Not a generic template.** Every design choice should feel like Feering Falcons.
- The falcon motif influences subtle design: angular/sharp section dividers, card borders with character rather than uniform rounded corners.
- Typography with weight and character for headings — not default sans-serif.
- No stock photography. Clean sections with the logo and club colours.
- No gradient overlays, no "Welcome to our website", no cookie-cutter layouts.
- Mobile-first: 70%+ of visitors will be on phones at the sideline.

## Site Architecture

### Pages (10 total)

| Page | Route | Purpose |
|------|-------|---------|
| Homepage | `/` | Hero, values, static updates, Facebook embed, quick links |
| About Us | `/about` | Club history, philosophy, league, annual events |
| Teams | `/teams` | Grid of age groups (U7–U16) |
| Join Us | `/join` | How to join, age groups, register interest CTA |
| Where to Find Us | `/find-us` | Address, embedded Google Map |
| Safeguarding | `/safeguarding` | Welfare officer, child protection policy, reporting |
| Policies | `/policies` | Constitution, code of conduct (PDF downloads) |
| Sponsorship | `/sponsorship` | Tiers, benefits, enquiry contact |
| Contact | `/contact` | Contact form (Web3Forms) + club email |
| Tournament | `/tournament` | 5-a-side info, entry form, key details |

### Global Layout
- **Sticky header:** Club logo + nav + "Join Us" button (primary CTA, red)
- **Footer:** Club address, Facebook link, "Born in the fields of Feering and Kelvedon", safeguarding quick link, England Football Accredited badge, est. 1978
- **Mobile:** Hamburger menu, all pages within 2 taps

## Page Designs

### Homepage (`/`)

1. **Hero Section**
   - Club logo (large, centred)
   - Tagline beneath
   - Three values: "Positivity First", "Built with Care", "Pride of North Essex"
   - Two CTA buttons: "Join Us" (primary red) and "Find Us" (secondary/outlined)

2. **Static Update Cards**
   - 2–3 cards in a responsive row (stack on mobile)
   - Each card: title, short description, optional link
   - Hardcoded content, easy to move to CMS later
   - Initial cards: "5-A-Side Tournament — 13th June 2026", "New Players Welcome — All Age Groups"

3. **Facebook Embed**
   - Facebook Page Plugin showing recent posts from https://www.facebook.com/feeringfalconsfc
   - Provides always-fresh content without manual updates

4. **Footer**

### About Us (`/about`)
- Club origin story — founded 1978, born in Feering and Kelvedon
- Philosophy: development over results, positivity, fun
- Plays in the Colchester and District Youth League
- Club in numbers: 15 teams, 200+ players, Elm Farm home ground
- Annual events: Presentation Night (June), 5-A-Side Tournament (June)
- Community touches: Bob's Bistro on match days, DBS-checked coaches, FA-qualified staff
- England Football Accredited Club

### Teams (`/teams`)
- Grid of cards, one per age group (U7 through U16)
- Each card: age group name, clean design
- Designed to grow: manager name, training time, photo can be added per card later

### Join Us (`/join`)
- Short intro: who the club is for, all abilities welcome
- Age groups listed
- What to expect at a first session
- Clear CTA: "Register your interest" → links to contact form or email

### Safeguarding (`/safeguarding`)
- Club Welfare Officer name and contact (placeholder until confirmed)
- Child protection policy summary + link to full PDF
- How to report a concern (internal and external routes)
- Links to FA safeguarding resources
- All coaches DBS-checked and FA-qualified

### Policies (`/policies`)
- Card-based layout linking to 3 PDF downloads:
  - Club Constitution
  - Code of Conduct
  - Child Protection Policy

### Sponsorship (`/sponsorship`)
- Ground Banner Sponsorship: £300/2yr (£150 reduced for kit sponsors)
- Pitch Map Sponsorship: £500/2yr
- Exposure: 30 game weeks, 15 teams, 200+ players, hundreds of families
- Contact: simonpreer@gmail.com or team manager

### Where to Find Us (`/find-us`)
- Address: Elm Farm, Elm Lane, Marks Tey, CO6 1HU
- Embedded Google Map
- Postcode for sat nav

### Contact (`/contact`)
- Simple form: name, email, subject, message
- Submitted via Web3Forms (free tier)
- Club email displayed for direct contact

### Tournament (`/tournament`)
- Hero section styled in the club's red — mirrors the existing flyer's energy
- Key info prominently displayed:
  - **Date:** Saturday 13th June 2026
  - **Age groups:** U7 through U15 (2025/26 season)
  - **Entry fee:** £50 per team
  - **Venue:** Elm Farm, Elm Lane, Nr Feering, Essex
  - **Deadline:** 31st May 2026 (first-come-first-served)
  - **Squad sizes:** Max 8 players (U7–U8), max 7 players (U9+)
  - **Day split:** Morning and afternoon sessions by age group
  - **Prizes:** Medals for players, trophies for teams (winners & runners-up)
  - **Over 100 teams** each year
- Payment info: bank transfer (Sort 30-98-90, Acct 15156868, ref: surname/club/age group) or cheque
- Contact: Andrew Booth, feeringfalcons5aside@btinternet.com, 07768 005378

### Tournament Entry Form (`/tournament/enter`)
- Digital version of the PDF entry form
- Fields:
  - Club name
  - FA affiliated (Yes/No)
  - Contact name
  - Contact mobile number
  - Contact email
  - Age group grid: U7–U15, number of teams per age group
  - Auto-calculated total entry fee (teams x £50)
- Submitted via Web3Forms to feeringfalcons5aside@btinternet.com
- Confirmation message on successful submission

## Technical Approach

### Stack
- **Next.js 15** with App Router
- **TypeScript**
- **Tailwind CSS v4**
- **Static Site Generation (SSG)** — all pages pre-rendered at build time

### Hosting
- **Vercel** free tier — deploys Next.js natively
- Domain: feeringfalcons.com pointed at Vercel

### Forms
- **Web3Forms** free tier for contact form and tournament entry form
- Sends submissions to configured email addresses
- No backend required

### Assets
- Club logo from current site, optimised with Next.js Image component
- Tournament flyer (5aside flyer.png) used on tournament page
- Policy PDFs served from `/public/documents/`
- England Football Accredited badge in footer

### File Structure
```
src/
├── app/
│   ├── layout.tsx              # Root layout (header, footer)
│   ├── page.tsx                # Homepage
│   ├── about/page.tsx
│   ├── teams/page.tsx
│   ├── join/page.tsx
│   ├── find-us/page.tsx
│   ├── safeguarding/page.tsx
│   ├── policies/page.tsx
│   ├── sponsorship/page.tsx
│   ├── contact/page.tsx
│   └── tournament/
│       ├── page.tsx            # Tournament info
│       └── enter/page.tsx      # Entry form
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MobileNav.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Container.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── UpdateCards.tsx
│   │   └── FacebookEmbed.tsx
│   └── tournament/
│       └── EntryForm.tsx
├── lib/
│   └── constants.ts            # Club info, colours, links
└── types/
    └── index.ts
public/
├── logo.png
├── 5aside-flyer.png
├── documents/
│   ├── constitution.pdf
│   ├── code-of-conduct.pdf
│   └── child-protection.pdf
└── images/
    └── england-football-accredited.png
```

## Out of Scope (Phase 1)
- No Supabase / database
- No authentication
- No admin panel
- No dynamic content management
- No payment processing
- No season-long fixtures/results
- No sponsor logo section (deferred)
