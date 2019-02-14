const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const cleanCSS = require("gulp-clean-css");
const htmlmin = require("gulp-htmlmin");
const uglify = require("gulp-uglify");
const purgecss = require("gulp-purgecss");
const responsive = require("gulp-responsive");

// gulp.task("default", ["minifyHTML", "minifyImg", "minifyJS", "purgeCSS"]);
gulp.task("default", [
  "minifyHTML",
  "minifyImg",
  "minifyJS",
  "purgeCSS",
  "images"
]);

/**
 * CSS Minification
 */
gulp.task("purgeCSS", () => {
  gulp
    .src("src/css/*.css")
    .pipe(cleanCSS({ compatibility: "ie8" }))
    // .pipe(purgecss({ content: ["src/index.html"] }))
    .pipe(gulp.dest("./css"));
});

/**
 * JS Minification
 */
gulp.task("minifyJS", () => {
  gulp
    .src("src/scripts/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./scripts"));
});

gulp.task("images", function() {
  return gulp
    .src("src/images/*.{jpg,png}")
    .pipe(
      responsive(
        {
          "*.jpg": { width: "90%" },
          "*.png": { width: "90%" }
        },
        {
          quality: 90,
          progressive: true,
          compressionLevel: 2,
          withMetadata: false
        }
      )
    )
    .pipe(gulp.dest("./images"));
});

/**
 * Image min
 */
gulp.task("minifyImg", () => {
  // Images
  gulp
    .src("src/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./images"));
});

/**
 * HTML minification
 */
gulp.task("minifyHTML", () => {
  gulp
    .src("src/*.html")
    .pipe(htmlmin({ removeComments: true, collapseWhitespace: true }))
    .pipe(gulp.dest("."));
});
