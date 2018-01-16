webpackHotUpdate(0,{

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DomUtil_js__ = __webpack_require__(0);

function Head(editor) {
	this.editor = editor;
	this.$h1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__DomUtil_js__["a" /* default */])("<button>H1</button>").attr("h1");
	this.$h2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__DomUtil_js__["a" /* default */])("<button>H2</button>").attr("h2");
	this.$h3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__DomUtil_js__["a" /* default */])("<button>H2</button>").attr("h3");
	this.$h4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__DomUtil_js__["a" /* default */])("<button>H3</button>").attr("h4");
	this.$h5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__DomUtil_js__["a" /* default */])("<button>H4</button>").attr("h5");
	this.$p = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__DomUtil_js__["a" /* default */])("<button>H5</button>").attr("p");
	this.$elem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__DomUtil_js__["a" /* default */])('<div></div>').addClass("s-e-head");
	this._acitive = false;
}
Head.prototype = {

	init: function () {
		this._initDom();
		this.bindEvent();
	},
	_initDom: function () {
		for (var i = 0; i < 6; i++) {
			var key = "h" + i;
			this.$elem.append(this[key]);
		}
	},
	tryActive: function () {
		const editor = this.editor;
		const $elem = this.$elem;
		const reg = /^h/i;
		const cmdValue = editor.cmd.queryCommandValue('formatBlock');
		if (reg.test(cmdValue)) {
			this._active = true;
			$elem.addClass('s-e-active');
		} else {
			this._active = false;
			$elem.removeClass('s-e-active');
		}
	},
	bindEvent: function () {
		const editor = this.editor;
		const $elem = this.$elem.ele;
		const that = this;
		console.log("绑定事件");
		editor.eve.addHandler($elem, "click", function () {
			editor.cmd.do("formatBlock", "<h1>");
			that.tryActive();
		});
	}
};

/* harmony default export */ __webpack_exports__["a"] = (Head);

/***/ })

})