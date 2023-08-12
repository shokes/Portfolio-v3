/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // fontSize: {
    //   xs: ['15px', { lineHeight: '25px' }],
    //   sm: ['13px', { lineHeight: '25px', letterSpacing: '2px' }],
    //   base: ['14px', { lineHeight: '19px', letterSpacing: '1.4px' }],
    //   lg: ['18px', { lineHeight: '24px', letterSpacing: '1.3px' }],
    //   xl: ['24px', { lineHeight: '33px', letterSpacing: '1.7px' }],

    //   '2xl': ['28px', { lineHeight: '38px', letterSpacing: '2px' }],
    //   '3xl': ['32px', { lineHeight: '36px', letterSpacing: '1.15px' }],
    //   '4xl': ['40px', { lineHeight: '44px', letterSpacing: '1.5px' }],
    //   '5xl': ['64px', { lineHeight: '68px', letterSpacing: '1px' }],
    // },
    fontSize: {
      xs: ['14px', { lineHeight: '22px', letterSpacing: '0.28px' }],
      sm: ['18px', { lineHeight: '24px', letterSpacing: '0.32px' }],
      base: ['20px', { lineHeight: '18px', letterSpacing: '0.4px' }],
      lg: ['18px', { lineHeight: '32px', letterSpacing: '0.36px' }],
      xl: ['22px', { lineHeight: '36px', letterSpacing: '0.44px' }],

      '2xl': ['24px', { lineHeight: '32px', letterSpacing: '0.48px' }],
      '3xl': ['28px', { lineHeight: '32px', letterSpacing: '0.56px' }],
      '4xl': ['52px', { lineHeight: '64px', letterSpacing: '1.04px' }],
      '5xl': ['88px', { lineHeight: '88px', letterSpacing: '1.76px' }],
    },

    extend: {
      colors: {
        background: {
          100: '#e1dfdd',
        },

        text: {
          100: '#000000',
        },
      },
    },
  },
  plugins: [],
};
