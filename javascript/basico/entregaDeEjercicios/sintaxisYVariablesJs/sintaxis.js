/*
Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:

- Tu nombre (string)

- Tu edad (number)

- ¿Eres desarrollador? (boolean)

- Tu fecha de nacimiento (Date)

- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
*/

const nombre = "Pablo Ratero";
let edad = 35;
let desarrollador = true;
const fechaNacimiento = new Date(1987, 11, 09);
const libro = {
  titulo: "4 Acuerdos",
  autor: "Miguel Ruiz",
  fecha: 1997,
  url: "https://es.wikipedia.org/wiki/Miguel_%C3%81ngel_Ruiz_Mac%C3%ADas",
};

const yo = [nombre, edad, desarrollador, fechaNacimiento, libro];

console.log(yo);
