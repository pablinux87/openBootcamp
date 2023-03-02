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
