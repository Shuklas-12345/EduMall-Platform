/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // SRS 23.3: Professional Palette (Min 4.5:1 Contrast)
        primary: {
          DEFAULT: '#1A237E', // Deep Indigo (Trust)
          light: '#534BAE',
          dark: '#000051',
        },
        secondary: {
          DEFAULT: '#1B5E20', // Forest Green (Focus)
          light: '#4C8C4A',
          dark: '#003308',
        },
        danger: '#B71C1C', // Deep Red (Compliance Risk)
        warning: '#E65100', // Deep Orange (Alerts)
        background: '#F5F5F5',
        surface: '#FFFFFF',
      },
      // SRS 23.6: Forcing rem-based typography for scaling
      fontSize: {
        base: '1rem',      // 16px
        lg: '1.125rem',    // 18px
        xl: '1.25rem',     // 20px
        '2xl': '1.5rem',   // 24px
      },
    },
  },
  plugins: [],
};