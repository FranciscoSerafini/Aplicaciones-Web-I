const carrera = {
    nombre: "Analista de sistemas",
    duracion:3,
    semestres: [
        {
            semestre:1,
            materias:[
                {nombre:"Programacion Logica 1", promocionable:true},
                {nombre:"Laboratorio de programacion1", promocionable:true},
                {nombre:"Ingles 1",promocionable:true},
                {nombre:"Algebra 1",promocionable:true},
                {nombre:"Hardware",promocionable:true}

            ],
        },
        {
            semestre:2,
            materias:[
                {nombre: "Programacion Logica 2", promocionable:true},
                {nombre: "Laboratorio de Programacion 2", promocionable:true},
                {nombre: "Ingles 2", promocionable:true},
                {nombre: "Matematica Discreta", promocionable:true},
                {nombre: "Expresion Oral y Escrita", promocionable:true},
            ],

        },
        {
            semestre:3,
            materias:[
                {nombre:"Laboratorio de Programacion 3", promocionable: true},
                {nombre:"Principios de Administracion", promocionable: true},
                {nombre:"Sistemas Operativos", promocionable: true},
                {nombre:"Estructura de Datos", promocionable: true},
            ],
        },
        {
            semestre:4,
            materias:[
                {nombre:"Redes y Comunicaciones", promocionable: true},
                {nombre:"Probabilidad y Estadistica", promocionable: true},
                {nombre:"Aplicaciones Web 1", promocionable: false},
                {nombre:"Etica y Deontologia ", promocionable: true},
                {nombre:"Bases de Datos 1", promocionable: true},
            ],
        },
        {
            semestre:5,
            materias:[
                {nombre: "Analisis de Sistemas", promocionable: true},
                {nombre: "Aplicaciones Web II", promocionable: false},
                {nombre: "Bases de Datos II", promocionable: true},
                {nombre: "Seminario I", promocionable: false}, 
            ],
        },
        {
            semestre:6,
            materias:[
                {nombre: "Ingenieria de Software", promocionable: true},
                {nombre: "Mercadotecnia", promocionable: false},
                {nombre: "Interfaz Gráfica", promocionable: true},
                {nombre: "Seminario II", promocionable: false},
            ],
        },
    ]
}
function materiasPromocion(carrera) {
    const materiasPromocionar = [];
  
    // Recorremos los semestres
    carrera.semestres.forEach((semestre) => {
      // Recorremos las materias de cada semestre
      semestre.materias.forEach((materia) => {
        if (materia.promocionable) {
          materiasPromocionar.push(materia.nombre);
        }
      });
    });
}
return materiasPromocion;

const materiasPromocionar = materiasPromocion(carrera);

console.log("Materias promocionables:")
materiasPromocionar.forEach((materia) => {
    console.log(materia);
});
