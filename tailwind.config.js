/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,vue,jsx,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        "weather-primary": "#00668A",
        "weather-secondary": "#004E71",
      },
    },
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
