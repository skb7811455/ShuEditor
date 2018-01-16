
// 构造函数
function Undo(editor) {
    this.editor = editor
    this.$elem = $("<button><i class='fa fa-rotate-left'><i/></button>");
    this.type = 'click'

    // 当前是否 active 状态
    this._active = false
}

// 原型
Undo.prototype = {
    constructor: Undo,

    // 点击事件
    init:function(){
        this._bindEvent();
    },
    _bindEvent:function(){
        const editor=this.editor;
        const $elem=this.$elem;
        $elem.on(this.type,function(){
            editor.selectionAPI.restoreRange();
            editor.cmd.do("undo");
            //that.tryActive();
        })
    }
}

export default Undo