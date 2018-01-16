webpackHotUpdate(0,{

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Head_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Bold_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Italic_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TextArea_js__ = __webpack_require__(5);
const MenuConstructors = {};


MenuConstructors.head = __WEBPACK_IMPORTED_MODULE_0__Head_js__["a" /* default */];


MenuConstructors.bold = __WEBPACK_IMPORTED_MODULE_1__Bold_js__["a" /* default */];


MenuConstructors.italic = __WEBPACK_IMPORTED_MODULE_2__Italic_js__["a" /* default */];


MenuConstructors.textArea = __WEBPACK_IMPORTED_MODULE_3__TextArea_js__["a" /* default */];

/* harmony default export */ __webpack_exports__["a"] = (MenuConstructors);

/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function TextArea(editor) {
	this.editor = editor;
	this.$textElem = $('<div></div>').attr("conteneditable", 'true').css('width', '100%').css('height', '100%');
}
TextArea.prototype = {
	init: function () {
		this._bindEvent();
	},
	clear: function () {
		this.html("</p><br></p>");
	},
	html: function (val) {
		const editor = this.editor;
	},
	_clearHandle: function () {
		const editor = this.editor;
		const $textElem = this.$textElem.ele;
		$textElem.on("keydown", function () {});
	},
	_bindEvent: function () {

		//this._enterKeyHandle();

	}

};

/* harmony default export */ __webpack_exports__["a"] = (TextArea);

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DomUtil_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Command_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Event_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Menu_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Selection_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__TextArea_js__ = __webpack_require__(5);








function Editor(menuSelector, textSelector) {
	this.menuSelector = menuSelector;
	this.textSelector = textSelector;
}
Editor.prototype = {
	_initEventUtil: function () {

		this.eve = new __WEBPACK_IMPORTED_MODULE_3__Event_js__["a" /* default */](); //编辑器的事件对象
	},
	_initSelection: function () {
		this.selectionAPI = new __WEBPACK_IMPORTED_MODULE_5__Selection_js__["a" /* default */]();
	},
	_initCommand: function () {
		this.cmd = new __WEBPACK_IMPORTED_MODULE_2__Command_js__["a" /* default */](this); //编辑器的命令对象
	},
	_initMenus: function () {
		this.menu = new __WEBPACK_IMPORTED_MODULE_4__Menu_js__["a" /* default */](this); //编辑器的菜单对象
		this.menu.init();
	},
	_initTextArea: function () {
		this.txt = new __WEBPACK_IMPORTED_MODULE_6__TextArea_js__["a" /* default */](this); //编辑器的文本编辑对象
		this.txt.init();
	},
	_initDom: function () {
		//this.$menu=$(this.menuSelector);
		//this.$menu=$(this.textSelector);
		//this.$textElem=$(this.textSelector);
	},
	init: function () {
		this.config = __WEBPACK_IMPORTED_MODULE_0__config_js__["a" /* default */];
		this._initEventUtil();
		this._initCommand();
		this._initMenus();
		this._initTextArea();
		//this._initSelection();
	}
};

var Editor = new Editor();
Editor.init();

//$("editor").html("p");


/* harmony default export */ __webpack_exports__["default"] = (Editor);

/***/ })

})