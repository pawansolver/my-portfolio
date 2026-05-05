# Premium Page Transitions & Stagger Effects

Professional page transition system for Next.js App Router with Framer Motion, providing Apple-like smooth animations.

## Components

### 1. PageTransition
A wrapper component that provides slide-up and fade-in animations for page content.

```tsx
import { PageTransition } from '@/components/transitions'

<PageTransition>
  <YourPageContent />
</PageTransition>
```

### 2. StaggerContainer
Animates children elements sequentially with customizable delays for premium effects.

```tsx
import { StaggerContainer } from '@/components/transitions'

<StaggerContainer staggerDelay={0.1}>
  <h1>Title appears first</h1>
  <p>Description appears second</p>
  <button>Button appears third</button>
</StaggerContainer>
```

### 3. Template (Automatic)
The `template.tsx` file automatically handles route changes across your entire app. No setup needed!

## Features

- ✅ **Smooth slide-up + fade-in transitions** (y: 20, opacity: 0 → y: 0, opacity: 1)
- ✅ **Professional easing** `[0.22, 1, 0.36, 1]` for Apple-like feel
- ✅ **Stagger animations** for sequential element reveals
- ✅ **TypeScript friendly** with proper type definitions
- ✅ **Route change animations** using Next.js template approach
- ✅ **Customizable delays** and variants

## Usage Examples

### Basic Page Transition
```tsx
// pages/about.tsx
import { PageTransition } from '@/components/transitions'

export default function AboutPage() {
  return (
    <PageTransition>
      <div>
        <h1>About Us</h1>
        <p>Our story...</p>
      </div>
    </PageTransition>
  )
}
```

### Stagger Effect for Hero Section
```tsx
import { StaggerContainer } from '@/components/transitions'

export default function Hero() {
  return (
    <StaggerContainer staggerDelay={0.15}>
      <h1>Welcome to Our Site</h1>
      <p>Experience premium animations</p>
      <button>Get Started</button>
      <button>Learn More</button>
    </StaggerContainer>
  )
}
```

### Custom Stagger Variants
```tsx
const customVariants = {
  initial: { opacity: 0, scale: 0.8 },
  in: { opacity: 1, scale: 1 },
  out: { opacity: 0, scale: 0.8 }
}

<StaggerContainer 
  staggerDelay={0.2} 
  childVariants={customVariants}
>
  {/* Children will scale and fade in */}
</StaggerContainer>
```

## Configuration

### StaggerContainer Props
- `staggerDelay?: number` - Delay between child animations (default: 0.1s)
- `childVariants?: Variants` - Custom animation variants for children
- `className?: string` - Additional CSS classes

### PageTransition Props
- `children: ReactNode` - Content to animate
- `className?: string` - Additional CSS classes
- Extends all `motion.div` props

## Performance Tips

1. **Use sparingly** - Apply transitions to main sections, not every element
2. **Optimize stagger delays** - 0.1-0.2s works best for most cases
3. **Test on mobile** - Ensure smooth performance on slower devices
4. **Combine with CSS** - Use CSS for simpler animations, reserve Framer Motion for complex sequences

## Browser Support

- Modern browsers with CSS transforms support
- iOS Safari 12+
- Chrome 88+
- Firefox 90+
- Edge 88+

## Inspiration

This system is inspired by premium websites like:
- Apple.com
- Stripe.com
- Linear.app
- High-end SaaS landing pages

The easing curve `[0.22, 1, 0.36, 1]` provides that signature "Apple feel" - smooth but not too slow, professional but still engaging.
