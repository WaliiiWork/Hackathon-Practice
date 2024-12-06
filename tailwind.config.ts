import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-xs': { max: '400px' }, // Targets screens smaller than 300px
        'max-sm': { max: '639px' }, // Targets screens smaller than 640px
        'max-md': { max: '767px' }, // Targets screens smaller than 768px
        'max-lg': { max: '1023px' }, // Targets screens smaller than 1024px
        'max-xl': { max: '1279px' }, // Targets screens smaller than 1280px
        'max-2xl': { max: '1535px' }, // Targets screens smaller than 1536px
      },
      colors: {
        // Existing CSS variables
        background: "var(--background)",
        foreground: "var(--foreground)",
        
        // Custom colors
        black: "#000000", // Base black
        grayDark: "#656565",
        grayMedium: "#696969",
        beige: "#f2ece4",
        lightGray: "#f2f1f1",
        cream: "#fbfaf6",
        white: "#ffffff",
        dark: "#1b1b1b",
        navyGray: "#2e3644",
        blue: "#3860be",
        grayDarker: "#555555",
        grayLighter: "#5c5c5c",
        blackTransparent: {
          0: "rgba(0, 0, 0, 0)", // opacity 0%
          50: "rgba(0, 0, 0, 0.5)", // opacity 50%
        },
      },
      fontSize: {
        'xs': '0.75rem',  // Example of extending default font sizes
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        // Add custom sizes as needed
        '10xl': '10rem',
        '20xl': '20rem',
        '50xl': '50rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
