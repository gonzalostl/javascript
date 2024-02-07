
let mensaje = prompt("Escribe una cadena de texto en minúscula para que las iniciales se conviertan en mayúsculas");

let palabras = mensaje.split(' ');

let mayus = palabras.map( palabra => {
    return palabra[0].toUpperCase() + palabra.slice(1);
});

let espacios = mayus.join(" ");

document.write(espacios);
