var gulp = require('gulp');
var modify = require('gulp-modify');
var minify = require('gulp-minify');

var config = require('./config');

gulp.task(config.moveFilesTask, function () {
    // the base option sets the relative root for the set of files,
    // preserving the folder structure
    return gulp.src(config.filesToMove, { base: './' })
        .pipe(modify({
            fileModifier: function (file, contents) {
                var fileName = file.history.toString();
                if (fileName.endsWith('index.html')) {
                    return contents.split(".js\"").join(config.minifiedJsSufix + "\"");
                }
                return contents;
            }
        }))
        .pipe(gulp.dest(config.filesDestination));
});

gulp.task(config.copyJsTask, function () {
    return gulp.src(config.jsToCopy, { base: './' })
        .pipe(minify({
            noSource: config.copySourceOnMinify
        }))
        .pipe(gulp.dest(config.filesDestination));
});
