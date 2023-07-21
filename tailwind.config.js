/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      },
      screens: {
        xs: "475px",
        mx: "1065px",
      },
      colors: {
        primary: "#111827",
        secondary: {
          normal: "var(--secondary-color)",
          hover: "#4F46E5",
        },
        border: "var(--border-color)",
        container: "#0E131E",
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleX(0)' },
          '80%': { transform: 'scaleX(1.2)' },
          '0%': { transform: 'scaleX(1)' },
        },
      }, 
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      },
    },
    plugins: [],
  },
};
