function esperaClicEnlace() {
  return new Promise((resolve) => {
    const enlace = document.getElementById("enlace");
    enlace.addEventListener("click", () => {
      resolve();
    });
  });
}

function esperaTeclaG() {
  return new Promise((resolve) => {
    const teclaG = "g";
    document.addEventListener("keydown", (event) => {
      if (event.key === teclaG) {
        resolve();
      }
    });
  });
}

Promise.all([esperaClicEnlace(), esperaTeclaG()]).then(() => {
  const mensajeDiv = document.getElementById("mensaje");
  mensajeDiv.innerText = "Patrón detectado";
});
