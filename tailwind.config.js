/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        fuji: "url('/src/assets/fuji.png')",
        gv: "url('/src/assets/gv1.jpg')",
      },
    },
    plugins: [],
  },
};
