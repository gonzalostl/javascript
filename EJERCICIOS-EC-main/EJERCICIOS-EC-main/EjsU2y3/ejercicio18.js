//le pedimos al usuario que inserte la cadena
let cadena = prompt("inserta una cadena");

//le padimos que inserte la subcadena que quiere buscar
let busqueda = prompt("inserta la subcadena que quieres buscar");
let cont = 0;

//con un for recorremos la cadena para encontrarla buscada
for (let i = 0; i <= cadena.length - busqueda.length; i++) {
    let subcadena = cadena.substring(i, i + busqueda.length);
//si la ecuentra aumenta el contador 
    if (subcadena == busqueda) {
        cont++;
    }
}

//muestra las veces que se encontro la subcadena
document.write("La suubcadena se encontro " + cont+" veces");