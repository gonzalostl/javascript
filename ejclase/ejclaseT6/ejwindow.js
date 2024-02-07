let prmpt = window.prompt("Indique la cantidad en píxeles que desees: ");
if (prmpt !== null) {
  console.log("El usuario ha pulsado aceptar");
  let cnfrm = window.confirm(`¿Estás seguro de aplicar ${prmpt}px?`);
  if (cnfrm === false) {
    console.log("El usuario no ha aceptado");
  } else {
    console.log("El usuario ha aceptado");
    window.resizeBy(prmpt, prmpt);
    console.log(`Ventana redimensionada ${prmpt} x ${prmpt}px`);
  }
} else {
  console.log("La introduccion de datos ha sido cancelada");
}
