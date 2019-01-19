$(document).ready(function(){

	$("#user_info").mouseover(function(){
		$("#hover_user").show();
	});

	$("#user_info").on({
		mouseover:function(){
			$("#hover_user").show();
		},
		mouseout:function(){
			$("#hover_user").hide();
		}
	});

})