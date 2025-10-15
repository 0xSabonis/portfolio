# Design Guidelines: BankkRoll Portfolio Clone

## Design Approach: Reference-Based (Modern Developer Portfolio)

This is a pixel-perfect replication of bankkroll.xyz - a cutting-edge developer portfolio combining Linear's clean minimalism with Vercel's gradient aesthetics and Stripe's sophisticated dark mode implementation.

## Core Design Elements

### A. Color Palette

**Dark Mode Primary** (matches original):
- Background Base: 0 0% 4% (very dark, almost black)
- Background Elevated: 0 0% 8% (cards, sections)
- Border Subtle: 240 5% 15%
- Text Primary: 0 0% 98%
- Text Secondary: 0 0% 70%

**Accent Colors**:
- Primary Gradient: 250 100% 60% → 280 100% 70% (purple to violet)
- Secondary Accent: 200 100% 50% (cyan blue for highlights)
- Success/Link: 142 76% 36%

**Special Effects**:
- Glow effect on hero gradient text
- Subtle border glow on hover (purple 40% opacity)
- Glass morphism on cards (backdrop blur with 10% white overlay)

### B. Typography

**Font Stack**:
- Primary: Inter (via Google Fonts) - weights 400, 500, 600, 700
- Code/Monospace: JetBrains Mono - weight 500

**Type Scale**:
- Hero Display: text-6xl md:text-8xl font-bold (gradient animated)
- Section Headings: text-4xl md:text-5xl font-bold
- Card Titles: text-xl font-semibold
- Body Text: text-base leading-relaxed
- Small Print: text-sm text-muted-foreground

**Special Typography**:
- Hero gradient text uses animated background-clip and gradient position animation
- Tight letter-spacing on headings (-0.02em)

### C. Layout System

**Spacing Primitives**: Use Tailwind units of 4, 8, 12, 16, 20, 24, 32

**Container Strategy**:
- Max width: max-w-7xl mx-auto
- Section padding: py-20 md:py-32
- Card padding: p-6 md:p-8
- Gap between elements: gap-8 md:gap-12

**Grid Patterns**:
- Services Bento: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Project Gallery: grid-cols-1 md:grid-cols-2 gap-8
- Pricing Cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5
- Tech Stack Marquee: Infinite horizontal scroll, multiple rows

### D. Component Library

**Navigation**:
- Sticky header with backdrop blur (backdrop-blur-xl bg-background/80)
- Logo on left, nav links center, CTA buttons right
- Mobile hamburger menu with slide-in drawer
- Theme toggle (moon/sun icon)

**Hero Section**:
- Large animated gradient headline
- Subtitle with tech focus messaging
- Dual CTA buttons (primary filled, secondary outline with blur backdrop)
- Infinite scrolling tech stack marquee (3-4 rows, different speeds)
- Tech badges: pill-shaped with icons, border-2 border-border/50

**Feature Cards** (Bento Grid):
- Glass morphism effect: bg-card/50 backdrop-blur-md
- Border: border border-border/50
- Rounded corners: rounded-2xl
- Hover lift: hover:translate-y-[-4px] transition-transform
- Icons in gradient circles or as full-width images

**Project Gallery Cards**:
- Image preview with overlay gradient on hover
- Title and description overlay
- "View Details" button appears on hover
- Rounded-xl with overflow-hidden
- Modal/drawer for expanded project details

**Pricing Cards**:
- Active plan highlighted with gradient border
- Pricing prominently displayed: text-4xl font-bold
- Feature list with checkmarks
- Retainer card has interactive hour slider
- CTAs: "Book a Call" + "Info" button
- Hover state: subtle scale and glow effect

**Testimonial Carousel**:
- Infinite horizontal scroll (auto-scrolling)
- Profile images: rounded-full with border-2
- Quote text in cards with bg-card/50
- Twitter handle and profile info
- Pause on hover
- Duplicate content for seamless loop

**GitHub Contribution Snake**:
- SVG animation embedded
- Toggle between light/dark theme versions
- Centered with attribution

**Contact Section**:
- Simple, clean form layout
- Input fields with focus rings (ring-2 ring-primary/50)
- Primary CTA button
- Alternative "Book a Call" link

### E. Animations & Interactions

**Hero Animations**:
- Gradient text: animate-gradient-x (background position animation)
- Fade-in-up on page load
- Stagger animation for CTA buttons

**Scroll Animations**:
- Fade-in-up on scroll (using Intersection Observer or Framer Motion)
- Parallax subtle movement on hero elements

**Marquee Effect**:
- Infinite horizontal scroll (CSS @keyframes or Framer Motion)
- Multiple speeds for different rows (faster top, slower bottom)
- Seamless loop with duplicated content

**Card Interactions**:
- Hover: translate-y-[-4px] + shadow-2xl + border glow
- Smooth transitions: transition-all duration-300
- Cursor pointer on interactive elements

**Button States**:
- Primary: bg-primary hover:bg-primary/90 + shadow lift
- Outline on images: backdrop-blur-lg bg-white/10 border-white/20
- Subtle scale on hover: hover:scale-105

### Images

**Hero Section**:
- No large hero image - focus on gradient text animation and tech stack marquee

**Project Cards**:
- Project preview images: 16:9 aspect ratio
- Images from original site (repo2pdf.png, brandrisk.png, nano-studio-98.png, shaduxe.png, etc.)
- Overlay gradient: bg-gradient-to-t from-black/80 to-transparent on hover

**Client Avatars**:
- Profile images: 64x64px rounded-full
- Border: border-2 border-border/30

**Special Graphics**:
- GitHub contribution snake SVG (animated)
- Tech stack icons/logos in marquee

**Service Section**:
- Bento grid with some cards featuring full-width preview images
- Code snippet mockups with syntax highlighting effect
- Game development card shows game preview image

### F. Technical Requirements

**Performance**:
- Lazy load images below fold
- Optimize SVG animations
- Preload critical fonts
- Minimize animation jank (use transform/opacity only)

**Responsiveness**:
- Mobile-first approach
- Breakpoints: sm:640px, md:768px, lg:1024px, xl:1280px
- Stack pricing cards to single column on mobile
- Hamburger menu under 768px
- Reduce animation complexity on mobile

**Dark Mode**:
- Default to dark theme
- Light mode toggle available
- Persist preference in localStorage
- Smooth theme transition (no flash)