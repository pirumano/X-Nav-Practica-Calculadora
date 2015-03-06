var acumulado = 0;
var inicio = true;
var borrar = true;
var operacion;
$(document).ready(function(){
	$("#numeros button").click(function(){
		var i = $(this).text();
		if(borrar){
			$("#display").html(i);
			borrar = false;
		}else{
			$("#display").append(i);
		}
	});

	$("#opera button").click(function(){
		var j = $(this).text();
		var display = $("#display").html();
		if(j == "+"){
			acumulado = parseInt(acumulado) + parseInt(display);
			operacion = "+";
		}
		else if(j == "-"){
			if(inicio){
				acumulado = parseInt(display);
				inicio = false;
				borrar = true;
				operacion = "-";
				return;
			}
			else
				acumulado = parseInt(acumulado) - parseInt(display);
			operacion = "-";
		}
		else if(j == "X"){
			if(inicio){
				acumulado = 1;
			}
			acumulado = parseInt(acumulado) * parseInt(display);
			operacion = "*";
		}
		else if(j == "/"){
			if(inicio){
				acumulado = parseInt(display);
				borrar = true;
				inicio = false;
				operacion = "/";
				return;
			}
			acumulado = parseInt(acumulado) / parseInt(display);
			operacion = "/";
		}
		else if(j == "C"){
			$("#display").html("0");
			acumulado = 0;
			inicio = true;
			borrar = true;
			return;
		}else if(j == "="){
			if(operacion == "+")
				acumulado = parseInt(acumulado) + parseInt(display);
			if(operacion == "-")
				acumulado = parseInt(acumulado) - parseInt(display);
			if(operacion == "*")
				acumulado = parseInt(acumulado) * parseInt(display);
			if(operacion == "/")
				acumulado = parseInt(acumulado) / parseInt(display);				
		}
		inicio = false;
		$("#display").html(acumulado);
		borrar = true;
	});

	$(document).keydown(function(e){
		switch(e.keyCode){
			case 48:
				if(borrar)
					$("#display").html("0");
				else
					$("#display").append("0");
				break;
			case 49:
				if(borrar)
					$("#display").html("1");
				else
					$("#display").append("1");
				break;
			case 50:
				if(borrar)
					$("#display").html("2");
				else
					$("#display").append("2");
				break;
			case 51:
				if(borrar)
					$("#display").html("3");
				else
					$("#display").append("3");
				break;
			case 52:
				if(borrar)
					$("#display").html("4");
				else
					$("#display").append("4");
				break;
			case 53:
				if(borrar)
					$("#display").html("5");
				else
					$("#display").append("5");
				break;
			case 54:
				if(borrar)
					$("#display").html("6");
				else
					$("#display").append("6");
				break;
			case 55:
				if(borrar)
					$("#display").html("7");
				else
					$("#display").append("7");
				break;
			case 56:
				if(borrar)
					$("#display").html("8");
				else
					$("#display").append("8");
				break;
			case 57:
				if(borrar)
					$("#display").html("9");
				else
					$("#display").append("9");
				break;
		}
		borrar = false;
		inicio = false;
	});
});









