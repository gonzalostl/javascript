//le pedimos el numero 
let num = Number(prompt("Inserte un numero"));
//usamos un fro dentro de otro
for(i=0;i<num;i++){
    for(j=0;j<num;j++){
        //si i es igual a j o si es mayor saca un asterisco
        if (i==j || i<j){
           
        document.write("*");}
         //si no un espacio       
        else{
            document.write("  &nbsp");
            
        }

    }
    //un salto de linea 
    document.write("<br>");
}