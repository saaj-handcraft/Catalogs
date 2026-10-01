import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#26231f",
        paper: "#fffaf2",
        surface: "#f5eddf",
        terracotta: "#a94029",
        marigold: "#d7a12d",
        leaf: "#3d5c43",
      },
      maxWidth: { content: "76rem" },
    },
  },
  plugins: [],
};

export default config;