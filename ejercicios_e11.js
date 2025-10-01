//arreglo de numeros
let numeros = [5, 2, 9, 1, 7];

//orden ascendente
numeros.sort((a, b) => a - b);
console.log(numeros);

//orden descendente
numeros.sort((a, b) => b - a);
console.log(numeros);

//arreglos de cadena
let frutas =["Banana", "Manzana", "Naranja", "Uva"];
frutas.sort();
console.log(frutas);

//orden alfabetico inverso
let frutas2 =["Banana", "Manzana", "Naranja", "Uva"];
frutas2.sort((a, b) => b.localeCompare(a));
console.log(frutas2);

//ordenar edad (asendente)
let persona = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Ana", edad: 30 },
    { nombre: "Pedro", edad: 20 }
];

persona.sort((a, b) => a.edad - b.nombre);
console.log(persona);

/*
let persona = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Ana", edad: 30 },
    { nombre: "Pedro", edad: 20 }
];
*/

//ordenar por nombre(alfabetico)
persona.sort((a, b) => a.nombre. localeCompare(b.edad))
console.log(persona);

/*
let persona = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Ana", edad: 30 },
    { nombre: "Pedro", edad: 20 }
];
*/

let numeros2 = [1, 2, 3, 4, 5];
numeros2.reverse();
console.log(numeros2);

let palabras = ["hola", "mundo", "javascript"];
palabras.reverse();
console.log(palabras);

//arreglos con objetos con los datos de calificaciones
let calificaciones = [
    {estudiante: "Eliab",asignatura: "Matematica", Calificacio: 60},
    {estudiante: "Xiomara",asignatura: "Historia", Calificacio: 100},
    {estudiante: "Camilo", asignatura: "Español", Calificacio: 80},
    {estudiante: "Ramiro",asignatura: "Fisica", Calificacio: 55},
    {estudiante: "Ana",asignatura: "Quimica", Calificacio: 77},
];

//ordenar por calificacion (ascendente)
calificaciones.sort((a, b) => a.Calificacio - b.Calificacio);
console.log(calificaciones);

//ordenar por calificacion (descendente)
calificaciones.sort((a, b) => b.Calificacio - a.Calificacio);
console.log(calificaciones);

//Dado un arreglo de números [10, 3, 8, 1, 6], ordénalo en orden ascendente utilizando el método sort().
let numeros3 = [10, 3, 8, 1, 6];
numeros3.sort((a, b) => a - b);
console.log(numeros3);

//Dado un arreglo de cadenas ["perro", "gato", "elefante", "ardilla"], ordénalo alfabéticamente sin modificar el arreglo original.
let animales = ["perro", "gato", "elefante", "ardilla"];
let animalesOrdenados = [...animales].sort();
console.log(animalesOrdenados);
console.log(animales); //["ardilla", "elefante", "gato", "perro"]

//Dado un arreglo de objetos [{ nombre: "Luis", puntaje: 85 }, { nombre: "Marta", puntaje: 92 }, { nombre: "Sofía", puntaje: 78 }], ordénalo por puntaje en orden descendente.
let estudiantes = [
    { nombre: "Luis", puntaje: 85 },
    { nombre: "Marta", puntaje: 92 },
    { nombre: "Sofía", puntaje: 78 }
];
estudiantes.sort((a, b) => b.puntaje - a.puntaje);
console.log(estudiantes);
   /* [
        { nombre: "Marta", puntaje: 92 },
        { nombre: "Luis", puntaje: 85 },
        { nombre: "Sofía", puntaje: 78 }
    ]*/

//Dado un arreglo de números [4, 9, 2, 7, 5], inviértelo utilizando el método reverse().
let numeros4 = [4, 9, 2, 7, 5];
numeros4.reverse();
console.log(numeros4); //[5, 7, 2, 9, 4]

/* Dado un arreglo de objetos [{ producto: "Laptop", precio: 1200 }, { producto:
"Teléfono", precio: 800 }, { producto: "Tableta", precio: 600 }], ordénalo por
precio en orden ascendente sin modificar el arreglo original.*/
let productos = [
    { producto: "Laptop", precio: 1200 },
    { producto: "Teléfono", precio: 800 },
    { producto: "Tableta", precio: 600 }
];
let productosOrdenados = [...productos].sort((a, b) => a.precio - b.precio);
console.log(productosOrdenados);
console.log(productos);

/*[
    { producto: "Tableta", precio: 600 },
    { producto: "Teléfono", precio: 800 },
    { producto: "Laptop", precio: 1200 }
]*/

//Dado un arreglo de cadenas ["manzana", "banana", "kiwi", "fresa"], invierte su orden y luego ordénalo alfabéticamente.
let frutas3 = ["manzana", "banana", "kiwi", "fresa"];
frutas3.reverse();
console.log(frutas3); 
frutas3.sort();
console.log(frutas3);

//["fresa", "kiwi", "manzana", "banana"]
//["banana", "fresa", "kiwi", "manzana"]