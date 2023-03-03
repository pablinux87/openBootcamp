import { type } from "os";

console.log("Prueba de archivo TS");

var nombre: string = "Pablo";

console.log("Hola, " + nombre);
console.log("Que tal", nombre, "?");
console.log(`Como estas ${nombre}`);

let email = "pabloratero@gmail.com";
console.log(`El email: ${email} pertenece a ${nombre}`);

const PI: number = 3.14;

let error: boolean = false;

// Instanciar variables muntiples:

let a: string, b: boolean, c: number;

a = "Olivia loca";
b = true;
c = 9;

// BuiltIn types: number, string, boolean, void, null, undefined

// Tipos mas complejos

let listaTarea: string[] = ["Tarea1", "Tarea2"];

// Combinacion en listas:
let valores: (string | number | boolean)[] = [false, "Pablo", 9];

// Enumerados:
enum Estados {
  "Completado" = "C",
  "Incompleto" = "I",
  "Pendiente" = "P",
}

let estadoTarea: Estados = Estados.Completado; // C

enum PuestoCarrera {
  "Primero" = 1,
  "Segundo",
  "Tercero",
}

let puestoCarrera: PuestoCarrera = PuestoCarrera.Segundo; // 2

//Interfaces:
interface Tarea {
  nombre: string;
  estado: Estados;
  urgencia: number;
}

// Podemos crear variables que sigan la interface:

let tarea1: Tarea = {
  nombre: "Tarea1",
  estado: Estados.Pendiente,
  urgencia: 10,
};

// Types de typescript

type Producto = {
  precio: number;
  nombre: string;
  anio: number;
};

let coche: Producto = {
  nombre: "AUDI",
  precio: 45000,
  anio: 2009,
};

// ** Condicionales:

// Operdor ternario

console.log(
  `el Coche adquirido es un ${coche.nombre} y devido al modelo es`,
  coche.anio < 2010 ? `un poco viejito...` : `bastnte nuevito...`
);

// ** Bucles

let listaTareaNueva: Tarea[] = [
  { nombre: "tarea1", estado: Estados.Completado, urgencia: 2 },
  { nombre: "tarea2", estado: Estados.Incompleto, urgencia: 10 },
  { nombre: "tarea3", estado: Estados.Pendiente, urgencia: 8 },
];

listaTareaNueva.forEach((tarea: Tarea, index: number) => {
  console.log(`${index} - ${tarea.nombre}`);
});

// Propagacion:

let listaCompraLunes: string[] = ["pan", "leche"];
let listaCompraMartes: string[] = [...listaCompraLunes, "huevos"];
console.log(listaCompraMartes);

// ** Funciones
/**
 * La funcion es para imprimir el nombre por pantalla
 * @param nombre Deberia ser tu nombre...
 */
function saludar(nombre: string) {
  console.log(`Hola ${nombre}`);
}

saludar("Pablo");

/**
 * Saluda por pantalla a la persona...
 * @param nombre de la persona (opcional)
 */

function saludoOpcional(nombre?: string) {
  nombre ? console.log(`Adios ${nombre}`) : console.log(`Adios Indefinido`);
}

saludoOpcional("Camila");

function variosParametros(
  nombre: string,
  apellido?: string,
  edad: number = 19
) {
  return apellido
    ? console.log(`Hola ${nombre} ${apellido} de ${edad}`)
    : console.log(`Hola ${nombre} sin apellido y de ${edad}`);
}

variosParametros("Agustin", undefined, 25);

function pruebaTernario(a?: string) {
  return a ? a : undefined;
}

console.log(pruebaTernario("Pablo"));
console.log(pruebaTernario());

// funciones multiples parametros con spread

function variosNombres(...nombres: string[]) {
  nombres.forEach((name) => {
    console.log(name);
  });
}

variosNombres("pablo", "camila", "olivia");

// funciones con listas pero sin spread
function variosNombresEnLista(nombres: string[]) {
  nombres.forEach((name) => {
    console.log(name);
  });
}

const listaNombres: string[] = ["pablo", "camila"];

variosNombresEnLista(listaNombres);

// Arrow function:

type Empleado = {
  nombre: string;
  apellido: string;
  edad: number;
};

let empleadoPablo: Empleado = {
  nombre: "Pablo",
  apellido: "Ratero",
  edad: 35,
};

const mostrarEmpleado = (empleado: Empleado): string =>
  `${empleado.nombre} ${empleado.apellido} tiene ${empleado.edad} años.`;

console.log(mostrarEmpleado(empleadoPablo));

// Funciones asincronas:

async function ejemploAsync(): Promise<void> {
  //Await2
  await console.log(
    "Tarea a completar antes de seguir con la secuencia de instrucciones..."
  );
}

ejemploAsync()
  .then((respuesta) => {
    console.log(`Respuesta: ${respuesta}`);
  })
  .catch((error) => {
    console.log(`Ha habido un error ${error}`);
  })
  .finally(() => {
    `Todo ha terminado`;
  });

// Generators

function* ejemploGenerator() {
  //yield -> para emitir nuevos valores...
  let index = 0;
  while (index < 5) {
    yield index++;
  }
}

// Guardamos la funcion generadora en una variable:

let generadora = ejemploGenerator();

// Accedemos a los valores emitidos:

console.log(generadora.next().value);
console.log(generadora.next().value);
console.log(generadora.next().value);
console.log(generadora.next().value);
console.log(generadora.next().value);
console.log(generadora.next().value); // undefined

// WORKER???

function* watcher(valor: number) {
  yield valor; // emitimos el valor inicial
  yield* worker(valor);
  yield (valor += 10);
}

function* worker(valor: number) {
  yield valor + 1;
  yield valor + 2;
  yield valor + 3;
}

let generatorSaga = watcher(0);

console.log(generatorSaga.next().value);
console.log(generatorSaga.next().value);
console.log(generatorSaga.next().value);
