let anchoCajaVerde = 10;
let anchoCajaRoja = 10;

function actualizarAnchoCajaVerde() {
  const cajaVerde = document.getElementById("cajaVerde");
  anchoCajaVerde += 5;
  cajaVerde.style.width = anchoCajaVerde + "px";
  if (anchoCajaVerde >= 500) {
    terminarJuego("GANA VERDE");
  }
}

function actualizarAnchoCajaRoja() {
  const cajaRoja = document.getElementById("cajaRoja");
  anchoCajaRoja += 5;
  cajaRoja.style.width = anchoCajaRoja + "px";
  if (anchoCajaRoja >= 500) {
    terminarJuego("GANA ROJO");
  }
}

function terminarJuego(mensaje) {
  document.removeEventListener("keydown", manejarTecla);
  document.getElementById("mensaje").textContent = mensaje;
}

function manejarTecla(event) {
  if (event.key === "a") {
    actualizarAnchoCajaVerde();
  } else if (event.key === "ñ") {
    actualizarAnchoCajaRoja();
  }
}

document.addEventListener("keydown", manejarTecla);
