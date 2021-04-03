const encabezadoCarrito = () => {
  const template = `<div>encabezadoCarrito</div>`;
  const sectionElement = document.createElement("div");
  sectionElement.classList.add("encabezadoCarrito");
  sectionElement.innerHTML = template;
  return sectionElement;
};

export default encabezadoCarrito;
