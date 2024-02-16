function compruebaEdad(n) {
  if (n < 18) {
    throw new RangeError("Edad inválida");
  } else {
    return "Puedes jugar <br>";
  }
}
try {
  let mensaje = compruebaEdad(20);
  document.write(mensaje);
} catch (error) {
  if (error instanceof RangeError) {
    document.write(`${error.name}: ${error.message}` + "<br>");
    document.write("Porfavor, introduce una edad válida <br>");
  }
} finally {
  document.write("Bienvenido a CasinOnline");
}
