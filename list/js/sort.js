$(function(){
	var priceNode=$('.only');
	var commodityNode=$('.commodity').get(0);
	var ulNode=$('.list_6').get(0);
	var arr=[];
	var count=1;
	$(ulNode).find('li').eq(5).on('click',function(){
		count++;
		for(var i=0;i<priceNode.length;i++){
			arr.push(priceNode[i]);
		}
		if(count%2==0){
			arr.sort(function(a,b){
				return $(a).attr('only_price')-$(b).attr('only_price')
			});
		}else if(count%2!=0){
			arr.sort(function(a,b){
				return $(b).attr('only_price')-$(a).attr('only_price')
			})
		}
		for(var j=0;j<arr.length;j++){
			$(commodityNode).append(arr[j])
		}
	})
	 $(ulNode).find('li').eq(0).on('click',function(){
			location.reload();
	})
})



