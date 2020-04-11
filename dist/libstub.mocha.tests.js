/* eslint-env mocha */

const libstub = require('./libstub');

describe('libstub, tests', () => {
	it('test 1', () => {
		libstub.export('test1', 123);
		let a = libstub.import('test1');

		if (a !== 123) { throw new Error('consume didnt work'); }
	});
});
