// 1. Declara una variable nombre y asígnale tu nombre. Muestra su valor en consola.

let nombre = 'Maycol Calero';
console.log(nombre);

// 2. Declara dos variables edad y ciudad y muéstralas juntas en un solo console.log.

let edad = 19;
let cuidad = "juigalpa";
console.log( 'edad: ${edad}, cuidad: ${ciudad}');

// 3. Declara una constante PI con el valor 3.1416 y muéstrala en consola.

const PI = 3.1416;
console.log ("valor de PI: " + PI);

// 4. Declara tres variables con valores numéricos y calcula su promedio.

let a = 50;
let b = 70;
let c = 90;
let promedio = (a + b +c) /3;
console.log(promedio);

// 5. Declara una variable esMayorDeEdad con un valor booleano y muéstrala.

let  esMayorDeEdad = true;
console.log("¿Es mayor de edad?" + esMayorDeEdad);

// 6. Declara dos números y muestra su suma.

let n1 = 15;
let n2 = 20;
let suma = n1 + n2;
console.log(suma);

// 7. Declara dos números y muestra su resta, multiplicación y división.

let num1 = 100;
let num2 = 20;

let resta = num1 - num2;
let multiplicación = num1 * num2;
let división = num1 / num2;

console.log("Resta: " + resta, "Multiplicación: " + multiplicación, "Divicion: " + división);

// 15.Crea una función esPar que reciba un número y retorne true si es par, false si no lo es.

function esPar(numero){
    return numero % 2 === 0;
}

// 19.Crea una función flecha mayorDeDos que reciba dos números y retorne el mayor.

let mayorDeDos = (num1, num2) =>{
    return num1 > num2 ? num1 : num2;
}

console.log(mayorDeDos(10, 20));