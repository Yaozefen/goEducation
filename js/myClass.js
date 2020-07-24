$(document).ready(function(){
	$("a.btn-danger").click(function(){
		var comfirm = window.confirm("确认移除么？");
		if(confirm){
			return true;
		}
		else{
			return false;
		}
	});
})