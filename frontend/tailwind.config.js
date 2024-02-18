/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5B483D",
        orange: "#e5930f",
        noir: "#000000",
        blanc: "#FFFFFF",
        rouge: "#ff0000",
        bleu: "#2200e5",
        gris: "#757575",
        maron: "#ecd0d0e8",
        vr: "#00B38A",
        rg: "#C24A76",
        bl: "#072967",
        gr: "#AAAABC",
        mr: "#412728c9",
        blc: "#F8F9ff",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
