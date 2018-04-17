
require('gulp-help')(
	require('gulp'),
	{ hideEmpty: true, hideDepsMessage: true }
);

require('./build');
require('./clean');
require('./docs');

require('./prepare-release');
require('./publish-release');

require('./test');
