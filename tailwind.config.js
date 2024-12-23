/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'spartan': ['League Spartan', 'sans-serif'],
      },
      colors: {
        'theme-primary': {
          'main-background': '#3a4764',
          'toggle-background': '#232c43',
          'screen-background': '#182034',
          'key-background': '#637097',
          'key-hover': '#A2B3E1',
          'red-key-background': '#d03f2f',
          'red-key-hover': '#F96C5B',
          'orange-key-background': '#eae3dc',
          'text': '#444b5a',
          'white': '#ffffff',
        },
      },
      boxShadow: {
        'theme-primary-key': '0 4px 0 #404e72',
        'theme-primary-red-key': '0 4px 0 #93261a',
        'theme-primary-orange-key': '0 4px 0 #b4a597',
      },
    },
  },
  plugins: [],
}

