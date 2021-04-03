import iconoCarrito from "./iconoCarrito.js";

const encabezadoHome = () => {
  const template = `
  <div>
    <div>Logo</div>
    <div>Titulo</div>
    <div id="carrito"></div>
  </div>
  `;
  const wrapperElement = document.createElement("div");
  wrapperElement.classList.add("encabezadoHome");
  wrapperElement.innerHTML = template;

  const carritoElement = wrapperElement.querySelector("#carrito");
  carritoElement.appendChild(iconoCarrito());

  return wrapperElement;
};

export default encabezadoHome;
