# Phase 1: Public Club Website — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build and deploy the Feering Falcons Youth Football Club public website — 10 static pages with mobile-first design, club branding, contact forms, and tournament entry.

**Architecture:** Next.js 15 App Router with static site generation. All pages are server components rendered at build time. Forms use Web3Forms (free, no backend). Facebook Page Plugin for social embed. Tailwind CSS for styling with custom club colour tokens. No database, no auth — pure static site.

**Tech Stack:** Next.js 15, TypeScript, Tailwind CSS v4, Web3Forms, Vercel

---

### Task 1: Project Scaffold & Configuration

**Files:**
- Create: `package.json`, `next.config.ts`, `tsconfig.json`, `tailwind.config.ts`, `src/app/layout.tsx`, `src/app/globals.css`
- Create: `src/lib/constants.ts`
- Create: `.gitignore`

**Step 1: Initialise the Next.js project**

Run:
```bash
cd /c/Users/acutting/Projects/feering-falcons-yfc
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
```

Accept defaults. This creates the full scaffold.

**Step 2: Download the club logo from the current site**

Run:
```bash
curl -o public/logo.png https://feeringfalcons.com/logo.png
```

**Step 3: Copy tournament assets into public/**

Run:
```bash
cp "5aside flyer.png" public/5aside-flyer.png
mkdir -p public/documents
```

Note: Policy PDFs are not yet available — create placeholder structure only.

**Step 4: Create the constants file**

Create `src/lib/constants.ts` with all club information in one place:

```typescript
export const CLUB = {
  name: "Feering Falcons Youth Football Club",
  shortName: "Feering Falcons",
  founded: 1978,
  tagline: "Join us as we take flight into a new era of youth football, where passion meets precision",
  originLine: "Born in the fields of Feering and Kelvedon",
  ground: {
    name: "Elm Farm",
    address: "Elm Farm, Elm Lane, Marks Tey",
    postcode: "CO6 1HU",
    fullAddress: "Elm Farm, Elm Lane, Marks Tey, CO6 1HU",
    mapQuery: "Elm+Farm,+Elm+Lane,+Marks+Tey,+CO6+1HU",
  },
  league: "Colchester and District Youth League",
  accreditation: "England Football Accredited Club",
  values: [
    { title: "Positivity First", description: "Play positive, win positive" },
    { title: "Built with Care", description: "Helping young athletes develop a love for sports" },
    { title: "Pride of North Essex", description: "Representing our community with pride since 1978" },
  ],
  social: {
    facebook: "https://www.facebook.com/feeringfalconsfc",
    instagram: "https://www.instagram.com/feeringfalconsfc/",
  },
  contact: {
    sponsorship: "simonpreer@gmail.com",
  },
  teams: [
    "Under 7", "Under 8", "Under 9", "Under 10", "Under 11",
    "Under 12", "Under 13", "Under 14", "Under 15", "Under 16",
  ],
} as const;

export const TOURNAMENT = {
  name: "Feering Falcons 5-A-Side Tournament",
  date: "Saturday 13th June 2026",
  dateISO: "2026-06-13",
  venue: "Elm Farm Football Ground, Elm Lane, Nr Feering, Essex",
  entryFee: 50,
  deadline: "31st May 2026",
  deadlineISO: "2026-05-31",
  ageGroups: [
    "Under 7", "Under 8", "Under 9", "Under 10", "Under 11",
    "Under 12", "Under 13", "Under 14", "Under 15",
  ],
  squadSizes: {
    small: { groups: ["Under 7", "Under 8"], max: 8 },
    large: { groups: ["Under 9", "Under 10", "Under 11", "Under 12", "Under 13", "Under 14", "Under 15"], max: 7 },
  },
  payment: {
    bankName: "Feering Falcons Youth Football Club",
    sortCode: "30-98-90",
    accountNumber: "15156868",
    chequePayable: "Feering Falcons YFC",
    reference: "surname / club and age group",
  },
  contact: {
    name: "Andrew Booth",
    email: "feeringfalcons5aside@btinternet.com",
    phone: "07768 005378",
    phoneHours: "between 7pm – 8.30pm",
    address: "The Hollies, Orchard Road, Kelvedon, Colchester, Essex, CO5 9NA",
  },
} as const;

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Teams", href: "/teams" },
  { label: "Tournament", href: "/tournament" },
  { label: "Find Us", href: "/find-us" },
  { label: "Safeguarding", href: "/safeguarding" },
  { label: "Policies", href: "/policies" },
  { label: "Sponsorship", href: "/sponsorship" },
  { label: "Contact", href: "/contact" },
] as const;
```

**Step 5: Configure Tailwind with club colours**

Modify `tailwind.config.ts` to add the Feering Falcons colour palette:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        falcon: {
          red: "#C41E3A",
          "red-dark": "#9B1830",
          "red-light": "#E8435A",
          white: "#FFFFFF",
          charcoal: "#1A1A1A",
          grey: "#F5F5F5",
          "grey-mid": "#E0E0E0",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
```

Note: The exact red hex (#C41E3A) should be verified against the downloaded logo. Adjust if needed after visual inspection.

**Step 6: Set up the root layout with fonts**

Replace `src/app/layout.tsx` with the root layout that loads custom fonts (use Google Fonts — e.g., Oswald for headings, Inter for body) and wraps all pages in the global header/footer shell. Import globals.css.

**Step 7: Set up globals.css**

Replace `src/app/globals.css` with Tailwind directives and minimal global styles:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  body {
    @apply font-body text-falcon-charcoal bg-white;
  }
  h1, h2, h3, h4, h5, h6 {
    @apply font-heading;
  }
}
```

**Step 8: Verify the scaffold runs**

Run:
```bash
npm run dev
```

Visit http://localhost:3000 and confirm the default page loads without errors.

**Step 9: Initialise git and commit**

Run:
```bash
git init
git add .
git commit -m "feat: scaffold Next.js project with Tailwind and club config"
```

---

### Task 2: Shared Layout Components (Header + Footer + Mobile Nav)

**Files:**
- Create: `src/components/layout/Header.tsx`
- Create: `src/components/layout/Footer.tsx`
- Create: `src/components/layout/MobileNav.tsx`
- Create: `src/components/ui/Container.tsx`
- Modify: `src/app/layout.tsx`

**Step 1: Create the Container component**

Create `src/components/ui/Container.tsx` — a max-width wrapper used on every page:

```typescript
export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
```

**Step 2: Create the Header component**

Create `src/components/layout/Header.tsx`:
- Sticky, white background with subtle bottom border
- Left: club logo (small, links to /)
- Centre/right: nav links from NAV_LINKS constant
- Far right: "Join Us" button in falcon-red
- Mobile: logo left, hamburger icon right (triggers MobileNav)
- Use Next.js `Link` and `Image` components

**Step 3: Create the MobileNav component**

Create `src/components/layout/MobileNav.tsx`:
- Full-screen overlay triggered by hamburger
- Club logo at top
- All nav links stacked vertically, large tap targets
- "Join Us" button prominent
- Close button (X) top right
- Uses React `useState` for open/close — needs `"use client"` directive

**Step 4: Create the Footer component**

Create `src/components/layout/Footer.tsx`:
- Dark background (falcon-charcoal)
- Left column: club name, est. 1978, address
- Centre column: quick links (Safeguarding, Policies, Contact)
- Right column: social media icons (Facebook, Instagram) — use simple SVG icons
- Bottom bar: "Born in the fields of Feering and Kelvedon" + "England Football Accredited Club"

**Step 5: Wire layout components into root layout**

Modify `src/app/layout.tsx` to render Header, main content area (children), and Footer.

**Step 6: Verify layout renders**

Run `npm run dev`, check header and footer appear, nav links work (will show 404 — that's fine), mobile nav opens/closes.

**Step 7: Commit**

```bash
git add .
git commit -m "feat: add header, footer, and mobile navigation"
```

---

### Task 3: Homepage

**Files:**
- Create: `src/components/home/Hero.tsx`
- Create: `src/components/home/ValueCards.tsx`
- Create: `src/components/home/UpdateCards.tsx`
- Create: `src/components/home/FacebookEmbed.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Create the Hero component**

Create `src/components/home/Hero.tsx`:
- Full-width section with subtle falcon-grey background
- Club logo centred, large (200–250px on desktop, 150px mobile)
- Tagline beneath in heading font
- Three values in a row below (stack on mobile) — use the CLUB.values constant
- Two CTA buttons: "Join Us" (solid red) and "Find Us" (outlined red)
- This is the first thing anyone sees — it must feel like Feering Falcons, not a template

**Step 2: Create the UpdateCards component**

Create `src/components/home/UpdateCards.tsx`:
- Section heading: "Latest News"
- 2–3 cards in a responsive grid (1 col mobile, 3 col desktop)
- Each card: red left border accent, title, description, optional link
- Hardcoded data array for now:
  - "5-A-Side Tournament — 13th June 2026" → links to /tournament
  - "New Players Welcome" → links to /join
  - "Find Us at Elm Farm" → links to /find-us

**Step 3: Create the FacebookEmbed component**

Create `src/components/home/FacebookEmbed.tsx`:
- Client component (`"use client"`)
- Uses Facebook Page Plugin iframe: `https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/feeringfalconsfc&tabs=timeline&width=500&height=600`
- Responsive container that scales with viewport
- Section heading: "Follow Us"
- Fallback link to Facebook page if embed fails to load

**Step 4: Assemble the homepage**

Modify `src/app/page.tsx` to compose: Hero → UpdateCards → FacebookEmbed

**Step 5: Verify homepage**

Run `npm run dev`, check all sections render, responsive on mobile (use browser dev tools), CTAs link correctly.

**Step 6: Commit**

```bash
git add .
git commit -m "feat: build homepage with hero, updates, and social embed"
```

---

### Task 4: About Us Page

**Files:**
- Create: `src/app/about/page.tsx`

**Step 1: Build the About page**

Create `src/app/about/page.tsx`:

Sections (top to bottom):
1. **Page header:** "About Us" heading
2. **Origin story:** "Born in the fields of Feering and Kelvedon, Feering Falcons Youth Football Club has been developing young footballers since 1978." Expand with club philosophy — development over results, building confidence, love of the game.
3. **Club values:** The three values with slightly more detail than the homepage
4. **The club today:** Plays in the Colchester and District Youth League. 15 teams across age groups from Under 7 to Under 16. Over 200 young players. Home ground at Elm Farm, Marks Tey.
5. **Match days at Elm Farm:** Paint a picture — Bob's Bistro serving teas and bacon rolls, families on the sideline, community atmosphere. All coaches DBS-checked and FA-qualified.
6. **Annual events:** Presentation Night (June), 5-A-Side Tournament (June — link to /tournament)
7. **Accreditation:** England Football Accredited Club badge/note

Use `Container` wrapper, semantic HTML (`<article>`, `<section>`), heading hierarchy.

**Step 2: Verify and commit**

```bash
npm run dev  # check /about renders correctly
git add .
git commit -m "feat: add About Us page"
```

---

### Task 5: Teams Page

**Files:**
- Create: `src/app/teams/page.tsx`

**Step 1: Build the Teams page**

Create `src/app/teams/page.tsx`:

- Page heading: "Our Teams"
- Intro text: brief line about the club running teams from U7 through U16
- Responsive grid of cards (2 col mobile, 3 col tablet, 4 col desktop)
- Each card: age group name (e.g., "Under 7s"), styled with the falcon red accent
- Cards should be designed so that a manager name, training day, or photo can be added later without reworking the layout
- Use CLUB.teams constant for the data
- Bottom CTA: "Interested in joining a team?" → link to /join

**Step 2: Verify and commit**

```bash
npm run dev  # check /teams renders
git add .
git commit -m "feat: add Teams page with age group grid"
```

---

### Task 6: Join Us Page

**Files:**
- Create: `src/app/join/page.tsx`

**Step 1: Build the Join Us page**

Create `src/app/join/page.tsx`:

Sections:
1. **Page header:** "Join Us"
2. **Welcome message:** "Whether your child is picking up a football for the first time or looking for a new club, we'd love to hear from you. All abilities are welcome at Feering Falcons."
3. **Age groups:** List of current teams (U7–U16) — mention that availability varies
4. **What to expect:** What happens when you come along — friendly environment, trained coaches, trial sessions available
5. **How to register interest:** Clear CTA — "Get in touch" button linking to /contact, plus display the club email

**Step 2: Verify and commit**

```bash
npm run dev  # check /join
git add .
git commit -m "feat: add Join Us page"
```

---

### Task 7: Find Us Page

**Files:**
- Create: `src/app/find-us/page.tsx`

**Step 1: Build the Find Us page**

Create `src/app/find-us/page.tsx`:

- Page heading: "Where to Find Us"
- Address prominently displayed: Elm Farm, Elm Lane, Marks Tey, CO6 1HU
- "Use CO6 1HU for sat nav"
- Embedded Google Map iframe using the address
  - `https://www.google.com/maps/embed/v1/place?key=...&q=Elm+Farm,+Elm+Lane,+Marks+Tey,+CO6+1HU`
  - Note: Google Maps embed requires an API key. Alternative: use an OpenStreetMap embed or a Google Maps link with a static iframe (no key needed for basic embed via `maps.google.com/maps?q=...&output=embed`)
- Map should be responsive (full width, ~400px height)

**Step 2: Verify and commit**

```bash
npm run dev  # check /find-us, verify map loads
git add .
git commit -m "feat: add Find Us page with map"
```

---

### Task 8: Safeguarding Page

**Files:**
- Create: `src/app/safeguarding/page.tsx`

**Step 1: Build the Safeguarding page**

Create `src/app/safeguarding/page.tsx`:

Sections:
1. **Page header:** "Safeguarding"
2. **Commitment statement:** "The safety and wellbeing of every young player is our highest priority. Feering Falcons is committed to providing a safe environment for children to enjoy football."
3. **Club Welfare Officer:** Name and contact details (use placeholder: "[Name] — Club Welfare Officer" with a note to the club to fill in). Email and phone.
4. **Our safeguarding practices:**
   - All coaches and volunteers are DBS-checked
   - Coaches hold FA qualifications and first aid training
   - We follow the FA's Safeguarding Children Policy
   - Clear reporting procedures for any concerns
5. **How to report a concern:**
   - Internal: Contact the Club Welfare Officer (details above)
   - External: The FA Safeguarding Team — 0800 169 1863
   - External: NSPCC Helpline — 0808 800 5000
   - Link to FA safeguarding page: https://www.thefa.com/football-rules-governance/safeguarding
6. **Child Protection Policy:** Link to download the PDF from /documents/child-protection.pdf (placeholder until PDF is provided)

**Step 2: Verify and commit**

```bash
npm run dev  # check /safeguarding
git add .
git commit -m "feat: add Safeguarding page"
```

---

### Task 9: Policies Page

**Files:**
- Create: `src/app/policies/page.tsx`

**Step 1: Build the Policies page**

Create `src/app/policies/page.tsx`:

- Page heading: "Policies & Procedures" with season note "2025/26 Season"
- Three cards in a responsive grid:
  1. **Club Constitution** — "Sets out the rules and procedures that guide how we operate as a youth football club" → download link
  2. **Code of Conduct** — "Outlines the behaviour and standards we expect from all players, parents, coaches, and officials" → download link
  3. **Child Protection Policy** — "Ensures the safety and wellbeing of all young players in our care" → link to /safeguarding page + download link
- Each card: title, description, download icon/button
- Note: PDFs will be placed in `public/documents/` — use placeholder hrefs for now (`/documents/constitution.pdf`, etc.)

**Step 2: Verify and commit**

```bash
npm run dev  # check /policies
git add .
git commit -m "feat: add Policies page"
```

---

### Task 10: Sponsorship Page

**Files:**
- Create: `src/app/sponsorship/page.tsx`

**Step 1: Build the Sponsorship page**

Create `src/app/sponsorship/page.tsx`:

Sections:
1. **Page header:** "Sponsorship Opportunities"
2. **Intro:** "Support grassroots youth football in North Essex and get your business fantastic exposure throughout the year."
3. **Why sponsor us:** 30 game weeks per season, 15 teams, 200+ players, hundreds of local families, regional visitors at tournaments
4. **Sponsorship tiers** (two cards):
   - **Ground Banner Sponsorship — £300 for 2 years** (£150 reduced rate for existing kit sponsors). Sponsor supplies banner up to 2.5m x 1m; club creates 2–3 additional branded banners. Placement near main entrance and Nest area.
   - **Pitch Map Sponsorship — £500 for 2 years.** Sponsorship of pitch map displayed at entrance and sent to visiting teams weekly.
5. **Get in touch:** Contact simonpreer@gmail.com or speak to your team manager

**Step 2: Verify and commit**

```bash
npm run dev  # check /sponsorship
git add .
git commit -m "feat: add Sponsorship page"
```

---

### Task 11: Contact Page with Web3Forms

**Files:**
- Create: `src/app/contact/page.tsx`
- Create: `src/components/ui/ContactForm.tsx`

**Step 1: Create the ContactForm component**

Create `src/components/ui/ContactForm.tsx`:
- Client component (`"use client"`)
- Form fields: name (required), email (required), subject, message (required)
- Submit handler sends POST to `https://api.web3forms.com/submit` with access key
- States: idle, submitting (disabled button + spinner), success (green confirmation), error (red message with retry)
- Web3Forms access key stored in `NEXT_PUBLIC_WEB3FORMS_KEY` env var (or hardcoded for now — it's a public key)
- Honeypot field for spam prevention (Web3Forms supports this)
- Large, mobile-friendly input fields and submit button

Note: The user will need to create a free Web3Forms account at https://web3forms.com and get an access key. Use a placeholder value for now.

**Step 2: Build the Contact page**

Create `src/app/contact/page.tsx`:
- Page heading: "Contact Us"
- Brief intro text
- ContactForm component
- Below the form: "Or email us directly at [club email]"

**Step 3: Verify and commit**

```bash
npm run dev  # check /contact, verify form renders (won't actually submit without real API key)
git add .
git commit -m "feat: add Contact page with Web3Forms integration"
```

---

### Task 12: Tournament Page

**Files:**
- Create: `src/app/tournament/page.tsx`

**Step 1: Build the Tournament page**

Create `src/app/tournament/page.tsx`:

This page should capture the energy of the flyer — bold, red, confident.

Sections:
1. **Hero section:** Bold red background, white text. "5-A-Side Tournament" heading. "Saturday 13th June 2026" prominent. "£50 per team" callout. CTA button: "Enter Now" → /tournament/enter
2. **Key details grid:** Responsive cards/grid showing:
   - Age groups: U7 through U15 (2025/26 season)
   - Squad sizes: Max 8 (U7–U8), Max 7 (U9+)
   - Day format: Morning and afternoon sessions
   - Prizes: Medals for players, trophies for teams
   - Venue: Elm Farm Football Ground
   - "Over 100 teams each year"
3. **Important information:**
   - Registration deadline: 31st May 2026
   - First-come-first-served — submit early to avoid disappointment
   - No entries accepted after deadline
4. **Payment information:**
   - Bank transfer: Feering Falcons Youth Football Club, Sort 30-98-90, Acct 15156868, ref: surname/club/age group
   - Cheque: payable to "Feering Falcons YFC"
5. **Contact:** Andrew Booth, feeringfalcons5aside@btinternet.com, 07768 005378 (7pm–8.30pm)
6. **CTA:** "Enter Now" button → /tournament/enter

Use TOURNAMENT constant for all data.

**Step 2: Verify and commit**

```bash
npm run dev  # check /tournament
git add .
git commit -m "feat: add Tournament information page"
```

---

### Task 13: Tournament Entry Form

**Files:**
- Create: `src/app/tournament/enter/page.tsx`
- Create: `src/components/tournament/EntryForm.tsx`

**Step 1: Create the EntryForm component**

Create `src/components/tournament/EntryForm.tsx`:
- Client component (`"use client"`)
- Fields (matching the PDF entry form exactly):
  - Club name (text, required)
  - FA affiliated (Yes/No radio buttons, required)
  - Your name (text, required)
  - Contact mobile number (tel, required)
  - Contact email (email, required)
  - Age group grid: a table/grid showing U7–U15, each with a number input (0–10) for "No. of Teams Entered"
  - Total entry fee: auto-calculated (sum of all teams × £50), displayed prominently
- Submit via Web3Forms to feeringfalcons5aside@btinternet.com (separate access key or same key with different subject line)
- States: idle, submitting, success ("Entry submitted! You'll receive a confirmation email."), error
- Mobile-friendly: large inputs, big tap targets for the age group grid
- Display payment info after successful submission as a reminder

**Step 2: Build the entry form page**

Create `src/app/tournament/enter/page.tsx`:
- Page heading: "Tournament Entry Form" with "Saturday 13th June 2026" subtitle
- Deadline reminder: "Entries close 31st May 2026"
- The EntryForm component
- Payment info section below (bank transfer + cheque details)

**Step 3: Verify and commit**

```bash
npm run dev  # check /tournament/enter, fill in the form, verify calculations work
git add .
git commit -m "feat: add Tournament entry form"
```

---

### Task 14: SEO, Metadata & Final Polish

**Files:**
- Modify: `src/app/layout.tsx` (global metadata)
- Modify: all page files (page-specific metadata)
- Create: `src/app/not-found.tsx`
- Modify: `next.config.ts`

**Step 1: Add metadata to all pages**

Add Next.js `metadata` exports to each page:

Root layout metadata:
```typescript
export const metadata: Metadata = {
  title: {
    default: "Feering Falcons Youth Football Club",
    template: "%s | Feering Falcons YFC",
  },
  description: "Youth football club based in Feering and Kelvedon, Essex. Teams from Under 7 to Under 16 playing in the Colchester and District Youth League.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Feering Falcons Youth Football Club",
  },
};
```

Each page gets its own title and description, e.g.:
- About: "About Us | Feering Falcons YFC"
- Tournament: "5-A-Side Tournament 2026 | Feering Falcons YFC"
- Safeguarding: "Safeguarding | Feering Falcons YFC"

**Step 2: Create a custom 404 page**

Create `src/app/not-found.tsx`:
- Club logo
- "Page not found" message
- Link back to homepage
- Styled consistently with the site

**Step 3: Verify build succeeds**

Run:
```bash
npm run build
```

Fix any build errors. All pages should statically generate successfully.

**Step 4: Commit**

```bash
git add .
git commit -m "feat: add metadata, SEO, and 404 page"
```

---

### Task 15: Final Review & Deploy Preparation

**Step 1: Full visual review**

Run `npm run dev` and manually check every page:
- [ ] Homepage: hero, values, update cards, Facebook embed, CTAs
- [ ] About: all sections render, content reads well
- [ ] Teams: grid displays all age groups
- [ ] Join Us: CTAs link correctly
- [ ] Find Us: map loads, address correct
- [ ] Safeguarding: all contact info, external links work
- [ ] Policies: download links present (placeholder PDFs)
- [ ] Sponsorship: tiers display correctly, contact info
- [ ] Contact: form renders, validation works
- [ ] Tournament: all details, CTA to entry form
- [ ] Tournament entry: form works, fee calculates, submission works
- [ ] 404: shows on invalid routes
- [ ] Mobile: check all pages at 375px width
- [ ] Header: nav works, "Join Us" button prominent
- [ ] Footer: all links, social icons, accreditation

**Step 2: Run production build**

```bash
npm run build && npm run start
```

Check the production build works locally.

**Step 3: Final commit**

```bash
git add .
git commit -m "feat: Phase 1 public site complete — ready for deployment"
```

**Step 4: Deploy to Vercel (when ready)**

The user can connect the GitHub repo to Vercel for automatic deployments. Provide instructions:
1. Push repo to GitHub
2. Connect to Vercel at vercel.com
3. Import the repo — Vercel auto-detects Next.js
4. Set environment variable: `NEXT_PUBLIC_WEB3FORMS_KEY`
5. Deploy

---

## Notes for Implementation

- **Don't invent content.** Use text from the existing site, the managers guide, and the tournament documents. Where content is genuinely needed (About page narrative), write it in the voice of the club — warm, community-focused, proud but not boastful.
- **Design must feel like Feering Falcons.** Red and white. The falcon badge. Angular touches. Not a generic Next.js template.
- **Mobile-first always.** Design for 375px first, then scale up.
- **Policy PDFs are placeholders.** The user will supply the actual PDFs later.
- **Web3Forms needs an API key.** Leave a clear placeholder and instructions for the user to set up.
- **The Welfare Officer name is TBC.** Use a clear placeholder the user can fill in.
