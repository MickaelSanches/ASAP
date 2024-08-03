/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,js,jsx,ts,tsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      letterSpacing: {
        wider: '0.05em',
      },
      fontFamily: {
        norms: ['"TT Norms"', 'sans-serif'],
      },
      colors: {
        'noir': '#000000',
        'violet': '#450A28',
        'rose': '#CD0066',
        'marron': '#3D3436',
        'noir-footer': '#000000',
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}
