
let mensaje = "Escribe la inicial del dia de hoy";
let dia = prompt(mensaje);

dia=dia.toUpperCase();
console.log(dia);

switch(dia){
    case'L':
            console.log("8h - 12h");
            break;
    case'M':
            console.log("10h - 14h");
            break;
    case'X':
            console.log("9h - 13h");
            break;
    case'J':
            console.log("11h - 15h");
            break;
    case'V':
            console.log("12h - 16h");
            break;
    case'S':
            console.log("15h - 19h");
            break;
    case'D':
            console.log("16h - 20h");
            break;
}

