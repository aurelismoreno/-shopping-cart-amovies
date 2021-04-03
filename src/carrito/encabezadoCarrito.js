const encabezadoCarrito = () => {
  const template = `<div>encabezadoCarrito</div>`;
  const sectionElement = document.createElement("section");
  sectionElement.innerHTML = template;
  return sectionElement;
};

export default encabezadoCarrito;

const renderizado = () => {
  const container = document.querySelector("#container");
  container.appendChild(encabezadoCarrito());
};
renderizado();
