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
		this._bindEvent();
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

			(function () {
				var that = menu;
				if (menus[that].tryActive) {
					var fn = function () {
						console.log(10000);
						menus[that].tryActive();
					};
					setTimeout(fn, 100);
				}
			})();
		}
	},
	_bindEvent: function () {
		var that = this;
		this.$elem.on("click", function () {
			console.log(112);
			that.changeActive();
		});
	}

};

/* harmony default export */ __webpack_exports__["a"] = (Menu);

/***/ })

})