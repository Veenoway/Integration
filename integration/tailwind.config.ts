import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-actuality":
          "linear-gradient(90deg, #88acda 0%, #9c92ca 100%)",
      },
      colors: {
        font: {
          100: "rgba(255, 255, 255, 1)",
          50: "#919191",
          black: "#090909",
        },
        "grey-border": "#E5E5E5",
        "dark-purple": "#710D82",
        purple: "#8B3798",
      },
    },
  },
  plugins: [],
};
export default config;
