import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "col-span-1",
    "col-span-2",
    "col-span-3",
    "col-span-4",
    "col-span-5",
    "col-span-6",
    "col-span-7",
    "col-span-8",
    "col-span-9",
    "col-span-10",
    "col-span-11",
    "col-span-12"
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
      "overlay": "#0008",
      "black": "#000",
      "white": "#fff",
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
