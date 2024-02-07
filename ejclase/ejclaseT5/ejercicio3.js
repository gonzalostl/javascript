let cadena = new String('{"cancion":"Fuego","grupo":"Vetusta Morta"}');
console.log(JSON.parse(cadena));
let objeto = JSON.parse(cadena);
for (elemento in objeto) {
  console.log(elemento);
}
