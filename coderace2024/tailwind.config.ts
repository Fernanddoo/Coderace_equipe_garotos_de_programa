import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'custom-1': '#4C4C4C',
        'custom-2': '#CFCFCF',
        'custom-3': '#00A97F',
        'custom-4': '#646273',
        'custom-5': '#158A8D',
        'custom-6': '#272727',
        neon: '#00a97f',

      },
      borderColor: {
        neon: '#00a97f',
      },
      backgroundColor: {
        neon: '#00a97f',
      },
    },
  },
  plugins: [],
};
export default config;
