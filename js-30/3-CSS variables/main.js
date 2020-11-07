const inputs = document.querySelectorAll(".controls input");
// this returns a node list
// which is similar to an array
// but you can't use array methods on node lists (map, filter ...)
// but you can use forEach, keys and values ... on a node list

function handleUpdate() {
  // in a function declaration, this is undefined ... (?)
  const suffix = this.dataset.sizing || "";
  // dataset is an object returning DOMstringMap {sizing: "px"}
  // which is the custom data attribute we created in the html
  // the pipe || prevents us to see "undefined" for the color picker which has no suffix (no custom data-thing)
  console.log("name", this.name);
  // console.log("documentelement", document.documentElement);
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
  //Document.documentElementrenvoie l'Element qui est l'élément racine du document (par exemple, l'élément <html> pour les documents HTML).
  // ici c'est bien ce qu'on veut : les variables :root en début de CSS qui s'appliquent à tout le html
  // object.setProperty (propertyName, propertyValue, priority);
  // If a property with the same name exists on the current style object, then it modifies its value.
  console.log("value", this.value);
  //
}

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
// on change, console.log the value

inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
// console.log the value while mouse is moving on the cursors (not even clicking)
