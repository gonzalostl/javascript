function DOMCargado() {
  return new Promise((resolve) => {
    if (document.readyState === "loading") {
      document.getElementById("mensaje").innerText = "CARGANDO";
      document.addEventListener("DOMContentLoaded", () => {
        resolve();
      });
    } else {
      resolve();
    }
  });
}

DOMCargado().then(() => {
  document.getElementById("mensaje").innerText = "LISTO PARA ACTUAR";
});
