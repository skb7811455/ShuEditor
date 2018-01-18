webpackHotUpdate(0,{

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MenuConstructors_js__ = __webpack_require__(11);

function Menu(editor, val) {
	this.editor = editor;
	this.$elem = val;
	console.log(val);
	//this.$elem=$('#menu');
	this.menus = {};
}

Menu.prototype = {

	init: function () {

		const editor = this.editor;
		const config = editor.config || {};
		const configMenus = config.menus || [];
		const that = this;
		configMenus.forEach(function (menuKey) {
			//console.log(MenuConstructors[menuKey])
			var MenuConstructor = __WEBPACK_IMPORTED_MODULE_0__MenuConstructors_js__["a" /* default */][menuKey];
			//if(MenuConstructors && typeof MenuConstructors === "function"){
			that.menus[menuKey] = new MenuConstructor(editor);
			that.menus[menuKey].init();
			//}
		});
		this._addToMenu();
		this.changeActive();
	},
	_addToMenu: function () {
		for (var item in this.menus) {
			var $item = this.menus[item].$elem.ele;
			this.$elem.ele.appendChild($item);
		}
	},
	changeActive: function () {
		const menus = this.menus;
		for (var menu in menus) {
			var fn = function () {
				var that = menu;
				console.log(menus[that]);
				menus[that].tryActive();
			};
			if (menus[menu].tryActive) {
				setTimeout(fn, 100);
			}
		}
	}

};

/* harmony default export */ __webpack_exports__["a"] = (Menu);

/***/ })

})