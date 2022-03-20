// Importamos el módulo con las funcionalidades de la aplicación
const funcionesDeTareas = require("./funcionesDeTareas");

// Listado de estados existentes
const estadosExistentes = ["en progreso", "pendiente", "terminada"];

/**
 * @desc Switch que recibe el 3er parámetro enviado desde la consola
 */
switch (process.argv[2]) {
  case "listar":
    // Obtenemos el listado de tareas almacenadas en el archivo json
    let listadoTareas = funcionesDeTareas.listarTareas();

    console.log("Listado de tareas");
    console.log("-----------------");

    // Iteramos el listado de tareas para mostrarlas una por una
    listadoTareas.forEach((tarea, i) => {
      console.log(`Tarea ${i + 1}: ${tarea.titulo} - ${tarea.estado}`);
    });

    console.log("-----------------");
    break;

  case undefined:
    console.log("Atención - Tienes que pasar una acción.");
    break;

  case "crear":
    // Obtenemos el titulo de la tarea
    let titulo = process.argv[3];

    // Creamos la nueva tarea enviando solo el título
    funcionesDeTareas.crearTarea(titulo);
    break;

  case "filtrar":
    // Obtenemos el estado de la tarea
    let estado = process.argv[3];

    // Evaluamos si el estado recibido existe en nuestro listado de estados
    if (estadosExistentes.includes(estado)) {
      // Obtenemos el listado de tareas almacenadas en el archivo json
      let tareasFiltradas = funcionesDeTareas.filtrarPorEstado(estado);

      // Evaluamos si se encontró alguna tarea con el estado solicitado
      if (tareasFiltradas.length > 0) {
        // Mostramos el listado de las tareas
        console.log(`Tareas ${estado}`);
        console.log("-----------------");
        tareasFiltradas.forEach((tarea, i) => {
          console.log(`${i + 1}. ${tarea.titulo}`);
        });
        console.log("-----------------");
      } else {
        // Si no se encontraron tareas damos aviso
        console.log("No se encontraron tareas " + estado);
      }
    } else {
      // Si el estado ingresado no existe en nuestro listado damos aviso
      console.log("El estado ingresado es incorrecto");
    }
    break;

  case "editar":
    // Recibir el nuevo estado y el numero de tarea
    // Leer el archivo con las tareas existentes
    // Encontrar (map) la tarea correspondiente y modificarle el estado
    // Stringificar el array devuelto por el map
    // Reescribir el archivo json
    // Cualquier cosa, escribir al discord
    break;

  default:
    console.log("No entiendo que queres hacer...");
}
