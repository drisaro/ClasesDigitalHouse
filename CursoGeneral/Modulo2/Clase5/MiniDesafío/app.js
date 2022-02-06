const listado = require("./funcionesDeTareas");

switch(process.argv[2]){
    case "listar": console.log(listado());
        break;
    case undefined: console.log("Atención - Tienes que pasar una acción.")
        break;
    default: console.log("No entiendo qué querés hacer")
}