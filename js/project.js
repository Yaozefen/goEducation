$(document).ready(function(){
	$(".scroll").hover(function(){//鼠标指向滚动区域
		clearTimeout(timeID);//中止超时，即停止滚动
	},function(){//鼠标离开滚动区域
		timeID=setInterval('autoScroll()',3000);   //设置超时函数，每过3秒执行一次函数
	});
})
	
function autoScroll(){
	$(".scroll").find(".list").animate({marginTop:'-25px'},500,function(){
		$(this).css({'margin-top':'0px'}).find('li:first').appendTo(this);
	});
}
var timeID = setInterval('autoScroll()',3000);

