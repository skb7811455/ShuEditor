webpackHotUpdate(0,{

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function Backcolor(editor) {
    this.editor = editor;
    this.$elem = $("<button>背景</button>");
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
        const color = editor.config.color;
        const that = this;
        console.log("绑定事件");
        $elem.on(this.type, function () {
            var a = editor.cmd.queryCommandValue("backColor");
            console.log(a);
            if (editor.cmd.queryCommandValue("backColor") === color) {
                editor.cmd.do("backColor", "#fff");
            } else {
                editor.cmd.do("backColor", color);
            }
        });
        /*editor.eve.addHandler($elem,"click",function(){
            editor.cmd.do("bold",null);
            that.tryActive();
        });*/
    }

};

/* harmony default export */ __webpack_exports__["a"] = (Backcolor);

/***/ })

})