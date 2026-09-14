/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)",
        surface: "var(--surface)",
        "surface-strong": "var(--surface-strong)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        line: "var(--line)",
        gold: "var(--gold)",
        "gold-soft": "var(--gold-soft)",
        teal: "var(--teal)",
        "teal-soft": "var(--teal-soft)",
        blue: "var(--blue)",
        clay: "var(--clay)",
      }
    },
  },
  plugins: [],
}
