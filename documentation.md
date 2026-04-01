# Portfolio Technical Documentation

## 1. Project Goal and Design Constraints

This portfolio is built as a premium, high-clarity product-style web experience.

Core non-negotiable rule used during redesign work:
- Content is preserved exactly as authored.
- Design, motion, layout presentation, and interaction quality are improved without changing messaging.

This means all text, project details, labels, links, and informational structure remain intact while visual and behavioral quality is upgraded.

## 2. Complete Tech Stack

### 2.1 Framework and Runtime
- Next.js 14.0.4 (App Router)
- React 18
- TypeScript 5

### 2.2 Styling and UI Infrastructure
- Tailwind CSS 3.3
- PostCSS + Autoprefixer
- Custom global CSS token system in src/app/globals.css
- class-variance-authority for variant-driven UI components
- clsx + tailwind-merge for class composition

### 2.3 Motion and Interaction
- Framer Motion 10.16.16
- Motion patterns used:
  - section reveal animations
  - staggered children transitions
  - spring-based hover/tap interactions
  - background ambient animation loops
  - animated expand/collapse blocks

### 2.4 Icons and Theming
- lucide-react for iconography
- next-themes for light/dark theme management

### 2.5 Feedback and Utility
- react-hot-toast for user feedback toasts

### 2.6 Build and Deployment Model
- Static export via next export
- basePath and assetPrefix configured for GitHub Pages style deployment
- next.config.js includes:
  - output: export
  - trailingSlash: true
  - basePath: /Harish-portfolio
  - assetPrefix: /Harish-portfolio/
  - unoptimized image pipeline + unsplash remote patterns

## 3. Repository Architecture

Top-level system layout:
- src/app
  - layout.tsx: root layout, font wiring, theme provider, toast host
  - page.tsx: single-page composition order
  - globals.css: design tokens, global utilities, baseline effects
- src/components
  - sections: feature sections (Navbar, Hero, About, Skills, Projects, Experience, Contact, Footer)
  - ui: reusable visual primitives (AnimatedBackground, Button, SectionTitle, etc.)
- src/data/portfolio.ts
  - source-of-truth content model for personal info, skills, projects, experience, education, and events
- public/images
  - local static image assets
- next.config.js
  - export and path behavior for deployment

Legacy static assets also exist (index.html, assets folder, send_email.php), but the active product experience is the Next.js app under src.

## 4. End-to-End Rendering Flow

1. layout.tsx initializes:
- typography variables
- theme provider
- toast container
- global stylesheet

2. page.tsx composes the app in this order:
- AnimatedBackground
- Navbar
- Hero
- About
- Skills
- Projects
- Experience
- Contact
- Footer

3. Each section reads immutable content from src/data/portfolio.ts and renders presentation + interactions.

4. Theme switching updates classes via next-themes (class strategy) and CSS tokens react accordingly.

## 5. Content and Data Model

All editable content currently lives primarily in src/data/portfolio.ts.

Main exported structures:
- personalInfo
  - identity, role, subtitle, contact, social links, profile image path
- aboutMe
  - long-form intro text
- skills
  - categorized skill groups with icon keys
- projects
  - category, title, description, impact, stack, links, image
- experience
  - timeline items with bullets
- education
  - degree timeline with GPA and description
- events
  - event cards with LinkedIn references
- navItems
  - section anchor navigation model

Important media dependency:
- profile image path now points to /Harish-portfolio/images/harish1.jpeg
- matching file is present in public/images/harish1.jpeg

## 6. Design System and Visual Language

The redesign uses a token-driven visual system defined in globals.css.

### 6.1 Token Categories
- background tokens: --bg-0, --bg-1, --bg-2
- text tokens: --text-1, --text-2, --muted
- surface tokens: --surface, --surface-elevated
- border and accent tokens: --border, --accent, --accent-soft, --ring

Separate light and dark token sets are defined under :root and .dark.

### 6.2 Core Surface Utilities
- .glass-panel
  - mid-strength translucent panels with blur and soft border
- .glass-panel-strong
  - elevated premium surfaces with stronger depth
- .interactive-lift
  - shared hover elevation behavior using premium cubic-bezier timing

### 6.3 Typography
- Body font: Plus Jakarta Sans
- Heading font: Sora
- Heading hierarchy and tracking tuned for premium readability

### 6.4 Atmospheric Background
- multi-layer radial + linear gradients
- subtle grid texture overlay
- ambient moving blobs in AnimatedBackground

## 7. Motion System (Current Baseline)

Motion tuning is intentionally subtle and premium, with consistency across all sections.

### 7.1 Timing Philosophy
- Reveals: slightly slower than default UI animation for perceived quality
- Hover: spring-based, low-amplitude movement
- Ambient loops: long-duration cycles to avoid visual noise
- Expand/collapse: smooth, readable panel transitions

### 7.2 Easing Language
Common easing curves used:
- reveal style: [0.22, 1, 0.36, 1]
- ambient in/out style: [0.65, 0, 0.35, 1]

### 7.3 Section-Level Motion Behavior
- Navbar
  - softened top-entry timing
  - spring-tuned active pill transitions
  - smoother mobile menu open/close + item stagger
- Hero
  - calibrated stagger and reveal cadence
  - smoother ambient ring/decor loops
  - spring-tuned social and image card interactions
- About
  - synchronized left/right reveals
  - smoother stats card sequence
- Skills
  - reduced stagger gap for cleaner scan flow
  - chip reveal timing tuned for density
- Projects
  - refined category control interaction spring
  - smoother card enter/exit + hover lift timing
- Experience
  - timeline/education/event reveals normalized
  - linked event expansion motion polished
- Contact
  - left/right panel reveal parity
  - contact-row and social hover springs tuned
- Footer
  - soft fade/raise entrance
  - spring-tuned social icon motion

## 8. Responsive and Layout System

Primary strategy:
- Tailwind responsive breakpoints for grid transitions and spacing
- Mobile-first section structure with desktop upgrades at md/lg breakpoints
- Consistent max-width container usage (max-w-7xl)
- Safe section scroll margins for anchored navigation

## 9. Accessibility and UX Quality

Implemented principles:
- semantic structure for sections and headings
- visible focus ring behavior via button/input styling
- readable contrast in both light/dark modes
- reduced-motion compatibility in globals.css
- non-blocking micro-interactions (motion supports clarity, not distraction)

## 10. Performance Considerations

- Framer motion is used with targeted transforms and opacity changes
- background animations are low-frequency and lightweight
- static export enabled for fast hosting
- image handling uses Next Image with export-safe configuration

## 11. Commands and Validation Workflow

Use these commands during changes:
- npm run dev
- npm run lint
- npm run build

Recommended AI modification checklist:
1. Decide whether change is content-level or design-level.
2. If content-level, modify src/data/portfolio.ts only unless structural changes are required.
3. If design-level, prefer ui primitives and globals.css first before section-specific overrides.
4. Keep motion consistency with existing easing/timing language.
5. Validate with npm run lint and visual QA in light/dark and mobile/desktop.

## 12. Safe Extension Playbook for Future AI Models

When modifying this portfolio, follow this order:
1. Inspect data model in src/data/portfolio.ts.
2. Inspect reusable primitives in src/components/ui.
3. Inspect section composition in src/app/page.tsx.
4. Apply minimal, scoped changes.
5. Preserve user-authored content unless explicitly instructed otherwise.

Preferred modification layers:
- Layer 1: globals.css tokens/utilities for cross-site consistency
- Layer 2: ui primitives for reusable interaction and component language
- Layer 3: section-level overrides for local requirements

Avoid:
- duplicating style logic in many sections
- introducing new dependencies without clear benefit
- changing text/content accidentally while adjusting layout

## 13. Known State Summary (As of 2026-04-01)

- Premium redesign completed across all active sections.
- Motion timing pass completed with section-by-section refinements.
- Profile image path uses harish1.jpeg and file exists in public/images.
- Lint status: clean in latest validation run.

## 14. Optional Next Enhancements (Design-Only)

If needed in the future, these can be added without changing content:
- subtle parallax layers tied to scroll velocity
- section-level motion presets extracted to shared motion utility module
- automated visual regression snapshots for light/dark + breakpoints
- component-level Storybook-style style audit setup

This documentation is intentionally detailed so future AI editing agents can reason about structure, constraints, and implementation details before making modifications.