webpackHotUpdate(0,{

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function Quote(editor) {
    this.editor = editor;
    this.$elem = $("<button><i class='fa fa-quora'></i></button>");
    this.type = 'click';

    // 当前是否 active 状态
    this._active = false;
}

// 原型
Quote.prototype = {
    constructor: Quote,

    init: function () {
        this._bindEvent();
    },
    _bindEvent: function () {
        const editor = this.editor;
        const $elem = this.$elem;
        const that = this;
        $elem.on(this.type, function () {
            const cmdValue = editor.cmd.queryCommandValue('formatBlock');
            if (reg.test(cmdValue)) {
                //editor.cmd.do('removeformat');
                editor.cmd.do('formatBlock', "p");
            } else {
                editor.cmd.do('formatBlock', "<BLOCKQUOTE>");
            }
        });
    },

    tryActive: function (e) {
        const editor = this.editor;
        const $elem = this.$elem;
        const reg = /^BLOCKQUOTE$/i;
        const cmdValue = editor.cmd.queryCommandValue('formatBlock');
        if (reg.test(cmdValue)) {
            this._active = true;
            $elem.addClass('s-e-active');
        } else {
            this._active = false;
            $elem.removeClass('s-e-active');
        }
    }
};

/* harmony default export */ __webpack_exports__["a"] = (Quote);

/***/ })

})