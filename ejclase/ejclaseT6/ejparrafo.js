/*crea un fragmento de HTML que contenga cinco párrafos y cuyas etiquetas no tengan ningún atributo.
A continuación, muestra en la consola el contenido del penúltimo párrafo.*/
let penultimoparrafo = document.querySelectorAll("p")[3];

console.log(penultimoparrafo.innerText);
