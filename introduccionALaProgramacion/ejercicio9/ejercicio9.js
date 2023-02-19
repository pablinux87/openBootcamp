/*
Crea una clase Persona con las siguientes variables:

La edad

El nombre

El teléfono

Una vez creada la clase, crea una nueva clase Cliente que herede de Persona, esta nueva clase tendrá la variable credito solo para esa clase.

Crea ahora un objeto de la clase Cliente que debe tener como propiedades la edad, el telefono, el nombre y el credito, tienes que darles valor y mostrarlas por pantalla.

Una vez hecho esto, haz lo mismo con la clase Trabajador que herede de Persona, y con una variable salario que solo tenga la clase Trabajador.
*/

class Persona {
    constructor(){ 
        this._edad = 0,
        this._nombre = "",
        this._telefono = ""
    }

    get edad() {
        return this._edad
    }
    
    set edad(value) {
        this._edad=value
    }

    get nombre() {
      return this._nombre
    }

    set nombre(value) {
        this._nombre=value
    }

    get telefono() {
      return this._telefono
    }

    set telefono(value) {
        this._telefono=value
    }
}

class Cliente extends Persona {
    constructor() {
        super();
        this._credito=''
    }

    set credito(value) {
        this._credito=value
    }

    get credito() {
        return this._credito
    }
}

const cliente = new Cliente()

cliente.nombre='Camila'
cliente.edad=27
cliente.telefono=155968775
cliente.credito=50000

console.log(`El nombre del Cliente es: ${cliente.nombre}`)
console.log(`La edad del Cliente es: ${cliente.edad}`)
console.log(`El telefono del Cliente es: ${cliente.telefono}`)
console.log(`El credito del Cliente es: ${cliente.credito}`)

class Trabajador extends Persona{
    constructor() {
        super(),
        this._salario=''
    }

    set salario(value) {
        this._salario=value
    }

    get salario() {
        return this._salario
    }
}

const trabajador = new Trabajador()

trabajador.nombre='Pablo'
trabajador.edad=35
trabajador.telefono=155968775
trabajador.salario=4500

console.log(`El nombre del Trabajador es: ${trabajador.nombre}`)
console.log(`La edad del Trabajador es: ${trabajador.edad}`)
console.log(`El telefono del Trabajador es: ${trabajador.telefono}`)
console.log(`El salario del Trabajador es: ${trabajador.salario}`)