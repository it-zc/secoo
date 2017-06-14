/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-06-03 10:45:59
 * @version $Id$
 */

function Roll(oNode){
	this.ele=$(oNode).get(0);
	this.count=1;
	this.width=$(this.ele).find('#list li').eq(0).width();
	this.num();
	this.Btn();
	this.timer();
}

Roll.prototype.num=function(){
	var oSelf=this
	$(oSelf.ele).find('#ctr li').click(function() {
		$(oSelf.ele).find('#ctr li').removeClass();
		$(this).addClass('select');
		oSelf.count=$(this).index()+1;
		$(oSelf.ele).find('#list').animate({left:-oSelf.width*oSelf.count})
	});
}


Roll.prototype.Btn=function(){
	var oSelf=this;
	$(oSelf.ele).find('.btn').click(function() {
		$(this).attr('id')=='left'?--oSelf.count:++oSelf.count;
			oSelf.change();
		
	})
	
}

Roll.prototype.timer=function(){
	var oSelf=this;
	$(oSelf.ele).on({'mouseenter':function(){
		clearInterval(timerID);
	},
		'mouseleave':function(){
			timerID = setInterval(timeAction, 2000);
		}
	})
	var timerID = setInterval(timeAction, 1000);
	function timeAction(){
			oSelf.count++;
			oSelf.change();
	}
}




Roll.prototype.change=function(){
	if(this.count==0){
			// console.log(oSelf.width)
			$(this.ele).find('#list').css('left',-5*this.width);
			this.count=3;
		}
		else if(this.count==4){
			// console.log(oSelf.width)
			$(this.ele).find('#list').css('left',0);
			this.count=1;
		}
		$(this.ele).find('#list').animate({'left':-this.count*this.width});
		$(this.ele).find('#ctr li').removeClass().eq(this.count-1).addClass('select');
}