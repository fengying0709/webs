$(function(){
	//左侧固定不动
	//获取要定位元素距离浏览器顶部的距离  
/*	var navH = $("#QACCL3AFix").offset().top;
	var posH = $("#QACCL3AFix").position().top;
	var chaH = navH - posH;
	//alert(chaH);
	//alert(navH+"."+posH);
	//alert(navH);
	//滚动条事件  
	$(window).scroll(function(){   
	//获取滚动条的滑动距离   
		var scroH = $(this).scrollTop();  

		//滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定  
		if(scroH >= navH){  
			$("#QACCL3AFix").css({"top":navH,"position":"fixed"});
			
		}
	}); */

	//出现卡片
	$(".DEHeader").hover(function(){
		$(".QACard").removeClass("disnone");
		/*var xx=$(this).offset().left；
		var yy=$(this).offset().top;
		alert(xx + "  " + yy);*/
		var cheader = $(this).find("img").attr("src");
		//alert(cheader); 
		var cname = $(this).next().find(".DEName").html();

		var cxz = $(this).parent().attr("xz");

		var cloc = $(this).parent().attr("loc");

		var csex = $(this).parent().attr("sex");

		$(".QACard").css({
			"top":y,
			"left":x
		});
		$(".QACardAHeader").css("background-image",'url("'+ cheader +'")');
		$(".QACardMidName").html(cname);
		$(".QACardMidSex").html(csex);
		$(".QACardMidXingzuo").html(cxz);
		$(".QACardMidLocation").html(cloc);


	},function(){
		$(".QACard").addClass("disnone");
	});


	$(".DEName").hover(function(){
		$(".QACard").removeClass("disnone");
		/*var xx=$(this).offset().left；
		var yy=$(this).offset().top;
		alert(xx + "  " + yy);*/
		
		//var cheader = $(this).parent().parent().parent().find(".DEHeader").html();
		var cheader = $(this).parent().parent().parent().find(".DEHeader").find("img").attr("src");
		//alert(cheader);
		//alert(cheader); 
		var cname = $(this).html();

		var cxz = $(this).parent().parent().attr("xz");

		var cloc = $(this).parent().parent().attr("loc");

		var csex = $(this).parent().parent().attr("sex");

		$(".QACard").css({
			"top":y,
			"left":x
		});

		$(".QACardAHeader").css("background-image",'url("'+ cheader +'")');
		//$(".QACardAHeader").html(cheader);
		$(".QACardMidName").html(cname);
		$(".QACardMidSex").html(csex);
		$(".QACardMidXingzuo").html(cxz);
		$(".QACardMidLocation").html(cloc);
	},function(){
		$(".QACard").addClass("disnone");
	});



	//获取鼠标的坐标
	$(document).mousemove(function(e){
	  //$("#test").html("X: " + e.pageX + ", Y: " + e.pageY);
	  x = e.pageX;
	  y = e.pageY;
	});



	//隐藏举报按钮
	$(".DEChatTASpec").hover(function(){
		$(this).find(".DEChatTASpecUl").removeClass("disnone");
		$(this).find(".DEChatTASpecKong").removeClass("disnone");


		$(".DECTASHide").click(function(){
			$(this).parent().parent().parent().parent().parent().hide();
		});


		$(".DECTASJvbao").click(function(){
			alert("举报成功！");
		});

	},function(){
		$(this).find(".DEChatTASpecUl").addClass("disnone");
		$(this).find(".DEChatTASpecKong").addClass("disnone");
	});

	

	//转发
	$(document).on("click",".DEChatTAForword",function(){
	//$(".DEChatTAForword").click(function(){


		//var 
		fwName = $(this).parent().parent().parent().find(".DEName").html();
		//alert(fwName);
		//var 
		fwContent = $(this).parent().parent().parent().find(".DEContentTop").html();

		//var 
		fwlen= $(this).parent().next().parent().find(".DEContentDes").find("a").length;
		

		//var 
		fwPic = $(this).parent().parent().parent().find(".DEContentDesPic").html();
		
		var bodyheight = $("#QzoneAll").height() + "41px";
		//alert(bodyheight);
		var thisheight = $("body").scrollTop();
		//var fwheight = thisheight + "20px";
		//$(".forwordMenban").css({"height":bodyheight, "top":"0"});
		//$(".forword").css({"top":thisheight});
		$("html,body").animate({scrollTop:thisheight},10);
		$(".forwordMenban").removeClass("disnone");

		//拖动
		$(".forword").draggable({ 
			handle: ".forwordTitle" ,
			containment: "parent"
		});

		/*$(".forwordBtn").click(function(){
			var stxt = $(".forwordTxtArea").val();

			if( fwPic == null){
				var cdes = 'DECForwordDes';
				fwPic = '';
			}
			else{
				//alert("0");
				var cdes = 'DECForwordDesPic';
			}
			

			var fwhtml = '';
			fwhtml += '';
			fwhtml += '			<div class="DECForword">';
			fwhtml += '				<a class="DECForwordPic">'+fwPic+'</a>';
			fwhtml += '				<div class="'+cdes+'">';
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

*/
		//出现卡片
		





		//关闭
		$(".forwordClose").click(function(){
			$(".forwordMenban").addClass("disnone");
		});
	});

	$(document).on("click",".forwordBtn",function(){
	//$(".forwordBtn").click(function(){
			var stxt = $(".forwordTxtArea").val();

			if( fwPic == null){
				var cdes = 'DECForwordDes';
				fwPic = '';
			}
			else{
				//alert("0");
				var cdes = 'DECForwordDesPic';
			}
			

			var fwhtml = '';
			fwhtml += '';
			fwhtml += '			<div class="DECForword">';
			fwhtml += '				<a class="DECForwordPic">'+fwPic+'</a>';
			fwhtml += '				<div class="'+cdes+'">';
			fwhtml += '					<span class="DECForwordName">'+fwName+'</span>';
			fwhtml += '					<p class="DECForwordContent">';
			fwhtml += '						:'+ fwContent;
			fwhtml += '					</p>';
			fwhtml += '				</div>';
										
			fwhtml += '			</div>';



			//alert(fwhtml);
			addShuoshuo(stxt,fwhtml);



			$(".forwordTxtArea").val("");
			$(".forwordMenban").addClass("disnone");

			$("html,body").animate({scrollTop:"100px"},10);
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
		$(this).parent().hide();
		return false;
		
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
		$(this).css("background-color","");
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
		$(this).css("background-color","");
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
		var thisimg = $(this).html();

		var stop = $("body").scrollTop();  

		var htmlMenban = '';
		htmlMenban+='  ';	
		htmlMenban+=' <div class="menban"> 					';
		htmlMenban+=' 	<div class="mbbg">					';
		htmlMenban+=       thisimg							 ;
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


	$(document).on("click",".DECForwordPic",function(){
	//$(".DECForwordPic").click(function(){
		var thisimg = $(this).html();

		var stop = $("body").scrollTop();  

		var htmlMenban = '';
		htmlMenban+='  ';	
		htmlMenban+=' <div class="menban"> 					';
		htmlMenban+=' 	<div class="mbbg">					';
		htmlMenban+=       thisimg							 ;
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

	//回复的回复
	$(document).on("click",".DATIconA10",function(){
		$(this).parent().parent().find(".DECContentReply").show();
		var replyName = $(this).parent().parent().find(".DECommentARightContentName").html();
		var replyContent = "回复" + replyName;
		//alert(replyContent);
		$(this).parent().parent().find(".DECCtxtReply").attr("placeholder",replyContent);
		$(this).parent().parent().find(".DECCtxtReply").attr("replyName",replyName);



		return false;
	});
	$(document).on("click",".DATIconA10Reply",function(){
		//alert("1");
		$(this).parent().parent().parent().parent().parent().find(".DECContentReply").show();
		var replyName = $(this).parent().parent().find(".DECommentARightContentNameReplyMain").html();
		var replyContent = "回复" + replyName;
		//alert(replyContent);
		$(this).parent().parent().parent().parent().parent().find(".DECCtxtReply").attr("placeholder",replyContent);
		$(this).parent().parent().parent().parent().parent().find(".DECCtxtReply").attr("replyName",replyName);




		return false;
	});
	
	$(document).on("click",".DECContentReply",function(){
		$(this).show();
		return false;
	});

	//回复的回复发表
	$(document).on("click",".DECContentBottomBtnReply",function(){

		var txtReply = $(this).parent().parent().find(".DECCtxtReply").val();
		if( txtReply == "" || txtReply == null){
			alert("请输入评论内容再评论！");
			return false;
		}
		var replyPerson = $(this).parent().parent().find(".DECCtxtReply").attr("replyName");

		//alert("1");
		var htmlReplyComment ='';
		htmlReplyComment +='					<li>																								';
		htmlReplyComment +='						<a class="DECommentAPicReply"><img src="images/MyHeader.jpg"></a>								';
		htmlReplyComment +='						<div class="DECommentARightReply">																';
		htmlReplyComment +='							<p class="DECommentARightContentReply">														';
		htmlReplyComment +='								<a class="DECommentARightContentNameReply DECommentARightContentNameReplyMain">Van</a>	';
		htmlReplyComment +='								<span class="DECommentARightContentNameSpanReply">回复</span>							';
		htmlReplyComment +='								<a class="DECommentARightContentNameReply">'+replyPerson+'</a>								';

		htmlReplyComment +='								:'+txtReply+'																					';
		htmlReplyComment +='							</p>																						';
		htmlReplyComment +='							<div class="DECommentARightBottomReply">													';
		htmlReplyComment +='								<span>12:55</span>																		';
		htmlReplyComment +='								<i class="DATIconA DATIconA10Reply"></i>												';
		htmlReplyComment +='							</div>																						';
		htmlReplyComment +='						</div>																							';
		htmlReplyComment +='					</li>																								';




		$(this).parent().parent().parent().find(".DECommentAReplyArea").append(htmlReplyComment);
		$(this).parent().parent().find(".DECCtxtReply").val("");
		$(this).parent().parent().hide();

		return false;
	});
	


	//评论
	$(document).on("click",".DECContentBottomBtn",function(){
		var txtcomment = $(this).parent().parent().find(".DECCtxt").val();
		if( txtcomment == null || txtcomment ==""){
			alert("请输入评论内容再评论!");
			return false;
		}

	//$(".DECContentBottomBtn").click(function(){
		var ct = new Date();
		var hour = ct.getHours();
		var minute = ct.getMinutes();
		var h1=Math.floor( ( hour % 100 ) /10 );
		var h2= hour % 10;
		var mi1=Math.floor( ( minute % 100 ) /10 );
		var mi2= minute % 10;
		var txtTime = h1 + '' + h2 + ':' + mi1 + '' + mi2 ;

		
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
		htmlComment += '					<i class="DATIconA DATIconA10"></i>							';
		htmlComment += '				</div>															';
		//回复的回复
		htmlComment += '				<div class="DECommentAReply">																									';
		htmlComment += '						<ul class="DECommentAReplyArea"></ul>																					';
		htmlComment += '						<div class="DECContentReply">																							';
		htmlComment += '							<textarea class="DECCtxtReply" replyName="" placeholder="我也说一句"></textarea>									';
		htmlComment += '							<div class="DECContentBottomReply">																					';
		htmlComment += '								<i class="QAMSBottomIconA QAMSBottomIconAemot DECContentBottomIcon1" hid="QAMSBottomIconAemot"></i>				';
		htmlComment += '								<i class="QAMSBottomIconA QAMSBottomIconAaite DECContentBottomIcon1" hid="QAMSBottomIconAaite"></i>				';
		htmlComment += '								<div class="QAMSBottomBtn DECContentBottomBtnReply">发表</div>													';
		htmlComment += '							</div>																												';
		htmlComment += '						</div>																													';
		htmlComment += '					</div>																														';


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


		return false;
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



	//取消焦点
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
		$(".DECContentReply").hide();
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

	TimeNow();
	$(".QAWeaterDate").html(dateNow);





});




var fwName ='';
		//alert(fwName);
var fwContent = '';

var fwlen= '';
		

var fwPic = '';

var x ='';
var y ='';


var txtTime ='';

var dateNow ='';


//当前Time
function TimeNow(){
		var ct = new Date();
		var hour = ct.getHours();
		var minute = ct.getMinutes();
		var month = ct.getMonth() + 1;
		var date = ct.getDate();
		var h1=Math.floor( ( hour % 100 ) /10 );
		var h2= hour % 10;
		var mi1=Math.floor( ( minute % 100 ) /10 );
		var mi2= minute % 10;
		txtTime = h1 + '' + h2 + ':' + mi1 + '' + mi2 ;
		dateNow = month + "月"+ date+"日";
}

//说说发表下拉框
 function addShuoshuo(txtss,fwhtml){
 	
	TimeNow();

 	var htmlShuoshuo ='';

 	htmlShuoshuo += '';

 	htmlShuoshuo += '	<div xz="处女座" loc="扬州" sex="女" class="DynamicEve">';
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
	htmlShuoshuo += '					<i class="DEChatTASpecKong"></i>';
	htmlShuoshuo += '					<ul class="DEChatTASpecUl disnone">';
	htmlShuoshuo += '						<li class="DECTASHide">隐藏</li>';
	htmlShuoshuo += '						<li class="DECTASLine"></li>';
	htmlShuoshuo += '						<li class="DECTASJvbao">举报</li>';
	htmlShuoshuo += '					</ul>';

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

	 var ssnHtml = $("#ShuoshuoNew").html();
	$("#ShuoshuoNew").html(htmlShuoshuo + ssnHtml);




	$(".DEHeader").hover(function(){
		$(".QACard").removeClass("disnone");
		/*var xx=$(this).offset().left；
		var yy=$(this).offset().top;
		alert(xx + "  " + yy);*/
		var cheader = $(this).find("img").attr("src");
		//alert(cheader); 
		var cname = $(this).next().find(".DEName").html();

		var cxz = $(this).parent().attr("xz");

		var cloc = $(this).parent().attr("loc");

		var csex = $(this).parent().attr("sex");

		$(".QACard").css({
			"top":y,
			"left":x
		});
		$(".QACardAHeader").css("background-image",'url("'+ cheader +'")');
		$(".QACardMidName").html(cname);
		$(".QACardMidSex").html(csex);
		$(".QACardMidXingzuo").html(cxz);
		$(".QACardMidLocation").html(cloc);


	},function(){
		$(".QACard").addClass("disnone");
	});


	$(".DEName").hover(function(){
		$(".QACard").removeClass("disnone");
		/*var xx=$(this).offset().left；
		var yy=$(this).offset().top;
		alert(xx + "  " + yy);*/
		
		//var cheader = $(this).parent().parent().parent().find(".DEHeader").html();
		var cheader = $(this).parent().parent().parent().find(".DEHeader").find("img").attr("src");
		//alert(cheader);
		//alert(cheader); 
		var cname = $(this).html();

		var cxz = $(this).parent().parent().attr("xz");

		var cloc = $(this).parent().parent().attr("loc");

		var csex = $(this).parent().parent().attr("sex");

		$(".QACard").css({
			"top":y,
			"left":x
		});

		$(".QACardAHeader").css("background-image",'url("'+ cheader +'")');
		//$(".QACardAHeader").html(cheader);
		$(".QACardMidName").html(cname);
		$(".QACardMidSex").html(csex);
		$(".QACardMidXingzuo").html(cxz);
		$(".QACardMidLocation").html(cloc);
	},function(){
		$(".QACard").addClass("disnone");
	});
 }
