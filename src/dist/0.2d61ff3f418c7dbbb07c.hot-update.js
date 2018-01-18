webpackHotUpdate(0,{

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function List(editor) {
    this.editor = editor;
    this.$elem = $('<div></div>');
    // 当前是否 active 状态
    this._active = false;
    this.type = "click";
}

// 原型
List.prototype = {

    // 执行命令
    _command: function (value) {
        const editor = this.editor;
        const $textElem = editor.$textElem;
        editor.selectionAPI.restoreRange();
        if (editor.cmd.queryCommandState(value)) {
            return;
        }
        editor.cmd.do(value);
    },
    _initDom: function () {
        for (var i = 1; i <= 2; i++) {
            this.$elem.append($("<button><i class='fa fa-font'></i></button>").attr("sign", "list" + i).css("width", "30px"));
        }
    },
    // 试图改变 active 状态
    tryChangeActive: function (e) {
        const editor = this.editor;
        const $elem = this.$elem;
        if (editor.cmd.queryCommandState('insertUnOrderedList') || editor.cmd.queryCommandState('insertOrderedList')) {
            this._active = true;
            $elem.addClass('s-e-active');
        } else {
            this._active = false;
            $elem.removeClass('s-e-active');
        }
    },
    _bindEvent: function () {
        const editor = this.editor;
        const $elem = this.$elem;
        const that = this;
        console.log("绑定事件");
        $elem.on(this.type, function () {
            const range = editor.selectionAPI.getRange();
            editor.selectionAPI.restoreRange(range);
            editor.cmd.do("insertUnOrderedList");
            //that.tryActive();
        });
    },
    init: function () {
        this._initDom();
        this._bindEvent();
    }
};

/* harmony default export */ __webpack_exports__["a"] = (List);

/***/ })

})