$(document).ready(function(){
	$("#head_ul>li").mouseenter(function(){					//二级菜单功能
		$(this).children("ul").slideDown(500);
		$(this).siblings("li").children("ul.childMenu").hide(100);
	});
	$("ul.childMenu").mouseleave(function(){					//二级菜单功能
		$(this).hide();
	});
	$("#search_focus").focus(function(){
		$("#search").css("box-shadow","3px 3px 3px rgba(0,0,0,.5)");
	});
	$("#nav_introduction").mouseleave(function(){
		$("#head_ul>li>ul.childMenu").hide(100);
	});

})