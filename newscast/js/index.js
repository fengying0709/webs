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




	//pic
	$(".PicEve01").hover(function(){
		//alert("1");
		$(this).css("width","700px");
		$(".PicEve02").css("left","700px");
		$(".PicEve03").css("left","764px");
		$(".PicEve04").css("left","828px");
		$(".PicEve05").css("left","892px");
	},function(){
		picmouseover();
	});
	$(".PicEve02").hover(function(){
		//alert("1");
		$(this).css("width","700px");
		$(this).css("left","64px");
		picmouseover();
	},function(){	
		picmouseover();
	});
	$(".PicEve03").hover(function(){
		//alert("1");
		$(this).css("width","700px");
		$(this).css("left","128px");
		$(".PicEve01").css("left","");
		$(".PicEve02").css("left","64px");
		$(".PicEve04").css("left","828px");
		$(".PicEve05").css("left","892px");
	},function(){
		picmouseover();
	});
	$(".PicEve04").hover(function(){
		//alert("1");
		$(this).css("width","700px");
		$(this).css("left","192px");
		$(".PicEve01").css("left","");
		$(".PicEve02").css("left","64px");
		$(".PicEve03").css("left","128px");
		$(".PicEve05").css("left","892px");
	},function(){
	});
	$(".PicEve05").hover(function(){
		//alert("1");
		$(this).css("width","700px");
		$(this).css("left","257px");
		$(".PicEve01").css("left","");
		$(".PicEve02").css("left","64px");
		$(".PicEve03").css("left","128px");
		$(".PicEve04").css("left","192px");
	},function(){
		picmouseover();
	});
});


function picmouseover(){
		$(this).css("left","");
		$(this).css("width","");
		$(".PicEve01").css("left","");
		$(".PicEve02").css("left","");
		$(".PicEve03").css("left","");
		$(".PicEve04").css("left","");
		$(".PicEve05").css("left","");
}
