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


	$(".btnlogin").click(function(){
		if($(".RCLTxtDes01").val() == "" || $(".RCLTxtDes02").val() == "")
			$(".RCLTxtTip").show();
		else{
			$(".RCLTxtTip").hide();
		}
	});
	//密码和用户名文本框
	/*$(".RCLTxtDes").focus(function(){
		$(this).val("");
		$(this).css("color","#333");
	
	});
	$(".RCLTxtDes").blur(function(){
		if( $(this).val() == "" ){
			var txtvalue = $(this).attr("txtvalue");
			$(this).val(txtvalue);
			$(this).css("color","");
		}
		
	});*/
});