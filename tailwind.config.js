/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      xs: '340px',
      sm: '414px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        primary: "#5DAA92",
        secondary: "#A3F2BF",
        icons: '#87EFAD',
        colorTitleBold: '#0D815D',
        colorHeaderTitle: '#047857',
        btnColor: '#8AEDAF',
        fromGradientTitle: "#33D296",
        toGradientTitle: "#22C560",
        fromGradientBtn: "#86efac",
        toGradientBtn: "#83EEAA",
        textDark: '#052e16ab',
        ['green-50']: '#e6f6ec',
        ['green-100']: '#b0e3c3',
        ['green-200']: '#8ad6a6',
        ['green-300']: '#54c37e',
        ['green-400']: '#33b865',
        ['green-500']: '#00a63e',
        ['green-600']: '#009738',
        ['green-700']: '#00762c',
        ['green-800']: '#005b22',
        ['green-900']: '#00461a',
        ['emerald-50']: '#e6edeb',
        ['emerald-100']: '#b0c7c1',
        ['emerald-200']: '#8aaca3',
        ['emerald-300']: '#548678',
        ['emerald-400']: '#336e5e',
        ['emerald-500']: '#004a36',
        ['emerald-600']: '#004331',
        ['emerald-700']: '#003526',
        ['emerald-800']: '#00291e',
        ['emerald-900']: '#001f17',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      fontSize: {
        xs: ['18px', { lineHeight: '1.6' }],
        sm: ['20px', { lineHeight: '1.8' }],
        base: ['22px', { lineHeight: '1.5' }],
        lg: ['24px', { lineHeight: '1.4' }],
        xl: ['28px', { lineHeight: '1.3' }],
        '2xl': ['32px', { lineHeight: '1.3' }],
        '3xl': ['36px', { lineHeight: '1.2' }],
        '4xl': ['42px', { lineHeight: '1.2' }],
        '5xl': ['48px', { lineHeight: '1.1' }],
        '6xl': ['56px', { lineHeight: '1.1' }],
      },
    },
  },
  plugins: [],
}
