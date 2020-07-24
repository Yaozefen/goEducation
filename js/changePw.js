var j = jQuery.noConflict();
j(document).ready(function(){
	j("#username").blur(function(){
		var phoneReg = /^1[3|4|5|8][0-9]\d{8}$/;			//手机号验证
		if((j(this).val())==""){
			j("#user_span").html("请输入手机号");
		}
		else if(!phoneReg.test(j(this).val())){
			j("#user_span").html("手机格式不正确");
		}
		else{
			j("#user_span").html("");
		}
	});
	j("#newPass").blur(function(){
		var pass = j(this).val();
		if(pass==""){
			j("#newPass_span").html("请输入密码");
		}
		else if((pass.length<6)||(pass.length>32)){
			j("#newPass_span").html("密码6-32个字符");
		}
		else{
			j("#newPass_span").html("");
		}
	})
	j("#get_code").click(function(event){
		var seconds = 60;
		event.preventDefault();
		if(j("#phone").val()!=""){
			j("#code").val("123456");
			window.setInterval(function(){
				seconds = seconds - 1;
				if(seconds > 0){
					j("#get_code").text(seconds+"秒后重新获取");
				}
				else{
					j("#get_code").text("获取验证码");
				}
			},1000);
		}
	});
	return true;
});