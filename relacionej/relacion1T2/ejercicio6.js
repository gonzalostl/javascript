let mensaje1 = "Escribe la primera nota:";
let nota1 = prompt(mensaje1);
nota1=parseInt(nota1);

let mensaje2 = "Escribe la segunda nota:";
let nota2 = prompt(mensaje2);
nota2=parseInt(nota2);

let mensaje3 = "Escribe la tercera nota:";
let nota3 = prompt(mensaje3);
nota3=parseInt(nota3);

sum = Number(nota1) + Number(nota2) + Number(nota3);
promedio = sum/3;

if (promedio >= 7) {
    document.write("Promocionado");
}