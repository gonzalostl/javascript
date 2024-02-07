
let mensaje = "¿Cuál es tu nombre?";
let nombre = prompt(mensaje);
console.log(nombre);

let message = "¿Que edad tienes?";
let edad = prompt(message);
console.log(edad);


if(edad<12) {
    console.info("%c" + nombre + " tiene " + edad + "años y por tanto es niño", "color:green;font-weight:bold;" );
} else if(edad>13 && edad<17) {
    console.log("%c" + nombre + " tiene " + edad + " años y por tanto es adolescente", "color:green;font-weight:bold;")
}
else if (edad>18 && edad<64) {
    console.log("%c" + nombre + " tiene " + edad + "años y por tanto es trabajador", "color:green;font-weight:bold;")
}
else if (edad>65) {
    console.log("%c" + nombre + " tiene " + edad + "años y por tanto es jubilado", "color:green;font-weight:bold;")
}
