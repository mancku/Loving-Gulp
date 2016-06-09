var gulp = require('gulp');
var del = require('del');

var config = require('./config');

gulp.task(config.cleanReleaseFolderTask, function () {
    return del.sync(config.cleanReleasePath);
});


var transpiledItems = [
    './js/controllers/utils.js',
    './js/controllers/**/*.d.ts',
    './js/maps/**',
];
gulp.task(config.cleanTranspilingResultTask, function () {
    return del.sync(transpiledItems);
});