module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Nunito'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        ink: {
          50: "#F5F3EE", 100: "#E8E4DA", 200: "#C9C3B3", 300: "#A89F8C",
          400: "#7A7265", 500: "#4E4840", 600: "#322E28", 700: "#1E1B17",
          800: "#141210", 900: "#0A0908",
        },
        gold: { 50:"#FFFBEB",100:"#FEF3C7",200:"#FDE68A",300:"#FCD34D",400:"#FBBF24",500:"#F59E0B",600:"#D97706" },
        sakura: { 100:"#FFD6E7",200:"#FFB3D1",300:"#FF80B3",400:"#FF4D95",500:"#E8196A" },
        void: "#0D0B09",
        surface: "#1A1713",
        card: "#211E19",
        border: "#2E2A23",
      },
    },
  },
  plugins: [],
};
