//creamos la funcion
function factorial(num){
    //Guardamos el valor del número inicial
    let numIni = num;
    //con un for hacemos que descienda desde el num-1 hasta 1 
    //así los va multiplicando y consiguiendo así el factorial
    for(i=(num-1); i>1; i--){
        num= num*i;
    }
    //lo sacamos por pantalla
    document.write("el factorial de "+numIni+" es "+ num);
} 

factorial(15);