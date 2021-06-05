module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  variants: {
    extend: {
      spacing: {
         '72': '10px',
         '84': '20px',
         '96': '30px',
         '19': '275px',
        }
    },
  },
  plugins: [],
}
}
