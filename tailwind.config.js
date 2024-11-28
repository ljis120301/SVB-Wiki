/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: {
  				DEFAULT: "#eff1f5",
  				dark: "#303446"
  			},
  			foreground: {
  				DEFAULT: "#4c4f69",
  				dark: "#c6d0f5"
  			},
  			primary: {
  				DEFAULT: "#7287fd",
  				foreground: "#eff1f5",
  				dark: "#8caaee",
  				"dark-foreground": "#303446"
  			},
  			secondary: {
  				DEFAULT: "#e6e9ef",
  				foreground: "#4c4f69",
  				dark: "#414559",
  				"dark-foreground": "#c6d0f5"
  			},
  			muted: {
  				DEFAULT: "#ccd0da",
  				foreground: "#6c6f85",
  				dark: "#51576d",
  				"dark-foreground": "#b5bfe2"
  			},
  			accent: {
  				DEFAULT: "#dc8a78",
  				foreground: "#eff1f5",
  				dark: "#f4b8e4",
  				"dark-foreground": "#303446"
  			},
  			destructive: {
  				DEFAULT: "#d20f39",
  				foreground: "#eff1f5",
  				dark: "#e78284",
  				"dark-foreground": "#303446"
  			},
  			border: {
  				DEFAULT: "#8c8fa1",
  				dark: "#737994"
  			},
  			input: {
  				DEFAULT: "#dce0e8",
  				dark: "#414559"
  			},
  			ring: {
  				DEFAULT: "#7287fd",
  				dark: "#8caaee"
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
