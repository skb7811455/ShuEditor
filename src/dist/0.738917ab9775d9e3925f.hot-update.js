webpackHotUpdate(0,{

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function Backcolor(editor) {
    this.editor = editor;
    this.$elem = $("<button><i class='fa fa-paint-brush'></i></button>");
    this.type = 'click';
    // 当前是否 active 状态
    this._active = false;
}

// 原型
Backcolor.prototype = {
    constructor: Backcolor,

    init: function () {
        this._bindEvent();
    },
    // 点击事件
    _bindEvent: function () {
        const editor = this.editor;
        const $elem = this.$elem;
        const color = editor.config.backColor;
        const that = this;
        $elem.on(this.type, function () {
            editor.selectionAPI.restoreRange();
            if (editor.cmd.queryCommandValue("backColor") === color) {
                $elem.removeClass("s-e-active");
                editor.cmd.do("backColor", "#fff");
            } else {
                $elem.addClass("s-e-active");
                editor.cmd.do("backColor", color);
            }
        });
    },
    tryActive: function () {
        const editor = this.editor;
        const $elem = this.$elem;
        const color = editor.config.backColor;
        editor.selectionAPI.restoreRange();
        if (editor.cmd.queryCommandValue("backColor") === color) {
            $elem.removeClass("s-e-active");
        } else {
            $elem.addClass("s-e-active");
        }
    }

};

/* harmony default export */ __webpack_exports__["a"] = (Backcolor);

/***/ })

})