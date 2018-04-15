/* globals define self */

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
		provide: function (_n, _l) {
			if (!_r[_n]) { _r[_n] = _l; }
		},
		consume: function (_n) {
			if (!_r[_n]) { throw new Error('libstub: no package ' + _n); }
			return _r[_n];
		},
	};
}));
