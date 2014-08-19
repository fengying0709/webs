$(function(){
	$("#QAWeater").hover(function(){
		$(".QAWeaterHide").show();
		$(this).css("border","1 dashed #54B3F3");

		$(".QAWeaterHide").click( function(){
			$(this).parent().hide();
		});
	},function(){
		$(".QAWeaterHide").hide();
		$(this).css("border","");
	});
});