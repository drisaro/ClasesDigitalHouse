//Condicionales

//Nos permiten evaluar condiciones y realizar distintas acciones según el resultado de dicha evaluación.

if (condicion){ 		//Comienza con la palabra reservada if, sigue con la condición y luego las llaves
	return;
}else if (nueva condición){ 	//Si la primera condición NO se cumple, utiliza la siguiente.
	return;
}else{
	return; 		//Si ninguna condición se cumple, utiliza esta salida por defecto.
}

//Ejemplo

let edad = 18; 		//Declaro una variable llamada edad, asignándole el valor numérico 18.
let vieneConLosPadres 	//Declaro una variable booleana para utilizar más adelante.
let puedeEntrar; 	//Declaro una variable booleana para utilizar más adelante.

if (edad >= 18){
	puedeEntrar = true //La persona tiene 18 años o más, por lo que puede entrar
}else if (edad >= 16 && vieneConLosPadres == true){
	puedeEntrar = true //La persona es mayor de 16, menor de 18, pero viene con los padres, por lo que puede entrar.
}else{
	puedeEntrar = false //Es menor de 16, por lo que no importa si viene acompañado de los padres, no puede entrar.
}

//Ejemplo 2

let diaDeSemana =  'Domingo' //Asigna a la variables diaDeSemana el valor 'Domingo'

if (diaDeSemana ==  'Domingo') { //La condición se cumple
    console.log("¡Hoy es día de descanso!"); //Entonces imprime el texto
}
