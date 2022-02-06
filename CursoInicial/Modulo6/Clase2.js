//Escribir la función asientosDisponibles(), que tome 
// como parámetro un conjunto de asientos disponibles
// y el asiento que quiere ocupar la persona. 
// Nuestra función deberá verificar si el asiento 
// solicitado se encuentra disponible y devolverle 
// un mensaje claro y prolijo al cliente

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

//Este ejemplo en particular funciona, PERO se puede mejorar muchísimo


