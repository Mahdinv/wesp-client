/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      xxs: "320px",
      xs: "375px",
      sm: "550px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        ['back-page']: '#D9F2E2',
        ['light-primary']: '#DCFCE7',
        ['dark-light-primary']: '#B0E3C3',
        ['primary']: '#00A63E',
        ['primary-dark']: '#008532',
        ['primary-darker']: '#004331',
        ['black']: '#001F17',
        ['white']: '#FCFCFC',
        ['text-field']: '#F3F3F5',
        ['normal-yellow']: '#F2C94C',
        ['default-gray']: '#CDCCD0',

      },
      fontFamily: {
        peyda: ['Peyda', 'sans-serif'],
        yekan: ['YekanBakh', 'sans-serif'],
        rokh: ['RokhFaNum', 'sans-serif'],
      },
      fontSize: {
        xxs: ['12px', { lineHeight: '1.4' }],
        xs: ['14px', { lineHeight: '1.4' }],
        sm: ['16px', { lineHeight: '1.4' }],
        base: ['18px', { lineHeight: '1.8' }],
        lg: ['20px', { lineHeight: '1' }],
        xl: ['22px', { lineHeight: '1.8' }],
        '2xl': ['24px', { lineHeight: '1.8' }],
        '3xl': ['28px', { lineHeight: '1.8' }],
        '4xl': ['32px', { lineHeight: '1' }],
        '5xl': ['36px', { lineHeight: '1.2' }],
        '6xl': ['46px', { lineHeight: '1.2' }],
      },
    },
  },
  plugins: [],
}
