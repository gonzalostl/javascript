function OrdenarArray() {
    
    let array = [];
  
    for (let i = 0; i < 10; i++) {
      array.push(Math.floor(Math.random() * 100) + 1);
    }
  
    array.sort();
  
    
    return array;
  }
  
  
  var resultado = OrdenarArray();
  document.write(resultado);
  