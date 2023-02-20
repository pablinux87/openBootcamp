// Creo la función para realizar la suma...
function sumaTresNumeros(a, b, c) {
  let sum = a + b + c;
  return sum;
}
// La parte de llamarla desde el main no la entendí asi que cree otra función de nombre main() con valores y devolviendo el resultado en la consola y retornando el mismo por si se llegase a necesitar a posterior...
function main() {
  let num1 = 5;
  let num2 = 10;
  let num3 = 15;
  let resultado = sumaTresNumeros(num1, num2, num3);
  console.log("El resultado de la suma es: " + resultado);
  return resultado;
}
// Llamo la función main() en el cuerpo del archivo js...
main();
