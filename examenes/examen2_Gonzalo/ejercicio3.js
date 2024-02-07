/*crea una funcion anónima vinculada a una variable llamada 
invertida que reciba una cadena de texto y la devuelva invertida*/

let mensaje = "Introduce una cadena de texto";
let cadena = prompt(mensaje);

var invertida = function () {
  return cadena.split("").reverse().join("");
};

let cadenainvertida = invertida(mensaje);
document.write(cadenainvertida);
