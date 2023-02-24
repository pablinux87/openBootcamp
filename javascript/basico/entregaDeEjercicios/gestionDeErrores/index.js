/**
 Crea un nuevo proyecto de Node

- Instala la dependencia Winston

- En el archivo index.js crea una función que devuelva un error con un mensaje personalizado

- Registra el error en un archivo a través de un try...catch
 */
const logger = require("./logger");

const isText = (val) => {
  if (typeof val === "string") {
    console.log(val);
    return true;
  }
  console.error("ERROR!");
};

try {
  isText("pablo");
} catch (e) {
  console.log(e);
  logger.error(e);
}

try {
  isText(95);
} catch (e) {
  console.log(e);
  logger.error(e);
}
