$(document).ready(function()){
	
});

	$('.show').click(function()){
		var text1 = $('#result').val();
		if(text1 != "0"){
			var value1 = text1;
			var valbtn = $(this);
			var value2 = valbtn.text();
			var result = value1+value2;
			$('#result').val(result)

		}else{
			$('#result').val()
		}
	});
	$(function()){
		var res = null;
		var = operators;


		$('.operators').click(function()){
			var val1 = $('#result').val();
			if (res !=null){
				var result = ApplyOperation(res, val1, operators);
				res = result;
			}else {
				res = val1;
			}
			operators = $(this).text();
			$('.input').val("");
		}
	});
	
	$('#equals').click(function()){
		var opr = operators;
		var res2;
		var value2 = $('#result').val();
		if(value2 != ""){
			res = ApplyOperation(res2, value2, operators);

		}else{
			res2 = res;
		}
		$('#result').val(res2);
		res = null;
	});
});
	
	function ApplyOperator(value1, value2, operators){
		var res2;
		switch(operators){
			case "+":
			res2 = addition(value1,value2);
			break;

			case "-":
			res2 = subtract(value1,value2);
			break;

			case "*":
			res2 = multiply(value1,value2);
			break;

			case "/":
			res2 = divide(value1,value2);
			break;

		}
		return res2;
	}
	function addition(first, second){
		var x = parseFloat(first);
		var y = parseFloat(second);
		var tot = x + y;
		return tot;

	}
	function subtract(first, second){
		var x = parseFloat(first);
		var y = parseFloat(second);
		var tot = x - y;
		return tot;
	}
	function multiply(first, second){
		var x = parseFloat(first);
		var y = parseFloat(second);
		var tot = x*y;
		return tot;
	}
	function divide(first, second){
		var x = parseFloat(first);
		var y = parseFloat(second);
		var tot = x / y;
		return tot;
	}
				