module.exports = {
  mode: 'jit',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'], // remove unused styles in production
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      black: '#333D2F',
      white: '#FFFFFF',
      primary: '#f4f1eb',
      light: '#B9B9B9',
      test1: '#FF5733',
      test2: '#00EA2F',
      test3: '#0046EA',
    },
    screens: {
      sm: '600px',
      md: '1240px',
      lg: '1440px',
    },
    extend: {
      transitionProperty: {
        colors:
          'color, background-color, border-color, text-decoration-color, fill, stroke',
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '40px',
        '3xl': '64px',
        '4xl': '80px',
      },
      keyframes: {},
      animation: {},
      screens: {
        sm: `375px`,
        md: `768px`,
        lg: `1024px`,
        xl: '1240px',
        '2xl': `1440px`,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
