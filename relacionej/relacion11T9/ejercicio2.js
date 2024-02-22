function DOMCargado() {
  return new Promise((resolve) => {
    if (document.readyState === "loading") {
      document.getElementById("mensaje").innerText = "CARGANDO";
      document.addEventListener("DOMContentLoaded", () => {
        setTimeout(() => {
          resolve();
        }, 3000);
      });
    } else {
      resolve();
    }
  });
}

DOMCargado().then(() => {
  document.getElementById("mensaje").innerText = "LISTO PARA ACTUAR";
});
