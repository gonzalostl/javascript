function escapeHTML(texto) {
  //Hago un mapa con los caracteres y su equivalente de HTML escapado
  const mapaCaracteresHtml = {
    '"': "&quot;",
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
  };

  //Reemplazo cualquiera de estos con su equivalente en el mapa
  return texto.replace(/[&"<>]/g, (matches) => mapaCaracteresHtml[matches]);
}

//Un ejemplo
const texto = 'texto de ejemplo con  &, ", <, y > caracteres.';
const textoEscapado = htmlEscapado(texto);
console.log(textoEscapado);
