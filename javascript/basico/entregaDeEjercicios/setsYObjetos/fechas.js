/**
 Crea un archivo llamado fechas.js que contenga las siguientes líneas

- La fecha de hoy

- La fecha de tu nacimiento

- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

- Una variable que contenga el día de tu nacimiento

- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

- Una variable que contenga el año de tu nacimiento (con 4 dígitos) 
 */

const fechaHoy = new Date();
const nacimiento = new Date(1987, 11, 09, 10, 30, 30);
let mayor = fechaHoy.getTime() > nacimiento.getTime() ? true : false;

const diaNacimiento = nacimiento.getDate();
const mesNacimiento = nacimiento.getMonth() + 1;
const anyoNacimiento = nacimiento.getFullYear();

console.log(diaNacimiento + "/" + mesNacimiento + "/" + anyoNacimiento); //9/12/1987
