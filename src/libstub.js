/* globals define self */
/** @namespace libstub */


(function (_r, _f) {
	if (typeof define === 'function' && define.amd) {
		define(function () { return (_r.libstub = _f(_r)); });
	} else if (typeof module === 'object' && module.exports) {
		module.exports = _f(_r);
	} else {
		_r.libstub = _f(_r);
	}
}(typeof self !== 'undefined' ? self : this, function (_r) {
	return {
		/**
		* Provide a package to use
		* @name provide
		* @param name - the name of the package
		* @param package - the package
		* @memberof libstub
		*/
		provide: function (_n, _p) {
			if (!_r[_n]) { _r[_n] = _p; }
		},

		/**
		* Consume a package already provided
		* @name consume
		* @param name - the name of the module
		* @param ignoreMissing - if true, do not throw an error when the package is not found
		* @memberof libstub
		*/
		consume: function (_n, _i) {
			if (!_r[_n] && !_i) { throw new Error('libstub: no package ' + _n); }
			return _r[_n];
		},
	};
}));
