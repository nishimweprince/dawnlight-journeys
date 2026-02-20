/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    '*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: { '2xl': '1400px' },
    },
    extend: {
      fontFamily: {
        /* Playfair Display — editorial serif for headings */
        playfair: ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
        /* Outfit — refined sans-serif for body */
        outfit:   ['var(--font-outfit)',   'Outfit', 'system-ui', 'sans-serif'],
        /* Override default sans to Outfit */
        sans:     ['var(--font-outfit)',   'Outfit', 'system-ui', 'sans-serif'],
        /* Keep poppins for legacy usage */
        poppins:  ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        /* ── Shadcn / Radix UI tokens ── */
        border:      'hsl(var(--border))',
        input:       'hsl(var(--input))',
        ring:        'hsl(var(--ring))',
        background:  'hsl(var(--background))',
        foreground:  'hsl(var(--foreground))',
        primary: {
          DEFAULT:    'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT:    'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT:    'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT:    'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT:    'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT:    'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT:    'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },

        /* ── Dawnlight Journeys brand palette ── */
        dj: {
          bronze:   '#8B5E3C',   /* warm brown                  */
          gold:     '#D4A76A',   /* safari gold                 */
          'gold-l': '#C8956C',   /* lighter gold                */
          forest:   '#1B3A2D',   /* deep forest green           */
          'forest-l':'#2D4A3E',  /* lighter forest green        */
          charcoal: '#1A1714',   /* near-black cinematic        */
          cream:    '#F5F0E8',   /* warm ivory                  */
          ivory:    '#FAF7F2',   /* lighter ivory               */
          ember:    '#D97B2B',   /* sunset orange / CTA         */
          'ember-l':'#E8913A',   /* lighter ember               */
          text:     '#2C2420',   /* off-black text              */
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      /* Extra typography scale for cinematic hero */
      fontSize: {
        '7xl': ['4.5rem',  { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        '8xl': ['6rem',    { lineHeight: '1.04', letterSpacing: '-0.025em' }],
        '9xl': ['8rem',    { lineHeight: '1.0',  letterSpacing: '-0.03em' }],
      },
      /* Brand-specific spacing */
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      /* Custom transitions */
      transitionTimingFunction: {
        'smooth-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        '400': '400ms',
      },
      /* Keyframes for tailwind animate classes */
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up':   'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
