/**
 Crea un archivo llamado objetos.js que contenga las siguientes líneas

- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

- Una variable que obtenga tu edad a partir del objeto anterior

- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
 */

class Person {
  constructor(nombre, apellido, edad, altura, isDev) {
    (this.nombre = nombre),
      (this.apellido = apellido),
      (this.edad = edad),
      (this.altura = altura),
      (this.isDev = isDev);
  }
}

const pablo = new Person("Pablo", "Ratero", 35, 1.75, true);
const max = new Person("Maxi", "Piccinini", 34, 1.87, true);
const pochi = new Person("Pablo", "Damato", 33, 1.63, false);

const edadPablo = pablo.edad;

const lista = [pablo, max, pochi];

const listaOrdenada = lista.sort((a, b) => b.edad - a.edad);
