import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cwa: {
          green: '#1A6B3C',
          'green-deep': '#0F4D29',
          'green-soft': '#F0FDF4',
          teal: '#0D9488',
          'teal-soft': '#F0FDFA',
          amber: '#B45309',
          'amber-soft': '#FFFBEB',
          'amber-border': '#FDE68A',
          rust: '#9A3412',
          ink: '#1E293B',
          slate: '#334155',
          muted: '#64748B',
          border: '#E2E8F0',
          'border-soft': '#EEF2F6',
          surface: '#F8FAFC',
          paper: '#FFFFFF',
        },
      },
      fontFamily: {
        serif: ['"Source Serif Pro"', 'Georgia', 'Cambria', 'serif'],
        sans: [
          '"Inter"',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'sans-serif',
        ],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        page: '880px',
        wide: '1180px',
      },
      boxShadow: {
        card: '0 1px 2px 0 rgba(15, 23, 42, 0.04), 0 1px 3px 0 rgba(15, 23, 42, 0.06)',
        'card-hover':
          '0 2px 4px 0 rgba(15, 23, 42, 0.06), 0 4px 8px 0 rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [],
} satisfies Config;
