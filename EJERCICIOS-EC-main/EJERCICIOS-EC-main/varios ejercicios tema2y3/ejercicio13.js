let codPostal = new Map([
    [45005, "Abedul"],
    [49014, "Aire"],
    [37003, "Alarcos"],
    [11011, "Algeciras"],
    [11500, "Puerto de Santa María"]
]);

let opcion = 1;


//un while para que repita el bucle
    while (opcion >0 && opcion <6) {
        //le decimos que inserte la opcion
        opcion = prompt("Inserte la opción: 1 buscar cod postal, 2 eliminar cod postal, 3 listar cod postal, 4 modificar cod postal, 5 salir ");
    

    switch (opcion) {
        case "1":
            //le pedimos que inserte el codigo postal que busca
            let codBuscado = prompt("Inserte el código postal que busca");
            let encontrado = false;
            //recorremos los codigos y si lo encuentra lo guardamos y si lo encuentra lo saca por pantalla
            for (let [codigo, nombre] of codPostal) {
                if (codigo == codBuscado) {
                    document.write('El código ha sido encontrado');
                    encontrado = true;
                }
            }
            //si no lo encuentra lo saca por pantalla
            if (encontrado == false) {
                document.write("El código no ha sido encontrado");
            }
            break;

        case "2":
            //le pedimos que inserte el codigo postal que quiere eliminas
            let codEliminar = prompt("Inserte el código postal que desea eliminar");
            let encontradoE = false;
            //recorremos el mapa y si lo encuentra lo elimina
            for (let [codigo, nombre] of codPostal) {
                if (codigo == codEliminar) {
                    codPostal.delete(codigo);
                    document.write('El código ha sido eliminado');
                    encontradoE = true;
                }
            }
            //si no lo mete por pantalla
            if (encontradoE == false) {
                document.write("El código no ha sido encontrado");
            }
            break;
        case "3":
            //listamos el mapa con un bucle for of
            for (nombre of codPostal) {
                document.write(nombre + "<br>");
            }
            break;
        case "4":
            //le pedimos que inserte el código que quiere modificar
            let codModificar = prompt("Inserte el código postal que quiere modificar");
            encontradoM = false;
            //si lo encuerntra lo modifica
            for (let [codigo, nombre] of codPostal) {
                if (codigo == codModificar) {
                    codPostal.nombre = prompt("inserte el nuevo nombre del código")
                    encontradoM = true;
                }
            }
            //sino lo dice por panralla
            if (encontradoM == false) {
                document.write("El código no ha sido encontrado");
            }
            break;
            
        case "5":
            //finaliza ell programa
            document.write("fin del programa");
            opcion = -1;
            break;
    }}
