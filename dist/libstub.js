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
		var self = this;
		self._cache = {};

		self.import = function (n, l) {
			if (n && typeof n === 'object') {
				if (Object.prototype.toString.call(n) === '[object Array]') {
					for (var i = 0; i < n.length; i++) {
						n[i] = self.import(n[i]);
					}
				} else {
					for (var k in n) {
						if (n.hasOwnProperty(k)) {
							n[k] = self.import(k, n[k]);
						}
					}
				}
				return n;
			}

			l = self._cache[n] || _r[n] || l;
			if (!l) { throw new Error('libstub: no module ' + n); }
			if (l.__libstub_lazy) { l = l(); }
			self._cache[n] = l;
			return l;
		};

		self.export = function (n, l) {
			if (n && typeof n === 'object') {
				for (let k in n) {
					if (n.hasOwnProperty(k)) {
						n[k] = self.export(k, n[k]);
					}
				}
				return n;
			}

			l = self._cache[n] || _r[n] || l;
			self._cache[n] = l;
			return l;
		};

		self.lazy = function (l) {
			l.__libstub_lazy = true;
			return l;
		};

		return self;
	}

	_r.libstub = _r.libstub || new _ls();
	return _r.libstub;
}));
