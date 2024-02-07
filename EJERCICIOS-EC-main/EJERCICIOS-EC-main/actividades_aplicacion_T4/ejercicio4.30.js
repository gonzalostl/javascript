//creamos la funcion
function esPrimo(num) {
  //declaramos primo como false
  primo = true;
  //recorremos desde el 2 hasta un numero antes del indicado
  for (i = 2; i < num; i++) {
    //si el modulo de alguno de los numeros es 0 significa
    //que es divisible entre un numero que no es ni el mismo ni 1 por lo tanto no es primo
    if (num % i == 0) {
      primo = false;
    }
  }
  if (primo == true) {
    document.write("EL NUMERO ES PRIMO");
  } else {
    document.write("EL NUMERO NO ES PRIMO");
  }
}
esPrimo(13);
