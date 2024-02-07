class Etiqueta {
  constructor(nombre, referencia) {
    this.nombre = nombre;
    this.referencia = referencia;
  }

  mostrarArticulo() {
    console.log(`Nombre del artículo: ${this.nombre}`);
    console.log(`Referencia del artículo: ${this.referencia}`);
  }

  validarEtiqueta() {
    const regex = /^\d{4}=[a-zA-Z]{5}\/\d{2}_\d$/;
    return regex.test(this.referencia);
  }
}

// Crear un objeto y probar la validación de etiquetas
const miArticulo = new Etiqueta("Mi Producto", "2022-xrFdS/25_9");

miArticulo.mostrarArticulo();

if (miArticulo.validarEtiqueta()) {
  console.log("La etiqueta es válida.");
} else {
  console.log("La etiqueta no es válida.");
}
