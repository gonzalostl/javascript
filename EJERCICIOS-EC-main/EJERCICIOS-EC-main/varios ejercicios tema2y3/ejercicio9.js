//le pedimos que inserte el número de tiradas que quiera
let mensaje = "Inserte el número de tiradas";
//guardamos el valor
let tiradas = prompt(mensaje);
//creamos los dados
let dado1;
let dado2;
//creamos las variables de tirada minima y máxima
let tiradaMax=0;
let tiradaMin=13;
//creamos un bucle para que simule las tiradas
for (i=0;i<tiradas;i++){
    //simula las tiradas
    dado1=parseInt(Math.random()*(6)+1);
    dado2=parseInt(Math.random()*(6)+1);
    //guarda la puntuación total
    let tiradaTot = dado1+dado2;
    //si la tirada es mayor que la tirada mayor actual 
    //la tirada mayor pasa a ser la nueva tirada
    if(tiradaTot>tiradaMax){
        tiradaMax=tiradaTot;
    }
    //hacemmos lo mismo pero con la tirada más baja
    if(tiradaTot<tiradaMin){
        tiradaMin=tiradaTot;
    }
}
//sacamos las tiradas por pantalla
document.write("Tirada más Alta: "+ tiradaMax+"<br>");
document.write("Tirada más Baja: "+ tiradaMin);