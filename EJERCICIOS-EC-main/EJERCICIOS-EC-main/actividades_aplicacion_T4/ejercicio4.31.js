function operaciones() {
  let suma = 0;
  //recorremos los arguments introducidos
  for (let i = 0; i < arguments.length; i++) {
    //vamos sumando los elementos
    suma += arguments[i];
  }
  //calculamos media multiplicacion y division
  let media = suma / arguments.length;
  let multi = arguments[0] * arguments[arguments.length - 1];
  let division = arguments[1] / arguments[arguments.length - 2];
  document.write(
    "suma :"+ suma+ "<br>"+"media :"+ media+ "<br>"+"multiplicacion :"+ multi+ "<br>"+"division :"+ division);
}

operaciones(2,6,7,3,2);