//creamos la funcion para meter las cadenas en el array
let cadenas = [];
function introArray() {
  //creamos un for para que transforme los valores y los guarde en el array
  for (i = 0; i < 8; i++) {
    let palabra = prompt("introduce la palabra " + (i + 1));
    cadenas.push(palabra);
  }
}
introArray();

/*
ESTO ES PPARA FILTRAR EL ARRAY PERO NO SE PORQUE NO ME FUNCIONA
filtradas = cadenas.filter((elemento) => elemento.length > 5);
console.log(filtradas.length);
console.log(cadenas.length);

while (filtradas.length != cadenas.length) {
  for (i = 0; i < filtradas.length; i++) {
    filtradas.pop();
  }
  for (i = 0; i < cadenas.length; i++) {
    cadenas.pop();
  }

  introArray();
  filtradas = cadenas.filter((elemento) => elemento.length > 5);
  console.log(filtradas.length);
  console.log(cadenas.length);
}*/

//LO PONGO EN MAYUSCULAS (ENN CASO DE FUNCIOAR EL OTRO SERA EL ARRAY FILTRADAS)
for (i = 0; i < cadenas.length; i++) {
  cadenas[i] = cadenas[i].toUpperCase();
}

//SE GENERA ALEATORIAMENTE
let palabraFinal = cadenas[parseInt(Math.random() * 8 + 1)];

//BUCLE PARA QUE VAYA SACANDO UNA  A UNA HSAT ACERTAR LAS LETRAS
for (i = 0; i < palabraFinal.length; i++) {
  let entrada = prompt("introduce la palabra aleatoria").toUpperCase();
  if (entrada == palabraFinal) {
    console.log("HAS ACERTADO");
  } else {
    let salida = palabraFinal.substring(0, i + 1);
    console.log(salida);
  }
}
