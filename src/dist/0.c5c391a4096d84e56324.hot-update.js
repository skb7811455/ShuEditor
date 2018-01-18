webpackHotUpdate(0,{

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// 构造函数
function Redo(editor) {
    this.editor = editor;
    this.$elem = $("<button><i class='fa fa-rotate-right'><i/></button>");
    this.type = 'click';

    // 当前是否 active 状态
    this._active = false;
}

// 原型
Redo.prototype = {
    constructor: Redo,

    // 点击事件
    init: function () {
        this._bindEvent();
    },
    _bindEvent: function () {
        const editor = this.editor;
        const $elem = this.$elem;
        $elem.on(this.type, function () {
            editor.selectionAPI.restoreRange();
            editor.cmd.do("redo");
            //that.tryActive();
        });
    }
};

/* harmony default export */ __webpack_exports__["a"] = (Redo);

/***/ })

})