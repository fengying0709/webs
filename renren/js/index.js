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

	
});