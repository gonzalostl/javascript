let url = "https://www.youtube.es";
let valida = /^https:\/\/[a-zA-Z0-9.-]+\.es$/;

if (valida.test(url)) {
  console.log("URL válida.");
} else {
  console.log("URL no válida.");
}
