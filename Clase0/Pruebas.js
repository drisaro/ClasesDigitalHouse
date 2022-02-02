 function asientosDisponibles(listaAsientos, asientoUsuario){
    let encontroAsiento
    let noEncontro
    for (i=0;i<listaAsientos.length;i++){
        if (asientoUsuario == listaAsientos[i]){
            encontroAsiento = true
        } 
    }
    if (encontroAsiento == true) {
        return ("Felicitaciones, el asiento número " + asientoUsuario + " está disponible")
    } else {
        return ("Lo sentimos, el asiento número " + asientoUsuario + " está ocupado, pero aún quedan " + listaAsientos.length + " asientos disponibles")
    }
}
console.log(asientosDisponibles([3,15,18,25], 79)) 














/* let cantidadDePasajeros = 0 
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
console.log(reporteDePasajeros(0))
console.log(reporteDePasajeros(1))
console.log(reporteDePasajeros(2))
console.log(reporteDePasajeros(3))
console.log(reporteDePasajeros(4))
console.log(reporteDePasajeros(5))
console.log(reporteDePasajeros(6))
 */
