/* eslint-env mocha */

const { provide, consume } = require('./libstub');

describe('libstub, tests', () => {
	it('test 1', () => {
		provide('test1', 123);
		let a = consume('test1');

		if (a !== 123) { throw new Error('consume didnt work'); }
	});
});
