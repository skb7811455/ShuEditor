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
        console.log("绑定事件");
        $elem.on(this.type, function () {
            console.log(color);
            console.log(editor.cmd.queryCommandValue("backColor"));
            if (editor.cmd.queryCommandValue("backColor") === color) {
                console.log(2222);
                $elem.removeClass("s-e-active");
                editor.cmd.do("backColor", "#fff");
            } else {
                $elem.addClass("s-e-active");
                editor.cmd.do("backColor", color);
            }
        });
    }

};

/* harmony default export */ __webpack_exports__["a"] = (Backcolor);

/***/ })

})