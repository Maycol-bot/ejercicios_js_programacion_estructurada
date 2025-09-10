
// Función flecha sin abreviar que recibe un arreglo y uno o más elementos, los añade al final y devuelve el nuevo arreglo
const agregarElementos = (arr, ...elementos) => {
	let nuevoArreglo = [];
	for (let i = 0; i < arr.length; i++) {
		nuevoArreglo.push(arr[i]);
	}
	for (let j = 0; j < elementos.length; j++) {
		nuevoArreglo.push(elementos[j]);
	}
	return nuevoArreglo;
};
 
// Crear una función flecha que reciba un arreglo y uno o más elementos, los añada al inicio del arreglo y devuelva el nuevo arreglo.
const agregarElementosAlInicio = (arr, ...elementos) => {
	let nuevoArreglo = [];
	for (let i = 0; i < elementos.length; i++) {
		nuevoArreglo.push(elementos[i]);
	}
	for (let j = 0; j < arr.length; j++) {
		nuevoArreglo.push(arr[j]);
	}
	return nuevoArreglo;
};

// Crear una función flecha que reciba un arreglo, elimine y devuelva el último elemento del arreglo.
const eliminarUltimoElemento = (arr) => {
	if (arr.length === 0) return undefined;
	return arr.pop();
};

// Crear una función flecha que reciba un arreglo, elimine y devuelva el primer elemento del arreglo.
const eliminarPrimerElemento = (arr) => {
	if (arr.length === 0) return undefined;
	return arr.shift();
};

// Crear una función flecha que reciba un arreglo, un elemento y opcionalmente índice de inicio, y devuelva el índice de la primera aparición del elemento si no lo encuentra.
const encontrarIndice = (arr, elemento, indiceInicio = 0) => {
	for (let i = indiceInicio; i < arr.length; i++) {
		if (arr[i] === elemento) {	
			return i;
		}
	}
	return -1;
};

// Crear una función flecha que reciba un arreglo y devuelva la cantidad de elementos en el arreglo.
const contarElementos = (arr) => {
	return arr.length;
};

// Crear una función flecha que reciba un arreglo de números y los ordene en orden ascendente usando una función comparadora.
const ordenarArreglo = (arr) => {
	return arr.sort((a, b) => a - b);
};

// Crear una función flecha que reciba un arreglo y un separador, y devuelva una cadena con los elementos del arreglo unidos por el separador.
const unirElementos = (arr, separador) => {
	return arr.join(separador);
};

// Crear una función flecha que reciba uno o más arreglos y/o elementos, y devuelva un nuevo arreglo con todos los elementos combinados.
const combinarElementos = (...elementos) => {
	let nuevoArreglo = [];
	for (let i = 0; i < elementos.length; i++) {
		if (Array.isArray(elementos[i])) {
			nuevoArreglo = nuevoArreglo.concat(elementos[i]);
		} else {
			nuevoArreglo.push(elementos[i]);
		}
	}
	return nuevoArreglo;
};

// Crear una función flecha que reciba un arreglo y una función callback, y ejecute la función por cada elemento del arreglo sin devolver un nuevo arreglo.
const forEachElemento = (arr, callback) => {
	for (let i = 0; i < arr.length; i++) {
		callback(arr[i]);
	}
};

// Crear una función flecha que reciba un arreglo y una función callback, y devuelva un nuevo arreglo con los resultados de aplicar la función a cada elemento.
const mapearElementos = (arr, callback) => {
	let nuevoArreglo = []; 
	for (let i = 0; i < arr.length; i++) {
		nuevoArreglo.push(callback(arr[i]));
	}	
	return nuevoArreglo;
};

// Crear una función flecha que reciba un arreglo y una función callback, y devuelva un nuevo arreglo con los elementos que cumplen la condición definida por la función.
const filtrarElementos = (arr, callback) => {
	let nuevoArreglo = [];
	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i])) {
			nuevoArreglo.push(arr[i]);
		}
	}
	return nuevoArreglo;
};

// Crear una función flecha que reciba un arreglo, una función callback y opcionalmente un valor inicial, y reduzca el arreglo a un solo valor aplicando la función acumuladora.
const reducirElementos = (arr, callback, valorInicial) => {
	let acumulador = valorInicial !== undefined ? valorInicial : arr[0];
	for (let i = valorInicial !== undefined ? 0 : 1; i < arr.length; i++) {
		acumulador = callback(acumulador, arr[i]);
	}
	return acumulador;
};