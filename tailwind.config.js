/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1280px',
        '3xl': '1536px',
      },
    },
    extend: {
      colors: {
        // shadcn/ui colors
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        // LEDream Neon Colors
        neon: {
          red: {
            DEFAULT: '#FF3D00',
            light: '#FF6B35',
          },
          blue: {
            DEFAULT: '#00F0FF',
            light: '#0099FF',
          },
          purple: {
            DEFAULT: '#BF00FF',
            light: '#9D4EDD',
          },
          magenta: {
            DEFAULT: '#FF10F0',
            light: '#FF006E',
          },
          green: {
            DEFAULT: '#39FF14',
          },
        },
        // LEDream Dark Colors
        dark: {
          black: '#0A0A0A',
          navy: {
            DEFAULT: '#1A1A2E',
            light: '#16213E',
          },
          brick: {
            DEFAULT: '#1A0F0F',
            light: '#2D1B1B',
          },
        },
        // Neutral Colors
        neutral: {
          lightGray: '#E8E8E8',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'Montserrat', 'Bebas Neue', 'Rajdhani', 'sans-serif'],
        body: ['var(--font-body)', 'Inter', 'DM Sans', 'Work Sans', 'sans-serif'],
      },
      fontSize: {
        'h1': ['3rem', { lineHeight: '1.2', fontWeight: '900' }],
        'h2': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h3': ['1.875rem', { lineHeight: '1.3', fontWeight: '700' }],
        'h4': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'h5': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        'h6': ['1.125rem', { lineHeight: '1.5', fontWeight: '600' }],
      },
      spacing: {
        'section-mobile': '4rem',
        'section-desktop': '6rem',
      },
      maxWidth: {
        'container-standard': '1280px',
        'container-wide': '1536px',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        'neon-subtle': '0 0 5px currentColor, 0 0 10px currentColor',
        'neon-medium': '0 0 10px currentColor, 0 0 20px currentColor',
        'neon-strong': '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
        'neon-red': '0 0 10px #FF3D00, 0 0 20px #FF3D00',
        'neon-blue': '0 0 10px #00F0FF, 0 0 20px #00F0FF',
        'neon-purple': '0 0 10px #BF00FF, 0 0 20px #BF00FF',
        'neon-magenta': '0 0 10px #FF10F0, 0 0 20px #FF10F0',
        'neon-green': '0 0 10px #39FF14, 0 0 20px #39FF14',
      },
      backgroundImage: {
        'gradient-neon-red-blue': 'linear-gradient(135deg, #FF3D00 0%, #00F0FF 100%)',
        'gradient-neon-purple-magenta': 'linear-gradient(135deg, #BF00FF 0%, #FF10F0 100%)',
        'gradient-neon-rainbow': 'linear-gradient(135deg, #FF3D00 0%, #FF10F0 25%, #BF00FF 50%, #00F0FF 75%, #39FF14 100%)',
        'gradient-neon-diagonal': 'linear-gradient(45deg, #FF3D00, #00F0FF, #BF00FF, #FF10F0)',
        'gradient-dark-brick': 'linear-gradient(180deg, #1A0F0F 0%, #2D1B1B 100%)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'pulse-neon': {
          '0%, 100%': {
            opacity: '1',
            filter: 'brightness(1)',
          },
          '50%': {
            opacity: '0.85',
            filter: 'brightness(1.15)',
          },
        },
        'glow-pulse': {
          '0%, 100%': {
            textShadow: '0 0 5px currentColor, 0 0 10px currentColor',
          },
          '50%': {
            textShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
          },
        },
        'glow-pulse-slow': {
          '0%, 100%': {
            textShadow: '0 0 2px currentColor',
            opacity: '1',
          },
          '50%': {
            textShadow: '0 0 15px currentColor, 0 0 25px currentColor, 0 0 35px currentColor',
            opacity: '1',
          },
        },
        'gradient-shift': {
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
          '100%': {
            backgroundPosition: '0% 50%',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'marquee-scroll': {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        'float-delayed': {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-15px)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'pulse-neon': 'pulse-neon 2s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'glow-pulse-slow': 'glow-pulse-slow 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 3s ease infinite',
        'fade-in': 'fade-in 0.5s ease-out',
        'marquee-scroll': 'marquee-scroll 20s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'float-delayed': 'float-delayed 3.5s ease-in-out infinite',
      },
      transitionDuration: {
        'fast': '150ms',
        'normal': '300ms',
        'slow': '500ms',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    function ({ addUtilities, theme }) {
      addUtilities({
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow-md': {
          textShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow-lg': {
          textShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
        // Neon text shadow utilities
        '.text-shadow-neon-subtle': {
          textShadow: '0 0 5px currentColor, 0 0 10px currentColor',
        },
        '.text-shadow-neon-medium': {
          textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
        },
        '.text-shadow-neon-strong': {
          textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor, 0 0 20px currentColor',
        },
      });
    },
  ],
}

