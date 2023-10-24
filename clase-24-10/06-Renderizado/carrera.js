const carrera = {
    nombre: "Analistas de sistemas",
    duracion: 3,
    semestres: [
        {
            semestre: 1,
            nombre: "Primer semestre",
            materias: [
                { nombre: "Programación Lógica I", promocionable: true },
                {
                    nombre: "Laboratorio de Programación I",
                    promocionable: false,
                },
                { nombre: "Inglés I", promocionable: false },
                { nombre: "Álgebra", promocionable: false },
                { nombre: "Hardware", promocionable: false },
            ],
        },
        {
            semestre: 2,
            nombre: "Segundo semestre",
            materias: [
                { nombre: "Programación Lógica II", promocionable: false },
                {
                    nombre: "Laboratorio de Programación II",
                    promocionable: false,
                },
                { nombre: "Inglés II", promocionable: false },
                { nombre: "Matemática Discreta", promocionable: false },
                { nombre: "Expresión Oral y Escrita", promocionable: false },
            ],
        },
        {
            semestre: 3,
            nombre: "Tercer semestre",
            materias: [
                {
                    nombre: "Laboratorio de Programación III",
                    promocionable: false,
                },
                {
                    nombre: "Principios de Administración",
                    promocionable: false,
                },
                { nombre: "Sistemas Operativos", promocionable: false },
                { nombre: "Estructura de Datos", promocionable: false },
            ],
        },
        {
            semestre: 4,
            nombre: "Cuarto semestre",
            materias: [
                { nombre: "Redes y Comunicaciones", promocionable: false },
                { nombre: "Probabilidad y Estadística", promocionable: false },
                { nombre: "Aplicaciones Web I", promocionable: true },
                { nombre: "Ética y Deontología", promocionable: false },
                { nombre: "Bases de Datos I", promocionable: false },
            ],
        },
        {
            semestre: 5,
            nombre: "Quinto semestre",
            materias: [
                { nombre: "Análisis de Sistemas", promocionable: false },
                { nombre: "Aplicaciones Web II", promocionable: true },
                { nombre: "Bases de Datos II", promocionable: false },
                { nombre: "Seminario I", promocionable: true },
            ],
        },
        {
            semestre: 6,
            nombre: "Sexto semestre",
            materias: [
                { nombre: "Ingeniería de Software", promocionable: false },
                { nombre: "Mercadotecnia", promocionable: false },
                { nombre: "Interfaz Gráfica", promocionable: false },
                { nombre: "Seminario II", promocionable: true },
            ],
        },
    ],
};

// Identificamos el contenedor
const app = document.getElementById("app");
//console.log(app)

let render = `<h2>${carrera.nombre}</h2>`

//app.innerHTML = `Aguante river`
//app.innerHTML = `<h2>${carrera.nombre}</h2>`

carrera.semestres.forEach(
    (semestre)=>{
       // console.log(semestre)
       render += `<h3>${semestre.nombre}</h3>`
    
       let materias = "";
       semestre.materias.forEach((materia) =>{
        materias += `<li>${materia.nombre}</li>` 

       })
       render = `<ul>${materias}</ul>`
    }
);
app.innerHtml = render

