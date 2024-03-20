/** @type {import('tailwindcss').Config} */
import Images from './images';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        '#27AC35': '#27AC35',
        '#777C7D': '#777C7D',
        '#718E81': '#718E81',
        '#7D7D7D': '#7D7D7D',
        '#FAFAFA': '#FAFAFA',
        '#35D145': '#35D145',
        '#D9D9D9': '#D9D9D9',
      },
      width: {
        '30%': '30%',
        '40%': '40%',
        '50%': '50%',
        '1440px': '1440px',
        '1180px': '1180px',
        '150px': '150px',
        '200px': '200px',
        '300px': '300px',
        '320px': '320px',
        '400px': '400px',
        '500px': '500px',
        '600px': '600px',
      },
      spacing: {
        '10%': '10%',
        'negative40px': '-40px',
        'negative100px': '-100px',
        '40px': '40px',
        '50px': '50px',
        '60px': '60px',
        '100px': '100px',
        '125px': '125px',
        '140px': '140px',
        '150px': '150px',
        '160px': '160px',
        '200px': '200px',
        '240px': '240px',
        '250px': '250px',
        '300px': '300px',
        '440px': '440px'
      },
      borderRadius: {
        '20px': '20px',
        '24px': '24px',
        '100px' : '100px',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'lato': ['Lato', 'sans-serif']
      },
      fontSize: {
        '20px': '20px',
        '24px': '24px',
        '50px': '50px',
      },
      height: {
        '800px': '800px',
      },
      boxShadow: {
        'custom': '0 5px 10px rgba(0, 0, 0, 0.5)',
        'custom1': '0 10px 20px rgba(0, 0, 0, 1)'
      }
    },
  },
  plugins: [],
}
