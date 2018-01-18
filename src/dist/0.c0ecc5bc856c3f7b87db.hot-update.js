webpackHotUpdate(0,{

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Bold_js__ = __webpack_require__(6);

function Menu(editor) {
	this.editor = editor;
	this.menus = {};
}

Menu.prototype = {

	init: function () {
		//console.log(editor)
		this.Bold = new __WEBPACK_IMPORTED_MODULE_0__Bold_js__["a" /* default */](this.editor);
		this.Bold.init();
	}
};

/* harmony default export */ __webpack_exports__["a"] = (Menu);

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DomUtil_js__ = __webpack_require__(0);

function Bold(editor) {
	this.editor = editor;
	//this.$elem=$("bold");
	this.$elem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__DomUtil_js__["a" /* default */])('<div class="w-e-menu">Bold</div>');
	this._acitive = false;
	//this._book=123;
	//this.year=2;
}
Bold.prototype = {

	init: function () {
		this.bindEvent();
		/*Object.defineProperty(this,"book",{
  	get:function(){
  		return this._book;
  	},
  	set:function(newValue){
  				$("bold").ele.firstChild.nodeValue=newValue;
  		
  	}
  })*/
	},
	tryActive: function () {
		const editor = this.editor;
		const $elem = this.$elem;
		if (editor.cmd.queryCommandState("bold")) {
			this._acitive = true;
			$elem.addClass("s-e-active");
		} else {
			this._acitive = false;
			$elem.removeClass("s-e-active");
		}
	},
	bindEvent: function () {
		const editor = this.editor;
		const $elem = this.$elem.ele;
		const that = this;
		editor.eve.addHandler($elem, "click", function () {
			editor.cmd.do("bold", null);
			that.tryActive();
		});
	}
};

/* harmony default export */ __webpack_exports__["a"] = (Bold);

/***/ })

})