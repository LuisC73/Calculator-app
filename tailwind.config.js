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
        'theme-secondary': {
          'main-background': '#e6e6e6',
          'toggle-background': '#d1cccc',
          'screen-background': '#ededed',
          'key-background': '#377f86',
          'key-hover': '#62B5BD',
          'orange-key-background': '#ca5502',
          'orange-key-hover': '#FF8B38',
          'yellow-key-background': '#e5e4e1',
          'text': '#35352c',
        },
        'theme-tertiary': {
          'main-background': '#160628',
          'toggle-background': '#1d0934',
          'screen-background': '#1d0934',
          'key-background': '#58077d',
          'key-hover': '#8333B0',
          'cyan-key-background': '#00e0d1',
          'cyan-key-hover': '#94FFF9',
          'violet-key-background': '#341c4f',
          'violet-key-hover': '#6B34AC',
          'text-yellow': '#ffe53d',
          'text': '#1b2428',
        }
      },
      boxShadow: {
        'theme-primary-key': '0 4px 0 #404e72',
        'theme-primary-red-key': '0 4px 0 #93261a',
        'theme-primary-orange-key': '0 4px 0 #b4a597',
        'theme-secondary-key': '0 4px 0 #1b5f65',
        'theme-secondary-orange-key': '0 4px 0 #893901',
        'theme-secondary-yellow-key': '0 4px 0 #a69d91',
        'theme-tertiary-key': '0 4px 0 #bc15f4',
        'theme-tertiary-cyan-key': '0 4px 0 #6cf9f2',
        'theme-tertiary-violet-key': '0 4px 0 #871c9c',
      },
    },
  },
  plugins: [],
}

