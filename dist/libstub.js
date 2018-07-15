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
		* Export a module for use
		* @name export
		* @param name - the name of the module
		* @param module - the module
		* @memberof libstub
		*/
		export: function (_n, _m) {
			if (!_r[_n]) { _r[_n] = _m; }
		},

		/**
		* Import a module already exported
		* @name import
		* @param name - the name of the module
		* @param ignoreMissing - if true, do not throw an error when the module is not found
		* @memberof import
		*/
		import: function (_n, _i) {
			if (!_r[_n] && !_i) { throw new Error('libstub: no module ' + _n); }
			return _r[_n];
		},
	};
}));
