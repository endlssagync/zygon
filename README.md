# Zygon Talent Agency - Landing Page

A modern, responsive landing page for Zygon Talent Agency built with React, TypeScript, Vite, and Tailwind CSS. This project follows atomic design principles and implements a comprehensive design system.

## 🎯 Project Overview

**Zygon Talent Agency** empowers creators, elevates brands, and builds lasting partnerships through clarity, structure, and high-value strategy that drives growth, maximizes opportunity, and delivers world-class results.

**Tagline:** Where talent meets opportunity

## 🏗️ Project Structure

```
Zygon Talent Agency/
├── src/
│   ├── components/
│   │   ├── atoms/          # Basic building blocks
│   │   │   ├── Button.tsx
│   │   │   └── Avatar.tsx
│   │   ├── molecules/      # Simple component groups
│   │   │   ├── ButtonGroup.tsx
│   │   │   ├── AvatarGroup.tsx
│   │   │   └── SocialProof.tsx
│   │   ├── ui/             # shadcn/ui style components
│   │   │   ├── animated-group.tsx
│   │   │   └── customers-section.tsx
│   │   └── organisms/      # Complex UI sections
│   │       ├── Header.tsx
│   │       └── Hero.tsx
│   ├── lib/
│   │   └── utils.ts        # Utility functions (cn helper)
│   ├── config/
│   │   └── designSystem.ts # Design system tokens
│   ├── styles/
│   │   └── (future styles)
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎨 Design System

The project uses a comprehensive design system defined in `src/config/designSystem.ts` and configured in `tailwind.config.js`. Key features:

### Colors
- **Primary Colors:** Blue, Red, Yellow, Green (with shades 50-900)
- **Neutral Colors:** White, Black, Gray scale (50-900)
- **Gradients:** Primary, Warm, Cool, Rainbow

### Typography
- **Font Family:** Inter (with system fallbacks)
- **Font Sizes:** xs (0.75rem) to 6xl (3.75rem)
- **Font Weights:** 300 (light) to 800 (extrabold)
- **Line Heights:** tight (1.2) to loose (2)

### Spacing
- Consistent spacing scale from 0 to 32 (0.25rem increments)

### Components
- **Buttons:** Primary, Secondary, Accent, Outline variants
- **Cards:** Default, Elevated, Bordered variants
- **Badges:** Color-coded variants (blue, red, yellow, green)

### Animations
- **Duration:** Fast (150ms), Base (300ms), Slow (500ms)
- **Easing:** Default, In, Out, Bounce
- **Utilities:** Fade-in, Fade-in-up, Stagger animations

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

### Project Structure Notes

The project uses a hybrid approach:
- **Atomic Design** for main components (atoms, molecules, organisms)
- **shadcn/ui style** components in `/components/ui` folder for reusable UI primitives
- Path aliases configured (`@/` maps to `src/`)
- Utility functions in `/lib/utils.ts` (includes `cn` helper for className merging)

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📦 Component Architecture

### Atomic Design Principles

The project follows atomic design methodology:

#### Atoms
Basic building blocks that cannot be broken down further:
- `Button` - Reusable button with multiple variants
- `Avatar` - Circular profile image component

#### Molecules
Simple combinations of atoms:
- `ButtonGroup` - Container for multiple CTA buttons
- `AvatarGroup` - Stacked avatars with overlap effect
- `SocialProof` - Combines avatar group with user count text

#### Organisms
Complex UI sections composed of molecules and atoms:
- `Header` - Navigation with logo, menu, and Sign In button
- `Hero` - Main hero section with content and image grid

## 🎭 Component Usage

### Button Component

```tsx
import { Button } from './components/atoms/Button';

// Primary button
<Button variant="primary">Start Your Journey</Button>

// Outline button
<Button variant="outline">Explore Our Talent</Button>

// Secondary button
<Button variant="secondary">Get Started</Button>

// Accent button
<Button variant="accent">Contact Us</Button>
```

### ButtonGroup Component

```tsx
import { ButtonGroup } from './components/molecules/ButtonGroup';

<ButtonGroup
  buttons={[
    { label: 'Start Your Journey', variant: 'primary' },
    { label: 'Explore Our Talent', variant: 'outline' },
  ]}
/>
```

### SocialProof Component

```tsx
import { SocialProof } from './components/molecules/SocialProof';

<SocialProof
  userCount={500}
  avatars={[
    { src: '/avatar1.jpg', alt: 'Creator 1' },
    { src: '/avatar2.jpg', alt: 'Creator 2' },
  ]}
/>
```

### Hero Component

```tsx
import { Hero } from './components/organisms/Hero';

<Hero />
```

### CustomersSection Component

```tsx
import { CustomersSection } from './components/ui/customers-section';

const customers = [
  {
    src: "https://example.com/logo1.svg",
    alt: "Company Logo",
    height: 20,
  },
  // ... more customers
];

<CustomersSection customers={customers} />
```

## 🎨 Styling Guidelines

### Using Design System Colors

```tsx
// Tailwind classes
<div className="bg-primary-blue-main text-neutral-white">
<div className="bg-primary-green-500 text-primary-green-900">
<div className="gradient-primary">
```

### Using Design System Spacing

```tsx
<div className="p-4 m-6 gap-8">  // Uses design system spacing
```

### Custom Animations

```tsx
// Fade in up animation
<div className="animate-fade-in-up">

// Staggered animations
<div className="animate-stagger-1">  // 0.1s delay
<div className="animate-stagger-2">  // 0.2s delay
```

## 🎬 Animations

The project includes smooth micro-animations:

- **Fade-in animations** for content reveal
- **Stagger animations** for sequential element appearance
- **Hover transitions** on interactive elements
- **Smooth color transitions** using design system easing functions

All animations use the design system's timing functions:
- `cubic-bezier(0.4, 0, 0.2, 1)` - Default easing
- `cubic-bezier(0.68, -0.55, 0.265, 1.55)` - Bounce easing

## 📱 Responsive Design

The project is fully responsive with breakpoints:
- **Mobile:** 640px
- **Tablet:** 768px
- **Desktop:** 1024px
- **Wide:** 1280px

## 🔧 Development

### Code Style
- TypeScript for type safety
- ESLint for code quality
- Consistent naming conventions (PascalCase for components)
- Atomic design folder structure

### Adding New Components

1. **Atom:** Add to `src/components/atoms/`
2. **Molecule:** Add to `src/components/molecules/`
3. **Organism:** Add to `src/components/organisms/`

### Using Design System Tokens

Import the design system config:
```tsx
import { designSystem } from './config/designSystem';
```

## 📝 Current Status

✅ **Completed:**
- Project setup (React + Vite + TypeScript + Tailwind)
- Design system configuration
- Atomic design folder structure
- Button component (all variants)
- Avatar and AvatarGroup components
- SocialProof component
- Header organism
- Hero section with animations
- CustomersSection component (shadcn/ui style)
- Path aliases setup (@/ imports)
- Responsive design
- Micro-animations and transitions

🚧 **In Progress:**
- Hero section refinement

📋 **Planned:**
- Complete landing page sections
- Additional pages
- Enhanced animations
- Image optimization

## 🤝 Contributing

When contributing to this project:

1. Follow the atomic design structure
2. Use design system tokens for styling
3. Maintain consistent naming conventions
4. Add appropriate animations and transitions
5. Ensure responsive design
6. Update this README as needed

## 📄 License

This project is proprietary and confidential.

---

**Built with ❤️ for Zygon Talent Agency**

