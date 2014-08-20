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


	//说说发表栏

	//文本框
	$("#QAMSs").click(function(){
		$(".QAMSBottom").fadeIn('3000');
		return false;
		//$(".QAMShuoshuo").css("height","");
	});
	$("body").click(function(){
		$(".QAMSBottom").fadeOut('3000');
		//$(".QAMSBottom").fadeout('1000');
		//$(".QAMSBottom").show();
	});

	//图标变化
	$(".QAMIconA").hover(function(){
		
		$(this).find(".QAMIA01").css("background-position","-490px -75px");
		$(this).find(".QAMIA02").css("background-position","-490px -125px");
		$(this).find(".QAMIA03").css("background-position","-490px -175px");
		$(this).find(".QAMIA").next().show();
		$(this).css("background-color","#FFF");
		//var sicon = $(this);
		//setTimeout(showBg(sicon),8000);
	},function(){
		$(this).css("background-color","");
		$(this).find(".QAMIA").css("background-position","");
		$(this).find(".QAMIA").next().hide();
	});
	$(".QAMIconAChild").hover(function(){
		$(this).find(".QAMIconAChildPic01").css("background-position"," -540px -175px");
		$(this).find(".QAMIconAChildPic02").css("background-position"," -565px -75px");
		$(this).find(".QAMIconAChildPic03").css("background-position"," -565px -125px");
		$(this).find(".QAMIconAChildPic04").css("background-position"," -565px -175px");
		$(this).find(".QAMIconAChildPic05").css("background-position"," -515px -25px");
		$(this).find(".QAMIconAChildPic06").css("background-position"," -515px -75px");
		$(this).find(".QAMIconAChildPic07").css("background-position"," -540px -25px");
		$(this).find(".QAMIconAChildPic08").css("background-position"," -540px -75px");
		$(this).find(".QAMIconAChildPic09").css("background-position"," -540px -125px");
		$(this).find(".QAMIconAChildPic10").css("background-position"," -565px -25px");

	},function(){
		$(this).find(".QAMIconAChildPic01").css("background-position","");
		$(this).find(".QAMIconAChildPic02").css("background-position","");
		$(this).find(".QAMIconAChildPic03").css("background-position","");
		$(this).find(".QAMIconAChildPic04").css("background-position","");
		$(this).find(".QAMIconAChildPic05").css("background-position","");
		$(this).find(".QAMIconAChildPic06").css("background-position","");
		$(this).find(".QAMIconAChildPic07").css("background-position","");
		$(this).find(".QAMIconAChildPic08").css("background-position","");
		$(this).find(".QAMIconAChildPic09").css("background-position","");
		$(this).find(".QAMIconAChildPic10").css("background-position","");

	});

	$(".QAMSBottomIconA").hover(function(){
		var iconid = $(this).attr("hid");
		$(this).addClass(iconid+"hover");
	},function(){
		var iconid = $(this).attr("hid");
		$(this).removeClass(iconid+"hover");
	});
	$(".QAMSBottomIconA").click(function(){
		var isclick = $(this).attr("isclick");
		if(isclick=="no"){
			var iconid = $(this).attr("hid");
			$(this).addClass(iconid+"click");
			$(this).attr("isclick","yes");
		} else{
			var iconid = $(this).attr("hid");
			$(this).removeClass(iconid+"click");
			$(this).attr("isclick","no");
		}
		
		
	});
});

//说说发表下拉框

