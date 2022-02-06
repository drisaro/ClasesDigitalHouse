//Un array nos permite almacenar múltiples elementos dentro de una única variable.
//Los arrays se identifican por el uso de []

let seriesFavoritasDeAna = ["Game of Thrones", "Breaking Bad", "House of Cards"]; 
let seriesFavoritasDeHector = ["En Terapia", "Recordando el show de Alejandro Molina"];

//Al llamar a la variabla con un console.log, nos devuelve todo el array

console.log(seriesFavoritasDeAna);
console.log(seriesFavoritasDeHector);

//Si queremos traer un único elemento del array, podemos hacerlo indicando
//el índice del elemento que deseamos traer.
//Los arrays empiezan siempre en cero, por lo que si queremos traer la serie
//Breaking Bad, debermos llamar al índice [1]

console.log(seriesFavoritasDeAna[1]);
