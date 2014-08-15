$(function(){




	//
	$(document).on("click","#btnwarn",function(){
		//alert("1");
		$("#warning").hide();
	});

	//背景图片
	$("#PCLeft").hover(function(){
		$(this).css("background-position","-2px -42px");
	},function(){
		$(this).css("background-position","");
	});
	$("#PCRight").hover(function(){
		$(this).css("background-position","-25px -42px");
	},function(){
		$(this).css("background-position","");
	});
	
	
	$("#PCLeft").click(function(){
		var index= $("body").attr("bgindex");
		if(index=="1"){
			index =6;
		}
		index --;
		$("body").css("background-image",'url("images/background_0'+ index +'.jpg")');
		var index= $("body").attr("bgindex",index);
	});
	$("#PCRight").click(function(){
		var index= $("body").attr("bgindex");

		if(index == "6"){
			index=0;
		}
		
		index ++;
		$("body").css("background-image",'url("images/background_0'+ index +'.jpg")');
		var index= $("body").attr("bgindex",index);
	});




	//好友，群，讨论组的切换
	$(".LXRChatKindLi").click(function(){
		
		var upid=$(this).attr("upid");
		//alert(upid);
		$(".LXRList").addClass("disnone");
		$("#"+upid).removeClass("disnone");
		$(".LXRChatKindLi").removeClass("LXRChatKindSpe");
		$(this).addClass("LXRChatKindSpe");
	});


	//好友列表收起与展开
	$(".LXRLiA").click(function(){
		var isshow = $(this).parent().find(".LXRLiDes").attr("isshow");

		if(isshow=="no"){
			$(this).parent().find(".LXRLiDes").show();
			$(this).parent().find(".LXRLiDes").attr("isshow","yes");
			$(this).parent().find(".LXRLiPic").css("background-image",'url("css/images/open_arrow_fire.png")');
		}
		else{
			$(this).parent().find(".LXRLiDes").hide();
			$(this).parent().find(".LXRLiDes").attr("isshow","no");
			$(this).parent().find(".LXRLiPic").css("background-image",'url("css/images/open_arrow.png")');
		}
	});


	//选取表情
	$(document).on("click", ".qqimageEve", function () {
	//$(".qqimageEve").click(function(){
		var imageContent = $(this).attr("title");
		
		var txtclass = $(this).parent().parent().parent().parent().find(".TBInput");
		var imagevalue =$(txtclass).val();
		$(txtclass).val(imagevalue+"["+imageContent+"]");
	});


	//下拉框
		$(document).on("click", ".TTTap", function () {
		//$(".TTTap").click(function()

			var isshow = $(this).parent().next().find(".TCTap").attr("isshow");
			if(isshow == "false"){
				$(this).parent().next().find(".TCTap").show();
				$(this).parent().next().find(".TCTap").attr("isshow","true");
			}
			else{
				$(this).parent().next().find(".TCTap").hide();
				$(this).parent().next().find(".TCTap").attr("isshow","false");
			}
		});


	//关闭最小化窗口
	$(document).on("click", ".chatMinEveClose", function () {
			//$(".chatMinEveClose").click(function(){
		//var count =$("#chatMinArea").attr("count");
		//count -- ;
		//$("#chatMinArea").attr("count",count);
		$(this).parent().hide();
		//count --;
	});


	//发送
	$(document).on("click", ".TBBtn", function () {
		var chatContentHtml ="";


		var MyWords = $(this).parent().find(".TBInput").val();
		//alert(MyWords);
		chatContentHtml +='								<div class="TalkDesContentA">';
		chatContentHtml +='									<div class="TCAHeader"></div>';
		chatContentHtml +='									<div class="TCALeft">';
		chatContentHtml +='										<div class="TCALNickName">Van</div>';
		chatContentHtml +='										<div class="TCALWords">'+ MyWords+'</div>';
		chatContentHtml +='									</div>';								
		chatContentHtml +='								</div>';



		$(this).parent().parent().find(".TalkDesContent").append(chatContentHtml);
		//$(this).parent().find(".TBInput").attr("value","")
		var curContent = $(this).parent().parent().find(".TalkDesContent");
		//滚动到最上面
		curContent.animate({"scrollTop":"5000000x"},0);
		$(this).parent().find(".TBInput").val("");
	});


	//表情栏
	$(document).on("click", ".TBFace", function () {
	//$(".TBFace").click(function(){
			var isshow = $(this).parent().next().attr("isshow");

			if(isshow=="no"){
				$(this).parent().next().show();
				$(this).parent().css("top","96px");
				$(this).parent().next().attr("isshow","yes");


				$(this).parent().parent().find(".TalkDesContent").css("height","96px");


				//表情翻页
				$(".qqISIcon").click(function(){
					var changecss = $(this).attr("changecss");
					//alert(changecss);
					$(this).parent().parent().parent().parent().find(".qqimagesArea").addClass("disnone");
					$(this).parent().parent().parent().parent().find("." + changecss).removeClass("disnone");
					$(this).parent().parent().find(".qqISIcon").css("background-color","gray");
					$(this).css("background-color","#000");
				});




			}
			else{
				$(this).parent().next().hide();
				$(this).parent().css("top","");
				$(this).parent().next().attr("isshow","no");

				$(this).parent().parent().find(".TalkDesContent").css("height","");
			}
			
		});



	//在线状态栏的切换
	$(".onlineState").click(function(){
		
		var isshow = $(".OSList").attr("isshow");

		if(isshow == "no"){
			$(".OSList").show();
			$(".OSList").attr("isshow","yes");



			//切换图标
			$(".OSLi").click(function(){
				var OSthisclass = $(this).find(".onlineIcon").attr("class");
				$(".SZIcon").attr("class",OSthisclass +" SZIcon");
			});
		}
		else{
			$(".OSList").hide();
			$(".OSList").attr("isshow","no");
		}

		

	});

	//alert("1");
	//切换QQ下面的栏目
	$(".FAF01").click(function(){
		$(this).find(".FAFPic").removeClass("weidu2");
		$(this).find(".FAFPic").addClass("FAFP01");
		$(".FAFPic02").removeClass("FAFP02");
		$(".FAFPic03").removeClass("FAFP03");
		$(".FAFPic04").removeClass("FAFP04");

		$(".FAFLi").removeClass("FAFChangeColor");
		$(this).addClass("FAFChangeColor");

		$(".FriendA").addClass("disnone");
		$("#huihua").removeClass("disnone");
	});
	$(".FAF02").click(function(){
		$(this).find(".FAFPic").removeClass("weidu2");
		$(this).find(".FAFPic").addClass("FAFP02");
		$(".FAFPic01").removeClass("FAFP01");
		$(".FAFPic03").removeClass("FAFP03");
		$(".FAFPic04").removeClass("FAFP04");

		$(".FAFLi").removeClass("FAFChangeColor");
		$(this).addClass("FAFChangeColor");

		$(".FriendA").addClass("disnone");
		$("#lianxiren").removeClass("disnone");
	});
	$(".FAF03").click(function(){
		$(this).find(".FAFPic").removeClass("weidu2");
		$(this).find(".FAFPic").addClass("FAFP03");
		$(".FAFPic01").removeClass("FAFP01");
		$(".FAFPic02").removeClass("FAFP02");
		$(".FAFPic04").removeClass("FAFP04");

		$(".FAFLi").removeClass("FAFChangeColor");
		$(this).addClass("FAFChangeColor");

		$(".FriendA").addClass("disnone");
		$("#faxian").removeClass("disnone");
	});
	$(".FAF04").click(function(){
		$(this).find(".FAFPic").removeClass("weidu2");
		$(this).find(".FAFPic").addClass("FAFP04");
		$(".FAFPic01").removeClass("FAFP01");
		$(".FAFPic03").removeClass("FAFP03");
		$(".FAFPic02").removeClass("FAFP02");

		$(".FAFLi").removeClass("FAFChangeColor");
		$(this).addClass("FAFChangeColor");

		$(".FriendA").addClass("disnone");
		$("#shezhi").removeClass("disnone");
	});





	//添加聊天框
	chathtml();



	

	

});
  

/*var count = "0";*/






function chathtml(){

	$(".chatA").click(function(){

		$(this).find(".chatAHeader").removeClass("weidu");

		var talkid=$(this).attr("talkid");
		var cAname=$(this).attr("cafName");
		var headerpic=$(this).find(".chatAHeader").html();
		//alert(headerpic);
		var isappear = $(this).attr("isappear");
		if(isappear=="yes"){

			$("#"+talkid).show();
			$("#min" + talkid).hide();
			$(".TalkArea").css("z-index","10");
			$("#"+talkid).css("z-index","12");




			return;
		}


			var chathtmlA = '';


			chathtmlA +='				<div ismin="no" id="'+ talkid +'"  class="TalkArea">                                   ';
			chathtmlA +='					<div class="TalkTop">';
			chathtmlA +='						<div class="TTTap" href="#">';
			chathtmlA +='							<a href="#"></a>';
			chathtmlA +='						</div>';
			chathtmlA +='						<span class="TTName">'+ cAname +'</span>';
			chathtmlA +='						<a class="TTClose" href="#">关闭</a>';
			chathtmlA +='						<a class="TTMin">最小化</a>';
			chathtmlA +='					</div>';
			chathtmlA +='					<div class="TalkContent">';
			chathtmlA +='						<ul class="TCTap" isshow="false">';
			chathtmlA +='							<li class="TCTapLi">';
			chathtmlA +='								<a class="TCTPic t01"></a>';
			chathtmlA +='								<a class="TCTWord">群成员</a>';
			chathtmlA +='							</li>';
			chathtmlA +='							<li class="TCTapLi">';
			chathtmlA +='								<a class="TCTPic t02"></a>';
			chathtmlA +='								<a class="TCTWord">群资料</a>';
			chathtmlA +='							</li>';
			chathtmlA +='							<li class="TCTapLi">';
			chathtmlA +='								<a class="TCTPic t03"></a>';
			chathtmlA +='								<a class="TCTWord">聊天记录</a>';
			chathtmlA +='							</li>';
			chathtmlA +='						</ul>';
								
			chathtmlA +='						<div class="TalkBottomArea">';

			chathtmlA +='							<!-- 聊天内容区域 -->';

			chathtmlA +='							<div class="TalkDesContent">';
			/*chathtmlA +='								<div class="TalkDesContentA">';
			chathtmlA +='									<div class="TCAHeader"></div>';
			chathtmlA +='									<div class="TCALeft">';
			chathtmlA +='										<div class="TCALNickName">Van</div>';
			chathtmlA +='										<div class="TCALWords">你是我的小丫小苹果</div>';
			chathtmlA +='									</div>';								
			chathtmlA +='								</div>';
			chathtmlA +='								<div class="TalkDesContentA">';
			chathtmlA +='									<div class="TCAHeader"></div>';
			chathtmlA +='									<div class="TCALeft">';
			chathtmlA +='										<div class="TCALNickName">Van</div>';
			chathtmlA +='										<div class="TCALWords">怎么爱你都不嫌多</div>';
			chathtmlA +='									</div>';
			chathtmlA +='									';
			chathtmlA +='								</div>';
			chathtmlA +='								<div class="TalkDesContentA">';
			chathtmlA +='									<div class="TCAHeader"></div>';
			chathtmlA +='									<div class="TCALeft">';
			chathtmlA +='										<div class="TCALNickName">Van</div>';
			chathtmlA +='										<div class="TCALWords">红红的小脸儿温暖我的心窝，点亮我生命的火火火火火火火！.........</div>';
			chathtmlA +='									</div>';						
			chathtmlA +='								</div>';*/
			chathtmlA +='							</div>';
			chathtmlA +='							<!-- 聊天内容区域 end-->';
			chathtmlA +='							<!-- 聊天框底部 -->';
			chathtmlA +='							<div class="TalkBottom">';
			chathtmlA +='								<div class="TBFace">';
			chathtmlA +='									<a class="TBFacePic"></a>';
			chathtmlA +='								</div>';
			chathtmlA +='								<input  class="TBInput" value=""></input>';
			chathtmlA +='								<button class="TBBtn">';
			chathtmlA +='									<span>发送</span>';
			chathtmlA +='								</button>';
			chathtmlA +='							</div>';
			chathtmlA +='							<!-- 聊天框底部 end -->';
			chathtmlA +='							<!-- 聊天表情 -->';
			chathtmlA +='							<div isshow="no" class="qqimages">';
			chathtmlA +='								<div class="qqimagesArea qqimagesA01">';
			chathtmlA +='									<ul> ';
			chathtmlA +='										<li class="qqimageEve" title="微笑"></li>';
			chathtmlA +='										<li class="qqimageEve" title="撇嘴"></li>';
			chathtmlA +='										<li class="qqimageEve" title="色"></li>';
			chathtmlA +='										<li class="qqimageEve" title="发呆"></li>';
			chathtmlA +='										<li class="qqimageEve" title="得意"></li>';
			chathtmlA +='										<li class="qqimageEve" title="流泪"></li>';
			chathtmlA +='										<li class="qqimageEve" title="害羞"></li>';
			chathtmlA +='									</ul>';
			chathtmlA +='									<ul> ';
			chathtmlA +='										<li class="qqimageEve" title="闭嘴"></li>';
			chathtmlA +='										<li class="qqimageEve" title="睡"></li>';
			chathtmlA +='										<li class="qqimageEve" title="大哭"></li>';
			chathtmlA +='										<li class="qqimageEve" title="尴尬"></li>';
			chathtmlA +='										<li class="qqimageEve" title="发怒"></li>';
			chathtmlA +='										<li class="qqimageEve" title="调皮"></li>';
			chathtmlA +='										<li class="qqimageEve" title="龇牙"></li>';
			chathtmlA +='									</ul>';
			chathtmlA +='									<ul> ';
			chathtmlA +='										<li class="qqimageEve" title="惊讶"></li>';
			chathtmlA +='										<li class="qqimageEve" title="难过"></li>';
			chathtmlA +='										<li class="qqimageEve" title="酷"></li>';
			chathtmlA +='										<li class="qqimageEve" title="冷汗"></li>';
			chathtmlA +='										<li class="qqimageEve" title="抓狂"></li>';
			chathtmlA +='										<li class="qqimageEve" title="吐"></li>';
			chathtmlA +='										<li class="qqimageEve" title="delKey"></li>';
			chathtmlA +='									</ul>';
			chathtmlA +='								</div>';
			chathtmlA +='								<div class="qqimagesArea qqimagesA02 disnone">';
			chathtmlA +='									<ul> ';
			chathtmlA +='										<li class="qqimageEve" title="偷笑"></li>';
			chathtmlA +='										<li class="qqimageEve" title="可爱"></li>';
			chathtmlA +='										<li class="qqimageEve" title="白眼"></li>';
			chathtmlA +='										<li class="qqimageEve" title="傲慢"></li>';
			chathtmlA +='										<li class="qqimageEve" title="饥饿"></li>';
			chathtmlA +='										<li class="qqimageEve" title="困"></li>';
			chathtmlA +='										<li class="qqimageEve" title="惊恐"></li>';
			chathtmlA +='									</ul>';
			chathtmlA +='									<ul> ';
			chathtmlA +='										<li class="qqimageEve" title="流汗"></li>';
			chathtmlA +='										<li class="qqimageEve" title="憨笑"></li>';
			chathtmlA +='										<li class="qqimageEve" title="大兵"></li>';
			chathtmlA +='										<li class="qqimageEve" title="奋斗"></li>';
			chathtmlA +='										<li class="qqimageEve" title="咒骂"></li>';
			chathtmlA +='										<li class="qqimageEve" title="疑问"></li>';
			chathtmlA +='										<li class="qqimageEve" title="嘘"></li>';
			chathtmlA +='									</ul>';
			chathtmlA +='									<ul> ';
			chathtmlA +='										<li class="qqimageEve" title="晕"></li>';
			chathtmlA +='										<li class="qqimageEve" title="折磨"></li>';
			chathtmlA +='										<li class="qqimageEve" title="衰"></li>';
			chathtmlA +='										<li class="qqimageEve" title="骷髅"></li>';
			chathtmlA +='										<li class="qqimageEve" title="敲打"></li>';
			chathtmlA +='										<li class="qqimageEve" title="再见"></li>';
			chathtmlA +='										<li class="qqimageEve" title="delKey"></li>';
			chathtmlA +='									</ul>';
			chathtmlA +='								</div>';
			chathtmlA +='								<div class="qqimagesArea qqimagesA03 disnone">';
			chathtmlA +='									<ul> ';
			chathtmlA +='										<li class="qqimageEve" title="擦汗"></li>';
			chathtmlA +='										<li class="qqimageEve" title="抠鼻"></li>';
			chathtmlA +='										<li class="qqimageEve" title="鼓掌"></li>';
			chathtmlA +='										<li class="qqimageEve" title="糗大了"></li>';
			chathtmlA +='										<li class="qqimageEve" title="坏笑"></li>';
			chathtmlA +='										<li class="qqimageEve" title="左哼哼"></li>';
			chathtmlA +='										<li class="qqimageEve" title="右哼哼"></li>';
			chathtmlA +='									</ul>';
			chathtmlA +='									<ul> ';
			chathtmlA +='										<li class="qqimageEve" title="哈欠"></li>';
			chathtmlA +='										<li class="qqimageEve" title="鄙视"></li>';
			chathtmlA +='										<li class="qqimageEve" title="委屈"></li>';
			chathtmlA +='										<li class="qqimageEve" title="快哭了"></li>';
			chathtmlA +='										<li class="qqimageEve" title="阴险"></li>';
			chathtmlA +='										<li class="qqimageEve" title="亲亲"></li>';
			chathtmlA +='										<li class="qqimageEve" title="吓"></li>';
			chathtmlA +='									</ul>';
			chathtmlA +='									<ul> ';
			chathtmlA +='										<li class="qqimageEve" title="可怜"></li>';
			chathtmlA +='										<li class="qqimageEve" title="菜刀"></li>';
			chathtmlA +='										<li class="qqimageEve" title="西瓜"></li>';
			chathtmlA +='										<li class="qqimageEve" title="啤酒"></li>';
			chathtmlA +='										<li class="qqimageEve" title="篮球"></li>';
			chathtmlA +='										<li class="qqimageEve" title="乒乓"></li>';
			chathtmlA +='										<li class="qqimageEve" title="delKey"></li>';
			chathtmlA +='									</ul>';
			chathtmlA +='								</div>';
			chathtmlA +='								<div class="qqimagesArea qqimagesA04 disnone">';
			chathtmlA +='									<ul> ';
			chathtmlA +='										<li class="qqimageEve" title="微笑"></li>';
			chathtmlA +='										<li class="qqimageEve" title="撇嘴"></li>';
			chathtmlA +='										<li class="qqimageEve" title="色"></li>';
			chathtmlA +='										<li class="qqimageEve" title="发呆"></li>';
			chathtmlA +='										<li class="qqimageEve" title="得意"></li>';
			chathtmlA +='										<li class="qqimageEve" title="流泪"></li>';
			chathtmlA +='										<li class="qqimageEve" title="害羞"></li>';
			chathtmlA +='									</ul>';
			chathtmlA +='									<ul> ';
			chathtmlA +='										<li class="qqimageEve" title="微笑"></li>';
			chathtmlA +='										<li class="qqimageEve" title="撇嘴"></li>';
			chathtmlA +='										<li class="qqimageEve" title="色"></li>';
			chathtmlA +='										<li class="qqimageEve" title="发呆"></li>';
			chathtmlA +='										<li class="qqimageEve" title="得意"></li>';
			chathtmlA +='										<li class="qqimageEve" title="流泪"></li>';
			chathtmlA +='										<li class="qqimageEve" title="害羞"></li>';
			chathtmlA +='									</ul>';
			chathtmlA +='									<ul> ';
			chathtmlA +='										<li class="qqimageEve" title="微笑"></li>';
			chathtmlA +='										<li class="qqimageEve" title="撇嘴"></li>';
			chathtmlA +='										<li class="qqimageEve" title="色"></li>';
			chathtmlA +='										<li class="qqimageEve" title="发呆"></li>';
			chathtmlA +='										<li class="qqimageEve" title="得意"></li>';
			chathtmlA +='										<li class="qqimageEve" title="流泪"></li>';
			chathtmlA +='										<li class="qqimageEve" title="害羞"></li>';
			chathtmlA +='									</ul>';
			chathtmlA +='								</div>';
			chathtmlA +='								<div class="qqimagesArea qqimagesA05 disnone">';
			chathtmlA +='									<ul> ';
			chathtmlA +='										<li class="qqimageEve" title="微笑"></li>';
			chathtmlA +='										<li class="qqimageEve" title="撇嘴"></li>';
			chathtmlA +='										<li class="qqimageEve" title="色"></li>';
			chathtmlA +='										<li class="qqimageEve" title="发呆"></li>';
			chathtmlA +='										<li class="qqimageEve" title="得意"></li>';
			chathtmlA +='										<li class="qqimageEve" title="流泪"></li>';
			chathtmlA +='										<li class="qqimageEve" title="害羞"></li>';
			chathtmlA +='									</ul>';
			chathtmlA +='									<ul> ';
			chathtmlA +='										<li class="qqimageEve" title="微笑"></li>';
			chathtmlA +='										<li class="qqimageEve" title="撇嘴"></li>';
			chathtmlA +='										<li class="qqimageEve" title="色"></li>';
			chathtmlA +='										<li class="qqimageEve" title="发呆"></li>';
			chathtmlA +='										<li class="qqimageEve" title="得意"></li>';
			chathtmlA +='										<li class="qqimageEve" title="流泪"></li>';
			chathtmlA +='										<li class="qqimageEve" title="害羞"></li>';
			chathtmlA +='									</ul>';
			chathtmlA +='									<ul> ';
			chathtmlA +='										<li class="qqimageEve" title="微笑"></li>';
			chathtmlA +='										<li class="qqimageEve" title="撇嘴"></li>';
			chathtmlA +='										<li class="qqimageEve" title="色"></li>';
			chathtmlA +='										<li class="qqimageEve" title="发呆"></li>';
			chathtmlA +='										<li class="qqimageEve" title="得意"></li>';
			chathtmlA +='										<li class="qqimageEve" title="流泪"></li>';
			chathtmlA +='										<li class="qqimageEve" title="害羞"></li>';
			chathtmlA +='									</ul>';
			chathtmlA +='								</div>';
			chathtmlA +='								<div class="qqimagesArea qqimagesA06 disnone">';
			chathtmlA +='									<ul> ';
			chathtmlA +='										<li class="qqimageEve" title="微笑"></li>';
			chathtmlA +='										<li class="qqimageEve" title="撇嘴"></li>';
			chathtmlA +='										<li class="qqimageEve" title="色"></li>';
			chathtmlA +='										<li class="qqimageEve" title="发呆"></li>';
			chathtmlA +='										<li class="qqimageEve" title="得意"></li>';
			chathtmlA +='										<li class="qqimageEve" title="流泪"></li>';
			chathtmlA +='										<li class="qqimageEve" title="害羞"></li>';
			chathtmlA +='									</ul>';
			chathtmlA +='									<ul> ';
			chathtmlA +='										<li class="qqimageEve" title="微笑"></li>';
			chathtmlA +='										<li class="qqimageEve" title="撇嘴"></li>';
			chathtmlA +='										<li class="qqimageEve" title="色"></li>';
			chathtmlA +='										<li class="qqimageEve" title="发呆"></li>';
			chathtmlA +='										<li class="qqimageEve" title="得意"></li>';
			chathtmlA +='										<li class="qqimageEve" title="流泪"></li>';
			chathtmlA +='										<li class="qqimageEve" title="害羞"></li>';
			chathtmlA +='									</ul>';
			chathtmlA +='									<ul> ';
			chathtmlA +='										<li class="qqimageEve" title="微笑"></li>';
			chathtmlA +='										<li class="qqimageEve" title="撇嘴"></li>';
			chathtmlA +='										<li class="qqimageEve" title="色"></li>';
			chathtmlA +='										<li class="qqimageEve" title="发呆"></li>';
			chathtmlA +='										<li class="qqimageEve" title="得意"></li>';
			chathtmlA +='										<li class="qqimageEve" title="流泪"></li>';
			chathtmlA +='										<li class="qqimageEve" title="害羞"></li>';
			chathtmlA +='									</ul>';
			chathtmlA +='								</div>';
			chathtmlA +='								<div class="qqimagesSelect">';
			chathtmlA +='									<ul>';
			chathtmlA +='										<li><a changecss="qqimagesA01" class="qqISIcon qqISIconClick"></a> </li>';
			chathtmlA +='										<li><a changecss="qqimagesA02" class="qqISIcon"></a> </li>';
			chathtmlA +='										<li><a changecss="qqimagesA03" class="qqISIcon"></a> </li>';
			chathtmlA +='										<li><a changecss="qqimagesA04" class="qqISIcon"></a> </li>';
			chathtmlA +='										<li><a changecss="qqimagesA05" class="qqISIcon"></a> </li>';
			chathtmlA +='										<li><a changecss="qqimagesA06" class="qqISIcon"></a> </li>';
			chathtmlA +='									</ul>';
			chathtmlA +='								</div>';
			chathtmlA +='							</div>';
			chathtmlA +='							<!-- 聊天表情 end-->';
			chathtmlA +='						</div>';
			chathtmlA +='					</div>';
			chathtmlA +='				</div>';







		
		$("#chatAllArea").append(chathtmlA);
		$(this).attr("isappear","yes");
		$(".TalkArea").css("z-index","10");
		$("#"+talkid).css("z-index","12");

		//刚刚出现的聊天框要再最上面
		$(".TalkArea").click(function(){
			$(".TalkArea").css("z-index","10");
			$(this).css("z-index","12");
		});


		
		//alert("1");
		//出现在随机的位置
		var randomleft= (Math.random()+5)*100;
		//alert(randomleft);
		var randomtop= (Math.random()*2)*45;
		//alert("left:"+randomleft);
		$("#"+talkid).css({
			"left":randomleft+"px",
			"top":randomtop+"px"
			/*"left":"620px",
			"top":"80px"*/
		});


		





		//关闭聊天框
		$(".TTClose").click(function(){
			$(this).parent().parent().hide();
		});



		
		//最小化
		$(".TTMin").click(function(){

			//var x = document.getElementsByClassName("chatMinEve");
			//var count = x.length;
			//if(count > 5 )
			//{
				//alert("窗口最小化已经最多！");
				//$("#warning").show();
				//return;
			//}
			//else{



				var ismin = $(this).parent().parent().attr("ismin");
				

				$(this).parent().parent().hide();


				if(ismin == "no"){


					


					var tminid = "min" + talkid ;
					var chatminhtml = '';
					chatminhtml += '<div maxid="'+talkid+'" id="'+ tminid +'" class="chatMinEve">';
					chatminhtml += '	<div class="chatMinEveContent">';
					chatminhtml += '		<a class="chatMinEvePic">'+ headerpic+'</a>';
					chatminhtml += '		<p class="chatMinEveName">'+ cAname+'</p>';
					chatminhtml += '	</div> ';
					chatminhtml += '	<a class="chatMinEveClose">X</a>';
					chatminhtml += '</div> ';

					$("#chatMinArea").append(chatminhtml);

					//alert(count);

					$(this).parent().parent().attr("ismin","yes");

				}else{
					var test01 = $(this).parent().parent().attr("id");
					var tminid = "min" + test01;
					//alert(tminid);
					$("#" + tminid).show();
				}
				
			//}
			
			//$("#chatMinArea").attr("count",count);	

			$(".chatMinEve").hover(function(){
				//alert("1");
				$(this).find(".chatMinEveClose").show();
			},function(){
				$(this).find(".chatMinEveClose").hide();
			});


			$(".chatMinEveContent").click(function(){

				//var count =$("#chatMinArea").attr("count");
				//count -- ;
				//$("#chatMinArea").attr("count",count);
 				var maxid = $(this).parent().attr("maxid");

				$(this).parent().hide();
				//alert(talkid);
				$("#"+maxid).show();
			});

		


		});

		
			
			
			
		
	




		
		//拖动
		$("#"+talkid).draggable({ 
			handle: ".TalkTop" ,
			containment: "parent"
		});

		

		
		
		
		

	});
}