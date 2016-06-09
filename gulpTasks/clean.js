var gulp = require('gulp');
var del = require('del');

var config = require('./config');

gulp.task(config.cleanReleaseFolderTask, function () {
    return del.sync(config.cleanReleasePath);
});