var gulp = require('gulp');
var runSequence = require('run-sequence');

var config = require('./config');

//With this order we ensure a complete clean up 
//and then transpile the files before copying and minifying them
gulp.task(config.buildReleaseSequenceTask, function () {
    return runSequence([config.cleanReleaseFolderTask, config.cleanTranspilingResultTask],
        config.transpileTsTask,
        [config.copyJsTask, config.moveFilesTask]);
});