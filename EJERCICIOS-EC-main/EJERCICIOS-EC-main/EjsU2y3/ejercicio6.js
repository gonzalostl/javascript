//primero hacemos que inserte el email
let inserte = "Escribe una cadena de texto";
let email = prompt(inserte);
//dividimos el inicio con lass tres primeras letras
let inicio = email.substring(0,3);
//encontramos el numero de la letra del arroba con el indexof
let numfinal = email.indexOf("@");
//dividimos el final desde el arroba hasta el final del email
let final = email.substring(numfinal,100);
//los unimos con tres puntos de por medio
let oculto = inicio+"..."+final;
//sacamos por pantalla el email oculto
document.write(oculto);