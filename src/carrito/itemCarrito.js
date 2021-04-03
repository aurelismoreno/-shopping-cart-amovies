const itemCarrito = () => {
  const template = `<div>itemCarrito</div>`;
  const sectionElement = document.createElement("div");
  sectionElement.classList.add("itemCarrito");
  sectionElement.innerHTML = template;
  return sectionElement;
};

export default itemCarrito;
