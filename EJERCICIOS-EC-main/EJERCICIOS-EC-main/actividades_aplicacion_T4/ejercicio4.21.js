///creamos la funcion
function cambioACelsius(gradosF){
    //los cambiamos a celsius con la formula
    gradosC= (Number(gradosF)-32)*5/9;
    //lo sacamos por pantalla
    document.write(gradosF+" Fº son "+gradosC+" Cº");
}

cambioACelsius(50);