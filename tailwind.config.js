/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bgHeader:'#296573',
      },
      width:{
         HeaderWith:'1366px'
      },
      height:{
        headerHeight:''
      },
      padding:{
        weatherAreaPadding:'40px',
      }
    },
  },
  plugins: [],
}
