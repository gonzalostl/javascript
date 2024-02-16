document.querySelector("#cargar1").addEventListener("click", async () => {
  try {
    const referencias = await window.showOpenFilePicker({});

    const archivo = await referencias[0].getFile();

    const contenido = await archivo.text();

    document.querySelector("#contenido").value = contenido;
  } catch (err) {
    console.log("Se ha producido un error o se ha cancelado la carga. " + err);
  }
});
