const iconoCarrito = () => {
  const template = `<div>iconoCarrito</div>`;
  const sectionElement = document.createElement("div");
  sectionElement.classList.add("iconoCarrito");

  sectionElement.innerHTML = template;
  return sectionElement;
};

export default iconoCarrito;
