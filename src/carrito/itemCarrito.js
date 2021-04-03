const itemCarrito = () => {
  const template = `<div>itemCarrito</div>`;
  const wrapperElement = document.createElement("div");
  wrapperElement.classList.add("itemCarrito");
  wrapperElement.innerHTML = template;
  return wrapperElement;
};

export default itemCarrito;
