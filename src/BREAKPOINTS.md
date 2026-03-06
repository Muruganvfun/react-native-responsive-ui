# Responsive Breakpoints Guide

## Breakpoint Definitions

| Breakpoint | Width Range | Description |
|------------|-------------|-------------|
| **Mobile** | < 768px | Single column, bottom navigation, minimal padding |
| **Tablet** | 768px - 1024px | Two-column cards, side navigation, medium padding |
| **Desktop** | > 1024px | Three-column cards, side navigation, generous padding |

## How Breakpoints Are Detected

The `useBreakpoint()` hook uses `useWindowDimensions()` from React Native to detect the current window width and returns:

```typescript
{
  breakpoint: 'mobile' | 'tablet' | 'desktop',
  isMobile: boolean,
  isTablet: boolean,
  isDesktop: boolean,
  width: number,
  height: number
}
```

## Layout Changes by Breakpoint

### Desktop (> 1024px)
- **Content Max Width**: 1200px centered
- **Horizontal Padding**: 200px (matches CSS `.desktop-inner` padding)
- **Vertical Padding**: 200px top, 300px bottom (matches CSS)
- **Vertical Gap**: 30px (matches CSS `.frame-parent { gap: 30px }`)
- **Sidebar**: Visible on left (78px width)
- **Action Cards**: 3-column flex row, min-width 251px each
- **Learning Resources**: 2-column grid, min-width 392px each
- **Navigation**: Header shows Setting/FAQ/User links

### Tablet (768px - 1024px)
- **Content Max Width**: 800px centered
- **Horizontal Padding**: 48px
- **Vertical Padding**: 48px top, 100px bottom
- **Vertical Gap**: 30px
- **Sidebar**: Visible on left (78px width)
- **Action Cards**: 2-column flex row, min-width 200px each
- **Learning Resources**: Single column
- **Navigation**: Header shows Setting/FAQ/User links

### Mobile (< 768px)
- **Content Max Width**: 100% (full width)
- **Horizontal Padding**: 16px
- **Vertical Padding**: 24px top, 100px bottom (for bottom nav)
- **Vertical Gap**: 30px
- **Sidebar**: Hidden
- **Action Cards**: Single column (full width)
- **Learning Resources**: Single column (full width)
- **Navigation**: Bottom tab bar, hamburger menu in header

## Adjusting Spacing

To modify spacing for specific breakpoints, edit the `spacing` constants in `styles/styles.ts`:

```typescript
export const spacing = {
  desktop: {
    padding: 200,    // Horizontal & top padding
    maxWidth: 1200,  // Content max width
    gap: 30,         // Vertical gap between sections
  },
  tablet: {
    padding: 48,
    maxWidth: 800,
    gap: 30,
  },
  mobile: {
    padding: 16,
    maxWidth: '100%',
    gap: 30,
  },
};
```

## Using Responsive Values in Components

Use the `responsiveValue()` helper for inline responsive values:

```typescript
import { responsiveValue } from '../hooks/useBreakpoint';

const fontSize = responsiveValue(breakpoint, {
  mobile: 24,
  tablet: 28,
  desktop: 36,
});
```

## Breakpoint Constants

Located in `hooks/useBreakpoint.ts`:

```typescript
const BREAKPOINTS = {
  mobile: 768,   // Below this = mobile
  tablet: 1024,  // Between mobile and this = tablet
};
```

To change breakpoint thresholds, modify these values.
