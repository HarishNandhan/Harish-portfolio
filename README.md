# Harish Nandhan - Portfolio

A modern, premium, animation-heavy portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- 🎨 Modern glassmorphism design with animated gradients
- 🌙 Dark mode by default with theme toggle
- 🎬 Smooth Framer Motion animations throughout
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Optimized for performance (Lighthouse-friendly)
- 🚀 GitHub Pages deployment ready

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Theme:** next-themes
- **Notifications:** react-hot-toast

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Main page
│   ├── components/
│   │   ├── sections/        # Page sections
│   │   │   ├── Navbar.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Footer.tsx
│   │   ├── ui/              # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── SectionTitle.tsx
│   │   │   └── AnimatedBackground.tsx
│   │   └── theme-provider.tsx
│   ├── data/
│   │   └── portfolio.ts     # ⭐ EDIT THIS FILE to update content
│   └── lib/
│       └── utils.ts
├── public/
│   └── images/              # Project images
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Pages deployment
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

This creates a static export in the `out/` folder.

## ✏️ Customizing Content

All portfolio content is in **`src/data/portfolio.ts`**. Edit this single file to update:

- Personal info (name, role, tagline, contact)
- About me text (two versions: professional & bold)
- Skills (categorized)
- Projects (with filters)
- Experience & Education
- Events attended

## 🖼️ Adding Images

1. Place your images in `public/images/`
2. Reference them in `portfolio.ts` as `/images/your-image.png`

## 🌐 Deploying to GitHub Pages

### Automatic Deployment (Recommended)

1. Push your code to the `main` branch
2. Go to your repo Settings → Pages
3. Set Source to "GitHub Actions"
4. The workflow will automatically build and deploy

### Manual Deployment

```bash
# Build the project
npm run build

# The static files are in ./out folder
# Push the out folder to gh-pages branch or configure Pages to use it
```

## 📝 Environment Variables (Optional)

Create a `.env.local` file for any API keys:

```env
# EmailJS (if you want to use it for contact form)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🎨 Customizing Theme

Edit `tailwind.config.ts` to customize:
- Colors
- Fonts
- Animations
- Breakpoints

## 📄 License

© Harish Nandhan Shanmugam. All rights reserved.