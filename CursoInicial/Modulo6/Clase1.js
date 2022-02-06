//Escribí la función sumatoriaBajoImporte la cual recibiendo 
// un array con importes nos devuelva el resultado final de la 
// suma de los importes de todos los meses que tienen ganancia, 
// a excepción de los que superen un importe de $ 1.000

function sumatoriaBajoImporte(arrayImportes){
    let sumaBajoImporte = 0;
    for (i=0;i<=arrayImportes.length;i++){
        if (arrayImportes[i] > 0 && arrayImportes[i] <= 1000){
            sumaBajoImporte = sumaBajoImporte + arrayImportes[i]
        }
    }
    return sumaBajoImporte;
}
