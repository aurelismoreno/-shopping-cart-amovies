const itemCarrito = () => {
  const template = `<div>itemCarrito</div>`;
  const sectionElement = document.createElement("section");
  sectionElement.innerHTML = template;
  return sectionElement;
};

export default itemCarrito;

const renderizado = () => {
  const container = document.querySelector("#container");
  container.appendChild(itemCarrito());
};
renderizado();
