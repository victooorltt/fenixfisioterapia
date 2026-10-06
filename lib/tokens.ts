export const tokens = {
  colors: {
    bg: "#ffffff",
    ink: "#111111",
    muted: "#52525b", // zinc-600
    subtle: "#71717a", // zinc-500
    border: "#e4e4e7", // zinc-200
    cardBg: "#ffffff",
    cardBgAlt: "#fafafa", // zinc-50
    accent: "#C61E49",
    accentHover: "#aa173d",
    accentLight: "#fff1f3",
    accentBorder: "#f8d3dc",
  },
  radius: {
    card: "rounded-2xl",
    button: "rounded-xl",
    input: "rounded-xl",
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
  maxWidth: "max-w-6xl",
  container: "mx-auto max-w-6xl px-6",
} as const;
