module.exports = {
  purge: {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    options: {
      /**
       * This will be used if you have a static content stored in cms
       * so tailwind wouldn't purge the css class from the transpiled file(s)
      */
      safelist: []
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      /**
       * If you want to add your custom classes to tailwind, do it here.
      */
    //  colors: {
    //    primary: 'red' // this will transpiled as text-primary, bg-primary, etc
    //  }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
