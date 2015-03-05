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
});