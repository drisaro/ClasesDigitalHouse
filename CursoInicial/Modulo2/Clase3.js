//Operadores lógicos

//Los operadores lógicos permiten realizar distintas acciones, y devuelven true/false dependiendo el caso

//Comparación simple

10 === 15 //Compara los dos números y busca si son iguales, en este caso devuelve false
10 !== 15 //Compara los dos números y busca que no sean iguales, devuelve true
10 < 15 //Compara los dos números y verifica si el número de la izquiera es menor, devuelve true
10 > 15 //Compara los dos números y verifica si el número de la derecha es menor, devuelve false
10 <= 15 //Compara los dos números y verifica que sea menor o igual, devuelve true
10 >= 15 //Compara los dos números y verifica que sea mayor o igual, devuelve false

//Lógicos

//AND o && - Permite combinar dos operaciones con un 'Y'. Si ambas son verdaderas, devuelve true.
{10 < 11} && {10 > 9} //Ambas son verdaderas, devuelve true
{10 > 11} && {10 === 10} //Una es false, devuelve false
{10 > 11} && {10 !== 10} //Ambas son false, devuelve false

//OR o || - Permite combinas dos operaciones con un 'O'. Al menos un valor debe ser verdadero para devolver true.
{10 > 11} || {10 < 11} //Una es verdadera, devuelve true.
{10 < 11} || {10 !== 10} //Ambas son falsas, devuelve false.

//Concatenación - Permite juntar dos o más cadenas de texto.

let nombre = 'David'
let apellido = 'Risaro'
let nombreCompleto = nombre + apellido //Une a nombre y apellido, devuelve 'David Risaro'

//Se pueden mezclar tipos de datos

let nombre = 'David';
let peso = 85;

console.log(nombre + ' ' + 'pesa ' + peso // devuelve 'David pesa 85'. El espacio vacío luego de la variable nombre es para agregar un espacio entre el texto.
