let mensaje1 = "Escribe un número";
let numero1 = prompt(mensaje1);

let mensaje2 = "Escribe otro numero número";
let numero2= prompt(mensaje2);

let mensaje3 = "Escribe una cadena";
let cadena1 = prompt(mensaje3);

let mensaje4 = "Escribe otra cadena";
let cadena2 = prompt(mensaje4);

//escribimos nuestro array
var array = [true, numero1 , false,cadena1,cadena2,numero2];

array.sort();
if (cadena1 > cadena2){
    document.write("La cadena mayor es " + cadena1);
}else if(cadena1 < cadena2){
    document.write("La cadena mayor es " + cadena2);
}
document.write("<br>");
//hacemos las operaciones lógicas con los booleanos
document.write(`La operacion and es ${false && true} 
y la operacion or es ${true||true}`);
document.write("<br>");

//hacemos las operaciones aritméticas con los números
document.write("La suma de los dos números es " + (sum = Number(numero1) + Number(numero2)) + 
" y la resta es " + (rest = Number(numero1) - Number(numero2)));
document.write("<br>");

document.write(array);