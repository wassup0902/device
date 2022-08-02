const gulp         = require("gulp");
const plumber      = require("gulp-plumber");
const sourcemap    = require("gulp-sourcemaps");
const sass         = require("gulp-sass")(require("sass"));
const postcss      = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const csso         = require("gulp-csso");
const rename       = require("gulp-rename");
const browsersync  = require("browser-sync").create();
const terser       = require("gulp-terser");
const imagemin     = require("gulp-imagemin");
const webp         = require("gulp-webp");
const svgstore     = require("gulp-svgstore");
const del          = require("del");
const debug        = require("gulp-debug");
const newer        = require("gulp-newer");
const notify       = require("gulp-notify");

gulp.task("clean", function() { //удаляем папку build перед сборкой
  return del("build");
});

gulp.task("copyHtml", function() { //копируем html страницы
  return gulp.src("source/**/*.html",
    {
      base: "source",
      since: gulp.lastRun("copyHtml")
    })
  .pipe(newer("build"))
  .pipe(gulp.dest("build"))
});

gulp.task("copyFonts", function() { //копируем шрифты
  return gulp.src("source/fonts/**/*.{woff,woff2}",
    {
      base: "source",
      since: gulp.lastRun("copyFonts")
    })
  .pipe(newer("build"))
  .pipe(gulp.dest("build"))
});

gulp.task("stylesIndex", function() { //конвертация scss в css и минификация
  return gulp.src("source/sass/index.scss")
  .pipe(plumber({
    errorHandler: notify.onError(function(err) {
      return {
        title: "stylesIndex",
        message: err.message
      };
    })
  }))
  .pipe(sourcemap.init())
  .pipe(sass())
  .pipe(postcss([
    autoprefixer()
    ]))
  .pipe(rename("index.css"))
  .pipe(sourcemap.write("."))
  .pipe(gulp.dest("build/css"))
  .pipe(csso())
  .pipe(rename("index.min.css"))
  .pipe(sourcemap.write("."))
  .pipe(gulp.dest("build/css"))
});

gulp.task("stylesNormalize", function() { //конвертация scss в css и минификация
  return gulp.src("source/sass/normalize.scss")
  .pipe(plumber({
    errorHandler: notify.onError(function(err) {
      return {
        title: "stylesNormalize",
        message: err.message
      };
    })
  }))
  .pipe(sourcemap.init())
  .pipe(sass())
  .pipe(postcss([
    autoprefixer()
    ]))
  .pipe(rename("normalize.css"))
  .pipe(sourcemap.write("."))
  .pipe(gulp.dest("build/css"))
  .pipe(csso())
  .pipe(rename("normalize.min.css"))
  .pipe(sourcemap.write("."))
  .pipe(gulp.dest("build/css"))
});

gulp.task("copyCssImages", function() { //копирование картинок подключаемых в scss в css и оптимизация
  return gulp.src("source/sass/**/*.{svg,png,jpg}",
    {
      base: "source/sass"
      //since: gulp.lastRun("copyCssImages")
    })
  .pipe(newer("build/css"))
  .pipe(imagemin([
    imagemin.gifsicle({interlaced: true}),
    imagemin.optipng({optimizationLevel: 3}),
    imagemin.mozjpeg({quality: 75, progressive: true}),
    imagemin.svgo({
      plugins: [
        {removeViewBox: true},
        {cleanupIDs: false}
      ]
    })
  ]))
  .pipe(gulp.dest("build/css"))
});

gulp.task("copyImages", function() { //копирование картинок подключаемых в html и оптимизация
  return gulp.src("source/img/**/*.{svg,png,jpg}",
    {
      base: "source"
      //since: gulp.lastRun("copyImages")
    })
  .pipe(newer("build"))
  .pipe(imagemin([
    imagemin.gifsicle({interlaced: true}),
    imagemin.optipng({optimizationLevel: 3}),
    imagemin.mozjpeg({quality: 75, progressive: true}),
    imagemin.svgo({
      plugins: [
        {removeViewBox: true},
        {cleanupIDs: false}
      ]
    })
  ]))
  .pipe(gulp.dest("build"))
});

gulp.task("scripts", function () {
  return gulp.src("source/js/**/*.js")
  .pipe(terser())
  //.pipe(rename("*.min.js"))
  .pipe(gulp.dest("build/js"))
  .pipe(browsersync.stream())
});

gulp.task("build", gulp.series("clean", gulp.parallel("copyHtml", "stylesIndex", "stylesNormalize", "copyFonts", "copyCssImages", "copyImages", "scripts")));

gulp.task("watch", function() {
  gulp.watch("{source/sass/**/*.scss, !source/sass/normalize.scss}", gulp.series("stylesIndex"));

  gulp.watch("source/sass/normalize.scss", gulp.series("stylesNormalize"));

  gulp.watch("source/**/*.html", gulp.series("copyHtml"));

  gulp.watch("source/js/**/*.js", gulp.series("scripts"));

  gulp.watch("source/sass/**/*.{svg,png}", gulp.series("copyCssImages"));

  gulp.watch("source/img/**/*.{svg,png,jpg}", gulp.series("copyImages"));

  gulp.watch("source/fonts/**/*.{woff,woff2}", gulp.series("copyFonts"));
});

gulp.task("serve", function() {
  browsersync.init({
    server: "build"
  });

  browsersync.watch("build/**/*.*").on("change", browsersync.reload);
});

gulp.task("dev",
  gulp.series("build",
    gulp.parallel("watch", "serve")
  )
);
