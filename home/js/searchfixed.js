function Searchfixed(oNode){
	this.ele=$(oNode).get(0);
	this.searchfixed();
}

Searchfixed.prototype.searchfixed=function(){
	var oSelf=this;
	$(window).scroll(function(){
		if($(window).scrollTop()>800){
			$(oSelf.ele).fadeIn();
		}else if($(window).scrollTop()<800){
			$(oSelf.ele).fadeOut();
		}
	})
}

