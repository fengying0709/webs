$(function(){


	//评论
	$(".DECContentBottomBtn").click(function(){


		var txtcomment = $(this).parent().parent().find(".DECCtxt").val();
		//alert(txtcomment);
		var htmlComment = '';
		htmlComment += '		<div class="DECommentA">                                                ';
		htmlComment += '			<a class="DECommentAPic"><img src="images/MyHeader.jpg"></a>		';
		htmlComment += '			<div class="DECommentARight">										';			
		htmlComment += '				<p class="DECommentARightContent">								';
		htmlComment += '					&nbsp;														';
		htmlComment += '					<a class="DECommentARightContentName">Van</a>				';
		htmlComment += '					:'+txtcomment+'													';
		htmlComment += '				</p>															';
		htmlComment += '				<div class="DECommentARightBottom">								';
		htmlComment += '					<span>12:55</span>											';
		htmlComment += '					<i class="DATIconA DATIconA DATIconA10"></i>				';
		htmlComment += '				</div>															';
		htmlComment += '			</div>																';
		htmlComment += '		</div>																	';

		$(this).parent().parent().parent().find(".DEComment").append(htmlComment);
		$(this).parent().parent().find(".DECCtxt").val("");


		$(".DECContentBottom").hide();
		$(".DECCtxt").css({
			"width":"",
			"height":""
		});
		$(".DECContentIcon").show();
	});



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


		$(".DECContentBottom").hide();
		$(".DECCtxt").css({
			"width":"",
			"height":""
		});
		$(".DECContentIcon").show();
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



	//赞和收藏
	$(".DEChatTACancelZan").click(function(){
		$(this).parent().next().removeClass("disnone");
		var isclick = $(this).attr("isclick");
		if( isclick == "no"){
			//var htmlword = $(this).find(".DEChatTAC").html();
			$(this).find(".DEChatTAC").html("取消赞(1)");
			$(this).attr("isclick","yes");
			$(this).parent().next().find(".DECLikeMyHeader").css("display","block");
			
		}
		else{

			//判断是不是有赞
			
			var len= $(this).parent().next().find("a").length;
			//alert(len);
			if( len == "1" ){
				$(this).parent().next().addClass("disnone");
			}
			$(this).find(".DEChatTAC").html("赞(1)");
			$(this).attr("isclick","no");
			$(this).parent().next().find(".DECLikeMyHeader").css("display","none");
		}
		
		
	});
	$(".DEChatTACancelCollect").click(function(){
		var isclick = $(this).attr("isclick");
		if( isclick == "no"){
			//var htmlword = $(this).find(".DEChatTAC").html();
			$(this).find(".DEChatTAC").html("取消收藏");
			$(this).attr("isclick","yes");
			//$(this).parent().next().find(".DECLikeMyHeader").css("display","block");
			
		}
		else{
			$(this).find(".DEChatTAC").html("收藏");
			$(this).attr("isclick","no");
			//$(this).parent().next().find(".DECLikeMyHeader").css("display","none");
		}
		
		
	});

	//个人动态评论框变化
	$(".DECCtxt").click(function(){
		$(this).next().hide();
		$(this).css({
			"width":"512px",
			"height":"62px"
		});
		//$(".DECContentBottom").show();
		$(this).next().next().show();
		return false;
	});
	$(".DECContentIcon").click(function(){
		$(this).parent().find(".DECContentIcon").hide();
		$(this).parent().find(".DECCtxt").css({
			"width":"512px",
			"height":"62px"
		});
		//$(".DECContentBottom").show();
		$(this).parent().find(".DECContentBottom").show();
		return false;
	});
	$(".DECContentBottom").click(function(){
		$(this).parent().find(".DECContentIcon").hide();
		$(this).parent().find(".DECCtxt").css({
			"width":"512px",
			"height":"62px"
		});
		//$(".DECContentBottom").show();
		$(this).parent().find(".DECContentBottom").show();
		return false;
	});
	/*$(".DECContent").blur(function(){
		$(".DECContentBottom").hide();
		$(".DECCtxt").css({
			"width":"",
			"height":""
		});
		$(".DECContentIcon").show();
	});*/
});

//说说发表下拉框

