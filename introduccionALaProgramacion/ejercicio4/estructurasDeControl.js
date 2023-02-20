/*
En este ejercicio practicarás las estructuras de control, para ello deberás crear:

Usando un if, crear una condición que compare si la variable numeroIf es positivo, negativo, o 0.
Pista: Los números inferiores a 0 son negativos y los superiores, positivos.

Crea un bucle While, este bucle tendrá que tener como condición que la variable numeroWhile sea inferior a 3, el bloque de código que
tendrá el bucle deberá:

Incrementar el valor de la variable en uno cada vez que se ejecute.

Mostrarlo por pantalla cada vez que se ejecute.

Para el bucle Do While, deberás crear la misma estructura que en el While, pero solo se debe ejecutar una vez.

Para el bucle For, crea una variable numeroFor, esta variable tendrá como valor 0 y su condición será que
la variable sea igual o menor que 3, se irá incrementando en 1 su valor cada vez que se ejecute y deberá mostrarse por pantalla.

Por último, para el Switch, deberás crear la variable estacion, y distintos case para las cuatro estaciones del año. 
Dependiendo del valor de la variable estacion se deberá mandar un mensaje por consola informando de la estación en la que está. 
También habrá que poner un default para cuando el valor de la variable no sea una estación.
*/

// Para todos los puntos creo una función a fines de práctica solamente, pasando como parámetro el valor según enunciado
// y la ejecuto en un console.log para ver por consola lo que retorna la misma.

// condicional If

function compare(numeroIf) {
  if (numeroIf > 0) return "Positivo";
  else if (numeroIf < 0) return "Negativo";
  else return "Cero";
}

console.log(compare(2)); // Positivo

// bucle While:

function bucleW1(numeroWhile) {
  while (numeroWhile < 3) {
    console.log(numeroWhile);
    numeroWhile++;
  }
}

bucleW1(0);

// bucle Do While

function bucleDW() {
  let numeroWhile = 3;
  do {
    console.log(numeroWhile);
    numeroWhile++;
  } while (numeroWhile < 3);
}

bucleDW();

// bucle For

function bucleF() {
  for (let numeroFor = 0; numeroFor <= 3; numeroFor++) {
    console.log(numeroFor);
  }
}

bucleF();

// bucle Switch

function bucleS(estacion) {
  estacion = estacion.toLowerCase();
  switch (estacion) {
    case "verano":
      console.log(`La estación ingresada es ${estacion}`);
      break;
    case "invierno":
      console.log(`La estación ingresada es ${estacion}`);
      break;
    case "otoño":
      console.log(`La estación ingresada es ${estacion}`);
      break;
    case "primavera":
      console.log(`La estación ingresada es ${estacion}`);
      break;
    default:
      console.log(`${estacion} no es una estación válida`);
      break;
  }
}

bucleS("VeRano"); // La estación ingresada es verano
bucleS("calor"); // calor no es una estación válida
