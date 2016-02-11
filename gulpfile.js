var gulp = require('gulp');
var webpack = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');
var lint = require('gulp-eslint');


gulp.task('bundle', function() {
  return gulp.src('client/js/app.jsx')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('dist/'));
});

gulp.task('lint',function() {

    return gulp.src(["client/js/**/*.*"])
        .pipe(lint({config : '.eslintrc.json'}))
        .pipe(lint.format())
        .pipe(lint.failAfterError());

});

gulp.task('watch',function() {
    gulp.watch(["client/js/**/*.*"],['lint']);
});

