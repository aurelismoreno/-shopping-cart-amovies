const iconoCarrito = () => {
  const template = `<div>iconoCarrito</div>`;
  const wrapperElement = document.createElement("div");
  wrapperElement.classList.add("iconoCarrito");

  wrapperElement.innerHTML = template;
  return wrapperElement;
};

export default iconoCarrito;
