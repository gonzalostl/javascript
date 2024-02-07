let mensaje = "Introduce un número";
let n = prompt(mensaje);

let num = n;

for (i=(num - 1); i>1; i--){
    num = num*i;
}   
 document.write("El factorial de " + n + " es: " + num);
