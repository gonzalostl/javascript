const parrafo = document.getElementById("contenidoParrafo");
const limpiarBoton = document.getElementById("limpiarBoton");

function agregarLetra(event) {
  const letra = event.key;

  parrafo.textContent += letra;
}

document.addEventListener("keydown", agregarLetra);

function limpiarContenido() {
  parrafo.textContent = "";
}

limpiarBoton.addEventListener("click", limpiarContenido);
