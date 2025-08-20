/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#1e1e1e",
        sidebar: "#181818",
        card: "#242424",
        border: "#333",
        accent: "#3b82f6", // azul
        success: "#22c55e", // verde
      },
    },
  },
  plugins: [],
};
