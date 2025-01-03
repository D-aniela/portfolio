import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        fiolalisa: ['Fiolalisa-Outline', 'sans-serif'],
        fiolaregular: ['Fiolalisa', 'sans-serif'],
        grotesk: ['FocusGrotesk', 'sans-serif'],
      },
      colors: {
        background: '#3B7BA0',
        foreground: '#384955',
        graybg: '#D9D9D9',
        primary: '#E6F4F1',
        secondary: '#EA9A27',
      },
    },
  },
  plugins: [],
} satisfies Config
