// Crear una cola
let cola = [];

// Agregar elementos (enqueue)
cola.push("Tarea 1"); // ["Tarea 1"]
cola.push("Tarea 2"); // ["Tarea 1", "Tarea 2"]
cola.push("Tarea 3"); // ["Tarea 1", "Tarea 2", "Tarea 3"]

// Eliminar elementos (dequeue)
console.log(cola.shift()); // "Tarea 1" (sale el primero)
console.log(cola); // ["Tarea 2", "Tarea 3"]
console.log(cola.shift()); // "Tarea 2"
console.log(cola); // ["Tarea 3"]

  //areglo de cola
  let colatarea = [];

  //accion para al agregar al final
  const agregarAlFinal = (Tarea) => {
    colatarea.push(Tarea);
    console.log(`tarea agregada: ${Tarea}. cola actual: ${colatarea}`);
  };

  //accion para remover del inicio
    const removerDelInicio = () => {
      if (colatarea.length === 0) {
        console.log("cola vacia.");
        return null;
      }
      const tareaProcesada = colatarea.shift();
      console.log(`tarea procesada: ${tareaProcesada}. cola actual: ${colatarea}`);
    };

    //simulacion del proceso
    agregarAlFinal("Tarea A");    //cola: ["Tarea A"]
    agregarAlFinal("Tarea B");    //cola: ["Tarea A", "Tarea B"]
    agregarAlFinal("Tarea C");    //cola: ["Tarea A", "Tarea B", "Tarea C"]
    removerDelInicio();           //procesa  "Tarea A", cola: ["Tarea B", "Tarea C"]
    removerDelInicio();           //procesa  "Tarea B", cola: ["Tarea C"]
    removerDelInicio();           //procesa  "Tarea C", cola: []

    //arreglo para cola con limite
    let colaLimitada = [];
    const limiteCola = 5;

    //accion para agregar al final (flecha)
    const insertarAlFinal = (mensaje) => {
        colaMensaje.push(mensaje);
        if (colaMensaje.length > tamañoMaximo) {
            const mensajeEliminado = colaMensaje.shift();
            console.log(`Limite exedido: ${mensajeEliminado} cola actual: ${colaMensaje}`);
        } else {
            console.log(`mensaje insertado: ${mensaje}. cola actual: ${colaMensaje}`);
        } 
    };