/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#F9FAFB",
        surface: "#FFFFFF",
        border: "#E5E7EB",
        "text-primary": "#111827",
        "text-secondary": "#6B7280",
        "text-muted": "#9CA3AF",
        accent: "#185FA5",
        "accent-bg": "#EFF6FF",
        "hero-bg": "#0D1117",
      },
    },
  },
  plugins: [],
};
