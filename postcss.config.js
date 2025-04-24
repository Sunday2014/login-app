export default {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: [
        "last 1 version",
        "> 1%",
        "maintained node versions",
        "not dead"
      ]
    },
    "postcss-preset-env": {}

  }
}
