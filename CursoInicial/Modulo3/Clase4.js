//Operando con más condicionales

if ( diaSoleado == true ){
    console.log('Vamos a la plaza');
}

if ( diaSoleado == true ){
    console.log('Vamos Salgamos a la plaza');
} else {
    console.log('Nos quedamos adentro');
} 

function usamosLaOlla (diaDeLaSemana){
    if (diaDeLaSemana == "Domingo"){
        return("Hoy se comen pastas, sacá la olla")
    } else {
        return ("Hoy no, comamos milanesas")
    }
}

function elMayor (numero1, numero2) {
    if (numero1<numero2){
        return numero2
    } else {
        return numero1
    }
}

function signo (numero){
    if (numero > 0) {
        return 1
    } else if (numero < 0){
        return -1
    } else {
        return 0
    }
}

function EstaAbiertoElBanco (diaDeLaSemana, horaActual){
    return (diaDeLaSemana !== "Sábado" && diaDeLaSemana !== "Domingo" ) && 
    (horaActual>=10 && horaActual < 15) 
}

function esHipster (profesion, tomaCafe, librosLeidos){
    return tomaCafe == true && profesion == "Músico" && librosLeidos > 2
}

console.log(esHipster("Futbolista", true, 4 ))
console.log(esHipster("Ceramista", false, 2 ))
console.log(esHipster("Programador", true, 4 ))

function pagoConTarjeta(seCobraInteres, cuotasTarjeta, efectivoDisponible) {
   return !seCobraInteres  && cuotasTarjeta >=3  || efectivoDisponible < 100;
}

pagoConTarjeta(true, 6,320);
pagoConTarjeta(true, 8,80);
pagoConTarjeta(true, 2,215);
pagoConTarjeta(true, 1,32);

function puedeJubilarse (edad, genero, aniosAporte){
    return (edad>60 && genero=="F" && aniosAporte >30) || (edad>65 && genero=="M" && aniosAporte >30)
}

function puedeSubirse (alturaPersona, vieneConCompania, tieneAfeccionCardiaca){
    return (alturaPersona >= 1.5 && tieneAfeccionCardiaca == false) || (alturaPersona >=1.2 && vieneConCompania == true && tieneAfeccionCardiaca == false)
}

function medallaSegunPuesto (num) {
    if (num == 1) {return "Oro"
    }else if(num == 2) {return "Plata"
    }else if(num == 3) {return "Bronce"
    }else {return "Seguí participando"};
}
