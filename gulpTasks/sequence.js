var gulp = require('gulp');
var runSequence = require('run-sequence');

var config = require('./config');

gulp.task(config.buildReleaseSequenceTask, function () {
    return runSequence(config.cleanReleaseFolderTask,
        [config.copyJsTask, config.moveFilesTask]);
});