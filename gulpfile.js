var gulp = require('gulp');
var minify = require('gulp-minify');

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
        .pipe(gulp.dest('build/Release'));
});
gulp.task('copyJs', function () {
    return gulp.src(jsToCopy, { base: './' })
        .pipe(gulp.dest('build/Release'));
});