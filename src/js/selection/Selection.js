function Selection(editor){
	this.editor = editor;	
	this._currentRange=null;
}

Selection.prototype={


	getRange:function(){
		return this._currentRange;
	},
	saveRange:function(range){
		if(range){
			this._currentRange=range;
			return;
		}

		const selection=window.getSelection();
		if(selection.rangeCount===0){
			return;
		}
		const _range=selection.getRangeAt(0);
		this._currentRange=_range;
	},
	restoreRange:function(){
		
		if(!this._currentRange){
			return;
		}

		const selection=window.getSelection();
		//console.log(selection.getRangeAt(0));
		selection.removeAllRanges();
		selection.addRange(this._currentRange);
	},
	getSlectionContainer:function(){

	},
	getSelectionStartElem:function(range){
		range=range||this._currentRange;
		var elem;
		if(range){
			elem=range.startContainer;
			return elem.nodeType===1?elem:elem.parentNode;
		}
	},
	getSelectionEndElem:function(range){
		range=range||this._currentRange;
		var elem;
		if(range){
			elem=range.endContainer;
			return elem.nodeType===1?elem:elem.parentNode;
		}
	},
	getSelectionText:function(range){
		if(range){
			return range.toString();
		}else if(this._currentRange){
			return this._currentRange.toString();
		}else{
			return "";
		}
	},
	createElemByRange:function(){

	},
	isSelectionEmpty:function(){
		const range=this._currentRange;
		if(range&&range.startContainer){
			//if(range.startContainer===range.endConatiner){
				if(range.startOffset===range.endOffset){
					return true;
				}
			//}
		}else{
			return false;
		}
	}
}



export default Selection;