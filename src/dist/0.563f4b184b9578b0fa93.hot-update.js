webpackHotUpdate(0,{

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MenuConstructors_js__ = __webpack_require__(8);

function Menu(editor) {
	this.editor = editor;
	this.$elem = $('#menu');
	this.menus = {};
}

Menu.prototype = {

	init: function () {
		//console.log(this)
		const editor = this.editor;
		const config = editor.config || {};
		const configMenus = config.menus || [];
		const that = this;
		configMenus.forEach(function (menuKey) {
			console.log(__WEBPACK_IMPORTED_MODULE_0__MenuConstructors_js__["a" /* default */][menuKey]);
			var MenuConstructor = __WEBPACK_IMPORTED_MODULE_0__MenuConstructors_js__["a" /* default */][menuKey];
			//if(MenuConstructors && typeof MenuConstructors === "function"){
			that.menus[menuKey] = new MenuConstructor(editor);
			that.menus[menuKey].init();
			//}
		});
		this._addToMenu();
		/*this.Bold=new Bold(this.editor);
  this.Bold.init();	*/
	},
	_addToMenu: function () {
		for (var item in this.menus) {
			var $item = this.menus[item].$elem.ele;
			this.$elem.ele.appendChild($item);
		}
	}
};

/* harmony default export */ __webpack_exports__["a"] = (Menu);

/***/ })

})