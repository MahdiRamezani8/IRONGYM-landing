/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      red: "#F00",
      white: "#fff",
      darkGray: "#121212",
      black: "#000",
      dargRGBA: "rgba(0, 0, 0, .8)",
      transparent: "rgba(0, 0, 0, 0)",
    },
    screens: {
      sm: "480px",
      sm2x: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      backgroundImage: {
        hero: "url('../src/images/hreo.png')",
        experience: "url('../src/images/experience.png')",
        trainer1: "url(../src/images/trainer1.png)",
        trainer2: "url(../src/images/trainer3.png)",
        trainer3: "url(../src/images/trainer2.png)",
        comments: "url(../src/images/comments.png)",
        gradient: "linear-gradient(to right, #000, transparent)",
        gradientToBottom: "linear-gradient(to bottom, #000, transparent)",
        darkGradient: "linear-gradient(to right, #000 60%, transparent)",
        lgbtGradient:
          "linear-gradient(45deg, blue, red, green, yellow, purple, aqua, darkred, darkblue, red, green, yellow, purple)",
      },
      boxShadow: {
        red: `-45px -45px 0px rgb(255, 0, 0),
         45px 45px 0px rgb(255,255,255)`,
      },
      backgroundSize: {
        400: "400%",
      },
      animation: {
        bgAnimation: "bgAnimation 20s linear infinite",
      },
      keyframes: {
        bgAnimation: {
          "0%": { backgroundPosition: "0 0" },
          "50%": { backgroundPosition: "400% 0" },
          "100%": { backgroundPosition: "0 0" },
        },
      },
    },
  },
  plugins: [],
};
