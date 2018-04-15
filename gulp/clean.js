const gulp = require('gulp');
const shell = require('gulp-shell');

gulp.task(
	'clean',
	'clean',
	shell.task('rm -rf ./dist')
);
