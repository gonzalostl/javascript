/*crea un programa que, partiendo de un código HTML con una lista ordenada de personas, 
devuelva los nombres de la primera y de la última de la lista*/

let lista = document.getElementById("lista");

let primerapersona = lista.firstElementChild.textContent;
let ultimapersona = lista.lastElementChild.textContent;

console.log("Primera persona", primerapersona);
console.log("Última persona", ultimapersona);
