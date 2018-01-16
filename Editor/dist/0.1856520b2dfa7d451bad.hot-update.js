webpackHotUpdate(0,{

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DomUtil_js__ = __webpack_require__(0);

function Head(editor) {
	this.editor = editor;
	this.$elem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__DomUtil_js__["a" /* default */])('<div></div>').addClass("s-e-head");
	this._acitive = false;
	this.$hs = [];
	this.type = "click";
}
Head.prototype = {

	init: function () {
		this._initDom();
		this.bindEvent();
	},
	_initDom: function () {
		for (var i = 1; i <= 5; i++) {
			this.$hs.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__DomUtil_js__["a" /* default */])("<button class='shu-" + i + "x'>H</button>").attr("sign", "h" + i).css("width", "30px"));
			this.$elem.append(this.$hs[i - 1]);
		}
		this.$hs.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__DomUtil_js__["a" /* default */])("<button><i class='fa fa-font'></i></button>").attr("sign", "p"));
		this.$elem.append(this.$hs[5]);
	},
	tryActive: function () {
		const editor = this.editor;
		const $elem = this.$elem;
		const reg = /^h/i;
		const cmdValue = editor.cmd.queryCommandValue('formatBlock');
		$elem.removeAllClass();
		if (reg.test(cmdValue)) {
			this._active = true;

			switch (cmdValue) {
				case "h1":
					console.log(cmdValue);
					$elem.addClass("s-e-head-h1-active");
					break;
				case "h2":
					$elem.addClass("s-e-head-h2-active");
					break;
				case "h3":
					$elem.addClass("s-e-head-h3-active");
					break;
				case "h4":
					$elem.addClass("s-e-head-h4-active");
					break;
				case "h5":
					$elem.addClass("s-e-head-h5-active");
					break;
			}
		} else {
			this._active = false;
		}
	},
	bindEvent: function () {
		const editor = this.editor;
		const $elem = this.$elem.ele;
		var a = this.$elem;
		const that = this;

		editor.eve.addHandler($elem, "click", function (event) {

			editor.selectionAPI.getRange();
			editor.selectionAPI.restoreRange();

			if (editor.cmd.queryCommandState('insertOrderedList') || editor._code) {
				return;
			}

			if (event.target.getAttribute("sign")) {
				var h = "<" + event.target.getAttribute("sign") + ">";
				editor.cmd.do("formatBlock", h);
				editor.selectionAPI.saveRange();
			}
			//that.tryActive();
		});
	}
};

/* harmony default export */ __webpack_exports__["a"] = (Head);

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Head_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Bold_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Italic_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Underline_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Backcolor_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__File_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Justify_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Quote_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__List_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Undo_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Redo_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Code_js__ = __webpack_require__(9);
const MenuConstructors = {};


MenuConstructors.head = __WEBPACK_IMPORTED_MODULE_0__Head_js__["a" /* default */];


MenuConstructors.bold = __WEBPACK_IMPORTED_MODULE_1__Bold_js__["a" /* default */];


MenuConstructors.italic = __WEBPACK_IMPORTED_MODULE_2__Italic_js__["a" /* default */];


MenuConstructors.underline = __WEBPACK_IMPORTED_MODULE_3__Underline_js__["a" /* default */];


MenuConstructors.backcolor = __WEBPACK_IMPORTED_MODULE_4__Backcolor_js__["a" /* default */];


MenuConstructors.file = __WEBPACK_IMPORTED_MODULE_5__File_js__["a" /* default */];


MenuConstructors.justify = __WEBPACK_IMPORTED_MODULE_6__Justify_js__["a" /* default */];


MenuConstructors.quote = __WEBPACK_IMPORTED_MODULE_7__Quote_js__["a" /* default */];


MenuConstructors.list = __WEBPACK_IMPORTED_MODULE_8__List_js__["a" /* default */];


MenuConstructors.undo = __WEBPACK_IMPORTED_MODULE_9__Undo_js__["a" /* default */];


MenuConstructors.redo = __WEBPACK_IMPORTED_MODULE_10__Redo_js__["a" /* default */];


MenuConstructors.mycode = __WEBPACK_IMPORTED_MODULE_11__Code_js__["a" /* default */];

/* harmony default export */ __webpack_exports__["a"] = (MenuConstructors);

/***/ })

})