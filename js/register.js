//注册页面的表单验证
$(function(){
	var $checkCodeSpan = $('.checkCode').find('span');
	var $changPic = $('.checkCode').find('b');
	$('#regBtn').on('click',function(){
		fnLogin();		
		function fnLogin(){
			var oPname = $('#mobieNum');
			var oMsg = $('#checkMsg');
			var oUpass = $('#userPassword');
			var oCpass = $('#checkPassword');
			var oError1 = $('.min_bto_p1');
			var oError2 = $('.min_bto_p2');
			var oError3 = $('.min_bto_p3');
			var oError4 = $('.min_bto_p4');
			var oError5 = $('.min_bto_p5');
			//手机注册号码；
			var sPname = oPname.val().replace(/ /g, "");
			//注册密码；
			var sUpass = oUpass.val();
			var sCpass = oCpass.val();
			//定义满足提交条件；
			var mobieNumTrue = false;//手机号码
			var checkCodeTrue = false;//验证码；
			var checkAgainTrue = false;//再次验证密码
			var pswTrue = false;//密码；
			var regName = /^(13[0-9]|14[0-9]|15[0-9]|18[0-9])[0-9]{8}$/;//13*/14*/15*/18*    11位		
			var regPass = /^[\w]{6,20}$/;//密码只能包含数字、字母和下划线	
			//验证手机
			if(sPname.length==0){
				oError1.html("手机号不能为空！");
			}else if(!regName.test(sPname)){
				 oError1.html("手机号格式有误！");
			}else {
				oError1.html("");
				mobieNumTrue = true;
			}
			
			//匹配输入的验证码是否与随机生成的验证码一致
			if($('#checkCode').val()==$checkCodeSpan.html()){
				oError2.html("");
				checkCodeTrue = true;
			}else{
				 oError2.html("验证码输入有误！");
			}
			//设置密码
			if(sUpass.length==0){
				oError4.html("密码不能为空！");
			}else if(!regPass.test(sUpass)){
				oError4.html("密码长度为6-20位,只能包含数字、字母和下划线");
			}else {
				oError4.html("");
				pswTrue = true;
				
			}
			//匹配两次输入的密码是否一致
			if($('#checkPassword').val()==$('#userPassword').val()){
				console.log($('#checkPassword').val());
				console.log($('#userPassword').val());
				oError5.html("");
				checkAgainTrue = true;
				
			}else{
				 oError5.html("两次输入的密码不一致！");
			}
			//注册cookie验证；
			var obj =new Object();
			obj.number = sPname;
			obj.password =sUpass;
			var json = JSON.stringify(obj);
			document.cookie = sPname+'='+json+';path/';
			if(mobieNumTrue==true && checkCodeTrue==true && pswTrue==true&& checkAgainTrue==true){
				location.href = 'login.html';		
			}else{
				alert('您输入有误，请重新填写');
			}
			
			
		}			
	})
	////登录验证随机生成验证码
	fnLoginSwitch();
	////登录验证点击换一张
	$changPic.on('click',function(){
		fnLoginSwitch();
	})		
	function fnLoginSwitch(){		
		
		var aColor=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
		var sColor="#";
		for(var i=0;i<6;i++){
			var nRandom1=Math.floor(Math.random()*aColor.length);
			sColor+=aColor[nRandom1];	
		}
		$checkCodeSpan.css({background:sColor});	
		$checkCodeSpan.css('text-align','center');
		//随机生成验证码
		var aNum=["0","1","2","3","4","5","6","7","8","9",
		"a","b","c","d","e","f","g",
		"h","i","j","k","l","m","n",
		"o","p","q","r","s","t",
		"u","v","w","x","y","z",
		"A","B","C","D","E","F","G",
		"H","I","J","K","L","M","N",
		"O","P","Q","R","S","T",
		"U","V","W","X","Y","Z"]
		var sNum="";
		for(var i=0;i<4;i++){
			var nRandom2=Math.floor(Math.random()*aNum.length);
			sNum+=aNum[nRandom2];	
		}
		$checkCodeSpan.html(sNum);
	};
				
})
