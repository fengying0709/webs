$(function(){

	//天气信息隐藏
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


	//左边栏目的展开
	$(".QACCLA").mouseover(function(){
		$(this).hide();
		$(this).next().show();
	});
});