/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ds-black': '#0a0a0a',
        'ds-gray': '#1a1a1a',
        'ds-charcoal': '#2d2d2d',
        'ds-parchment': '#f5f5dc',
        'ds-blood': '#8b0000',
        'ds-ember': '#ff4500',
        'ds-gold': '#d4af37', // Añadimos un dorado gótico para mejor contraste y acentos
      },
      fontFamily: {
        heading: ['"Grenze Gotisch"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        cascadia: ['"Cascadia Code"', '"JetBrains Mono"', 'monospace'], // Añadimos Cascadia Code solicitado por el usuario
        serif: ['"JetBrains Mono"', 'monospace'], // Reutilizamos serif para el estilo técnico que el usuario busca
      },
      backgroundImage: {
        'sketch-texture': "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')",
      }
    },
  },
  plugins: [],
}
