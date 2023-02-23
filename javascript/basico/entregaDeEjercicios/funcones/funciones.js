/**
 Crea un archivo JS que contenga las siguientes líneas

- Una función sin parámetros que devuelva siempre "true"

- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

- Una función generadora de índices pares automáticos
 */

function alwaysTrue() {
  return true;
}
const alwaysTrue2 = (valor) => true;

console.log(alwaysTrue()); //true
console.log(alwaysTrue2()); //true

const promiseRetad = new Promise((resolve, reject) => {
  if (true) {
    resolve();
  } else {
    reject();
  }
});

let time = Math.floor(Math.random() * 5000);

promiseRetad
  .then(() => {
    setTimeout(() => {
      console.log(
        `Hola soy una promesa... Con un retardo de ${time} segundo...`
      );
    }, time);
  })
  .catch(() => {
    console.log("Error de promesa...");
  });

function* generator() {
  let id = 0;
  while (true) {
    id += 2;
    if (id === 10) return id;
    yield id;
  }
}

const generadorId = generator();
console.log(generadorId.next().value); //2
console.log(generadorId.next().value); //4
console.log(generadorId.next().value); //6
console.log(generadorId.next().value); //8
console.log(generadorId.next().value); //10
console.log(generadorId.next().value); // undefined
