function datos() {
	var etiqueta="";
	var parametros=location.search.substr(1).split("&");
	parametros.forEach(function(item){
		campos=item.split("=");
		if (campos[0]!="Enviar") {
			switch(campos[0]){
				case "txtN": etiqueta="Nombres"; break;
				case "txtAp": etiqueta="Apellidos"; break;
				case "txtC": etiqueta="Correo"; break;
				case "txtP": etiqueta="Password"; break;
				case "rdbs": etiqueta="Sexo"; break;
				case "eda": etiqueta="Edad"; break;
				case "fre": etiqueta="Frecuencia de compra"; break;
				case "direc": etiqueta="Direción"; break;	
			}
			document.getElementById("parrafo").innerHTML+=etiqueta+": "+campos[1]+"<br>";
		}
	});
	document.getElementById("parrafo").innerHTML+="<input type='button' value='Confirmar' onclick='regresar()'>";
}

function regresar() {
	window.open("./jumbo.html","_self");
}

function generoM() {
	alert("Género masculino");
}

function generoF() {
	alert("Género femenino");
}

function function_name(argument) {
	// body...
}

function cambiarImg1() {
	document.getElementById("imgn").src = "./img/segunda.jpg";
}

function cambiarImg2() {
	document.getElementById("imgn").src = "./img/primera.jpg";
}

function numError(e) {
	var charCode;
	charCode = e.keyCode;
	status = charCode;
	if (charCode >= 0 || charCode <= 57) {
		alert("Acá no debes ingresar números")
	}
}
function caracterError(e) {
	var charCode;
	charCode = e.keyCode;
	status = charCode
	if (charCode!="@") {
		alert("Ingresa una dirección de correo válida");
	}
}