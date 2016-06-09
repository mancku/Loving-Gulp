var gulp = require('gulp');

var tasks =  require('require-dir')('./gulpTasks');

gulp.task('default', ['buildReleaseSequence'], function () {
});
