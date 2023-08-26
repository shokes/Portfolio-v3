/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
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

    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1700px',
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
