var gulp = require('gulp');

var filesToMove = [
    './src/**/*.css',
    './src/**/*.js',
    './js/**/*.js',
    './index.html',
    './learn.json'
];


gulp.task('default', function () {
        // the base option sets the relative root for the set of files,
    // preserving the folder structure
    return gulp.src(filesToMove, { base: './' })
        .pipe(gulp.dest('build/Release'));
});