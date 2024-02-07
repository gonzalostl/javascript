let men1 = "Inserte la nota 1";
let nota1 = prompt(men1);
nota1 = parseInt(nota1);
let men2 = "Inserte la nota 2";
let nota2 = prompt(men2);
nota2 = parseInt(nota2);
let men3 = "Inserte la nota 3";
let nota3 = prompt(men3);
nota3 = parseInt(nota3);

suma = nota1+nota2+nota3;
promedio = suma/3;

if(promedio>= 7 ){
    document.write("PROMOCIONADO");
}