var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    njkRender = require('gulp-nunjucks-render'),
    htmlPrettify = require('gulp-html-prettify'),
    rtlcss = require('gulp-rtlcss'),
    rename = require('gulp-rename');



//
// Main
//

gulp.task('sass-main', function () {
  return gulp.src('assets/include/scss/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(autoprefixer(['last 5 versions', '> 1%'], {cascade: true}))
    .pipe(gulp.dest('assets/css/'))
});

gulp.task('njk-main', function () {
  return gulp.src('assets/include/nunjucks/pages/**/*.njk')
    .pipe(njkRender())
    .pipe(htmlPrettify({
      indent_size: 2
    }))
    .pipe(gulp.dest(''));
});



//
// Admin
//

gulp.task('sass-admin', function () {
  return gulp.src('admin-template/assets/include/scss/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(autoprefixer(['last 5 versions', '> 1%'], {cascade: true}))
    .pipe(gulp.dest('admin-template/assets/css/'))
});

gulp.task('njk-admin', function () {
  return gulp.src('admin-template/assets/include/nunjucks/pages/**/*.njk')
    .pipe(njkRender())
    .pipe(htmlPrettify({
      indent_size: 2
    }))
    .pipe(gulp.dest('admin-template/'));
});



//
// One Page
//

gulp.task('sass-op', function () {
  return gulp.src('one-pages/charity/assets/scss/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(autoprefixer(['last 5 versions', '> 1%'], {cascade: true}))
    .pipe(gulp.dest('one-pages/charity/assets/css/'))
});

gulp.task('sass-op-rtl', function () {
  return gulp.src('one-pages/charity/assets/scss/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(autoprefixer(['last 5 versions', '> 1%'], {cascade: true}))
    .pipe(rtlcss())
    .pipe(rename({ suffix: '-rtl' }))
    .pipe(gulp.dest('rtl/one-pages/charity/assets/css/'));
});



//
// E-commerce
//

gulp.task('sass-ec', function () {
  return gulp.src('e-commerce/assets/scss/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(autoprefixer(['last 5 versions', '> 1%'], {cascade: true}))
    .pipe(gulp.dest('e-commerce/assets/css/'))
});

gulp.task('sass-ec-rtl', function () {
  return gulp.src('e-commerce/assets/scss/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(autoprefixer(['last 5 versions', '> 1%'], {cascade: true}))
    .pipe(rtlcss())
    .pipe(rename({ suffix: '-rtl' }))
    .pipe(gulp.dest('rtl/e-commerce/assets/css/'));
});



//
// Multipages
//

gulp.task('sass-mp', function () {
  return gulp.src('multipage/marketing/assets/scss/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(autoprefixer(['last 5 versions', '> 1%'], {cascade: true}))
    .pipe(gulp.dest('multipage/marketing/assets/css/'))
});

gulp.task('sass-mp-rtl', function () {
  return gulp.src('multipage/marketing/assets/scss/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(autoprefixer(['last 5 versions', '> 1%'], {cascade: true}))
    .pipe(rtlcss())
    .pipe(rename({ suffix: '-rtl' }))
    .pipe(gulp.dest('rtl/multipage/marketing/assets/css/'));
});



//
// Blog & Magazine
//

gulp.task('sass-bm', function () {
  return gulp.src('multipage/blog-magazine/classic/assets/scss/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(autoprefixer(['last 5 versions', '> 1%'], {cascade: true}))
    .pipe(gulp.dest('multipage/blog-magazine/classic/assets/css/'))
});

gulp.task('sass-bm-rtl', function () {
  return gulp.src('multipage/blog-magazine/classic/assets/scss/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(autoprefixer(['last 5 versions', '> 1%'], {cascade: true}))
    .pipe(rtlcss())
    .pipe(rename({ suffix: '-rtl' }))
    .pipe(gulp.dest('rtl/multipage/blog-magazine/classic/assets/css/'));
});



//
// Watch
//

gulp.task('watch', function() {
  gulp.watch(['assets/include/scss/**/*.scss'], ['sass-main']);
  gulp.watch('assets/include/nunjucks/**/*.njk', ['njk-main']);

  gulp.watch('admin-template/assets/include/scss/**/*.scss', ['sass-admin']);
  gulp.watch('admin-template/assets/include/nunjucks/**/*.njk', ['njk-admin']);

  gulp.watch('multipage/marketing/assets/scss/**/*.scss', ['sass-mp']);

  gulp.watch('one-pages/charity/assets/scss/**/*.scss', ['sass-op']);

  // gulp.watch(['assets/include/scss/**/*.scss', 'one-pages/accounting/assets/scss/**/*.scss'], ['sass-op']);
  // gulp.watch(['assets/include/scss/**/*.scss', 'rtl/one-pages/accounting/assets/scss/**/*.scss'], ['sass-op-rtl']);
});

gulp.task('default', ['watch']);