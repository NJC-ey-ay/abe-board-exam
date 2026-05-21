import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['DM Serif Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f2f7f9',
          100: '#ddecf0',
          200: '#bddae3',
          300: '#8dc0cf',
          400: '#56a0b5',
          500: '#3a859b',
          600: '#2e6c83',
          700: '#1e5a7a',
          800: '#1a4a63',
          900: '#183e53',
        },
        paper: '#f7f8fa',
        ink: '#1a1a2e',
      },
    },
  },
  plugins: [],
};
export default config;