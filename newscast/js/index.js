$(function  () {

	$(".TMenuLi").hover(function(){
		$(this).find(".TMenuA").css("color","#FFF");
		$(this).find(".TMenuTap").show();
	},function(){
		$(this).find(".TMenuA").css("color","");
		$(this).find(".TMenuTap").hide();
	});

	$(".TMenuTap a").hover(function(){
		$(this).css("color","#FFF");
	},function(){
		$(this).css("color","");
	});
});