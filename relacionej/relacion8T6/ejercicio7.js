/*Crea una cookie que almacene dos datos solicitados al usuario: su nombre y su edad. La cookie 
debe caducar en 30 minutos*/

let nombre = prompt("Introduce tu nombre");
let edad = prompt("Introduce tu edad");
document.cookie = "nombre =" + nombre + ";edad=" + edad + "; max-age=60*30";
