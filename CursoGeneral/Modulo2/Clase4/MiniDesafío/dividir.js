function dividir(numA, numB){
    if (numB === 0){
    return "No se puede dividir por 0"
    } else {
        return numA/numB
    }
}
module.exports = dividir;