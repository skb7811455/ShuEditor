webpackHotUpdate(0,{

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function Code(editor) {
    this.editor = editor;
    this.$elem = $("<button><i class='fa fa-font'><i/></button>");
    this.type = 'click';

    // 当前是否 active 状态
    this._active = false;
}

// 原型
Code.prototype = {
    constructor: Code,

    init: function () {
        this._bindEvent();
    },
    _bindEvent: function () {
        const editor = this.editor;
        const $startElem = editor.selectionAPI.getSelectionStartElem();
        const $endElem = editor.selectionAPI.getSelectionEndElem();
        const isSeleEmpty = editor.selectionAPI.isSelectionEmpty();
        const selectionText = editor.selectionAPI.getSelectionText();
        var $code;

        if (!$startElem.equal($endElem)) {
            // 跨元素选择，不做处理
            editor.selection.restoreSelection();
            return;
        }
        if (!isSeleEmpty) {
            // 选取不是空，用 <code> 包裹即可
            $code = $("<code>" + selectionText + "</code>");
            editor.cmd.do('insertElem', $code);
            //editor.selectionAPI.createRangeByElem($code, false);
            editor.selectionAPI.restoreSelection();
            return;
        }
    },

    // 插入代码
    _insertCode: function (value) {
        const editor = this.editor;
        editor.cmd.do('insertHTML', `<pre><code>${value}</code></pre><p><br></p>`);
    },

    // 更新代码
    _updateCode: function (value) {
        const editor = this.editor;
        const $selectionELem = editor.selection.getSelectionContainerElem();
        if (!$selectionELem) {
            return;
        }
        $selectionELem.html(value);
        editor.selection.restoreSelection();
    }
};

/* harmony default export */ __webpack_exports__["a"] = (Code);

/***/ })

})