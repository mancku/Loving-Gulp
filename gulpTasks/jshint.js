var jshint = require('gulp-jshint');
var gulp = require('gulp');

var config = require('./config');

gulp.task(config.jsHintTask, function () {
    return gulp.src(config.notBundledJsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});