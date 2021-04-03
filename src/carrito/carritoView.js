const carritoView = () => {
  const template = `<div>carritoView</div>`;
  const sectionElement = document.createElement("section");
  sectionElement.innerHTML = template;
  return sectionElement;
};

export default carritoView;

const renderizado = () => {
  const container = document.querySelector("#container");
  container.appendChild(carritoView());
};
renderizado();
