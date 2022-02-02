//Comentario simplemente para decir que pongo un comentario
let saludo = "Hola mundo, desde Digital House";
console.log(saludo);

// Identificadores
// a-z A-Z 0-9 $ _
// No debemos utilizar ñ Ñ á é í ó ú
// No debemos nombrar variables con primera letra mayúscula (se puede, pero no es buena práctica)
// No podemos nombrar variables con un número al principio (da error)
// Elegir nombrar representativos

// Camel case
var nombreApellido;
// Snake case
var nombre_apellido;
// Kebab case
// var nombre-apellido; (no funciona en JS porque utiliza - como símbolo operativo)

// Var Vs. Let
// Global vs. Local

// { Con llaves se delimitan bloques de código }

var nombreApellido = "David Risaro"; // esta sería global, pero si utilizamos let la podemos convertir en global, ya que está por fuera del bloque de código.
var nombreApellido = "Otro nombre que no corresponde" // Se sobreescribiría, sin dar error
{
    let nombreApellido = "Ariel Sesar" // esta sería local. Si cambiamos a var pisaría la de arriba
    {
        let nombreApellido = "Otra variable" // Esta no se podría usar fuera de este bloque de código
    }
}

// operadores aritméticos
// + suma
// - resta
// * multiplicación
// / división
// % módulo (se puede usar para verificar si un número es par o impar)
// ** potencia

let numero = 10;
console.log(numero**5); //devuelve 10 a la 5ta potencia

// Incremento y Decremento
// ++ agrega/quita una unidad al número en la variable

// Estas son tres formas de hacer lo mismo
numero = numero + 1;
numero += 1;
numero ++;

// Decremento
numero = numero - 1;
numero --;

// Funciones

// Declara un bloque de código reutilizable
// Que puede recibir valores y retornar una respuesta
// Realiza una tarea específica
// Pueden ser declaradas o expresadas
// Una función declarada se puede llamar en cualquier parte del código

// Parámetros: Variables de entrada
// Definición de una función
// Función declarada

function sumar (numeroA, numeroB) {
    let resultado = numeroA + numeroB;
    return resultado;
}
// Invocar a la función

console.log( sumar (8, 10) );

// Función expresada

let restar = function (numeroA, numeroB){
    return numeroA - numeroB;
}

console.log(restar(6,3));

// Función saludar

function saludar (nombre, apellido) { // *se pueden declarar las variables en la misma declaración de la función (nombre = "David", apellido = "Risaro") y devuelve algo base
    return "hola " + nombre + " " + apellido;
}

console.log(saludar("David", "Risaro")) // Devuelve "Hola David Risaro"
console.log(saludar("David")) // Devuelve "Hola David undefined"
console.log(saludar()) // Devuelve "Hola undefined undefined" ver *


function perimetro  (radio) {
    return 3.14 * radio * 2;
}

function area  (radio) {
    return 3.14 * radio * radio;   
}

// Operadores lógicos

// AND &&
// OR ||
// NOT ! 

// Condicionales
// Sirve para evaluar una condición y tomar una decisión

function puedoIrAlBanco (diaDeLaSemana, horaActual){
    if (diaDeLaSemana == "Domingo" || diaDeLaSemana == "Sábado") {
        return false
    } else if (diaDeLaSemana != "Domingo" && diaDeLaSemana != "Sábado" && horaActual >=10 && horaActual <= 15) {
        return true
    } else {
        return false
    }
}
