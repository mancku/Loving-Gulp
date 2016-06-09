var gulp = require('gulp');
var del = require('del');

var config = require('./config');

gulp.task(config.cleanReleaseFolderTask, function () {
    return del.sync(config.cleanReleasePath);
});


gulp.task(config.cleanTranspilingResultTask, function () {
    return del.sync(config.transpiledItems);
});

gulp.task(config.cleanMovedFilesTask, function () {
    return del.sync(config.destinationMovedFiles);
});