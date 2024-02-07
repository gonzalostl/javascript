
var Array = [5, 6, 7, 8, 9];
function eliminarNum(array, elemento) {
    let indice = array.indexOf(elemento);
    if (indice !== -1) {
      array.splice(indice, 1);
    }
    return array;
  }
  
  let elementoEliminado = 7;
  let arrayFinal = eliminarNum(Array, elementoEliminado);
  document.write(arrayFinal);