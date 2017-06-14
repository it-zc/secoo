function Moreoption(oNode,oNode1){
	this.moreNode=$(oNode).get(0);
	this.listNode=$(oNode1).get(0);
	this.moreclick();
}

Moreoption.prototype.moreclick=function(){
	var oSelf=this;
	var count=1;
	$(oSelf.moreNode).click(function(){
		count++;
		if(count%2!=0){
			$(oSelf.listNode).find('li').eq(3).toggle();
			$(oSelf.listNode).find('li').eq(4).toggle();
			$(oSelf.listNode).find('li').eq(5).toggle();
			$(oSelf.listNode).find('li').eq(6).toggle();
			$(oSelf.listNode).find('li').eq(8).toggle();
			$(oSelf.listNode).find('li').eq(9).toggle();
		}
		if(count%2==0){
			$(oSelf.listNode).find('li').eq(3).toggle();
			$(oSelf.listNode).find('li').eq(4).toggle();
			$(oSelf.listNode).find('li').eq(5).toggle();
			$(oSelf.listNode).find('li').eq(6).toggle();
			$(oSelf.listNode).find('li').eq(8).toggle();
			$(oSelf.listNode).find('li').eq(9).toggle();
		}	
	})
}

//Moreoption.prototype.listscreen=function(){
//$(oSelf.listNode).find('li').eq(2).	find('a').eq(2).click(function(){
//	
//})
//}