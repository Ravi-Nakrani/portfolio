# Ravi Nakrani — Portfolio

A modern, high-performance personal portfolio and engineering showcase for **Ravi Nakrani**, Full-Stack Software Engineer with 4 years of experience building scalable web applications, real-time distributed systems, and high-concurrency platforms.

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=flat-square&logo=vercel)](https://portfolio-ravi-nakrani.vercel.app/)

[Live Website](https://portfolio-ravi-nakrani.vercel.app/) &nbsp;•&nbsp; [GitHub Repository](https://github.com/Ravi-Nakrani/portfolio)

---

## About the Project

This repository contains the complete source code for Ravi Nakrani's personal portfolio. Designed with an obsidian-and-indigo aesthetic, smooth Motion choreography, and a centralized data architecture, the site showcases Ravi's professional engineering tenure at Tagline Infotech, core architectural contributions, technical competencies across frontend and backend domains, and verified academic history.

The website is built with Next.js App Router (React 19, Server Components) and Tailwind CSS v4, combining fast static rendering with client-side micro-interactions and a functional email contact workflow.

---

## Features

- **Next.js App Router & React 19**: Thin Server Component tree composing modular sections with isolated interactive Client Component boundaries.
- **Motion Orchestration**: Scroll-triggered entrance animations, staggered typography reveals, spring hover interactions, dynamic metric counters, and floating element dynamics powered by Motion (`motion/react`).
- **Theme Support (Dark & Light)**: Default dark obsidian theme with instant toggle to light mode powered by `useSyncExternalStore` and CSS custom property design tokens without hydration mismatch.
- **Responsive Layouts**: Mobile-first design supporting fluid desktop, tablet, and mobile viewports with an animated slide-down navigation drawer.
- **Active Section Spy & Scroll Progress**: Sticky header with an IntersectionObserver-based active section indicator pill and scroll progress bar.
- **Functional Contact Form**: Server-side validated API route (`/api/contact`) sending structured HTML email notifications via the Resend SDK.
- **Accessibility (a11y)**: Semantic HTML, skip-to-content navigation link, visible `:focus-visible` states, explicit ARIA labels, and complete `prefers-reduced-motion` compliance.
- **SEO & Metadata**: Dynamic Open Graph image generation (`@vercel/og`), dynamic XML sitemap (`sitemap.ts`), `robots.txt`, Web App Manifest (`manifest.ts`), and JSON-LD structured data (`Person`, `WebSite`, `ProfilePage`).
- **Centralized Data Model**: All portfolio content (experience, selected works, skills, education, highlights) is strictly typed and decoupled in `src/data/`.

---

## Tech Stack

### Framework & Runtime
- **Next.js 16** (App Router, Server Components, Route Handlers)
- **React 19**
- **Node.js**

### Language & Styling
- **TypeScript 5**
- **Tailwind CSS v4** (`@tailwindcss/postcss`)
- **clsx** & **tailwind-merge**

### Animation & Icons
- **Motion** (v13, formerly Framer Motion)
- **Lucide React**

### Email & Communication
- **Resend SDK**

### Code Quality & Tooling
- **ESLint 9** (`eslint-config-next`)
- **Prettier**

---

## Project Structure

```
portfolio/
├── public/                 # Static assets (favicons, portrait photo)
├── src/
│   ├── app/                # Next.js App Router root
│   │   ├── api/contact/    # Contact form API route (Resend handler)
│   │   ├── globals.css     # Design tokens, Tailwind v4 imports, global styles
│   │   ├── layout.tsx      # Root layout, font setup, JSON-LD Schema
│   │   ├── manifest.ts     # Dynamic web app manifest
│   │   ├── not-found.tsx   # Custom 404 page
│   │   ├── opengraph-image.tsx # Dynamic 1200x630 Open Graph preview image
│   │   ├── page.tsx        # Home page composing all sections
│   │   ├── robots.ts       # Dynamic robots.txt
│   │   └── sitemap.ts      # Dynamic XML sitemap
│   ├── components/
│   │   ├── layout/         # Header, Footer, Container, SectionWrapper
│   │   ├── sections/       # Hero, Highlights, About, Skills, Experience, Education, Strengths, Contact, ContactForm
│   │   └── ui/             # AnimatedSection, BackgroundOrbs, Button, Icons, ThemeToggle
│   ├── data/               # Centralized typed static content
│   │   ├── education.ts    # Academic qualifications
│   │   ├── experience.ts   # Work history, selected works, technical contributions
│   │   ├── highlights.ts   # Key engineering metrics
│   │   ├── navigation.ts   # Navigation items and anchor links
│   │   ├── personal.ts     # Bio, contact information, social profiles
│   │   ├── skills.ts       # Categorized technical competencies
│   │   └── strengths.ts    # Engineering execution principles
│   ├── hooks/              # Custom React hooks (useActiveSection, useScrolled)
│   ├── lib/                # Shared utilities (cn helper) and site configuration
│   └── types/              # TypeScript interface definitions
├── .env.example            # Example environment variables template
├── next.config.ts          # Next.js configuration
├── package.json            # Project dependencies and scripts
└── tsconfig.json           # TypeScript configuration
```

---

## Getting Started

### Prerequisites

- **Node.js**: v18.17+ or v20+ recommended
- **npm**: v9+ (or your preferred package manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Ravi-Nakrani/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. (Optional) Configure environment variables for the contact form:
   ```bash
   cp .env.example .env.local
   ```
   Add your Resend API credentials if you wish to test contact form email delivery locally.

4. Start the local development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## Available Scripts

| Script | Command | Description |
|---|---|---|
| `dev` | `next dev` | Starts the Next.js development server with hot-module reloading |
| `build` | `next build` | Compiles and builds the production-ready application |
| `start` | `next start` | Runs the compiled production build locally |
| `lint` | `eslint` | Runs ESLint to identify code quality and style issues |
| `format` | `prettier --write .` | Formats all source files according to Prettier rules |
| `format:check` | `prettier --check .` | Verifies code formatting across the repository without modifying files |

---

## Environment Variables

The project uses the following environment variables (defined in `.env.example`):

| Variable | Required | Description | Default / Fallback |
|---|---|---|---|
| `RESEND_API_KEY` | Optional locally / Required for emails | API key from [Resend](https://resend.com) used by `/api/contact` | None |
| `CONTACT_EMAIL` | Optional | Destination email address receiving form submissions | `ravinakrani10@gmail.com` |
| `RESEND_FROM_EMAIL` | Optional | Verified sender address configured in Resend | `Portfolio Contact <onboarding@resend.dev>` |
| `NEXT_PUBLIC_SITE_URL` | Optional | Canonical site base URL used for Open Graph, sitemap, and robots | `https://portfolio-ravi-nakrani.vercel.app` |

> **Note**: The portfolio site builds and runs locally without setting environment variables. `RESEND_API_KEY` is only required if you want the contact form to deliver actual emails.

---

## Contact Form Implementation

The contact section includes an interactive form connected to a backend route handler:

1. **Client Form (`src/components/sections/ContactForm.tsx`)**: Validates input fields (name, email, subject, message), handles submission states (`idle`, `submitting`, `success`, `error`), and provides clear feedback.
2. **API Route (`src/app/api/contact/route.ts`)**: Validates payload structure and string limits, sanitizes HTML to prevent injection, formats a responsive HTML email template, and dispatches the message via the Resend SDK.

---

## Motion & Interactions

The portfolio leverages Motion (`motion/react`) for refined, performant animations:

- **Scroll Reveals**: `AnimatedSection` orchestrates viewport-based element entrance transitions (`fade-up`, `fade-scale`, `blur-up`).
- **Dynamic Metric Counters**: The Engineering Highlights section smoothly animates numeric values upon entering the viewport.
- **Layout Transitions**: The desktop header uses `layoutId` spring dynamics to smoothly animate the active navigation pill across menu items.
- **Ambient Lighting & Depth**: `BackgroundOrbs` creates non-intrusive parallax lighting layers and cursor spotlights on pointer-enabled devices.
- **Reduced Motion Support**: All animation hooks and components listen to `useReducedMotion()` and system preferences to instantly disable motion effects when requested.

---

## Responsive Design

The interface is built with responsive utility classes in Tailwind CSS v4, supporting:

- **Mobile Viewports (< 640px)**: Single-column vertical stacks, thumb-friendly tap targets, and an accessible slide-down mobile navigation menu with Escape-key dismiss.
- **Tablet Viewports (640px – 1024px)**: Balanced two-column grid layouts for skills, education, and highlights.
- **Desktop Viewports (> 1024px)**: Multi-column hero composition with portrait framing, sticky glassmorphic navigation bar, and two-column contact layout.

---

## Accessibility

- **Semantic Landmark Elements**: Proper usage of `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>` landmarks.
- **Skip Navigation Link**: Hidden skip-link allowing keyboard users to bypass navigation directly to `#main-content`.
- **Keyboard Usability**: Interactive elements feature clear `:focus-visible` focus rings with high-contrast outlines.
- **ARIA Annotations**: Accessible labels on theme toggles, modal menus, icons, and section headings via `labelledBy`.
- **Reduced Motion**: Graceful degradation to instant visibility for users with vestibular sensitivities or reduced motion preferences.

---

## SEO & Structured Data

- **Metadata API**: Comprehensive Open Graph and Twitter card tags defined in `src/app/layout.tsx`.
- **Dynamic Open Graph Card**: Generated at 1200x630 using Next.js `ImageResponse` (`@vercel/og`) at `/opengraph-image`.
- **Sitemap & Robots**: Automated `sitemap.xml` and `robots.txt` generated via Next.js metadata routes.
- **JSON-LD Schema**: Embedded Schema.org structured data graph defining `Person`, `WebSite`, and `ProfilePage` types.

---

## Deployment

The portfolio is deployed on [Vercel](https://vercel.com) and is accessible at:

**[https://portfolio-ravi-nakrani.vercel.app/](https://portfolio-ravi-nakrani.vercel.app/)**

Deploying updates to Vercel:
1. Push changes to the repository's main branch.
2. Vercel automatically builds and optimizes the Next.js application, provisioning Serverless functions for `/api/contact`.

---

## Customization

All portfolio content is decoupled from layout components and centralized under `src/data/`:

| File | Content |
|---|---|
| `src/data/personal.ts` | Name, title, summary, location, contact details, social URLs |
| `src/data/experience.ts` | Work history at Tagline Infotech, selected projects, key technical contributions |
| `src/data/skills.ts` | Categorized technical competencies (Languages, Frontend, Backend, Databases, Cloud, Tools) |
| `src/data/highlights.ts` | Key engineering metrics and architecture accomplishments |
| `src/data/education.ts` | Degrees and institutions |
| `src/data/strengths.ts` | Professional execution principles and engineering practices |
| `src/data/navigation.ts` | Header navigation labels and section anchor targets |

---

## Connect

- **Website**: [portfolio-ravi-nakrani.vercel.app](https://portfolio-ravi-nakrani.vercel.app/)
- **GitHub**: [github.com/Ravi-Nakrani](https://github.com/Ravi-Nakrani)
- **LinkedIn**: [linkedin.com/in/ravi-nakrani-0830a5250](https://linkedin.com/in/ravi-nakrani-0830a5250)
- **Email**: [ravinakrani10@gmail.com](mailto:ravinakrani10@gmail.com)

---

## License

This project is a personal portfolio repository. All rights reserved.
