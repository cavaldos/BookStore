/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif", "ui-sans-serif", "system-ui"],
      },
      colors: {
        dark: "#1a202c",
        light: "#e2e8f0",
      },
      theme: {
        dark:{
          TextColor: "#e2e8f0",
          BackgroundColor: "#1a202c",
        },
        light:{
          TextColor: "red",
          BackgroundColor: "blue",
        }
      },
    },
  },
  plugins: [],
};
