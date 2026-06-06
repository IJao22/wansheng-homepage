export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#181313",
        paper: "#FEFEF2",
        rust: "#A9442F",
        amber: "#D8B45A",
        olive: "#6F7F68",
        mist: "#7C9AA6",
      },
      fontFamily: {
        serifPoster: [
          '"Noto Serif SC"',
          '"Songti SC"',
          '"SimSun"',
          "serif",
        ],
        sansClean: [
          '"Noto Sans SC"',
          '"Microsoft YaHei"',
          "system-ui",
          "sans-serif",
        ],
        condensed: [
          '"Arial Narrow"',
          '"Roboto Condensed"',
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
