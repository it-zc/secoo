function Fixedtop(oNode){
	this.ele=$(oNode).get(0);
	this.fixedtop();
}

Fixedtop.prototype.fixedtop=function(){
	var oSelf=this;
	$(window).scroll(function(){
			if($(window).scrollTop()>=800){
				$(oSelf.ele).css({
					'position':'fixed',
					'top':0
				});
			}
			else if($(window).scrollTop()<800){
				$(oSelf.ele).css({
					'position':'static'
			})
			}
	})
}
