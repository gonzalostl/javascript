/*crear un programa que al menos contenga una función que reciba como parámetro un array
can al menos 8 palabras posibles de longitud variable ( las cuales se les pedirá al usuario por
teclado para poder crearlo). Una vez creado el array debes regularizar el array comprobando que
todas las palabras son válidas( tienen una longitud de al menos 6 caracteres) y las pondrás en mayúsculas; 
si no es válido deberías volver a introduir las palabras. En cada ejecución del programa se obtiene una palabra 
del array aleatoria, para que el usuario la intente adivinar introduciendo una. Por cada intento sucesivo, el programa
debe ir mostrando como pista la palabra de forma parcial, empezando con la primera letra y agrefando una letra a la vez.
El programa debe terminar cuando se adivina la palabra ganando o cuando se muestran todas las letras de la misma perdiendo.

*/

let palabras = [];

for (let i = 0; i < 8; i++) {
  let palabra = prompt("Introduce una palabra con al menos 6 letras");

  if (palabra.length <= 6) {
    alert("Palabra no válida. Introducela de nuevo");
    i--;
  } else {
    palabras.push(palabra.toUpperCase());
  }
}

console.log(palabras);

let aleatorio = Math.floor(Math.random() * palabras.length);
let palabraAleatoria = palabras[aleatorio];

document.write(palabraAleatoria);
