/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'brand': '#FE8303',
      'text': '#F0E3CA',
      'bg': '#32312E',
      'bgdark': '#21221C',
    },
  },
  // plugins: [require('prettier-plugin-tailwindcss')],
}

