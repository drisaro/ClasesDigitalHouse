//Sumatorias

//Suponiendo un caso en el que queremos calcular el dinero 
//del último semestre, podemos hacer algo así:

var gananciasUltimoSemestre = [50, -12, 1000, 300, 200, 0];

function sumatoriaGananciasSemestre(unSemestre) {
    return unSemestre[0] + unSemestre[1] +
        unSemestre[2] + unSemestre[3] +
        unSemestre[4] + unSemestre[5];
}

//Pero lo podemos simplificar con un ciclo

function gananciaTotal(unPeriodo) {
    let sumatoria = 0;
    for (let i = 0; i < unPeriodo.length; i++) {
        let mes = unPeriodo[i];
        sumatoria = sumatoria + mes;
    }
    return sumatoria;
}

console.log(gananciaTotal([]));
console.log(gananciaTotal([100]));
console.log(gananciaTotal([100,2]));
console.log(gananciaTotal([2,10,-20]));
console.log(gananciaTotal([2,10,-20,0,0,10,10]));

//Si quisieramos anotar únicamente las ganancias
//sin contar las pérdidas de dinero

function cantidadDeMesesConGanancia(unPeriodo) {
  let cantidad = 0;
  for (let i = 0; i < unPeriodo.length;i++) {
    if (unPeriodo[i] > 0){
      cantidad = cantidad +1
    }
  }
  return cantidad;
}

//O podemos contar únicamente los meses en los que hubo pérdidas

function cantidadDeMesesConPerdida(unPeriodo) {
  let cantidad = 0;
  for (let i = 0; i < unPeriodo.length;i++) {
    if (unPeriodo[i] < 0){
      cantidad = cantidad +1
    }
  }
  return cantidad;
}

factorial(5)
function factorial (factor) {    	// Necesitamos un acumulador porque vamos a multiplicar un monton de números
    let producto = 1;
        for (let numero = factor; numero > 1; numero--) {
        producto = producto * numero;
    }
    					// Después del for retornamos el acumulador
    return producto;
}

//Este ejemplo utiliza un árbol mágico que crece de manera particular
//Si N = 0, su altura será 1 metro (no creció nada)
// Si N = 1, su altura será de 2 metros (duplicó su altura en primavera)
// Si N = 2, su altura será de 3 metros (creció un metro más en verano)
// Si N = 3, su altura será de 6 metros (duplicó su altura en la siguiente primavera)
// Etc.

function alturaArbolUtopico (ciclosN){
    let alturaAcumulada = 1
    for (let i = 1; i<=ciclosN; i++){
        if(i%2!=0){
            alturaAcumulada = alturaAcumulada*2
        }else if (i%2===0){
            alturaAcumulada = alturaAcumulada + 1
        }else
            alturaAcumulada
    }return alturaAcumulada
}

//Vamos a crear una función que nos permita contar la cantidad
//de números positivos, negativos y ceros que tenemos en un array.

function masMenos (arrayNum){
    let arraySecundario = []
    let positivos = 0;
    let zeros = 0;
    let negativos = 0;
    for (let i = 0; i < arrayNum.length ; i++){
        if (arrayNum[i] > 0){
            positivos ++
        } else if (arrayNum[i] === 0){
            zeros ++
        } else {
            negativos ++
        }
    }
   return arraySecundario = [(positivos/arrayNum.length),(zeros/arrayNum.length),(negativos/arrayNum.length)]
}

console.log(masMenos([1,2,4]))


