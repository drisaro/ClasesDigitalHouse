const fs = require("fs");

/**
 * @desc Guarda listado de tareas en el archivo JSON
 * @param { Object[] } tareas
 */
function guardarTareas(tareas) {
  // Stringifico las tareas
  let tareasStringify = JSON.stringify(tareas, null, 2);

  // Guardo las tareas en el archivo
  fs.writeFileSync("./tareas.json", tareasStringify);
}

/**
 * @desc Listado de funcionalidades para las tareas
 */
let funcionesDeTareas = {
  // Función de listar tareas
  listarTareas: function () {
    // Lee archivo json y retorna lo leido ya parseado
    return JSON.parse(fs.readFileSync("./tareas.json", "utf-8"));
  },

  // Función de crear tarea
  crearTarea: function (titulo) {
    // leemos el archivo de tareas
    let listadoTareas = funcionesDeTareas.listarTareas();

    // Creo el objeto con la nueva tarea
    let tarea = {
      titulo: titulo,
      estado: "en progreso",
    };

    // Agrego la nueva tarea al listado existente
    listadoTareas.push(tarea);

    // guardar las tareas actualizadas en el archivo
    guardarTareas(listadoTareas);
  },

  // Función de filtrar tareas por estado
  filtrarPorEstado: function (estado) {
    // leemos el archivo de tareas
    let listadoTareas = funcionesDeTareas.listarTareas();

    // Filtramos las tareas por estado y guardamos el resultado
    let tareasFiltradas = listadoTareas.filter(function (tarea) {
      return tarea.estado === estado;
    });

    return tareasFiltradas;
  },
};

module.exports = funcionesDeTareas;
