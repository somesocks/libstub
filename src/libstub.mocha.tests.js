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

});
