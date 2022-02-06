//Funciones

function triple(numero) {
    return numero*3;
}

function mitad (numero) {
    return (numero/2);
}

function cuadruple(numero) {
   return 4* numero;
}

function multiplicar (numero1, numero2) {
    return numero1*numero2;
}

//Utilizando funciones dentro de otras funciones.

function sumar(numero1, numero2) { 			//Realizo una función en la que sumo dos números)
    return numero1 + numero2;
}

function tripleDeLaSuma(numero3, numero4) {
    let resultadoDeSuma = sumar(numero3, numero4); 	//Utilizo la función 'sumar' con dos números, y asigno el resultado a la variables
    return resultadoDeSuma * 3;				//Tomo el resultado adquirido antes y lo triplico.
}

function perimetro  (radio) {
    return 3.14 * radio * 2;
}

function area  (radio) {
    return 3.14 * radio * radio;   
}
