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
          'main-background': 'hsl(222, 26%, 31%)',
          'toggle-background': 'hsl(223, 31%, 20%)',
          'screen-background': 'hsl(224, 36%, 15%)',
          'key-background': 'hsl(225, 21%, 49%)',
          'key-shadow': 'hsl(224, 28%, 35%)',
          'red-key-background': 'hsl(6, 63%, 50%)',
          'red-key-shadow': 'hsl(6, 70%, 34%)',
          'orange-key-background': 'hsl(30, 25%, 89%)',
          'orange-key-shadow': 'hsl(28, 16%, 65%)',
          'text': 'hsl(221, 14%, 31%)',
          'white': 'hsl(0, 0%, 100%)',
        },
      }
    },
  },
  plugins: [],
}

