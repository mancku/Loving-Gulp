var gulp = require('gulp');
var config = require('./config.js');

gulp.watch(config.filesToTranspile, [config.transpileSequenceTask])
	.on('change', function (event) {
		logWatcherEvent(event);
	});

gulp.watch(config.filesToMove, [config.moveFilesSequenceTask])
	.on('change', function (event) {
		logWatcherEvent(event);
	});

function logWatcherEvent(event) {
	console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}
