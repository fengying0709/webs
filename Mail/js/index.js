$(function  () {
	$(".MCTBtn").hover(function(){
		$(this).find(".MCTBtnUp").show();
	},function(){
		$(this).find(".MCTBtnUp").hide();
	});


	//收件箱
	$(".MBTipLi").click(function(){
		$("#TodayBody").hide();
		var upid=$(this).attr("upid");
		$("#"+upid).show();
	});


	//首页
	$(".shouye").click(function(){
		$(".MBTipLi").hide();
		$("#TodayBody").show();
		
	}):
});