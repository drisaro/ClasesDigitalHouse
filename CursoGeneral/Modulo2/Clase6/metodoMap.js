let horariosPartida = [12, 14, 18, 21];

let nuevoArray = horariosPartida.map(function(horario){
    return horario - 1;
})

console.log(nuevoArray)