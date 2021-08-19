module.exports = {
   purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
      extend: {},
      container: {
         center: true,
      },
      transitionDelay: {
         0: '0ms',
         2000: '2000ms',
      },
      boxSizing: ['hover', 'focus'],
   },
   variants: {
      extend: {},
   },
   plugins: [],
}
