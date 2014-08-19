$(function(){
	
	//显示时间
	showTime();


	//下拉菜单
	$(".MenuLi").hover(function(){
		//alert("1");
		$(this).find(".MenuA").css({"background-color":"rgb(51,51,51)","color":"#FFFFFF"});
		$(this).find(".MenuA").next().show();
	},function(){
		$(this).find(".MenuA").css({"background-color":"","color":""});
		$(this).find(".MenuA").next().hide();
	});



	//选项卡
	$(".SCT").click(function(){
		//$(".SCT").toggleClass("SCTActive");
		$(".SCT").removeClass("SCTActive");
		$(this).addClass("SCTActive");
		//alert("1");
		//$(this).removeClass("SCTActive");
	});



	
});



//显示时间
function showTime(){
	//alert("1");
	var ct = new Date();
	var year = ct.getYear();
	var month = ct.getMonth() + 1;
	var date = ct.getDate();
	var hour = ct.getHours();
	var minute = ct.getMinutes();
	var second = ct.getSeconds();
	//alert(second);
	if( year < 2000 )
	{
		year= year + 1900;
	}
	

	var y1=Math.floor( year / 1000);
	var y2=Math.floor( ( year % 1000 ) / 100);
	var y3=Math.floor( ( year % 100 ) / 10);
	var y4= year % 10;
	var m1=Math.floor( ( month % 100 ) /10 );
	var m2= month % 10;
	var d1=Math.floor( ( date % 100 ) /10 );
	var d2= date % 10;
	var h1=Math.floor( ( hour % 100 ) /10 );
	var h2= hour % 10;
	var mi1=Math.floor( ( minute % 100 ) /10 );
	var mi2= minute % 10;
	var s1=Math.floor( ( second % 100 ) /10 );
	var s2= second % 10;
	//alert(s1);

	$("#y1").css("background-position","0 " + y1*-30 + "px");
	$("#y2").css("background-position","0 " + y2*-30 + "px");
	$("#y3").css("background-position","0 " + y3*-30 + "px");
	$("#y4").css("background-position","0 " + y4*-30 + "px");
	$("#m1").css("background-position","0 " + m1*-30 + "px");
	$("#m2").css("background-position","0 " + m2*-30 + "px");
	$("#d1").css("background-position","0 " + d1*-30 + "px");
	$("#d2").css("background-position","0 " + d2*-30 + "px");
	$("#h1").css("background-position","0 " + h1*-30 + "px");
	$("#h2").css("background-position","0 " + h2*-30 + "px");
	$("#mi1").css("background-position","0 " + mi1*-30 + "px");
	$("#mi2").css("background-position","0 " + mi2*-30 + "px");
	$("#s1").css("background-position","0 " + s1*-30 + "px");
	$("#s2").css("background-position","0 " + s2*-30 + "px");


	setTimeout('showTime()',1000);
}