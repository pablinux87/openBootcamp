/* 
Crea un archivo JS que contenga las siguientes líneas

- Una variable que contenga la lista de la compra (mínimo 5 elementos)

- Modifica la lista de la compra y añádele "Aceite de Girasol"

- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

*/

let listaCompras = ["arroz", "huevo", "polenta", "pollo", "gaseosa"];
listaCompras.push("aceite de girasol");
listaCompras.pop();

const listaPeliculas = [
  { titulo: "pelicula 1", director: "director 1", fecha: 2000 },
  { titulo: "pelicula 2", director: "director 2", fecha: 2011 },
  { titulo: "pelicula 3", director: "director 3", fecha: 2022 },
];

const pelisMas2010 = listaPeliculas.filter((obj) => obj.fecha > 2010);

const directores = listaPeliculas.map((dir) => dir.director);

const titulos = listaPeliculas.map((tit) => tit.titulo);

const directoresYtitulos = directores.concat(titulos);

const concatFactorDePropagacion = [...directores, ...titulos];
