//creamos la funcion
function esMultiplo10(num){
    //para saber si es multiplo de de 10 comprobaremos su módulo 
    //al dividirlo entre 10 si es 0 sería múltiplo
    if(num%10==0){
        document.write(num+" ES MULTIPLO DE 10");
    }
    else{
        document.write(num+" NO es múltiplo de 10");
    }
}

esMultiplo10(150);