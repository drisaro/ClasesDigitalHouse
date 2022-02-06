//Continuación Arrays

let numerosDeLoteria = [2, 11, 17, 32, 36, 39];
let tiradasDelDado = [1, 6, 6, 2, 2, 4];
let salioCara = [false, false, true, false];
let listaDeListasDeNumeros = [[1, 6], [6, 2, 2, 4]];

console.log (numerosDeLoteria);
console.log(tiradasDelDado);
console.log(salioCara);
console.log(listaDeListasDeNumeros);

//Los arrays no tienen que empezar conteniendo items, se puede definir
//un array vacío.

let unArrayVacio = [];

//También podemos aplicarle la utilidad .length a los arrays

let numerosDeLoteria = [22,40,12]

console.log([].length)
console.log (numerosDeLoteria.length)
console.log([4,3].length)

//Utilizando la propiedad push() podemos agregar items a un array previamente declarado

 let pertenencias = [ "espada" , "escudo" , "antorcha" ];
 console.log(pertenencias);
 pertenencias.push("ballesta");
 console.log(pertenencias);

//Utilizando la propiedad pop() podemos tomar/eliminar el último elemento del array
//En este ejemplo utilizamos pop() para tomar el último elemento del array
//y pasarlo a otro array.

let unArray = [1, 2, 3];
let otroArray = [4, 5];

function trasladar (unArray, otroArray) {
    let elementoBorrado = unArray.pop();
    otroArray.push(elementoBorrado);
}

//Utilizando la propiedad indexOf() podemos buscar un elemento en un array
//y nos devuelve la posición del elemento en el array.

let diasLaborales = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
console.log(diasLaborales.indexOf("Viernes"));

//Si el elemento NO se encuentra en el array, devuelve -1

let diasLaborales = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
console.log(diasLaborales.indexOf("Osvaldo"));

//Podemos utilizar estas propiedades dentro de una función.

function contiene (unArray, numero) {
    return (unArray.indexOf(numero) >= 0);
}

//Podemos traer cualquier elemento del array utilizando el índice

let arraySimpson = ["Homero", "Lisa", "Marge", "Bart", "Maggie"];
arraySimpson[2]; //Nos devuelve 'Marge'


