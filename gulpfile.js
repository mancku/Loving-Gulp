var gulp = require('gulp');

var tasks =  require('require-dir')('./gulpTasks');
var config = require('./gulpTasks/config');

gulp.task('default', [config.buildReleaseSequenceTask], function () {
});
