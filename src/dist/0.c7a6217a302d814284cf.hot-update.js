webpackHotUpdate(0,{

/***/ 9:
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
        const $elem = this.$elem;
        var that = this;
        var $code;
        $elem.on(this.type, function () {
            editor.selectionAPI.saveRange();
            var $startElem = editor.selectionAPI.getSelectionStartElem();
            var $endElem = editor.selectionAPI.getSelectionEndElem();
            var isSeleEmpty = editor.selectionAPI.isSelectionEmpty();
            var selectionText = editor.selectionAPI.getSelectionText();

            /*if (!($startElem===$endElem)) {
                // 跨元素选择，不做处理
                editor.selectionAPI.restoreRange();
                return;
            }*/
            console.log(that._active);

            if (that._active) {
                //console.log(that._active)
                editor.cmd.do("removeCode", that.$code.ele);
                that._active = false;
                editor._code = false;
            }

            if (!isSeleEmpty) {
                // 选取不是空，用 <code> 包裹即可  

                /*if(that._active){
                    //console.log(that._active)
                    editor.cmd.do("removeCode",that.$code.ele);
                    that._active=false;
                }*/
                $p = $("<p><br></p>");
                editor.cmd.do('insertElem', $p.ele);
                $code = $("<pre><code>" + selectionText + "</code></pre>");
                editor.cmd.do('insertElem', $code.ele);
                that._active = true;
                that.$code = $code;
                editor._code = true;
                //editor.selectionAPI.createRangeByElem($code, false);
                editor.selectionAPI.restoreRange();
                return;
            }
        });
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