function noParesDeContarImparesHasta(x){
    let totalImpares = 0;
    for (i = 0; i <= x; i++){
        if (i%2 != 0){
            totalImpares = totalImpares + 1;
        }
    }
    return totalImpares;
}
 
console.log(noParesDeContarImparesHasta(5))