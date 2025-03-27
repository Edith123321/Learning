/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        'auto' : 'repeat(auto-fit, minmax(200px, 1fr))'
      },
      spacing:{
        'section-height' : '500px',
      },
      fontSize:{
        "course-details-heading-small":['26px', '36px'],
        "course-details-heading-large":['36px', '44px']
      },
      boxShadow:{
        "shadow-custom":"30px"
      }
    }

  },
  plugins: [],
}