webpackHotUpdate(0,{

/***/ 12:
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







(function (window) {
	var shuEditorId = 1;
	function Editor(editorSelector, menuSelector, textSelector) {
		shuEditorId++;
		this.menuSelector = menuSelector;
		this.textSelector = textSelector;
		this.$elem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__DomUtil_js__["a" /* default */])(editorSelector);
		this.$menuElem = null;
		this.$textElem = null;
	}
	Editor.prototype = {

		constructor: Editor,

		_initEventUtil: function () {

			this.eve = new __WEBPACK_IMPORTED_MODULE_3__Event_js__["a" /* default */](); //编辑器的事件对象
		},
		_initSelection: function () {
			this.selectionAPI = new __WEBPACK_IMPORTED_MODULE_5__Selection_js__["a" /* default */](this);
		},
		_initCommand: function () {
			this.cmd = new __WEBPACK_IMPORTED_MODULE_2__Command_js__["a" /* default */](this); //编辑器的命令对象
		},
		_initMenus: function (val) {
			this.menu = new __WEBPACK_IMPORTED_MODULE_4__Menu_js__["a" /* default */](this, val); //编辑器的菜单对象
			this.menu.init();
		},
		_initTextArea: function (val) {
			this.txt = new __WEBPACK_IMPORTED_MODULE_6__TextArea_js__["a" /* default */](this, val); //编辑器的文本编辑对象
			this.txt.init();
		},
		_initDom: function () {

			const $menuElem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__DomUtil_js__["a" /* default */])('<ul></ul>').css("width", "100%").attr("id", "s-e-menu" + shuEditorId).addClass("s-e-menu");
			const $textElem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__DomUtil_js__["a" /* default */])('<div></div>').css('width', "100%").addClass("s-e-container").attr("contenteditable", true).attr("id", "s-e-container" + shuEditorId);

			this.$menuElem = $menuElem;
			this.$textElem = $textElem;

			this.$elem.append($menuElem);
			this.$elem.append($textElem);
		},
		init: function () {

			this.config = __WEBPACK_IMPORTED_MODULE_0__config_js__["a" /* default */];
			this._initEventUtil();
			this._initDom();
			this._initCommand();
			//console.log(this)
			this._initMenus(this.$menuElem);
			this._initTextArea(this.$textElem);
			this._initSelection(this);
		}
	};

	function Editor1(editorSelector, menuSelector, textSelector) {
		shuEditorId++;
		this.menuSelector = menuSelector;
		this.textSelector = textSelector;
		this.$elem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__DomUtil_js__["a" /* default */])(editorSelector);
		this.$menuElem = null;
		this.$textElem = null;
	}
	Editor1.prototype = {
		_initEventUtil: function () {

			this.eve = new __WEBPACK_IMPORTED_MODULE_3__Event_js__["a" /* default */](); //编辑器的事件对象
		},
		_initSelection: function () {
			this.selectionAPI = new __WEBPACK_IMPORTED_MODULE_5__Selection_js__["a" /* default */](this);
		},
		_initCommand: function () {
			this.cmd = new __WEBPACK_IMPORTED_MODULE_2__Command_js__["a" /* default */](this); //编辑器的命令对象
		},
		_initMenus: function (val) {
			this.menu = new __WEBPACK_IMPORTED_MODULE_4__Menu_js__["a" /* default */](this, val); //编辑器的菜单对象
			this.menu.init();
		},
		_initTextArea: function (val) {
			this.txt = new __WEBPACK_IMPORTED_MODULE_6__TextArea_js__["a" /* default */](this, val); //编辑器的文本编辑对象
			this.txt.init();
		},
		_initDom: function () {

			const $menuElem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__DomUtil_js__["a" /* default */])('<ul></ul>').css("width", "100%").attr("id", "s-e-menu" + shuEditorId).addClass("s-e-menu");
			const $textElem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__DomUtil_js__["a" /* default */])('<div></div>').css('width', "100%").addClass("s-e-container").attr("contenteditable", true).attr("id", "s-e-container" + shuEditorId);

			this.$menuElem = $menuElem;
			this.$textElem = $textElem;

			this.$elem.append($menuElem);
			this.$elem.append($textElem);
		},
		init: function () {

			this.config = __WEBPACK_IMPORTED_MODULE_0__config_js__["a" /* default */];
			this._initEventUtil();
			this._initDom();
			this._initCommand();
			//console.log(this)
			this._initMenus(this.$menuElem);
			this._initTextArea(this.$textElem);
			this._initSelection(this);
		}

		/*var Editor=new Editor("#editor");
  var Editor1=new Editor1("#editor1");
  Editor.init();
  Editor1.init();*/

		//$("editor").html("p");
	};console.log(Editor);
	window.Editor = Editor;
})(window);

/* harmony default export */ __webpack_exports__["default"] = (window.Editor || Editor);

/***/ })

})