function Addshoped(oNode){
	this.ele=$(oNode).get(0);
	this.setup();
	this.oDelet();
}


Addshoped.prototype.setup=function(){
	var oSelf=this;
	if($.cookie('producted')){

		var arr=JSON.parse($.cookie('producted'));
//		console.log(arr)
		
		$.each(arr,function(i){
			var a=$('<ul class="tradename_ul"><li class="tradename_ul_li1"><input type="checkbox"></li><li class="tradename_ul_li2"><dl><dt><img class="img" src=img/'+arr[i].imgname+' /></dt><dd><p class="username">'+arr[i].username+'</p><p>颜色：黑色</p></dd></dl></li><li class="tradename_ul_li3">中国大陆</li><li class="tradename_ul_li4">'+arr[i].price+'</li><li class="tradename_ul_li5"><button class="min">-</button><input type="text" value="1" class="count"/><button class="add">+</button></li><li class="tradename_ul_li6">'+arr[i].price+'</li><li class="tradename_ul_li7">删除</li></ul>')
			$(oSelf.ele).append(a);
	//		$('.img').attr('src','img/'+arr[i].imgname);
	//		$('.username').html(arr[i].username);
	//		$('.tradename_ul_li4').html(arr[i].price);
	//		$('.tradename_ul_li6').html(arr[i].price);
//			$('.tradename_ul').find('.img').attr('src','img/'+);
//			$('.tradename_ul').find('.username').html(arr[i].username);
//			$('.tradename_ul').find('.tradename_ul_li4').html(arr[i].price);
//			$('.tradename_ul').find('.tradename_ul_li6').html(arr[i].price);
//			
	
	})
	}
}

Addshoped.prototype.oDelet=function(){
	var oSelf=this;
	$(oSelf.ele).find('.tradename_ul_li7').click(function(){
//		$.removeCookie('producted');
		$(this).siblings('li').remove();
		$(this).remove();
	})
}

//Addshoped.prototype.count=function(){
//	$('.min').click(function(){
//		if($('.count').attr('value')>0){
//			$('.count').attr('value')--
//		}
//	})
//	$('.add').click(function(){
//			$('.count').attr('value')++
//	})
//}
