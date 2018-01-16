webpackHotUpdate(0,{

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DomUtil_js__ = __webpack_require__(0);

function Bold(editor) {
	this.editor = editor;
	this.$elem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__DomUtil_js__["a" /* default */])("bold").ele;
	//this._book=123;
	//this.year=2;
}
Bold.prototype = {

	handle: function () {
		console.log(editor);
		editor.cmd.do("bold");
		editor.cmd.do('italic', null);
	},

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
	bindEvent: function () {

		const editor = this.editor;
		const type = this.type;
		editor.eve.addHandler(this.$elem, "click", this.handle);
	}
};

/* harmony default export */ __webpack_exports__["a"] = (Bold);

/***/ })

})