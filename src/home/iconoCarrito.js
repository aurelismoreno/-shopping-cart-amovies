const iconoCarrito = () => {
  const template = `<div><i class='bx bx-cart'></i></div>`;
  const wrapperElement = document.createElement("div");
  wrapperElement.classList.add("iconoCarrito");

  wrapperElement.innerHTML = template;
  return wrapperElement;
};

export default iconoCarrito;
