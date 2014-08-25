$(function(){

	//菜单的下拉框
	$(".HMenuLi").hover(function(){
		$(this).find(".HMenuLiTip").removeClass("disnone");
	},function(){
		$(this).find(".HMenuLiTip").addClass("disnone");
	});





	//next
	$(".next").click(function(){
		clearheight();
		$(".MiddleA0").stop();
		var sid = $(this).parent().attr("mshowid");
		if( sid == "1"){
			$(".allow").show();
		}
		if(sid == "3"){
			$(".next").hide();
		}
		$(".MiddleA0" + sid).animate({"left":"-980px"},1000);
		$(".slid" + sid + "2").animate({"left":"-980px"},2000);
		$(".slid" + sid + "3").animate({"left":"-980px"},2000);
		$(".slid" + sid + "4").animate({"left":"-980px"},2000);
		$(".slid" + sid + "5").animate({"left":"-980px"},2000);


		
		sid ++;
		//alert(sid);
		//$(".MiddleA0").addClass("disnone");
		//$(".MiddleA0" + sid).removeClass("disnone");
		$(".MiddleA0" + sid).animate({"left":"200px"},1000);
		//alert();
		$(".slid" + sid + "2").animate({"left":"0"},2000);
		$(".slid" + sid + "3").animate({"left":"0"},2000);
		$(".slid" + sid + "4").animate({"left":"0"},2000);
		$(".slid" + sid + "5").animate({"left":"0"},2000);
		if(sid == 2){
			setTimeout('$(".slidLine21").animate({"height":"114px"},2000)',2000);
			setTimeout('$(".slidLine22").animate({"height":"84px"},2000)',2000);
			setTimeout('$(".slidLine23").animate({"height":"93px"},2000)',2000);
		}
		
		if(sid == 3){
			setTimeout('$(".slidLine31").animate({"height":"114px"},2000)',2000);
			setTimeout('$(".slidLine32").animate({"height":"84px"},2000)',2000);
			setTimeout('$(".slidLine33").animate({"height":"93px"},2000)',2000);
		}

		if(sid == 4){
			setTimeout('$(".slidLine41").animate({"height":"114px"},2000)',2000);
			setTimeout('$(".slidLine42").animate({"height":"84px"},2000)',2000);
			setTimeout('$(".slidLine43").animate({"height":"93px"},2000)',2000);
		}
		$(this).parent().attr("mshowid",sid);
 	});


 	$(".allow").click(function(){
 		clearheight();
 		$(".MiddleA0").stop();
		var sid = $(this).parent().attr("mshowid");
		if(sid == "4"){
			$(".next").show();
		}
		if(sid == "2"){
			$(".allow").hide();
		}
		$(".MiddleA0" + sid).animate({"left":"1400px"},1000);
		$(".slid" + sid + "2").animate({"left":"1400px"},2000);
		$(".slid" + sid + "3").animate({"left":"1400px"},2000);
		$(".slid" + sid + "4").animate({"left":"1400px"},2000);
		$(".slid" + sid + "5").animate({"left":"1400px"},2000);
		sid --;
		//alert(sid);
		//$(".MiddleA0").addClass("disnone");
		//$(".MiddleA0" + sid).removeClass("disnone");
		$(".MiddleA0" + sid).animate({"left":"200px"},1000);
		$(".slid" + sid + "2").animate({"left":"0"},2000);
		$(".slid" + sid + "3").animate({"left":"0"},2000);
		$(".slid" + sid + "4").animate({"left":"0"},2000);
		$(".slid" + sid + "5").animate({"left":"0"},2000);
		if(sid == 2){
			setTimeout('$(".slidLine21").animate({"height":"114px"},2000)',2000);
			setTimeout('$(".slidLine22").animate({"height":"84px"},2000)',2000);
			setTimeout('$(".slidLine23").animate({"height":"93px"},2000)',2000);
		}
		
		if(sid == 3){
			setTimeout('$(".slidLine31").animate({"height":"114px"},2000)',2000);
			setTimeout('$(".slidLine32").animate({"height":"84px"},2000)',2000);
			setTimeout('$(".slidLine33").animate({"height":"93px"},2000)',2000);
		}

		if(sid == 4){
			setTimeout('$(".slidLine41").animate({"height":"114px"},2000)',2000);
			setTimeout('$(".slidLine42").animate({"height":"84px"},2000)',2000);
			setTimeout('$(".slidLine43").animate({"height":"93px"},2000)',2000);
		}
		$(this).parent().attr("mshowid",sid);
 	});
});


function clearheight(){
	$(".slidLine21").css("height","0");
	$(".slidLine22").css("height","0");
	$(".slidLine23").css("height","0");
	$(".slidLine31").css("height","0");
	$(".slidLine32").css("height","0");
	$(".slidLine33").css("height","0");
	$(".slidLine41").css("height","0");
	$(".slidLine42").css("height","0");
	$(".slidLine43").css("height","0");
}