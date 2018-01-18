function TextArea(editor,val){
	this.editor = editor;
	this.$textElem=val;
	console.log(editor);

}
TextArea.prototype={
	init:function(){
		this._bindEvent();
		this._clear();
	},
	_clear:function(){
		this.html("<p> <br></p>");
	},
	html:function(val){
		const editor=this.editor;
		const $textElem=this.$textElem;
		if(val == null){
			return $textElem.html();
		}else{
			$textElem.html(val);
		}
	},

	_bindEvent:function(){
		const editor=this.editor;
		const $textElem=this.$textElem;
		const that=this;
		$textElem.on("click",function(){
			editor.selectionAPI.saveRange();
			/*var selection=window.getSelection();
			editor.currentRange=selection.getRangeAt(0);
			console.log(editor.currentRange);*/

		})
		$textElem.on("keyup",function(eve){
			editor.selectionAPI.saveRange();
			if(!$textElem.ele.firstChild){
				that._clear();
			}
		})
		
	}

}



export default TextArea;