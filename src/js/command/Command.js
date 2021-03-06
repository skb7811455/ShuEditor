function Command(editor){
    this.editor=editor;
}

Command.prototype = {
	do: function (name,value){
        const userCommand="_"+name;
		if(this[userCommand]){
            this[userCommand](value);
        }else{
            this._execCommand(name,value);
        }		
	},
	 _execCommand: function (name, value) {
        console.log(document.execCommand(name, false, value));
    },
    _removeCode:function($elem){
        var $codeParent=$elem.parentNode;
        $codeParent.innerHTML="<p><br></p>";
        //$codeParent.appendChild($("<br>").ele);
    },
    _insertElem:function($elem){
        const editor = this.editor;
        const range = editor.selectionAPI.getRange()
        const isEmpty=editor.selectionAPI.isSelectionEmpty();
        if (isEmpty&&range.insertNode){
            range.deleteContents();
            range.insertNode($elem);
        }
    },
    _insertContainerBrother:function($elem){
        const editor = this.editor;
        const range = editor.selectionAPI.getRange();
        const parentElem=editor.selectionAPI.getSelectionStartElem().parentNode;
        if (parentElem){
            parentElem.appendChild($elem);
           // range.deleteContents();
           // range.insertNode($elem);
        }
    },
    // 封装 document.queryCommandValue
    queryCommandValue: function (name) {
        return document.queryCommandValue(name);
    },

    // 封装 document.queryCommandState
    queryCommandState: function (name) {
        return document.queryCommandState(name);
    },

    // 封装 document.queryCommandSupported
    queryCommandSupported: function (name) {
        return document.queryCommandSupported(name);
    }

}
export default Command