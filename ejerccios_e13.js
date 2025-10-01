const personas = [
  { id: 1, nombre: "Ana", edad: 17 },
  { id: 2, nombre: "Luis", edad: 22 },
  { id: 3, nombre: "Marta", edad: 30 },
  { id: 4, nombre: "Pedro", edad: 15 },
  { id: 5, nombre: "Sofía", edad: 25 },
  { id: 6, nombre: "Diego", edad: 40 },
  { id: 7, nombre: "Carla", edad: 19 },
  { id: 8, nombre: "Jorge", edad: 33 },
  { id: 9, nombre: "Lucía", edad: 28 },
  { id: 10, nombre: "Raúl", edad: 16 },
  { id: 11, nombre: "Elena", edad: 21 },
  { id: 12, nombre: "Andrés", edad: 35 }
];

const numeros = [1, 2, 3, 4, 5];

const suma = numeros.reduce((acc, num) => acc + num, 0);

console.log(suma); // 15

const promedio = [80, 90, 70, 85, 95]
  .reduce((acc, score, _, arr) => acc + score / arr.length, 0);

console.log(promedio); // 84

const productos = [
{ nombre: "Camisa", precio: 20 },
{ nombre: "Pantalón", precio: 30 },
{ nombre: "Zapatos", precio: 50 }
];
const total = productos.reduce((acc, prod) => acc + prod.precio, 0);
console.log(total); // 100

const edad = [25, 35, 51, 10, 8, 13];
const menorde10 = edades.find(edad => edad < 10);
console.log(menorde10); // 8

const usuarios = [
{ id: 1, nombre: "Carlos", salario: 20000 },
{ id: 2, nombre: "Lucía", salario: 17300 },
{ id: 3, nombre: "Marta", salario: 11000 },
{ id: 4, nombre: "eliab", salario: 18000 }
];



// Encontrar el primer usuario con salario mayor a 15000 y que comience con "E"
const salarios = usuarios.find(u => u.salario > 15000 && u.nombre.startsWith("E"));
console.log(salarios); // { id: 4, nombre: "eliab", salario: 18000 }

// Encontrar el usuario con id igual a 2
const usuario = usuarios.find(u => u.id === 2);
console.log(usuario); // { id: 2, nombre: "Lucía", salario: 17300 }

// mayor a 18
const edades = [18, 22, 30, 25];
const todosMayores = edades.every(edad => edad >= 18);
console.log(todosMayores); // true

//tareas completadas
const tareas = [
{ nombre: "Estudiar", completada: true },
{ nombre: "Ejercicio", completada: true },
{ nombre: "Leer", completada: false }
];
const todasCompletas = tareas.every(t => t.completada === true);
console.log(todasCompletas); // false

// hay reprobados
const notas = [5, 8, 9, 3];
const hayReprobados = notas.some(nota => nota < 6);
console.log(hayReprobados); // true

// hay productos agotados
const inventario = [
{ producto: "Manzanas", cantidad: 0 },
{ producto: "Naranjas", cantidad: 10 },
{ producto: "Peras", cantidad: 3 }
];
const agotado = inventario.some(item => item.cantidad === 0);
console.log(agotado); // true


// numeros mayores a 15
const numeros1 = [5, 10, 15, 20, 25];
const mayoresQue15 = numeros1.filter(num => num > 15);
console.log(mayoresQue15); // [20, 25]

const empleados = [
{ nombre: "Ana", puesto: "Desarrolladora" },
{ nombre: "Luis", puesto: "Diseñador" },
{ nombre: "Marta", puesto: "Desarrolladora" }
];
const desarrolladores = empleados.filter(e => e.puesto === "Desarrolladora");
console.log(desarrolladores);
// [
// { nombre: "Ana", puesto: "Desarrolladora" },
// { nombre: "Marta", puesto: "Desarrolladora" }
// ]