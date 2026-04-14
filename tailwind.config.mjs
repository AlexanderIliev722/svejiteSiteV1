/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '485px',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        fresh: {
          light: '#e0f2fe', // Very light blue for backgrounds
          DEFAULT: '#0ea5e9', // Main fresh blue (like clean water)
          dark: '#0284c7', // Darker blue for hover states
        },
        accent: {
          DEFAULT: '#f97316', // Orange accent for important buttons (like Remonti-lid)
          dark: '#ea580c',
        }
      },
    },
  },
  plugins: [],
};