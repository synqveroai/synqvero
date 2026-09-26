/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#050816",
          surface: "#0B1020",
          card: "#0E1528",
          cardHover: "#131C35",
          border: "rgba(255, 255, 255, 0.08)",
          borderHover: "rgba(24, 200, 239, 0.35)",
          cyan: "#18C8EF",
          blue: "#3268F2",
          purple: "#7544ED",
          text: "#F7F9FF",
          muted: "#9AA7C0",
          dim: "#5B6882",
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-synq': 'linear-gradient(135deg, #18C8EF 0%, #3268F2 50%, #7544ED 100%)',
        'gradient-cyan-blue': 'linear-gradient(135deg, #18C8EF 0%, #3268F2 100%)',
        'gradient-blue-purple': 'linear-gradient(135deg, #3268F2 0%, #7544ED 100%)',
        'radial-glow': 'radial-gradient(circle at 50% 50%, rgba(24, 200, 239, 0.15) 0%, rgba(50, 104, 242, 0.08) 45%, transparent 70%)',
        'purple-glow': 'radial-gradient(circle at 50% 50%, rgba(117, 68, 237, 0.15) 0%, transparent 70%)',
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(24, 200, 239, 0.35)',
        'glow-purple': '0 0 25px -5px rgba(117, 68, 237, 0.35)',
        'glow-subtle': '0 0 40px -10px rgba(50, 104, 242, 0.2)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
