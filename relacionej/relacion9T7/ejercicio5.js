// Obtener la caja azul
const caja = document.getElementById("caja");

function obtenerPosicionAleatoria() {
  const anchoVentana = window.innerWidth;
  const altoVentana = window.innerHeight;
  const anchoCaja = caja.offsetWidth;
  const altoCaja = caja.offsetHeight;

  const nuevaPosicionX = Math.floor(Math.random() * (anchoVentana - anchoCaja));
  const nuevaPosicionY = Math.floor(Math.random() * (altoVentana - altoCaja));

  return { x: nuevaPosicionX, y: nuevaPosicionY };
}

function moverCaja() {
  const nuevaPosicion = obtenerPosicionAleatoria();
  caja.style.left = nuevaPosicion.x + "px";
  caja.style.top = nuevaPosicion.y + "px";
}

function verificarRaton(event) {
  const cajaRect = caja.getBoundingClientRect();
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  if (
    mouseX >= cajaRect.left &&
    mouseX <= cajaRect.right &&
    mouseY >= cajaRect.top &&
    mouseY <= cajaRect.bottom
  ) {
    moverCaja();
  }
}

document.addEventListener("mousemove", verificarRaton);
