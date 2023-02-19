// Creo la clase coche con el numero de puertas en el constructor de la misma, siendo por defecto 2...
class Coche {
    constructor(numPuertas=2) {
      this.numPuertas = numPuertas;
    }
    // Metodo para incrementar puertas de 1 en 1...
    incrementarPuertas() {
      this.numPuertas++;
    }
  }
  
  // Creo el objeto miCoche que se crea por defecto con 2 puertas segun lo indica el constructor...
  const miCoche = new Coche();

  // en caso de querer crear un coche con un numero de puertas diferente a 2, solo debería crear el objeto pasandole el número de puertas que necesite al principio:
  // por ejemplo:    const miCoche = new Coche(3);
  
  // Agrego una puerta al objeto miCoche()...
  miCoche.incrementarPuertas();
  
  // Mouestro el número de puertas del objeto miCoche()...
  console.log(`Mi coche tiene ${miCoche.numPuertas} puertas.`);