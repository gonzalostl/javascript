/*crea un programa que muestre en consola cuántos elementos p,a y span hay
en una pieza de código HTML*/

  function contarElementos(tagName) {
    const elementos = document.getElementsByTagName(tagName);
    return elementos.length;
  }

  const P = contarElementos('p');
  const A = contarElementos('a');
  const Span = contarElementos('span');

  
  console.log(`Elementos <p>: ${P}`);
  console.log(`Elementos <a>: ${A}`);
  console.log(`Elementos <span>: ${Span}`);