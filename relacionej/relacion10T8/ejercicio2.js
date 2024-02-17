function generarError() {
  location.href = "/ruta";
}

function generarExcepcion() {
  try {
    let divisor = 0;
    let resultado = 10 / divisor;
    console.log(resultado);
  } catch (error) {
    console.error(error.message);
  }
}

function generarAviso() {
  console.warn("¡Detente! Esta acción puede contener virus.");
  realizarOperacionPeligrosa();
}

function realizarOperacionPeligrosa() {
  console.log("Realizando una operación peligrosa");
}
