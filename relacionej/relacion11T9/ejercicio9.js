async function obtenerDatos() {
  try {
    const response = await fetch("https://api.example.com/data");
    if (!response.ok) {
      throw new Error("Error al obtener datos");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en la solicitud:", error);
    return null;
  }
}

function mostrarDatos(data) {
  if (!data) {
    console.log("No se pudieron obtener los datos");
    return;
  }
  console.log("Datos obtenidos:", data);
}

async function main() {
  console.log("Iniciando programa...");
  const data = await obtenerDatos();
  mostrarDatos(data);
  console.log("Programa finalizado");
}

main();
