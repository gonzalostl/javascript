let mensaje1 = "Introduce un año : ";
let año = prompt(mensaje1);

function añobisiesto(año) {
  return (año % 4 == 0 && año % 100 !== 0) || año % 400 === 0;
}
if (añobisiesto(año)) {
  document.write(año + " es un año bisiesto");
} else {
  document.write(año + " no es un año biesto");
}
