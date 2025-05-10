import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./public/**/*.html"],
  theme: {
    extend: {
      // Future customizations can go here
    },
  },
  plugins: [],
};

export default config;
