let mensaje = "Introduce el número de tiradas que deseas hacer";
let tiradas = prompt(mensaje);

let dado1;
let dado2;

let tiradaMax=0;
let tiradaMin=13;

for (i=0;i<tiradas;i++){
  dado1=parseInt(Math.random()*(6) + 1)
  dado2=parseInt(Math.random()*(6) + 1)

  let tiradaTotal = dado1 + dado2;

  if (tiradaTotal>tiradaMax){
      tiradaMax=tiradaTotal;
  }

  if (tiradaTotal<tiradaMin){
      tiradaMin=tiradaTotal;
  }
}

document.write("Tirada mas alta -> "+ tiradaMax + "<br>");
document.write("Tirada mas baja -> "+ tiradaMin);
