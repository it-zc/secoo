function Screen(oNode,oNode1,oNode2){
	this.listNode=$(oNode).get(0);
	this.priceNode=$(oNode1);
//	this.commodityNode=$(oNode2).get(0);
	this.listscreen();
}

Screen.prototype.listscreen=function(){
	var arr=[];
	var oSelf=this;
	$(oSelf.listNode).find('li').eq(2).find('p').eq(3).click(function(){
//		alert(123);
		$(oSelf.priceNode[i]).css('display','block');
		for(var i=0;i<oSelf.priceNode.length;i++){
//		console.log(oSelf.priceNode[i]);
		if(!($(oSelf.priceNode[i]).attr('only_price')>5001&&$(oSelf.priceNode[i]).attr('only_price')<10000)){
			$(oSelf.priceNode[i]).css('display','none');
		}
//		console.log($(oSelf.priceNode[i]).attr('only_price'))
		
		}
	})
	 $(oSelf.listNode).find('li').eq(2).find('p').eq(4).click(function(){
//		alert(123);
        for(var i=0;i<oSelf.priceNode.length;i++){
            $(oSelf.priceNode[i]).css('display','block');
            if(!($(oSelf.priceNode[i]).attr('only_price')>10001&&$(oSelf.priceNode[i]).attr('only_price')<50000)){
                $(oSelf.priceNode[i]).css('display','none');
            }
        }
    })
}