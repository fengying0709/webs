$(function(){


	//转发
	$(".DEChatTAForword").click(function(){


		var fwName = $(this).parent().parent().parent().find(".DEName").html();
		//alert(fwName);
		var fwContent = $(this).parent().parent().parent().find(".DEContentTop").html();

		var fwPic = $(this).parent().parent().parent().find(".DEContentDesPic").html();

		var bodyheight = $("#QzoneAll").height();
		//alert(bodyheight);
		var thisheight = $("body").scrollTop();
		$(".forwordMenban").css({"height":bodyheight, "top":thisheight});
		$(".forwordMenban").removeClass("disnone");



		$(".forwordBtn").click(function(){
			var stxt = $(".forwordTxtArea").val();

			var fwhtml = '';
			fwhtml += '';
			fwhtml += '			<div class="DECForword">';
			fwhtml += '				<a class="DECForwordPic">'+fwPic+'</a>';
			fwhtml += '				<div class="DECForwordDes">';
			fwhtml += '					<span class="DECForwordName">'+fwName+'</span>';
			fwhtml += '					<p class="DECForwordContent">';
			fwhtml += '						:'+ fwContent;
			fwhtml += '					</p>';
			fwhtml += '				</div>';
										
			fwhtml += '			</div>';

			addShuoshuo(stxt,fwhtml);

			$(".forwordTxtArea").val("");
			$(".forwordMenban").addClass("disnone");

			$("html,body").animate({scrollTop:"100px"},10);
		});







		//关闭
		$(".forwordClose").click(function(){
			$(".forwordMenban").addClass("disnone");
		});
	});


	//发表说说
	$(".QAMSBottomBtnShuoshuo").click(function(){
		var stxt = $(this).parent().parent().find(".QAMTxtA").val();

		if( stxt == "")
		{
			alert("请输入说说的内容！");
			return false;
		}
		else{
			addShuoshuo(stxt,"");
			$(this).parent().parent().find(".QAMTxtA").val("");
		}
		
	});


	//我的主页
	$(".TNavMain").hover(function(){
		$(this).find(".TNavLiUp").stop();
		$(this).css("background-color"," #FFF");
		$(this).find(".TNavSpan").css("color","#404040");
		$(this).find(".DATIconA12").css("background-position","-790px -25px");
		$(this).find(".TNTI").removeClass("TNavTipIcon");
		$(this).find(".TNTI").addClass("TNavTipIconhover");
		//$(this).find(".TNavLiUp").removeClass("disnone");
		//$(this).find(".TNavLiUp").animate({"height":"0"},10)
		$(this).find(".TNavLiUp").removeClass("disnone");
		$(this).find(".TNavLiUp").animate({"height":"233px"},1000);
	},function(){
		$(this).css("background-color"," ");
		$(this).find(".TNavSpan").css("color","");
		$(this).find(".DATIconA12").css("background-position","");
		
		$(this).find(".TNTI").removeClass("TNavTipIconhover");
		$(this).find(".TNTI").addClass("TNavTipIcon");
		$(this).find(".TNavLiUp").animate({"height":"0"},100);
		$(this).find(".TNavLiUp").addClass("disnone");
		
	});




	//朋友
	$(".TNavFriend").hover(function(){
		$(this).find(".TNavLiUp").stop();
		$(this).css("background-color"," #FFF");
		$(this).find(".TNavSpan").css("color","#404040");
		$(this).find(".DATIconA13").css("background-position","-790px 0px");
		$(this).find(".TNTI").removeClass("TNavTipIcon");
		$(this).find(".TNTI").addClass("TNavTipIconhover");
		//$(this).find(".TNavLiUp").removeClass("disnone");
		//$(this).find(".TNavLiUp").animate({"height":"0"},10)
		$(this).find(".TNavLiUp").removeClass("disnone");
		$(this).find(".TNavLiUp").animate({"height":"312px"},1000);
	},function(){
		$(this).css("background-color"," ");
		$(this).find(".TNavSpan").css("color","");
		$(this).find(".DATIconA13").css("background-position","");
		
		$(this).find(".TNTI").removeClass("TNavTipIconhover");
		$(this).find(".TNTI").addClass("TNavTipIcon");
		$(this).find(".TNavLiUp").animate({"height":"0"},100);
		$(this).find(".TNavLiUp").addClass("disnone");
		
	});
	//门板关闭
	


	//点击图片
	/*<div class="menban">
		<div class="mbbg">
			<img src="images/comment2.jpg">
		</div>
		<a class="mbclose"></a>
	</div>*/
	$(".DEContentDesPic").click(function(){
		var stop = $("body").scrollTop();  

		var htmlMenban = '';
		htmlMenban+='  ';	
		htmlMenban+=' <div class="menban"> 					';
		htmlMenban+=' 	<div class="mbbg">					';
		htmlMenban+=' 		<img src="images/comment2.jpg">	';
		htmlMenban+=' 	</div>								';
		htmlMenban+=' 	<a class="mbclose"></a>				';
		htmlMenban+=' </div>								';

		$("#QzoneTop").hide();
		$("#QzoneAll").hide();

		$("body").append(htmlMenban);


		$(".mbclose").click(function(){
			$("html,body").animate({scrollTop:stop},10);
			$(this).parent().hide();
			$("#QzoneTop").show();
			$("#QzoneAll").show();
		});
	});

	//评论
	$(document).on("click",".DECContentBottomBtn",function(){
	//$(".DECContentBottomBtn").click(function(){
		var ct = new Date();
		var hour = ct.getHours();
		var minute = ct.getMinutes();
		var h1=Math.floor( ( hour % 100 ) /10 );
		var h2= hour % 10;
		var mi1=Math.floor( ( minute % 100 ) /10 );
		var mi2= minute % 10;
		var txtTime = h1 + '' + h2 + ':' + mi1 + '' + mi2 ;

		var txtcomment = $(this).parent().parent().find(".DECCtxt").val();
		//alert(txtcomment);
		var htmlComment = '';
		htmlComment += '		<div class="DECommentA">                                                ';
		htmlComment += '			<a class="DECommentAPic"><img src="images/MyHeader.jpg"></a>		';
		htmlComment += '			<div class="DECommentARight">										';			
		htmlComment += '				<p class="DECommentARightContent">								';
		htmlComment += '					&nbsp;														';
		htmlComment += '					<a class="DECommentARightContentName">Van</a>				';
		htmlComment += '					:'+txtcomment+'												';
		htmlComment += '				</p>															';
		htmlComment += '				<div class="DECommentARightBottom">								';
		htmlComment += '					<span>' + txtTime + '</span>								';
		htmlComment += '					<i class="DATIconA DATIconA DATIconA10"></i>				';
		htmlComment += '				</div>															';
		htmlComment += '			</div>																';
		htmlComment += '		</div>																	';

		$(this).parent().parent().parent().find(".DEComment").append(htmlComment);
		$(this).parent().parent().find(".DECCtxt").val("");


		var commentNum = $(this).parent().parent().parent().find(".DEChatTACNumchat").html();
		if(commentNum == "0"){
			$(this).parent().parent().parent().find(".DEChatTACNumchat").parent().removeClass("disnone");
		}

		//评论数字变化
		var commentNum = $(this).parent().parent().parent().find(".DEChatTACNumchat").html();
		commentNum++;
		$(this).parent().parent().parent().find(".DEChatTACNumchat").html(commentNum);




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
	$(document).on("click",".DEChatTACancelZan",function(){
	//$(".DEChatTACancelZan").click(function(){
		$(this).parent().next().removeClass("disnone");
		var isclick = $(this).attr("isclick");
		if( isclick == "no"){
			//var htmlword = $(this).find(".DEChatTAC").html();
			$(this).find(".DEChatTAC:first").html("取消赞");
			var zanNum = $(this).find(".DEChatTACNumzan").html();
			if ( zanNum == "0"){
				$(this).find(".DEChatTACNumzan").parent().removeClass("disnone");
			}
			zanNum++;
			$(this).find(".DEChatTACNumzan").html(zanNum);
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
			$(this).find(".DEChatTAC:first").html("赞");
			var zanNum = $(this).find(".DEChatTACNumzan").html();
			zanNum--;
			$(this).find(".DEChatTACNumzan").html(zanNum);
			if ( zanNum == "0"){
				$(this).find(".DEChatTACNumzan").parent().addClass("disnone");
			}
			
			$(this).attr("isclick","no");
			$(this).parent().next().find(".DECLikeMyHeader").css("display","none");
		}
		
		
	});
	$(document).on("click",".DEChatTACancelCollect",function(){
	//$(".DEChatTACancelCollect").click(function(){
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
	$(document).on("click",".DEChatTAChat",function(){
	//$(".DECCtxt").click(function(){
		$(this).parent().parent().parent().find(".DECContentIcon").hide();
		$(this).parent().parent().parent().find(".DECCtxt").css({
			"width":"512px",
			"height":"62px"
		});
		//$(".DECContentBottom").show();
		$(this).parent().parent().parent().find(".DECContentBottom").show();
		return false;
	});


	$(document).on("click",".DECCtxt",function(){
	//$(".DECCtxt").click(function(){
		$(this).next().hide();
		$(this).css({
			"width":"512px",
			"height":"62px"
		});
		//$(".DECContentBottom").show();
		$(this).next().next().show();
		return false;
	});
	$(document).on("click",".DECContentIcon",function(){
	//$(".DECContentIcon").click(function(){
		$(this).parent().find(".DECContentIcon").hide();
		$(this).parent().find(".DECCtxt").css({
			"width":"512px",
			"height":"62px"
		});
		//$(".DECContentBottom").show();
		$(this).parent().find(".DECContentBottom").show();
		return false;
	});
	$(document).on("click",".DECContentBottom",function(){
	//$(".DECContentBottom").click(function(){
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
 function addShuoshuo(txtss,fwhtml){
 	var ct = new Date();
		var hour = ct.getHours();
		var minute = ct.getMinutes();
		var h1=Math.floor( ( hour % 100 ) /10 );
		var h2= hour % 10;
		var mi1=Math.floor( ( minute % 100 ) /10 );
		var mi2= minute % 10;
		var txtTime = h1 + '' + h2 + ':' + mi1 + '' + mi2 ;


 	var htmlShuoshuo ='';

 	htmlShuoshuo += '';

 	htmlShuoshuo += '	<div class="DynamicEve">';
	htmlShuoshuo += '		<a class="DEHeader"><img src="images/MyHeader.jpg"> </a>';
	htmlShuoshuo += '		<div class="DEInfo">';
	htmlShuoshuo += '			<div class="DEInfoTop">';
	htmlShuoshuo += '				<div class="DEName">Van</div>';
	htmlShuoshuo += '				<div class="DELevel">';
	htmlShuoshuo += '					<div class="QzoneLevel">';
	htmlShuoshuo += '						<i class="p4">';
	htmlShuoshuo += '							<span class="n1 d7"></span>';
	htmlShuoshuo += '							<span class="n2 d4"></span>';
	htmlShuoshuo += '						</i>';
	htmlShuoshuo += '					</div>';
	htmlShuoshuo += '				</div>';
		
	htmlShuoshuo += '			</div>';
	htmlShuoshuo += '			<div class="DEInfoBottom">';
	htmlShuoshuo += '				<span>'+ txtTime+'</span>';
	/*htmlShuoshuo += '				<a>苏州市昆山市</a>';
	htmlShuoshuo += '				<span>来自</span>';
	htmlShuoshuo += '				<a>小米</a>';*/
	htmlShuoshuo += '				<i class="DATIconA DATIconA03"></i>';
	htmlShuoshuo += '				<a>浏览(0)</a>';
	htmlShuoshuo += '			</div>';
	htmlShuoshuo += '		</div>';
	htmlShuoshuo += '		<div class="DEContent">';
	htmlShuoshuo += '			<div class="DEContentTop">';
	htmlShuoshuo += 				txtss;
	htmlShuoshuo += '			</div>';
	htmlShuoshuo += '			<div class="DEContentDes">'+fwhtml+'</div>';
	htmlShuoshuo += '		</div>';
	htmlShuoshuo += '		<div class="DEChat">';
	htmlShuoshuo += '			<div class="DECTop">';
	htmlShuoshuo += '				<div class="DEChatTA DEChatTAChat">';
	htmlShuoshuo += '					<i class="DATIconA DATIconA04"></i>';
	htmlShuoshuo += '					<span class="DEChatTAC">评论</span>';
	htmlShuoshuo += '					<span class="DEChatTAC disnone">(<i class="DEChatTACNumchat">0</i>)</span>';
	htmlShuoshuo += '				</div>';
	htmlShuoshuo += '				<span class="DECTopLine"></span>';
	htmlShuoshuo += '				<div class="DEChatTA DEChatTAForword">';
	htmlShuoshuo += '					<i class="DATIconA DATIconA05"></i>';
	htmlShuoshuo += '					<span class="DEChatTAC">转发</span>';
	htmlShuoshuo += '				</div>';
	htmlShuoshuo += '				<span class="DECTopLine"></span>';
	htmlShuoshuo += '				<div isclick="no" class="DEChatTA DEChatTACancelZan">';
	htmlShuoshuo += '					<i class="DATIconA DATIconA06"></i>';
	htmlShuoshuo += '					<span class="DEChatTAC">赞</span>';
	htmlShuoshuo += '					<span class="DEChatTAC disnone">(<i class="DEChatTACNumzan">0</i>)</span>';
	htmlShuoshuo += '				</div>';
	htmlShuoshuo += '				<span class="DECTopLine"></span>';
	htmlShuoshuo += '				<div isclick="no" class="DEChatTA DEChatTACancelCollect">';
	htmlShuoshuo += '					<i class="DATIconA DATIconA07"></i>';
	htmlShuoshuo += '					<span class="DEChatTAC">收藏</span>';
	htmlShuoshuo += '				</div>';
	htmlShuoshuo += '				<span class="DECTopLine"></span>';
	htmlShuoshuo += '				<div class="DEChatTA DEChatTASpec">';
	htmlShuoshuo += '					<i class="DATIconA DATIconA08"></i>';
	htmlShuoshuo += '				</div>';
									
	htmlShuoshuo += '			</div>';

	htmlShuoshuo += '			<div class="DECLike disnone">';
	htmlShuoshuo += '				<div class="DECLBtn">';
	htmlShuoshuo += '					<i class="DATIconA DATIconA09"></i>';
	htmlShuoshuo += '				</div>';
	/*htmlShuoshuo += '				<a class="DECLikeHeader"><img src="images/header01.jpg"> </a>';*/
	htmlShuoshuo += '				<a ishide="no" class="DECLikeMyHeader"><img src="images/MyHeader.jpg"> </a>';
	htmlShuoshuo += '			</div>';



	htmlShuoshuo += '			<!-- 评论区 -->';
	htmlShuoshuo += '			<div class="DEComment">';

									
	htmlShuoshuo += '			</div>';
	htmlShuoshuo += '			<!-- 评论区 end -->';


	htmlShuoshuo += '			<div class="DECContent">';
	htmlShuoshuo += '				<textarea class="DECCtxt"  placeholder="我也说一句"></textarea>';
	htmlShuoshuo += '				<div class="DECContentIcon"> ';
	htmlShuoshuo += '					<i class="DECCIcon"></i>';
	htmlShuoshuo += '				</div>';

	htmlShuoshuo += '				<div class="DECContentBottom">';
	htmlShuoshuo += '					<i class="QAMSBottomIconA QAMSBottomIconAemot DECContentBottomIcon1" hid="QAMSBottomIconAemot"></i>';
	htmlShuoshuo += '					<i class="QAMSBottomIconA QAMSBottomIconAaite DECContentBottomIcon1" hid="QAMSBottomIconAaite"></i>';

	htmlShuoshuo += '					<div class="QAMSBottomBtn DECContentBottomBtn">发表</div>';
	htmlShuoshuo += '				</div>';
	htmlShuoshuo += '			</div>';
	htmlShuoshuo += '		</div>';
	htmlShuoshuo += '	</div>';


	$("#ShuoshuoNew").append(htmlShuoshuo);
 }
