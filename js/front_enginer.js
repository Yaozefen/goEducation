$(document).ready(function(){
	$("p#more").click(function(){
		if($(this).html()=="查看更多课程"){
			$("article#front_article").css("height","95rem");
			$("div#last_class").show();
			$("div#last_text").show();
			$(this).html("点击收起");
			$(this).css("color","#FF0000");
		}
		else{
			$("article#front_article").css("height","75rem");
			$("div#last_class").hide();
			$("div#last_text").hide();
			$(this).html("查看更多课程");
			$(this).css("color","forestgreen");
		}
	});
})
