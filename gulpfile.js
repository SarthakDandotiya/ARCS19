const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const cleanCSS = require("gulp-clean-css");
const htmlmin = require("gulp-htmlmin");
const uglify = require("gulp-uglify");
const purgecss = require("gulp-purgecss");

gulp.task("default", ["minifyHTML", "minifyImg", "minifyJS", "purgeCSS"]);

/**
 * CSS Minification
 */
gulp.task("purgeCSS", () => {
  gulp
    .src("src/css/*.css")
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(purgecss({ content: ["src/index.html"] }))
    .pipe(gulp.dest("./css"));
});

/**
 * JS Minification
 */
gulp.task("minifyJS", () => {
  gulp
    .src("src/js/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./js"));
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

  // Logos
  gulp
    .src("src/logos/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./logos"));
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
