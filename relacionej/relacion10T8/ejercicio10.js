const enlace = "https://youtube.com";
const intervalNotificacion = 30000;
const duracionNotificacion = 5000;
let mostrarNotificaciones = true;

function mostrarNotificacion() {
  if (mostrarNotificaciones) {
    const notificacion = new Notification("Visita el enlace", {
      body: `No olvides visitar el enlace: ${enlace}`,
    });

    setTimeout(() => {
      notificacion.close();
    }, duracionNotificacion);
  }
}

if ("Notification" in window) {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      const intervalId = setInterval(mostrarNotificacion, intervalNotificacion);

      document.addEventListener("click", () => {
        clearInterval(intervalId);
        mostrarNotificaciones = false;
      });
    } else {
      console.error("Notificaciones no concedidas.");
    }
  });
} else {
  console.error("Tu navegador no soporta la API de Notificaciones.");
}
