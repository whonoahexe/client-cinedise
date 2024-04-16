import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "white-primary": "#D8DEE6",
      "white-secondary": "#E2E8F0",
      "white-tertiary": "#F1F5F9",
      "black-primary": "#0C0C0D",
      "black-secondary": "#19191B",
      "black-tertiary": "#212124",
      "accent-primary": "#FFA4AA",
      "accent-secondary": "#ffa4aa66",
      "accent-tertiary": "#ffa4aa33",
      "overlay": "#0008"
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
