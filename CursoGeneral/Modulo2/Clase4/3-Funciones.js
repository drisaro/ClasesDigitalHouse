//Declarando funciones
function ejemplo(){
    let saludo = "hola, soy una función";
    return saludo
}

//Declarando funciones en variables
let ejemplo = function funcion(){
    return "hola, soy una función expresada";
}

//Funciones con parámetros
let nombre = 'David';
let apellido = 'Risaro';
function saludar(nombre, apellido) {
    return 'Hola, ' + nombre + ' ' + apellido + '!';
}

//Función para validar números pares.
function esPar(n){
    return (n%2==0)
}

/*
Escribir las siguientes tres funciones:
    anterior: recibe un número como parámetro y devuelve ese número menos uno.
    triple: recibe un número como parámetro y devuelve el triple de ese número.
    anteriorDelTriple: recibe un número como parámetro y, utilizando las dos 
    funciones anteriores, tendrá que devolver el número recibido multiplicado  
    por 3 (tres) y al resultado restarle 1 (uno).
 */ 
function anterior(numero){
    return numero-1
}
function triple(numero){
    return numero*3
}
function anteriorDelTriple(numero){
return anterior(triple(numero))
} 

