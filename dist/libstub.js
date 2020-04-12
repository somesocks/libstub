(function (_r, _f) {
	if (typeof define === 'function' && define.amd) {
		define(function () { return (_r.libstub = _f(_r)); });
	} else if (typeof module === 'object' && module.exports) {
		module.exports = _f(_r);
	} else {
		_r.libstub = _f(_r);
	}
}(typeof self !== 'undefined' ? self : this, function (_r) {

	function _ls() {
		this._cache = {};

		this.import = function (_n, _l) {
			_l = this._cache[_n] || _r[_n] || _l;
			if (!_l) { throw new Error('libstub: no module ' + _n); }
			if (_l.__libstub_lazy) { _l = _l(); }
			this._cache[_n] = _l;
			return _l;
		};

		this.export = function (_n, _l) {
			_l = this._cache[_n] || _r[_n] || _l;
			this._cache[_n] = _l;
			return _l;
		};

		this.lazy = function (_l) {
			_l.__libstub_lazy = true;
			return _l;
		};

		return this;
	}

	_r.libstub = _r.libstub || new _ls();
	return _r.libstub;
}));
