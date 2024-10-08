/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend: {
        colors: {
          'custom-purple': '#6a13ff',
        },
      },
  },
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],
}