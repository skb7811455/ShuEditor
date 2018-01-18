webpackHotUpdate(0,{

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function Justify(editor) {
    this.editor = editor;
    this.$elem = $("<div></div>").addClass("s-e-justify");
    this.type = 'click';
    this.$poses = [];
    // 当前是否 active 状态
    this._active = false;
}

// 原型

Justify.prototype = {
    constructor: Justify,

    init: function () {
        this._initDom();
        this._bindEvent();
    },
    _initDom: function () {
        var pos = ["left", "center", "right"];
        var font = "fa fa-align-";
        for (var i = 0; i < 3; i++) {
            this.$poses.push($("<button><i class='" + font + pos[i] + "'></i></button>").attr("pos", pos[i]));
            this.$elem.append(this.$poses[i]);
        }
    },
    // 点击事件
    _bindEvent: function () {
        const editor = this.editor;
        const $elem = this.$elem;
        const that = this;
        console.log("绑定事件");
        $elem.on(this.type, function () {
            var selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(editor.currentRange);
            var pos = "justify" + event.target.getAttribute("pos");
            editor.cmd.do(pos);
        });
    }
};

/* harmony default export */ __webpack_exports__["a"] = (Justify);

/***/ })

})