const path = require("path");

module.exports = {
  PORT: "1337",
  ROOT: path.resolve("./"),
  paths: {
    HTML: "build/index.html",
    SASS: "src/**/*.scss",
    JS: ["src/componenets/**/*.js", "src/js/*.js"],
    DEST_SRC: "dist/src",
    DEST_BUILD: "dist/build",
    DEST: "dist"
  },
  LIVERELOAD_PORT: "35729"
};
