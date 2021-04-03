const encabezadoCarrito = () => {
  const template = `<div>encabezadoCarrito</div>`;
  const wrapperElement = document.createElement("div");
  wrapperElement.classList.add("encabezadoCarrito");
  wrapperElement.innerHTML = template;
  return wrapperElement;
};

export default encabezadoCarrito;
