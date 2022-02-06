//Operando con strings.
//Vamos a ver ALGUNAS de las propiedades de los strings.

//Propiedad length. Devuelve, en valor numérico, la cantidad de caracteres en un string.
"biblioteca".length; 		// devuelve 10.
"Buenos días".length;      	// devuelve 11, porque el espacio es un caracter también.

//Concatenación
"aa" + "bb"       // devuelve "aabb"
"aa" + " " + "bb" // devuelve "aa bb"

function longitudNombreCompleto (nombre, apellido) {
    return nombre.length + apellido.length + " ".length;
}
console.log(longitudNombreCompleto("Charo", "Dominguez")); //Devuelve la cantidad de caracteres de 'Charo Dominguez' contando el espacio en el medio.

function escribirCartelito(titulo, nombre, apellido){
    return(titulo + " " + nombre + " "+ apellido)
}
console.log(escribirCartelito("Lic.", "Federico", "Arboleas"));


