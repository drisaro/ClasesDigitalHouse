//Filter con números

let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]

let aprobados = estudiantes.filter(function(estudiante){
    return estudiante.aprobado; //Con el método Filter SOLO se guardan los booleandos TRUE, por lo que no es necesario hacer comparación/resultado
});

let desaprobados = estudiantes.filter(function(estudiante){
    return !estudiante.aprobado; //Al igual que arriba, solo se guardan los TRUE, entonces vamos por la negación. (!)
});

/* Con una Arrow Function se puede hacer 
/ let aprobados = estudiantes.filter(estudiante => estudiante.aprobado);
/ let desaprobados = estudiantes.filter(estudiante => !estudiante.aprobado);
*/ 