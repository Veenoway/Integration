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
          90: "rgba(255, 255, 255, 0.9)",
          80: "rgba(255, 255, 255, 0.8)",
          70: "rgba(255, 255, 255, 0.7)",
          60: "rgba(255, 255, 255, 0.6)",
          50: "rgba(255, 255, 255, 0.5)",
          40: "rgba(255, 255, 255, 0.4)",
          30: "rgba(255, 255, 255, 0.3)",
          20: "rgba(255, 255, 255, 0.2)",
          10: "rgba(255, 255, 255, 0.1)",
          black: "#090909",
        },
      },
    },
  },
  plugins: [],
};
export default config;
