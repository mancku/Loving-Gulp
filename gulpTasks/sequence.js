var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('buildReleaseSequence', function () {
    return runSequence('cleanReleaseFolder',
        ['copyJs', 'moveFiles']);
});