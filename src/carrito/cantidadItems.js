const cantidadItems = () => {
  const template = `<div>cantidadItems</div>`;
  const sectionElement = document.createElement("section");
  sectionElement.innerHTML = template;
  return sectionElement;
};

export default cantidadItems;

const renderizado = () => {
  const container = document.querySelector("#container");
  container.appendChild(cantidadItems());
};
renderizado();
