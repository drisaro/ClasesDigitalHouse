//Reforzando conceptos de Ciclos.

function imprimir5veces5 (){
    for (i = 0; i < 5; i ++)
    console.log(5)
}

//Al utilizar la variable i imprimimos el paso en el
//que nos encontramos durante la ejecución del ciclo.

function pasitoAPasito (){
    for (let i = 0; i < 5; i ++){
        console.log(i)
    }
}

//Un ejemplo más claro sería:

let i  = 0
function pasandoPorI(){
        for (i = 0; i < 5; i ++){
            console.log("acá i tiene el valor de " + i)
    }
}

//También podemos combinar el For loop.

function pasandoPorLosPares() {
    for (i = 0; i <= 6; i ++){
        if (i%2===0){
            console.log("acá i tiene el valor de " + i)
        }
    }
}

//En este ejemplo le pasamos por variable el valor
//de la cantidad de ciclos máxima que tendrá el ciclo.

let x = 10;
function imprimirAzul(x){
    for (i =0; i < x; i++){
        console.log("Azul")
    }
}

//Dentro del For loop podemos hacer uso de un acumulador
//para almacenar el valor de una operación repetitiva.
//En este ejemplo cada iteración del ciclo le agrega
//300 calorías a la dieta

for( let i = 0 ; i < 3 ; i++ ){ 
       let totalCalorias = totalCalorias + 300;
}

//Es importante destacar que las variables que se utilizan
//dentro de un ciclo for, al igual que en funciones, solo
//se pueden utilizar DENTRO de ese ciclo.
//Por lo que no podríamos hacer

for( let i = 0 ; i < 3 ; i++ ){ 
       let totalCalorias = totalCalorias + 300;  // La variable totalCalorias está declarada dentro del for y sólo puede ser usada ahí dentro
}

console.log(totalCalorias); // La variable totalCalorias acá ya no existe y no puede ser consultada

//Para estos casos debemos declarar la variable
//por fuera del ciclo, y ahí podríamos acceder 
//desde cualquier parte del código.

let totalCalorias = 0; // Acá inicializo la variable totalCalorias con un valor de 0 (cero)

for( let i = 0 ; i < 5 ; i++ ){ 
       totalCalorias = totalCalorias + 300;  // Acá la variable, como ya esta declarada por fuera del for, puede ser modificada durante las iteraciones y no se "reinicia"
}

console.log(totalCalorias); // La variable totalCalorias acá ya existe y nos devuelve el valor total que buscábamos.

//Otro ejemplo sería:

let monedaDe25 = 0 
function sumar5MonedasDe25Centavos (){
    for (i = 0 ; i < 5 ; i ++){
        monedaDe25 = monedaDe25 + 0.25
    }
    return monedaDe25
}

//En este ciclo podemos contar la cantidad de calorías 
//utilizando la cantidad de empanadas como base

let cantidadEmpanadas = 3;
let totalCalorias = 0;

for( let i = 0 ; i < cantidadEmpanadas ; i++ ){ 
        totalCalorias = totalCalorias + 300;
}

console.log(totalCalorias); 

//Otro ejemplo sería:

function sumaDeLosParesDel0Al(x){
    let acumulador = 0
    for (i = 0; i <= x; i++){
        if (i%2 === 0)
        acumulador = acumulador + i;
    }
    return acumulador
}


