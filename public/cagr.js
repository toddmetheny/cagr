$(document).ready(function(){
	$("#submit-btn").on("click", function(){
		var starting = $("input#starting").val();
		var ending = $("input#ending").val();
		var periods = $("input#periods").val();	
		var cagr = (Math.pow((ending / starting), (1 / periods)) - 1);
		console.log(Math.round(cagr * 100));
		var to_percent = "\n" + Math.round(cagr * 100) + "%" + "\n";
		$(".all").append(to_percent);
	});
});