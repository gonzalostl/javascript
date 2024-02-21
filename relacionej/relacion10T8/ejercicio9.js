function guardarInformacion() {
  // Información a almacenar
  var informacion = {
    vehiculo: {
      marca: "Ferrari",
      modelo: "F40",
      numero_bastidor: "1234567890ABCDEF",
      cilindrada: 4497,
      numero_puertas: 2,
      color: "Rojo",
    },
    propietario: {
      nombre: "Gonzalo",
      apellidos: "Sánchez de Toro López",
      direccion: "Calle Gatona 12",
      telefono: "611-45-15-16",
      correo_electronico: "gsanlop705@g.educaand.es",
    },
  };

  // Convertir a JSON y almacenar en sessionStorage
  sessionStorage.setItem("informacion", JSON.stringify(informacion));
  alert("Información guardada exitosamente.");
}

function mostrarInformacion() {
  // Obtener la información almacenada en sessionStorage
  var informacionGuardada = sessionStorage.getItem("informacion");

  if (informacionGuardada) {
    // Convertir de JSON a objeto
    var informacion = JSON.parse(informacionGuardada);

    // Mostrar la información en formato HTML
    var resultadoHTML = "<p><strong>Vehículo:</strong><br>";
    resultadoHTML += "Marca: " + informacion.vehiculo.marca + "<br>";
    resultadoHTML += "Modelo: " + informacion.vehiculo.modelo + "<br>";
    resultadoHTML +=
      "Número de bastidor: " + informacion.vehiculo.numero_bastidor + "<br>";
    resultadoHTML += "Cilindrada: " + informacion.vehiculo.cilindrada + "<br>";
    resultadoHTML +=
      "Número de puertas: " + informacion.vehiculo.numero_puertas + "<br>";
    resultadoHTML += "Color: " + informacion.vehiculo.color + "<br></p>";

    resultadoHTML += "<p><strong>Propietario:</strong><br>";
    resultadoHTML += "Nombre: " + informacion.propietario.nombre + "<br>";
    resultadoHTML += "Apellidos: " + informacion.propietario.apellidos + "<br>";
    resultadoHTML += "Dirección: " + informacion.propietario.direccion + "<br>";
    resultadoHTML += "Teléfono: " + informacion.propietario.telefono + "<br>";
    resultadoHTML +=
      "Correo electrónico: " +
      informacion.propietario.correo_electronico +
      "<br></p>";

    document.body.innerHTML += resultadoHTML;
  } else {
    alert("No hay información almacenada.");
  }
}

// Limpiar sessionStorage al cerrar el navegador
window.addEventListener("beforeunload", function () {
  sessionStorage.removeItem("informacion");
});
