import $ from "./DomUtil.js"
function Head(editor){
	this.editor = editor;
	this.$elem=$('<div></div>')
	.addClass("s-e-head");
	this._acitive=false;
	this.$hs=[];
	this.type="click";
}
Head.prototype={

	init:function(){
		this._initDom();
		this.bindEvent();
				
	},
	_initDom:function(){
		for(var i=1;i<=5;i++){
			this.$hs.push($("<button class='shu-"+i+"x'>H</button>").attr("sign","h"+i)
												.css("width","30px")
																									  						);
			this.$elem.append(this.$hs[i-1]);
		}
		this.$hs.push($("<button><i class='fa fa-font'></i></button>").attr("sign","p"));
		this.$elem.append(this.$hs[5]);
	},
	tryActive:function(){
		const editor = this.editor
        const $elem = this.$elem
        const reg = /^h/i
        const cmdValue = editor.cmd.queryCommandValue('formatBlock')
        $elem.removeAllClass();
        if (reg.test(cmdValue)) {
            this._active = true
            
            switch(cmdValue){
            	case "h1":
            		console.log(cmdValue)
            		$elem.addClass("s-e-head-h1-active");
            		break;
            	case "h2":
            		$elem.addClass("s-e-head-h2-active");
            		break;
            	case "h3":
            		$elem.addClass("s-e-head-h3-active");
            		break; 
            	case "h4":
            		$elem.addClass("s-e-head-h4-active");
            		break;           	
            	case "h5":
            		$elem.addClass("s-e-head-h5-active");
            		break;          	           	        	            	
             }
        } else {
            this._active = false
        }
	},
	bindEvent:function(){
		const editor=this.editor;
		const $elem=this.$elem.ele;
		const that=this;

		editor.eve.addHandler($elem,"click",function(event){

			editor.selectionAPI.getRange();
            editor.selectionAPI.restoreRange();
			
			if(editor.cmd.queryCommandState('insertOrderedList')){
				return;
			}

			if(event.target.getAttribute("sign")){
				var h="<"+event.target.getAttribute("sign")+">";	
				editor.cmd.do("formatBlock",h);
				editor.selectionAPI.saveRange();
			}			
			//that.tryActive();
		});
	}
}



export default Head;