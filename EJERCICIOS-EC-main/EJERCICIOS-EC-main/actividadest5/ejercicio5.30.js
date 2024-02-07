//reescribo la funcion escapeHTML
function escapeHTML(text) {
  var replacements = [
    ["&", "&amp;"],
    ['"', "&quot;"],
    ["<", "&lt;"],
    [">", "&gt;"],
  ];

  replacements.forEach((replace) => {
    let regex = new RegExp(replace[0], "g");
    text = text.replace(regex, replace[1]);
  });

  return text;
}
