module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: { max: '379px' },
        // => @media (max-width: 639px) { ... }

        sm: { min: '380px', max: '639px' },
        // => @media (max-width: 639px) { ... }

        md: { min: '640px', max: '767px' },
        // => @media (max-width: 767px) { ... }

        lg: { min: '768px', max: '1023px' },
        // => @media (max-width: 1023px) { ... }

        xl: { min: '1024px', max: '1279px' },
        // => @media (max-width: 1279px) { ... }

        '2xl': { min: '1280px', max: '1535px' },
        // => @media (max-width: 1535px) { ... }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
