/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       backgroundImage: {
        'hero-pattern1': "url('./src/assets/hero/shape-01.svg')",
        'hero-pattern2': "url('./src/assets/hero/shape-02.svg')",
        'hero-pattern3': "url('./src/assets/video/shape.svg')",
      }
    },
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'mdx': '935px',
      
      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
}