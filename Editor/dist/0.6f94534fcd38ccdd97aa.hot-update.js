webpackHotUpdate(0,[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
(function (window) {

	function $(id) {
		function Dom(id) {
			this.ele = document.getElementById(id);
			console.log(this);
			return this;
		}
		$.prototype.html = function (val) {
			this.ele.innerHTML = val;
			return this;
		};
		$.prototype.isDomList = function (selector) {
			if (!selector) {
				return fasle;
			}
			if (selector instanceof NodeList) {
				return true;
			}
			return false;
		};
		$.prototype.querySelectorAll = function (selector) {
			const result = document.querySelectorAll(selector);
			if (isDomList(result)) {
				return result;
			}
		};
		$.prototype.attr = function (key, val) {
			this.ele.setAttibute(key, val);
			return this;
		};
		$.prototype.css = function (key, val) {
			this.ele.style[key] = val;
			return this;
		};
		return new Dom(id);
	}
	window.$ = $;
	$();
})(window);

/* harmony default export */ __webpack_exports__["a"] = ($);

/***/ })
])