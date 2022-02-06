/* function doble(numero){
    return numero*2;
}
function triple(numero){
    return numero*3;
}
function aplicarCallback(numero, funcion){
    return funcion(numero)
}
//##############//
let suma = (num1, num2) => (num1+num2)
let resta = (num1, num2) => (num1-num2)
let multiplicacion = (num1, num2) => (num1*num2)
let division = (num1, num2) => (num1/num2)

function calculadora (num1, num2, operacion){
    return operacion(num1, num2)
} */
//##############//

function agregarHttp(url) {
    return "http://"+url;
}

function procesar(array,funcion){
    for (i=0; i<array.length; i++){
        console.log(funcion(array[i]))
    }
    return funcion(array)
}
