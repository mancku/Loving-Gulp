var gulp = require('gulp');
var gulpTS = require('gulp-typescript');
var merge = require('merge2');
var sourcemaps = require('gulp-sourcemaps');
var gulpNgConfig = require('gulp-ng-config');

var config = require('./config.js');

function getTypescriptConfig() {
    return gulpTS({
        declaration: true,
        noExternalResolve: false,
        sortOutput: true,

        target: "ES5",
        module: "amd",
        noImplicitAny: true,
        removeComments: true,
        preserveConstEnums: true,
        sourceMap: true,
        diagnostics: true
    });
}

gulp.task(config.transpileTsTask, function () {

    var tsResult = gulp.src(config.filesToTranspile)
        .pipe(sourcemaps.init())
        .pipe(getTypescriptConfig());

    return merge([
        tsResult.dts.pipe(gulp.dest('./js')),
        tsResult.js
            // .pipe(concat('public.js'))
            // .pipe(minify())
            .pipe(sourcemaps.write('maps'))
            .pipe(gulp.dest('./js'))
    ]);
});

gulp.task(config.angularConstantsTask, function () {
    return gulp.src(config.angularConfigFile)
        .pipe(gulpNgConfig('app.config'))
        .pipe(gulp.dest('./js'));
});