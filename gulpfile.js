var gulp = require('gulp');
var del = require('del');
var minify = require('gulp-minify');
var del = require('del');
var modify = require('gulp-modify');

var filesToMove = [
    './src/**/*.css',
    './index.html',
    './learn.json',
];
var jsToCopy = [
    './src/**/*.js',
    './js/**/*.js',
];


gulp.task('default', ['copyJs'], function () {
    // the base option sets the relative root for the set of files,
    // preserving the folder structure
    return gulp.src(filesToMove, { base: './' })
        .pipe(modify({
            fileModifier: function (file, contents) {
                var fileName = file.history.toString();
                if (fileName.endsWith('index.html')) {
                    return contents.split(".js\"").join("-min.js\"");
                }
                return contents;
            }
        }))
        .pipe(gulp.dest('build/Release'));
});
gulp.task('copyJs', ['cleanReleaseFolder'], function () {
    return gulp.src(jsToCopy, { base: './' })
        .pipe(minify({
            noSource: true
        }))
        .pipe(gulp.dest('build/Release'));
});
gulp.task('cleanReleaseFolder', function () {
    return del.sync('./build/Release/**');
});