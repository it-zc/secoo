function Opacity(oNode){
	this.ele=$(oNode)
	this.opacityAction();
}

Opacity.prototype.opacityAction=function(){
	var oSelf=this;
	oSelf.ele.mouseenter(function(){
//		alert(123)
	
		$(this).animate({opacity:0.5},function(){
//			$(this).css('Opacity','1')
			$(this).animate({opacity:1})
		})
	})
}
