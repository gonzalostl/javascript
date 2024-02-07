// Función para contar elementos HTML
function contarElementos() {
  // Contadores para cada tipo de elemento
  let contadorP = 0;
  let contadorA = 0;
  let contadorSpan = 0;

  // Obtener todos los elementos dentro del contenedor (cambia 'body' por el selector que prefieras)
  const elementos = document.querySelectorAll("html *");

  // Iterar sobre los elementos y contar cada tipo
  elementos.forEach((elemento) => {
    if (elemento.tagName === "P") {
      contadorP++;
    } else if (elemento.tagName === "A") {
      contadorA++;
    } else if (elemento.tagName === "SPAN") {
      contadorSpan++;
    }
  });

  // Mostrar los resultados en la consola
  console.log("Cantidad de elementos <p>:", contadorP);
  console.log("Cantidad de elementos <a>:", contadorA);
  console.log("Cantidad de elementos <span>:", contadorSpan);
}

// Llamar a la función cuando se carga la página
window.onload = contarElementos;
