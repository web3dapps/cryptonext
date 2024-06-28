/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}', // Include the app directory
    './layouts/**/*.{js,ts,jsx,tsx}', // Include the layouts directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
