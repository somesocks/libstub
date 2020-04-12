/* eslint-env mocha */

const assert = require('vet/utils/assert');

const libstub = require('./libstub');

describe('libstub, tests', () => {
	it('test 1', () => {
		libstub.export('test1', 123);
		let res = libstub.import('test1');

		assert(res === 123, 'import failed');
	});

	it(
		'loading with default works',
		() => {
			const res = libstub.import('no_lib', 'foo');
			assert(res === 'foo', 'default failed');
		}
	);

	it(
		'lazy-loading with default works',
		() => {
			const res = libstub.import('no_lib', libstub.lazy(() => 'foo'));
			assert(res === 'foo', 'lazy-loading failed');
		}
	);

	it(
		'multi-export works',
		() => {
			const res = libstub.export({
				'multi-foo': 'multi-foo-lib',
				'multi-bar': 'multi-bar-lib',
			});

			assert(libstub.import('multi-foo') === 'multi-foo-lib', 'multi-export failed');
			assert(libstub.import('multi-bar') === 'multi-bar-lib', 'multi-export failed');
		}
	);

	it(
		'multi-import works',
		() => {
			libstub.export({
				'multi-foo': 'multi-foo-lib',
				'multi-bar': 'multi-bar-lib',
			});

			const res2 = libstub.import({ 'multi-foo': null, 'multi-bar': null });

			assert(res2['multi-foo'] === 'multi-foo-lib', 'multi-import failed');
			assert(res2['multi-bar'] === 'multi-bar-lib', 'multi-import failed');
		}
	);

	it(
		'multi-import with array works',
		() => {
			libstub.export({
				'multi-foo': 'multi-foo-lib',
				'multi-bar': 'multi-bar-lib',
			});

			const res2 = libstub.import([ 'multi-foo', 'multi-bar' ]);

			assert(res2[0] === 'multi-foo-lib', 'multi-import failed');
			assert(res2[1] === 'multi-bar-lib', 'multi-import failed');
		}
	);

});
