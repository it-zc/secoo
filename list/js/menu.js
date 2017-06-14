function Menu(oNode,oNode1){
	this.ele=$(oNode).get(0);
	this.barNode=$(oNode1).get(0);
	this.menuAction();
	this.barAction();
}

Menu.prototype.menuAction=function(){
	var oSelf=this;
	$(oSelf.ele).find('.nvai').on({
		'mouseenter mouseleave':function(){
			$(this).find('.method').toggle()
		},
		'mouseenter':function(){
			$(this).css('background','#fff');
			$(this).find('dt').css('color','#382F6B')
			$(this).find('dd').find('a').css('color','#000')
		},
		'mouseleave':function(){
			$(this).css('background','#382f6b');
			$(this).find('dt').css('color','#fff')
			$(this).find('dd').find('a').css('color','#ccc')
		}
	})
}


Menu.prototype.barAction=function(){
	var oSelf=this;
	$(oSelf.barNode).on({
		'mouseenter mouseleave':function(){
			$(oSelf.ele).toggle();
		}
	})
	$(oSelf.ele).on({
		'mouseenter mouseleave':function(){
			$(this).toggle();
		}
	})
}