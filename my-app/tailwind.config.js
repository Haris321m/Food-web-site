/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'greenyellow': '#adff2f',
        'darkgreen' : '#9ac300',
      },
      borderWidth: {
        '3': '3px',
      },
      width: {
        '100%': '100%',
        '90%': '90%',
        '80%': '80%',
        '70%': '70%',
        '60%': '60%',
        '50%': '50%',
        '40%': '40%',
        '30%': '30%',
        '20%': '20%',
      },
      fontFamily: {
        'roboto' : ['roboto', 'ul-serif', 'Open Sans'],
      },
      height: {
        '608vh': '608vh',
        '600vh': '600vh',
        '595vh': '595vh',
        '100vh': '100vh',
        '100%': '100%',
        '90%': '90%',
        '80%': '80%',
        '70%': '70%',
        '60%': '60%',
        '50%': '50%',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
