$(function(){


	//产品导航
	$("#lm2IconA").click(function(){
		$("#lm2Hide").show();

		//点击按钮隐藏
		$("#lm2HIconA").click(function(){
			$("#lm2Hide").css("display","");
		});

		$("#lm2Hide").mouseover(function(){
			$("#lm2Hide").css("display","block");


			//鼠标移出隐藏
			$("#lm2Hide").mouseout(function(){
				$("#lm2Hide").css("display","");
			});
		});
		
	});



	//SOSO下拉菜单

	$("#SFLBao").hover(function(){
		$("#SFLMenu").show();
		$("#SsFLSec").css("background-position","-550px -200px");
		
	},function(){
		$("#SFLMenu").hide();
		$("#SsFLSec").css("background-position","");
	});

	$("#SFLMenu li").hover(function(){
		$(this).css("background-color","rgb(237,243,253)");
		$(this).find(".SFLMenuA").css("color", "rgb(105,148,193)");
	},function(){
		$(this).css("background-color","");
		$(this).find(".SFLMenuA").css("color", "");
	});

	//lm4广告


	//alert("1")
	//今日热播切换


	$(".lm2TopATitle").hover(function(){
		$(".lm2TopATitle").removeClass("lm2TopA");
		$(this).addClass("lm2TopA");


		var gettitleid=$(this).attr("upid");
		$(".lm2right2Content").addClass("jyhContent");
		var titleid = '#' + gettitleid;
		$(titleid).removeClass("jyhContent")
	});



	//要闻
	$(".lm2LLTitle").hover(function(){
		$(".lm2LLTitle").removeClass("lm2LLYJ");
		$(this).addClass("lm2LLYJ");


		var gettitleid=$(this).attr("upid");
		$(".lm2LL1LArea").addClass("disnone");
		//alert(gettitleid);
		var titleid = '#' + gettitleid;
		$(titleid).removeClass("disnone")
	});
	
});