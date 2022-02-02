/*
// Arrays
//Lista de elementos

let myArray = ["1", 1, "A", "B", "c", [8,7,6]] 
console.log(myArray) // Trae todo el array
console.log(myArray[2]) // Trae la posición 2 del array (en este caso "A")
console.log(myArray[5][1]) // Trae el array (dentro del array) en la posición 5, con su segundo elemento
myArray[6] = "nuevo valor" // Una forma de agregar elementos en el array
console.log(myArray.length); //Muestra CANTIDAD de ELEMENTOS

// .push() // permite empujar elementos a un array, siempre los agrega AL FINAL del array

myArray.push("otro elemento", "otro otro elemento")

// .pop() // elimina el último elemento del array (solo uno, siempre el último)
myArray.pop(); // borraría "otro otro elemento"

// .indexOf() // Es un método que nos permite buscar el índice de un valor dentro de un Array.

console.log(myArray.indexOf("otro elemento"));

// Ciclo For

for (let vuelta = 0; vuelta <= 10; vuelta++) { // con vuelta += 2 puedo ir de 2 en 2
    console.log("Estamos dando la vuelta " +  vuelta);
}

// Arrays y ciclos

let numeros = [0,1,2,3,4,5,6,7,8,9,10];
let numero = 0;
// Sumatoria
// Recibimos un conjunto de números y devuelve la suma

for (let indice = 0; indice < numeros.length; indice ++) {
    numero = numero + numeros[indice]
}*/
/* 
function caloriasDeTrote(x) {
    let calorias = 5
    for (i=1;i<=x;i++){
        calorias = calorias * i
    }
    return calorias
}
console.log(caloriasDeTrote( 2))
 */

/* let arrayPuesto = ["Oro", "Plata", "Bronce", "Seguí participando"]
 function medallaSegunPuesto (arrayPuesto, puesto){
    if  (arrayPuesto[puesto] <= 3) { 
        return arrayPuesto[puesto+1]
    } else {
    }return "Seguí participando"
} 
console.log(medallaSegunPuesto(arrayPuesto, puesto(0))); */

/* function naipes(palo){
    let arrayNaipes = [1,2,3,4,5,6,7,10,11,12];
    for (i=1;i<arrayNaipes[i].length;i++){
        return arrayNaipes[i] + "de " + palo
    }
}
console.log(naipes("Espada")) */

let arrayNum = [];
function productoria (arrayNum){
    
    let total = 1;
    for (i = 0; i<=arrayNum.length; i++){
        total = total * arrayNum[i]
    }
    return total;
}
console.log(productoria[1,2,7])