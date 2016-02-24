var gulp = require('gulp');
var config = require('./config/gulp.config');
var webpack = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');
var lint = require('gulp-eslint');

var del = require('del');
var util = require('gulp-util');
var gulpsync = require('gulp-sync')(gulp)

gulp.task('bundle',gulpsync.sync(['lint','clean-build']), function() {
  return gulp.src('client/js/app.jsx')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('client/build/'));
});

gulp.task('lint',function() {

    return gulp.src(["client/js/**/*.js","client/js/**/*.jsx"])
        .pipe(lint({config : '.eslintrc.json'}))
        .pipe(lint.format())
        .pipe(lint.failAfterError());

});

gulp.task('watch',function() {
    gulp.watch(["client/js/**/*.js","client/js/**/*.jsx"],['bundle']);
});

gulp.task('clean-build',function(done) {
    log('Cleaning build');
    var path = config.build;
    clean(path,done);
});


function log(msg) {
    util.log(util.colors.yellow(msg));
}


function clean(path,done) {
    log('Cleaning: '+path);
    del(path).then(function (paths) {
        log('Cleaning Done');
        done();
    });
}
