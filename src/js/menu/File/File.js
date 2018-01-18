function File(editor) {
    this.editor = editor
    this.$elem = $("<div><input type='file'><button type='button'><i class='fa fa-file'></i></button><button><i class='fa fa-camera'></i></button></div>")
                                                            .addClass("s-e-file");                                                        
    this.type = 'click';
    this.reader=new FileReader();
    // 当前是否 active 状态
    this._active = false;
}

// 原型

File.prototype = {
    constructor: File,

    init:function(){
        this._bindEvent();
    },  
    readFile:function(){
        const editor=this.editor;
        const file=this.$elem.ele.firstChild.files[0];
        const reader=this.reader;
        
        reader.readAsText(file);
        reader.onload=function(){
            console.log(file.type)
            if(file.type===""||file.type==="text/plain"){
                editor.$textElem.ele.innerHTML=this.result;
            }else{
                alert("请选择doc或txt格式的文件!");
            }
            //editor.$textElem.ele.innerHTML=this.result;
        }

    },
    convertBase64UrlToBlob:function(urlData,typeObj){  
      
        var bytes=window.atob(urlData.split(',')[1]);        //去掉url的头，并转换为byte  
      
    //处理异常,将ascii码小于0的转换为大于0  
        var ab = new ArrayBuffer(bytes.length);  
        var ia = new Uint8Array(ab);  
        for (var i=0;i<bytes.length;i++){  
            ia[i] = bytes.charCodeAt(i);  
        }  
  
        return new Blob( [ab] , typeObj);  
    },
    readImg:function(){
        const editor=this.editor;
        const file=this.$elem.ele.firstChild.files[0];
        const reader=this.reader;
        const img=$("<img></img>").ele;
        const that=this;
        const typeObj={
            type:file.type
        };
        reader.readAsDataURL(file);
        //reader.readAsText(file);
        reader.onload=function(){
            if(file.type==="image/jpeg"||file.type==="image/png"){
                var blob=that.convertBase64UrlToBlob(this.result,typeObj);
                var url = URL.createObjectURL(blob);
                img.src=url;
                if(editor.selectionAPI){
                    editor.cmd.do('insertElem', img);
                }
            }else{
                alert("请选择png、jpeg、jpg图片类型的文件!");
            }   
        }
    },
    // 点击事件
    _bindEvent:function(){
        const editor=this.editor;
        const $elem=this.$elem;
        const that=this;
        $elem.on(this.type,function(event){
            if(event.target.type==="button"){
                if($elem.ele.firstChild.files[0]){
                    that.readFile(that);
                }               
            }else if(event.target.type==="submit"){
                if($elem.ele.firstChild.files[0]){
                    that.readImg(that);
                } 
            }
        })
       
    }  
}

export default File