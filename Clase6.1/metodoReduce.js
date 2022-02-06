let vueltas = [5, 8, 12, 3, 22]

let totalVueltas = vueltas.reduce(function (acum, vuelta){
    return acum+vuelta;
})

console.log(totalVueltas)