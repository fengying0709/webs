$(function(){
	
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
 
 });

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
	$(".PicWordDemo01").css({"left":"","top":""});
	$(".PicWordDemo02").css({"left":"","top":""});
	$(".PicWordDemo03").css({"left":"","top":""});
	$(".PicWordDemo04").css({"left":"","top":""});
	$(".PicWordDemo05").css({"left":"","top":""});
}