function Toggle(oNode){
	this.ele=$(oNode).get(0)
	this.toggleAction()
}

Toggle.prototype.toggleAction=function(){
	var oSelf=this;
	$(oSelf.ele).find('.only').on({
//		'mouseenter mouseleave':function(){
//			$(this).find('.addshop').toggle();
//			$(this).find('#collect').toggle();
//			
//		},
		'mouseenter':function(){
			$(this).css({
				'border':'1px solid #ccc',
				'width':243,
				'height':378
			});
			$(this).find('.addshop').css('display','block')
			$(this).find('#collect').css('display','block')
		},
		'mouseleave':function(){
			$(this).css({
				'border':'none',
				'width':245,
				'height':380
			});
			$(this).find('.addshop').css('display','none')
			$(this).find('#collect').css('display','block')
		}
	})
}
