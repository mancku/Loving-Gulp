var gulp = require('gulp');
var del = require('del');

gulp.task('cleanReleaseFolder', function () {
    return del.sync('./build/Release/**');
});