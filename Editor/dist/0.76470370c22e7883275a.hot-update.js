webpackHotUpdate(0,[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
(function (window) {

	function $(id) {

		function Dom(id) {
			this.ele = document.getElementById(id);
			console.log(this);
			return this;
		}
		Dom.prototype.addClass = function (className) {
			if (!className) {
				return this;
			}
			if (!this.ele.className) {
				this.ele.className = className;
			} else {
				var arr;
				arr = this.ele.className.split(/\s/);
				arr = arr.filter(function (item) {
					return item !== className;
				});
				arr.push(className);
				this.ele.className = arr.join(" ");
			}
		};
		Dom.prototype.removeClass = function (className) {
			if (!className) {
				return this;
			}
			if (this.ele.className) {
				var arr;
				arr = this.ele.className.split(/\s/);
				arr = arr.filter(function (item) {
					if (item == className) return false;else return true;
				});
				ele.className = attr.join(" ");
			}
		};
		Dom.prototype.html = function (val) {
			this.ele.innerHTML = val;
			return this;
		};
		Dom.prototype.isDomList = function (selector) {
			if (!selector) {
				return fasle;
			}
			if (selector instanceof NodeList) {
				return true;
			}
			return false;
		};
		Dom.prototype.querySelectorAll = function (selector) {
			const result = document.querySelectorAll(selector);
			if (isDomList(result)) {
				return result;
			}
		};
		Dom.prototype.attr = function (key, val) {
			this.ele.setAttibute(key, val);
			return this;
		};
		Dom.prototype.css = function (key, val) {
			this.ele.style[key] = val;
			return this;
		};
		return new Dom(id);
	}
	window.$ = $;
})(window);

/* harmony default export */ __webpack_exports__["a"] = ($);

/***/ })
])