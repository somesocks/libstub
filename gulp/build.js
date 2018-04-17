const gulp = require('gulp');
// const shell = require('gulp-shell');

gulp.task(
	'build',
	'build',
	[ 'clean', 'docs' ],
	() => gulp.src('./src/*.js').pipe(gulp.dest('./dist'))
);
