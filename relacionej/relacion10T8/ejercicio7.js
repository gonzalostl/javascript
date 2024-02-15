// ejemplo de como cargar un archivo de texto en un textarea
document.querySelector("#cargar1").addEventListener("click", async () => {
  try {
    // NOTA showOpenFilePicker nos devuelve un array!
    const referencias = await window.showOpenFilePicker({});

    // a partir de la referencia, obtenemos el archivo (casilla 0 del array)
    const archivo = await referencias[0].getFile();

    // a partir del archivo obtenemos su contenido
    const contenido = await archivo.text();

    // mostramos contenido en el textarea
    document.querySelector("#contenido").value = contenido;
  } catch (err) {
    console.log("Se ha producido un error o se ha cancelado la carga. " + err);
  }
});
