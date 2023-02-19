/*
Para practicar la encapsulación:

Crear clase Persona.

Crear variables las privadas edad, nombre y telefono de la clase Persona.

Crear gets y sets de cada propiedad.

Crear un objeto persona en el main.

Utiliza los gets y sets para darle valores a las propiedades edad, nombre y telefono, por último muéstralas por consola.
*/

class Persona {
    constructor() {
      this._edad = 0;
      this._nombre = '';
      this._telefono = '';
    }
  
    get edad() {
      return this._edad;
    }
  
    set edad(value) {
      this._edad = value;
    }
  
    get nombre() {
      return this._nombre;
    }
  
    set nombre(value) {
      this._nombre = value;
    }
  
    get telefono() {
      return this._telefono;
    }
  
    set telefono(value) {
      this._telefono = value;
    }
  }
  
  // Creo un objeto persona y uso los métodos para pasarle la info...
  
  const persona = new Persona();
  persona.edad = 35;
  persona.nombre = 'Pablo';
  persona.telefono = '3415968775';
  
  // Muestro los valores por consola utilizando los getters

  console.log(`La edad de la persona es ${persona.edad}`);
  console.log(`El nombre de la persona es ${persona.nombre}`);
  console.log(`El teléfono de la persona es ${persona.telefono}`);
  