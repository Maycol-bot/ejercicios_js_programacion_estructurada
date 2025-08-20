


const persona = {
nombre: "Carlos",
edad: 28,
direccion: {
ciudad: "Madrid",
codigoPostal: 28001
},
hobbies: ["leer", "correr", "pintar"]
};

const mostrarNombre = () => persona.nombre;
const mostrarEdad = () => persona.edad;
const mostrarCiudad = () => persona.direccion.ciudad;
const mostrarCodigoPostal = () => {
    return persona ["direccion"]["codigoPostal"];
}

const mostrarHobbie= () => {
    return persona.hobbies [1];
}

console.log(mostrarNombre());
console.log(mostrarEdad());
console.log(mostrarCiudad());
console.log(mostrarCodigoPostal());
console.log(mostrarHobbie());