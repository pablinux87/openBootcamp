/**
Crea un nuevo fichero JS que contenga las siguientes líneas

- Una clase llamada "Estudiante" que tenga:

- Una variable llamada nombre

- Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS

- Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas

- Crea una nueva instancia de "Estudiante"

- Haz la llamada al método obtenDatos
 */

class Estudiante {
  constructor(nombre, asignaturas) {
    (this.nombre = nombre), (this.asignaturas = [...asignaturas]);
  }

  obtenDatos() {
    return {
      name: this.nombre,
      asigns: this.asignaturas,
    };
  }
}

const pedro = new Estudiante("Pedro", ["Javascript", "HTML", "CSS"]);
pedro.obtenDatos();
console.log(pedro.obtenDatos()); // { name: 'Pedro', asigns: [ 'Javascript', 'HTML', 'CSS' ] }
