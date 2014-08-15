$(function(){

	//倒计时




	//选项卡切换
	$(".LBATLLi").click(function(){
		var upid= $(this).attr("upid");
		$(".LBATLLi").removeClass("skin_bottom");
		$(this).addClass("skin_bottom");
		$(".LBAContent").addClass("disnone");
		$("."+ upid).removeClass("disnone");
		
	});


	//图片特效
	$(".PACLi").hover(function(){
		$(this).find(".PACLMid").show();
	},function(){
		$(this).find(".PACLMid").hide();
	});
	$(".LPCBPic").hover(function(){
		$(this).next().next().show();
	},function(){
		$(this).next().next().hide();
	});

	//换皮肤
	$(".SCACEve").click(function(){
		var cssid=$(this).attr("id");
		$("#skin").attr("href","css/"+ cssid +".css");
	});
	
	$("#PicSlider").hover(function(){
		$(".ChangePicLeft").show();
		$(".ChangePicRight").show();
	},function(){
		$(".ChangePicLeft").hide();
		$(".ChangePicRight").hide();
	});


	//改变颜色按钮
	$("#skinChange").click(function(){
		$("#skinChangeAllChoice").show();
		$("#skinChangeAllIcon").show();
		$(this).hide();

		$("#skinChangeAllIcon").click(function(){
			$("#skinChangeAllChoice").hide();
			$(this).hide();
			$("#skinChange").show();
		});
	});



 	//更换皮肤图标固定不动
	//获取要定位元素距离浏览器顶部的距离  
	var navH = $("#skinChange").offset().top;  
	//滚动条事件  
	$(window).scroll(function(){   
	//获取滚动条的滑动距离   
		var scroH = $(this).scrollTop();  
		 //alert(scroH);
		//滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定  
		if(scroH >= navH){  
			$("#skinChange").css({"position":"fixed","top":navH});
			$("#skinChangeAllChoice").css({"position":"fixed","top":"180px"});
		}
		else if(scroH<navH){  
			$("#skinChange").css("position","fixed");
			$("#skinChangeAllChoice").css("position","fixed");   
		}   
	}); 


	//菜单栏固定不动
	var menuH = $("#TADown").offset().top;
	$(window).scroll(function(){
		var menuScroH = $(this).scrollTop();

		if(menuScroH >= menuH){  
			$("#TADown").css({
				"position":"fixed",
				"top":"60px",
				"left":"0",
				"width":"100%",
				"padding":"0 120px 0 136px"
			});
		}
		else if(menuScroH<menuH){  
			$("#TADown").css({
				"top":"",
				"position":"",
				"left":"",
				"width":"",
				"padding":""
			});
		}  
	});


	//幻灯片
	$(".ChangePicLeft").click(function(){
		var bgindex = $(this).parent().attr("bgindex");
		//alert(bgindex);
		if(bgindex =="1"){
			bgindex = 5;
		}
		bgindex--;
		wordClear();
		//alert("url('../images/slide"+ bgindex +".jpg')");
		$("#PicSlider").css("background-image","url('images/slide"+bgindex+".jpg')");
		wordShow();
		$(this).parent().attr("bgindex",bgindex);
	});
	$(".ChangePicRight").click(function(){
		var bgindex = $(this).parent().attr("bgindex");
		//alert(bgindex);
		if(bgindex =="4"){
			bgindex = 0;
		}
		bgindex++;
		wordClear();
		//alert("url('../images/slide"+ bgindex +".jpg')");
		$("#PicSlider").css("background-image","url('images/slide"+bgindex+".jpg')");
		wordShow();
		$(this).parent().attr("bgindex",bgindex);
	});

	setInterval("showChangePic()",5000);
	wordShow();
	wordClear();



	$(".TADMenuLi").hover(function(){
		$(this).find(".TADMenuLATip").css("visibility","visible");
	},function(){
		$(this).find(".TADMenuLATip").css("visibility","hidden");
	});


	//倒计时
	countdown();
 
 });


//倒计时
function countdown(){
	var ct = new Date();
	var month = ct.getMonth() + 1;
	//alert(month);
	var date = ct.getDate();
	var hour = ct.getHours();
	var minute = ct.getMinutes();
	var second = ct.getSeconds();

	var ss = 60 - second;
	//alert(ss);
	$("#ss").html(ss);

	var mm = 59 - minute;
	$("#mm").html(mm);

	var hh = 23 - hour;
	$("#hh").html(hh);

	var dd="";
	if( month == 1 ){
		dd = ( 31 - date ) + 28 + 31 + 30 + 31 + 30 + 12;
	}
	if( month == 2 ){
		dd = ( 28 - date ) + 31 + 30 + 31 + 30 + 12;
	}
	if( month == 3 ){
		dd = ( 31 - date ) + 30 + 31 + 30 + 12;
	}
	if( month == 4 ){
		dd = ( 30 - date ) + 31 + 30 + 12;
	}
	if( month == 5 ){
		dd = ( 31 - date ) + 30 + 12;
	}
	if( month == 6 ){
		dd = ( 31 - date ) + 12;
	}
	if( month == 7 ){
		if( date < 12){
			dd = 12 - date ;
		}
		else{
			dd = 365 -( date - 12);
		}
	}
	if( month == 8 ){
		dd = ( 31 - date ) + 30 + 31 + 30 + 31 + 193;
		
	}
	if( month == 9 ){
		dd = ( 31 - date ) + 31 + 30 + 31 + 193;
	}
	if( month == 10 ){
		dd = ( 31 - date ) + 30 + 31 + 193;
	}
	if( month == 11 ){
		dd = ( 31 - date ) + 30 + 193;
	}
	if( month == 12 ){
		dd = ( 31 - date ) + 193;
	}

	//alert(dd);
	$("#dd").html(dd);





	setTimeout('countdown()',1000);
}




var bgindex = 2;

function showChangePic(){
	
	wordClear();
	$("#PicSlider").css("background-image","url('images/slide"+ bgindex +".jpg')");
	//图片出现
	wordShow();
	if(bgindex =="4"){
		bgindex = 0;
	}
	bgindex++;
	$("#PicSlider").attr("bgindex",bgindex);
}

function wordShow(){
	$(".PicWordDemo01").animate({"left":"1075px","top":"255px"},100);
	$(".PicWordDemo02").animate({"left":"900px","top":"285px"},1100);
	$(".PicWordDemo03").animate({"left":"1070px","top":"385px"},2100);
	$(".PicWordDemo04").animate({"left":"800px","top":"415px"},3100);
	$(".PicWordDemo05").animate({"left":"1080px","top":"485px"},4100);
}


function wordClear(){
	$(".PicWordDemo01").css({"left":"1600px","top":""});
	$(".PicWordDemo02").css({"left":"1600px","top":""});
	$(".PicWordDemo03").css({"left":"1600px","top":""});
	$(".PicWordDemo04").css({"left":"1600px","top":""});
	$(".PicWordDemo05").css({"left":"1600px","top":""});
}