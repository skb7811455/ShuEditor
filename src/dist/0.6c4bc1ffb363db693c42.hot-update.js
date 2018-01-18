webpackHotUpdate(0,{

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function List(editor) {
    this.editor = editor;
    this.$elem = $('<div></div>');
    // 当前是否 active 状态
    this._active = false;
    this.type = "click";
    this.editor.listActive = false;
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
            this.$elem.append($("<button><i class='fa fa-list'></i></button>").attr("sign", "list" + i).addClass("s-e-list"));
        }
    },
    // 试图改变 active 状态
    tryActive: function (e) {
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
        $elem.on(this.type, function (eve) {
            editor.selectionAPI.restoreRange();
            //editor.cmd.do("remove")
            console.log(eve.target);
            if (eve.target.sign === "list1") {
                editor.cmd.do("insertOrderedList");
            } else if (eve.target.sign === "list2") {
                editor.cmd.do("insertUnOrderedList");
            }

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