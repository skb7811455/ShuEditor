webpackHotUpdate(0,{

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function Underline(editor) {
    this.editor = editor;
    this.$elem = $("<button>aa</button>");
    this.type = 'click';
    // 当前是否 active 状态
    this._active = false;
}

// 原型
Underline.prototype = {
    constructor: Underline,

    init: function () {
        this._bindEvent();
    },
    // 点击事件
    _bindEvent: function () {
        const editor = this.editor;
        const $elem = this.$elem;
        const that = this;
        console.log("绑定事件");
        $elem.on(this.type, function () {
            editor.cmd.do("underline");
            that.tryActive();
        });
        /*editor.eve.addHandler($elem,"click",function(){
            editor.cmd.do("bold",null);
            that.tryActive();
        });*/
    },
    onClick: function (e) {
        // 点击菜单将触发这里

        const editor = this.editor;
        /* const isSeleEmpty = editor.selection.isSelectionEmpty()
           
         if (isSeleEmpty) {
             // 选区是空的，插入并选中一个“空白”
             editor.selection.createEmptyRange()
         }
         */
        // 执行 underline 命令
        var selection = window.getSelection();

        console.log(selection);

        editor.cmd.do('underline');

        /* if (isSeleEmpty) {
             // 需要将选取折叠起来
             editor.selection.collapseRange()
             editor.selection.restoreSelection()
         }*/
    },

    // 试图改变 active 状态
    tryActive: function (e) {
        const editor = this.editor;
        const $elem = this.$elem;
        if (editor.cmd.queryCommandState('underline')) {
            this._active = true;
            $elem.addClass('w-e-active');
        } else {
            this._active = false;
            $elem.removeClass('w-e-active');
        }
    }
};

/* harmony default export */ __webpack_exports__["a"] = (Underline);

/***/ })

})