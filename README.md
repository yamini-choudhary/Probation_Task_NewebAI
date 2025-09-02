# neweb.ai Landing Page

A modern, responsive landing page for neweb.ai built with React, Javascript, and Tailwind CSS. Features geo-based pricing, smooth animations, and production-ready performance.

## 🚀 Features

- **Geo-Based Pricing**: Automatic currency detection and localized pricing
- **Responsive Design**: Mobile-first approach optimized for all screen sizes
- **Modern UI/UX**: Apple-level design aesthetics with smooth animations
- **Performance Optimized**: Lighthouse Performance ≥ 85, Accessibility ≥ 90
- **SEO Ready**: Proper meta tags, OpenGraph, and semantic HTML
- **Javascript**: Full type safety throughout the application

## 🛠️ Tech Stack

- **Framework**: React 18 with Javascript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Ready for any static hosting provider

## 📋 Prerequisites

- Node.js 18+
- npm or yarn package manager

## 🏃‍♂️ Quick Start

### 1. Clone the repository

```bash
git clone <repository-url>
cd neweb-ai-landing
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### 4. Build for production

```bash
npm run build
```

### 5. Preview production build

```bash
npm run preview
```

## 📱 Responsive Breakpoints

The design is optimized for the following breakpoints:

- **Mobile**: 360px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1279px
- **Large Desktop**: 1280px+

## 🌍 Geo-Based Pricing

The application automatically detects user location and displays appropriate currency:

- **United Kingdom**: GBP (£)
- **India, Pakistan, Bangladesh, Nepal**: INR (₹)
- **All other countries**: USD ($)

Pricing configuration can be updated in `src/lib/pricing.config.ts`.

## 🎨 Design System

### Colors

- **Primary**: Blue (#3B82F6)
- **Secondary**: Purple (#8B5CF6)
- **Accent**: Green (#10B981)
- **Neutral**: Gray scale

### Typography

- **Font Family**: System fonts (Inter fallback)
- **Headings**: 120% line height
- **Body**: 150% line height
- **Max 3 font weights**: Regular, Medium, Bold

### Spacing

- **System**: 8px base unit
- **Consistent**: All spacing follows 8px increments

## 📊 Performance Targets

- **Lighthouse Performance**: ≥ 85
- **Lighthouse Accessibility**: ≥ 90
- **First Contentful Paint**: < 2s
- **Largest Contentful Paint**: < 3s

## 🧪 Testing

Run the linter:

```bash
npm run lint
```

## 📁 Project Structure

```
src/
├── components/         # React components
│   ├── Navbar.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section with CTA
│   ├── TrustBar.tsx    # Company logos
│   ├── Features.tsx    # Feature showcase
│   ├── Advantage.tsx   # Why choose us
│   ├── Pricing.tsx     # Pricing plans
│   ├── Testimonials.tsx # Customer reviews
│   ├── FAQ.tsx         # Frequently asked questions
│   ├── Blog.tsx        # Blog preview
│   ├── CTA.tsx         # Call to action
│   ├── Footer.tsx      # Site footer
│   └── CurrencySelector.tsx # Currency selection
├── hooks/              # Custom React hooks
│   └── useGeoCurrency.ts # Geo-location and currency
├── lib/                # Utility libraries
│   └── pricing.config.ts # Pricing configuration
├── assets/             # Static assets and documentation
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## 🎯 Key Components

### Hero Section

- Compelling headline and value proposition
- Email capture form with validation
- Trust indicators and social proof
- Animated background elements

### Pricing Section

- Geo-based currency detection
- Three-tier pricing structure
- Feature comparison
- Manual currency override option

### Features Section

- Six key feature highlights
- Interactive hover animations
- Icon-based visual hierarchy

## 🔧 Configuration

### Pricing Configuration

Update pricing in `src/lib/pricing.config.ts`:

```Javascript
export const pricingConfig = {
  USD: {
    currency: 'USD',
    symbol: '$',
    plans: {
      starter: 15,
      professional: 49,
      enterprise: 99,
    },
  },
  // Add more currencies...
};

```

### Environment Variables

No environment variables required for basic functionality. The geo-location API is called directly from the client.

## 🚀 Deployment

### Netlify

```bash
npm run build
# Deploy the dist/ folder
```

### Vercel

```bash
npm run build
# Deploy the dist/ folder
```

### GitHub Pages

```bash
npm run build
# Deploy the dist/ folder to gh-pages branch
```

## 🎨 Customization

### Brand Colors

Update colors in `tailwind.config.js` or use CSS custom properties.

### Content

- Update company information in components
- Modify pricing plans in `pricing.config.ts`
- Replace testimonials and blog posts with real content

### Images

All images are sourced from Pexels. See `src/assets/image-sources.md` for attribution.

## 📈 Analytics Integration

Ready for analytics integration:

- Google Analytics
- Mixpanel
- Hotjar
- Custom tracking events

## 🔒 Security

- No sensitive data in client-side code
- HTTPS ready
- Content Security Policy compatible
- XSS protection through React

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request




---

Built with ❤️ using React, Javascript, and Tailwind CSS
