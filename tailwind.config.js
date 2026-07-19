/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 24px 70px rgba(24, 28, 42, 0.16)',
        glow: '0 18px 56px rgba(185, 58, 128, 0.28)',
      },
      colors: {
        azoya: {
          ink: '#15151f',
          rose: '#b93872',
          lotus: '#e4709b',
          teal: '#0f8d93',
          leaf: '#47795e',
          gold: '#d8a842',
          mist: '#f5f8fb',
        },
      },
    },
  },
  plugins: [],
};
