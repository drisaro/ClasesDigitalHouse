//Escribir la función reporteDePasajeros(), la cual cuando 
// reciba la cantidad de estaciones que avanzó el tren nos
// devuelva un reporte de la cantidad de cada una de las 
// estaciones y la cantidad de pasajeros que lleva el tren. 
// La empresa nos provee los siguientes datos:

//    El tren sale de la estación terminal siempre con 200 pasajeros.
//    En cada estación el tren sube 50 pasajeros y se bajan 30.
//    En la estación Florida (la estación número 5), 
//    como es una estación central es la única donde bajan 80 personas y suben 120.

function reporteDePasajeros(estacionesRecorridas){
    let estacionNumero = [];
    for (i=0;i<=estacionesRecorridas;i++){
        if (i === 0) {
            cantidadDePasajeros = 200
            estacionNumero[0] = cantidadDePasajeros;
        }else if (i === 4){
            cantidadDePasajeros = cantidadDePasajeros + 40
            estacionNumero.push = cantidadDePasajeros;
        } else {
            cantidadDePasajeros = cantidadDePasajeros + 20
            estacionNumero.push = cantidadDePasajeros;
        }
    }
    return "En la estación " + estacionesRecorridas + " hay " + cantidadDePasajeros + " pasajeros arriba del tren"   
}
