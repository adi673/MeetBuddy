/** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }



import { flattenColorPalette } from 'tailwindcss/lib/util/flattenColorPalette';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        input: '0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)',
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  // Flatten the color palette from the theme
  const allColors = flattenColorPalette(theme('colors'));
  
  // Check if `allColors` is defined to avoid the "undefined" error
  if (!allColors) {
    console.error('Color palette is undefined!');
    return;
  }

  // Proceed to map colors to CSS variables if the palette exists
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({ ':root': newVars });
}

