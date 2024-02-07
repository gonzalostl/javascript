
function diferencia_de_días(fecha1,fecha2){
//restamos las fechas y nos daría la diferencia en milisegundos
let diferencia  = fecha2 - fecha1;
//lo transformamos a días 
let diferencia_de_días = Math.floor(diferencia / (1000 * 60 * 60 * 24));
//lo sacamos por pantalla
return diferencia_de_días;
}


document.write(diferencia_de_días(new Date('2023-10-10'),new Date('2023-10-15')));




