function Addshop(oNode){
	this.ele=$(oNode).get(0);
	this.addshop();
}


Addshop.prototype.addshop=function(){
	var oSelf=this;
	$(oSelf.ele).find('.btn').find('.btn2').click(function(){
//		$.cookie('imgname',$(this).parent().siblings('.picture').find('a img').attr('src'),{ expires: 7,path:'/' });
////		console.log($.cookie('imgname',$(this).parent().siblings('#picture').find('a img').attr('src')))
//		$.cookie('username',$(this).parent().siblings('.name').find('a').html(),{ expires: 7 ,path:'/'});
//		$.cookie('price',$(this).parent().siblings('.price').find('.money').html(),{ expires: 7 ,path:'/'});
//	})
//	var obj={};
//	obj.imgname=$(this).parent().siblings('.picture').find('a img').attr('src');
//	
//	var flag=false;
//	if(!$.cookie('product')){
//		var arr=[];
//	}else{
//		var arr=JSON.parse($.cookie('product'));
//		for(var i=0;i<arr.length;i++){
//			if(obj.imgname==arr[i].imgname){
//				arr[i].count=arr[i].count*1+obj.count*1;
//				flag=true;
//			}
//		}
//	}
//	if(flag==false){
//		arr.push(obj);
//	}
//	
//	$.cookie('product',JSON.stringify(arr),{});
//}


var obj={};
obj.imgname=$(oSelf.ele).siblings('.magnify').find('.see img').attr('src');
obj.username=$(oSelf.ele).find('.p1').html();
obj.price=$(oSelf.ele).find('.list_4').find('li').eq(0).find('span').html();
if(!$.cookie('producted')){
var arr=[];	
}else{
	var arr=JSON.parse($.cookie('producted'));
}
arr.push(obj);
$.cookie('producted',JSON.stringify(arr),{ expires: 7 ,path:'/'});
})
}