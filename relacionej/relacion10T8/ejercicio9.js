let vehicleInfo = {
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

localStorage.setItem("vehicleInfo", JSON.stringify(vehicleInfo));

let storedVehicleInfo = JSON.parse(localStorage.getItem("vehicleInfo"));
let vehicleDataContainer = document.getElementById("vehicleData");
let html = "<p><strong>Marca:</strong> " + storedVehicleInfo.marca + "</p>";
html += "<p><strong>Modelo:</strong> " + storedVehicleInfo.modelo + "</p>";
html +=
  "<p><strong>Número de bastidor:</strong> " +
  storedVehicleInfo.numero_bastidor +
  "</p>";
html +=
  "<p><strong>Cilindrada:</strong> " + storedVehicleInfo.cilindrada + "</p>";
html +=
  "<p><strong>Número de puertas:</strong> " +
  storedVehicleInfo.numero_puertas +
  "</p>";
html += "<p><strong>Color:</strong> " + storedVehicleInfo.color + "</p>";
html += "<h2>Datos del propietario</h2>";
html +=
  "<p><strong>Nombre:</strong> " +
  storedVehicleInfo.propietario.nombre +
  "</p>";
html +=
  "<p><strong>Apellidos:</strong> " +
  storedVehicleInfo.propietario.apellidos +
  "</p>";
html +=
  "<p><strong>Dirección:</strong> " +
  storedVehicleInfo.propietario.direccion +
  "</p>";
html +=
  "<p><strong>Teléfono:</strong> " +
  storedVehicleInfo.propietario.telefono +
  "</p>";
html +=
  "<p><strong>Correo:</strong> " +
  storedVehicleInfo.propietario.correo +
  "</p>";
vehicleDataContainer.innerHTML = html;

window.addEventListener("beforeunload", function () {
  localStorage.removeItem("vehicleInfo");
});
