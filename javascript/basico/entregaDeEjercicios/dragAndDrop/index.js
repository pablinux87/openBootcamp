/**
- Replica el ejercicio completo del vídeo

- Añade dos párrafos más en cada una de las secciones

- Pon un icono de papelera para eliminar párrafos (Esta imagen puede valer: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSMWeEC0tULzOjfWFAOdOHjUw9WjXhBDbirg&usqp=CAU)

- Añade el código necesario para que al arrastrar un fragmento del puzzle a la papelera, éste se elimine

 */

const secciones = document.querySelectorAll(".seccion");
const parrafos = document.querySelectorAll(".parrafo");
const plus = document.querySelector("#plus");

parrafos.forEach((parrafo) => {
  parrafo.addEventListener("dragstart", (event) => {
    console.log("Estoy arrastrando el párrafo: " + parrafo.innerText);
    parrafo.classList.add("hideslow");
    event.dataTransfer.setData("id", parrafo.id);
  });

  parrafo.addEventListener("dragend", () => {
    parrafo.classList.remove("hideslow");
  });
});

secciones.forEach((seccion) => {
  seccion.addEventListener("dragover", (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy"; // copy por defecto
  });

  seccion.addEventListener("drop", (event) => {
    const id_parrafo = event.dataTransfer.getData("id");
    const parrafo = document.getElementById(id_parrafo);
    if (seccion.id === "delete") {
      parrafo.remove();
    } else {
      seccion.appendChild(parrafo);
    }
  });
});

plus.addEventListener("click", (event) => {
  // const parrafo_final = document.querySelectorAll(".parrafo").length + 1;
  const parrafo_nuevo = document.createElement("p"); // is a node
  parrafo_nuevo.innerHTML = `BLOQUE ${parrafo_final}`;
  parrafo_nuevo.classList.add("parrafo");
  parrafo_nuevo.id = `p${parrafo_final}`;
  parrafo_nuevo.setAttribute("draggable", "true");
  secciones[0].appendChild(parrafo_nuevo);
  console.log("Agregandooo" + parrafo_nuevo);
});
