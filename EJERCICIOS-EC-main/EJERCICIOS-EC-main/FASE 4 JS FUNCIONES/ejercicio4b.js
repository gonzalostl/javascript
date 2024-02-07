//escribimos la funcion
function mes(mes, anio) {
    //ponemos en mayuscula el mes insertado para que no haya problemas
    mes = mes.toUpperCase();
    //usamos un switch para sacar los días que tiene dependiendo del mes
    switch (mes) {
        case "ENERO":
            document.write(31);
            break;
        case "FEBRERO":
            //comprobamos si es año bisiesto y en funcion si es o no sacamos los días
            if (anio % 4 == 0) {
                document.write(29);
            }
            else {
                document.write(28);
            }
            break;
        case "MARZO":
            document.write(31);
            break;
        case "ABRIL":
            document.write(30);
            break;
        case "MAYO":
            document.write(31);
            break;
        case "JUNIO":
            document.write(30);
            break;
        case "JULIO":
            document.write(31);
            break;
        case "AGOSTO":
            document.write(31);
            break;
        case "SEPTIEMBRE":
            document.write(30);
            break;
        case "OCTUBRE":
            document.write(31);
            break;
        case "NOVIEMBRE":
            document.write(30);
            break;
        case "DICIEMBRE":
            document.write(31);
            break;


    }

}

mes("febrero", 2020);