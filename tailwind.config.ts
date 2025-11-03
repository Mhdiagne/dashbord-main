import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#e6fffa',
          100: '#b2fff1',
          200: '#81fff0',
          300: '#4ffef0',
          400: '#32fef6',
          500: '#1de9e3',
          600: '#0dc5c5',
          700: '#0097a0',
          800: '#067783',
          900: '#0a606b',
        },
      },
    },
  },
  plugins: [],
}
export default config

