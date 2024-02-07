var aleatorio = Math.floor(Math.random() * 10) + 1;

console.log(aleatorio);

let mensaje = "Escribe un número entre 1 y 10";
let numero = prompt(mensaje);

if (numero == aleatorio){
    document.write("Buen trabajo");
} else {
    document.write("No coincide");
}