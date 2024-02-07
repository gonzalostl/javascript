function comenzarTerminar() {
  // Escribo Comenzando... en el documento
  document.write("Comenzando...");

  // Usando setTimeout para ejecutar una función después de un retraso de 3 segundos
  setTimeout(() => {
    // Escribiendo Finalizado en el documento después del retraso
    document.write("Finalizado");
  }, 3000);
}
comenzarTerminar();
