# Theo Dev Portfolio

A modern, interactive portfolio website built with React, TypeScript, and Vite. Features a stunning 3D star field hero section, theme switching (dark/light mode), and smooth animations.

![Portfolio Preview](./screenshots/portfolio-current.png)

## 🚀 Features

- **3D Interactive Star Field** - Hero section with parallax mouse effects and depth perception
- **Theme Switching** - Dark and light mode with seamless transitions
- **Smooth Animations** - Framer Motion powered animations throughout
- **Responsive Design** - Mobile-first design that works on all devices
- **Loading Screen** - Animated loading screen with neon effects
- **Custom Favicon** - TD monogram logo

## 🛠️ Tech Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Framer Motion** - Animations
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## 📋 Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

## 🏃 Getting Started

### Install Dependencies

```bash
pnpm install
# or
npm install
```

### Start Development Server

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the portfolio.

### Build for Production

```bash
pnpm build
# or
npm run build
```

### Preview Production Build

```bash
pnpm preview
# or
npm run preview
```

## 🎨 Customization

### Changing the Name

Edit the hero section in `src/app/components/ModernHero.tsx`:

```tsx
Hi, I'm <span className="neon-text-subtle">Your Name</span> 👋
```

### Theme Colors

Customize colors in `src/styles/theme.css`:

- `.neon-text-subtle` - Name glow effect
- `.neon-mesh-bg` - Background mesh gradient
- `.grid-pattern` - Grid overlay

### Social Links

Update social media links in `src/app/components/ModernHero.tsx`:

```tsx
{ icon: Github, href: 'https://your-github', label: 'GitHub' },
```

## 📁 Project Structure

```
my_portfolio/
├── public/
│   └── favicon.svg          # Website favicon
├── src/
│   ├── app/
│   │   ├── components/     # React components
│   │   │   ├── ModernHero.tsx
│   │   │   ├── LoadingScreen.tsx
│   │   │   └── ...
│   │   └── pages/           # Page components
│   └── styles/
│       └── theme.css        # Custom theme styles
├── index.html
├── package.json
└── vite.config.ts
```

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |
| `pnpm lint` | Run ESLint |

## 📄 License

MIT License - feel free to use this portfolio as a template!

## 👤 Author

**Theo Dev** (Theonest Dushimirimana)
- GitHub: [@theodev](https://github.com)
- LinkedIn: [Theo Dev](https://linkedin.com)
- Instagram: [@theo.dev](https://instagram.com)

---

Built with ❤️ using React + Vite
