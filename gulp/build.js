const gulp = require('gulp');
// const shell = require('gulp-shell');

gulp.task(
	'build',
	'build',
	[ 'clean' ],
	() => gulp.src('./src/*.js').pipe(gulp.dest('./dist'))
);
