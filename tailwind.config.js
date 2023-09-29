/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // colors
      colors: {
        'customPrimaryColor': '#7B68EE',
        'customFontColor': '#4B5563',
        'customBorderColor': 'rgba(0, 0, 0, 0.10)',
      },
      // Primary Gradient Color
      backgroundImage: {
        'primary-gradient': 'linear-gradient(240.89deg, #fac276 0%, #d062b3 51.56%, #4c57cf 100%)',
        'customBackgroundGreyGrad': 'linear-gradient(180deg, #FFF 0%, rgba(245, 245, 245, 0.37) 100%)',
      },
      // Border Radius
      borderRadius: {
        'customSmall': '8px',
        'customLarge': '16px'
      },
      // Font Family
      fontFamily: {
        'customFontDM': ['DM Sans', 'sans-serif'],
        'customFontIBM': ['IBM Plex Mono', 'monospace']
      },
      // Font Weight
      fontWeight: {
        'customNormal': '400',
        'customMedium': '500',
        'customBold': '700'
      },
      // Screens
      screens: {
        'sm': '480px',
        'md': '760px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1760px'
      },
    },
  },
  plugins: [],
}