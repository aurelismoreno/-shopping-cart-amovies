const listadoCarrito = () => {
  const template = `<div>listadoCarrito</div>`;
  const sectionElement = document.createElement("section");
  sectionElement.innerHTML = template;
  return sectionElement;
};

export default listadoCarrito;

const renderizado = () => {
  const container = document.querySelector("#container");
  container.appendChild(listadoCarrito());
};
renderizado();
