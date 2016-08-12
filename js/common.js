/*----------denglu-----------*/
$(function(){
	var cookie = document.cookie;
	if(cookie){
		var arr = cookie.split("&");
		var newArr = arr.toString().split(";");
		console.log(newArr);
		//用户名cokkie验证
		for(var i=0;i<arr.length;i++){

			for(var n=0;n<newArr.length;n++){
				if(newArr[n].indexOf("userinfo=")!=-1){
					var userArr;
					
					userArr = newArr[n].substring("userinfo=".length+1);
					console.log(userArr);

					var userInfo = JSON.parse(userArr.toString());
					var username = userInfo.user;
					var $hede = $(".headLeft");

					if(userInfo !="null"){
						$hede.html(username+" 欢迎您 "+"<span id='userSpan'>退出</span>");
					}
					$("#userSpan").on("click",function(){
						console.log("11");
						var now = new Date();
						now.setDate(now.getDate()-1);
						document.cookie = 'userinfo=null;expires=' + now;
						location.reload();
					});
				};
			}			
		};
		//购物车cokkie
		
		for(var j=0;j<arr.length;j++){
			for(var k=0;k<newArr.length;k++){
				if(newArr[j].indexOf("shopping=")!=-1){
					var shopArr;
					var shop;
					var shopping;

					if(j==0){
						shopArr = newArr[j].substring("shopping=".length);
					}
					else{
						shopArr = newArr[j].substring("shopping=".length+1);
					}					
					console.log(shopArr);
					/*shop = arr[j].substring("shopping".length+1);
					shoppingArr = shop.substring(0,shop.indexOf(";"));
					console.log(shoppingArr);*/
				};
			}	
		};			
	};
	
});
