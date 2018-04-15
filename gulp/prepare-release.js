const Vet = require('vet');
const { optional } = Vet;
const { matches } = Vet.Object;
const { assert } = Vet.Utils;

const { InSeries, InParallel, PassThrough } = require('uchain');

const gulp = require('gulp');

const JSONEditor = require('gulp-json-editor');

const semver = require('semver');

const shell = require('gulp-shell');

const needsVersion = matches({
	isMajor: false,
	isMinor: false,
	isPatch: false,
});

const ParseOptions = (next) => {
	const ARGS = process.argv.slice(3);

	const options = {
		isMajor: ARGS.indexOf('--major') !== -1,
		isMinor: ARGS.indexOf('--minor') !== -1,
		isPatch: ARGS.indexOf('--patch') !== -1,
	};

	if (needsVersion(options)) {
		throw new Error('You must specify version increment: must add --major, --minor, or --patch to the command');
	}

	next(null, options);
};

const BuildMajorRelease = (next, options) => {
	const task = gulp
		.src('package.json')
		.pipe(
			JSONEditor(
				(json) => {
					json.version = semver.inc(json.version, 'major');
					return json;
				},
				{ 'indent_char': '\t', 'indent_size': 1 }
			)
		)
		.pipe(gulp.dest('./'));

	next(null, task);
};

const BuildMinorRelease = (next, options) => {
	const task = gulp
		.src('package.json')
		.pipe(
			JSONEditor(
				(json) => {
					json.version = semver.inc(json.version, 'minor');
					return json;
				},
				{ 'indent_char': '\t', 'indent_size': 1 }
			)
		)
		.pipe(gulp.dest('./'));

	next(null, task);
};


const BuildPatchRelease = (next, options) => {
	const task = gulp
		.src('package.json')
		.pipe(
			JSONEditor(
				(json) => {
					json.version = semver.inc(json.version, 'patch');
					return json;
				},
				{ 'indent_char': '\t', 'indent_size': 1 }
			)
		)
		.pipe(gulp.dest('./'));

	next(null, task);
};




const TASK = InSeries(
	ParseOptions,
	(next, options) => {
		const { isMajor, isMinor, isPatch } = options;
		if (isMajor) {
			BuildMajorRelease(next, options);
		} else if (isMinor) {
			BuildMinorRelease(next, options);
		} else {
			BuildPatchRelease(next, options);
		}
	}
);


gulp.task(
	'prepare-release-build',
	shell.task('gulp clean && gulp build')
);

gulp.task(
	'prepare-release',
	'prepare a release version',
	[ 'prepare-release-build' ],
	TASK
);
