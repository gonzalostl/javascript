let mensaje1 = "Escribe una cantidad de grados farenheit: ";
let fare = prompt(mensaje1);

function FareACenti() {
  return (centi = ((fare - 32) / 9) * 5);
}

FareACenti();
document.write(fare + " Fº equivalen a " + centi + " Cº");
