# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static GitHub Pages website for Feering Falcons Youth Football Club. The site serves as the club's main web presence, featuring:

- Main landing page (`index.html`) with club information and branding
- Policies page (`policies.html`) linking to club documentation
- Static assets including logo, favicon, and policy PDF documents
- Custom domain configuration via CNAME file

## Architecture

The site is built as a simple static website using:

- **HTML5** - Standard semantic markup
- **Tailwind CSS** - Via CDN for styling and responsive design
- **Vanilla JavaScript** - No custom JS currently, relies on Tailwind's built-in interactions
- **GitHub Pages** - Hosted directly from the repository with custom domain `feeringfalcons.com`

## File Structure

- `index.html` - Main landing page with club branding and feature cards
- `policies.html` - Secondary page showcasing club policies and procedures
- `CNAME` - Custom domain configuration for GitHub Pages
- `favicon.ico` - Site favicon
- `logo.png` - Club logo image
- `*.pdf` - Club policy documents (Constitution, Code of Conduct, Child Protection Policy, etc.)

## Development Commands

This is a static site with no build process. Changes are deployed automatically via GitHub Pages when pushed to the main branch.

To develop locally:
- Open HTML files directly in a browser, or
- Use a simple HTTP server like `python -m http.server 8000`

## Design System

The site uses a consistent dark theme with:
- **Colors**: Black/gray gradient background with red accents (`red-500`, `red-400`, `red-600`)
- **Typography**: Large gradient text headers, clean sans-serif body text
- **Components**: Glassmorphism cards with backdrop blur effects
- **Animations**: Subtle hover effects, pulse animations, and transform transitions
- **Layout**: Responsive grid system using Tailwind's responsive utilities

## Content Structure

Both pages follow a similar pattern:
1. Header with club logo and main title
2. Subtitle section with descriptive text
3. Feature cards in a responsive grid
4. Decorative animated elements for visual interest

All styling is handled through Tailwind CSS classes loaded from CDN.