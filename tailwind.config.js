/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
import keepPreset from "keep-react/src/keep-preset.js";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  
  theme: {
    extend: {
      colors: {
        neutralSilver: "#F5F7FA",
        neutralDGray: "#4D4D4D",
        brandPrimary: "#4CAF4F",
        neutralGray: "#717171",
        gray900: "#18191F",
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
