$(document).ready(function(){
	var oriColor = $("nav#article_nav ul li").css("background");		
	$("nav#article_nav ul li").mouseover(function(){		//改变轮播图中导航栏hover时候的样式
		var index = $(this).index();
		$(this).css("background-color","#FFFFFF");
		$(this).children("div").children("a").css("color","#000000");
		$("div.introduction_div").eq(index).show().siblings("div.introduction_div").hide();
		$("ul.ul").hide();
	});
	$("nav#article_nav ul li").mouseout(function(){		//改变轮播图中导航栏hover时候的样式
		$(this).css("background-color",oriColor);
		$(this).children("div").children("a").css("color","#FFFFFF");
	});
	$("div.introduction_div").mouseleave(function(){
		$("div.introduction_div").hide();
		$("ul.ul").show();
	})
	
	//当鼠标移到导航栏时出现介绍
	
	var time = 5000;
	var count = 1;
	window.setInterval(function(){					//定时器,定时修改轮播图背景图片
		count++;
		if(count<4){
			
			$("div#banner_pic").css({background:'url(img/lunbo'+count+'.jpg) no-repeat center center'});
			$("ul.ul>li").eq(count-1).css("background-color","#95999C").siblings("li").css("background-color","orange");
		}
		else{
			count = 0;
		}
	},time);
	$("ul.ul>li").click(function(){
		$(this).css("background-color","#95999C").siblings("li").css("background-color","orange");
		$("div#banner_pic").css("background","url(img/lunbo"+($(this).index()+1)+".jpg) no-repeat center center");
		count = $(this).index()+1;
	});
});