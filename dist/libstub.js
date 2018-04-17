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
		* Provide a module to use
		* @name provide
		* @param name - the name of the module
		* @param module - the module
		* @memberof libstub
		*/
		provide: function (_n, _m) {
			if (!_r[_n]) { _r[_n] = _m; }
		},

		/**
		* Consume a module already provided
		* @name consume
		* @param name - the name of the module
		* @param ignoreMissing - if true, do not throw an error when the module is not found
		* @memberof libstub
		*/
		consume: function (_n, _i) {
			if (!_r[_n] && !_i) { throw new Error('libstub: no module ' + _n); }
			return _r[_n];
		},
	};
}));
