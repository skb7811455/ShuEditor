webpackHotUpdate(0,{

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// 构造函数
function ChangeStyle(editor) {
    this.editor = editor;
    this.$elem = $("<button><i class='fa fa-cog'><i/></button>");
    this.type = 'click';

    // 当前是否 active 状态
    this._active = false;
}

// 原型
ChangeStyle.prototype = {
    constructor: ChangeStyle,

    // 点击事件
    init: function () {
        this._bindEvent();
    },
    _bindEvent: function () {
        const editor = this.editor;
        const $elem = this.$elem;
        $elem.on(this.type, function () {
            const wraps = document.getElementsByClassName("wrapper");
            if (wraps[0].style.display == "block") {
                for (var i = 0; i < wraps.length; i++) {
                    wraps[i].style.display = "inline-block";
                }
            } else {
                for (var i = 0; i < wraps.length; i++) {
                    wraps[i].style.display = "block";
                }
            }

            //that.tryActive();
        });
    }
};

/* harmony default export */ __webpack_exports__["a"] = (ChangeStyle);

/***/ })

})