let mensaje1 = "Introduce una palabra : ";
let palabra1 = prompt(mensaje1);
let mensaje2 = "Introduce otra palabra : ";
let palabra2 = prompt(mensaje2);

function MismasLetras(palabra1, palabra2) {
  if (palabra1.length != palabra2.length) {
    document.write("No contienen las mismas letras");
  } else {
    document.write("Contiene las mismas letras");
  }
}

MismasLetras(palabra1, palabra2);
