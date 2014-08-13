$(function(){
	//alert("1");


	$(document).on("click","#RCRBottom",function(){
		$("#RCRight").hide();
		$("#RCRHide").show();
	});
	$(document).on("click","#RCRHTop",function(){
		
		$("#RCRHide").hide();
		$("#RCRight").show();
	});



	//密码和用户名文本框
	$(".RCLTxtDes").click( function(){
			$(this).val("");
		});
	$(document).click(function(){
		$(".RCLTxtDes").click( function(){
			$(this).val("");
		});

		return false;
	});
});