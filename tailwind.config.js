/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "475px",
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
    },
  },
  plugins: [],
};
