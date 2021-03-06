webpackHotUpdate(0,{

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MenuConstructors_js__ = __webpack_require__(8);

function Menu(editor) {
	this.editenor = editor;
	this.$elem = $('menuList');
	this.menus = {};
}

Menu.prototype = {

	init: function () {
		console.log(editor);
		const editor = this.editor;
		const config = editor.config || {};
		const configMenus = config.menus || [];

		configMenus.forEach(function (menuKey) {
			MenuConstructor = __WEBPACK_IMPORTED_MODULE_0__MenuConstructors_js__["a" /* default */][menuKey];
			if (__WEBPACK_IMPORTED_MODULE_0__MenuConstructors_js__["a" /* default */] && typeof __WEBPACK_IMPORTED_MODULE_0__MenuConstructors_js__["a" /* default */] === "function") {
				this.menus[menuKey] = new MenuConstructor(editor);
			}
		});
		this._addToMenu();
		/*this.Bold=new Bold(this.editor);
  this.Bold.init();	*/
	},
	_addToMenu: function () {
		this.menus.forEach(function (item) {
			const $item = item.ele;
			this.$elem.ele.appendChild($item);
		});
	}
};

/* harmony default export */ __webpack_exports__["a"] = (Menu);

/***/ })

})