/**
Crea un nuevo fichero JS que contenga las siguientes líneas

- Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])

- Ejecuta la depuración de VSCode para visualizar la ejecución de la función

*/

function fibo(num) {
  let arr = [1, 1];
  for (let i = 1; i < num - 1; i++) {
    let n = arr[i] + arr[i - 1];
    arr = [...arr, n];
  }
  return arr;
}

console.log(fibo(6)); // [ 1, 1, 2, 3, 5, 8 ]
