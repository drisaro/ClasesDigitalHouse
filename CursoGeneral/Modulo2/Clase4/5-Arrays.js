/*Un array permite:
/ - Generar una lista de datos ordenados
/ - Almacenar distintos tipos de datos
*/

/*Creamos el array alumnos. Queremos saber 
/dónde están guardados los nombres "Juan" 
/y "Francisco". Utilicemos un método de 
/array para averiguarlo.
/Para eso, declaremos las variables indiceJuan e 
/indiceFrancisco y almacenemos en ellas el índice 
/correspondiente de cada uno.
*/
let alumnos = ["Juan", "Pepe", "Jorge", "Francisco"];
let indiceJuan = alumnos.indexOf("Juan");
let indiceFrancisco = alumnos.indexOf("Francisco");

//Join - Podemos unir un array, usando un separador
let arrayFrase = ["No","he","fracasado,","simplemente",
    "me","he","topado","con","diez","mil","soluciones",
    "equivocadas"
  ];
  
  let fraseNueva = arrayFrase.join(' ');
  
  console.log(fraseNueva)

//Pop - Permite extrar el último objeto del array
let estudiantes = [
    {
      nombre: "Alvaro",
      promedio: 9,
      curso: "Android"
    },
    {
      nombre: "Daniel",
      promedio: 6,
      curso: "Full Stack"
    },
    {
      nombre: "Alexis",
      promedio: 3,
      curso: "iOS"
    }
  ];
  
let alumnoEgresado = estudiantes.pop();

//Push - Permite agregar elementos a un array
let estudiantes = [
    {
      nombre: 'Alvaro',
      promedio : 9,
      curso : 'Android',
    },
    {
      nombre: 'Daniel',
      promedio : 6,
      curso : 'Full Stack',
    },
    {
      nombre: 'Alexis',
      promedio : 3,
      curso : 'iOS',
    },
  ]
  
  estudiantes.push({
      nombre: 'Juan',
      promedio : 5,
      curso : 'iOS',
    },);
  
  estudiantes.push({
      nombre: 'Miguel',
      promedio : 2,
      curso : 'Android',
    },);

//Shift - Elimina el primer elemento de un array.
let estudiantes = [
    {
       nombre: 'Alvaro',
       promedio : 9,
       curso : 'Android',
     },
      {
        nombre: 'Daniel',
        promedio : 6,
        curso : 'Full Stack',
      },
      {
        nombre: 'Alexis',
        promedio : 3,
        curso : 'iOS',
      },
    ]
let alumnoDeBaja = estudiantes.shift();

//Unshift - Agrega uno o varios elementos al principio de un array.
let estudiantes = [
    {
      nombre: 'Alvaro',
      promedio : 9,
      curso : 'Android',
    },
    {
      nombre: 'Daniel',
      promedio : 6,
      curso : 'Full Stack',
    },
    {
      nombre: 'Alexis',
      promedio : 3,
      curso : 'iOS',
    }
  ]
  estudiantes.unshift(
    {
      nombre: 'Mariana',
      promedio: 9,
      curso: 'Full Stack'
    },
  );
  estudiantes.unshift(
    {
      nombre: 'Francisco',
      promedio: 2,
      curso: 'Android'
    },
  );

