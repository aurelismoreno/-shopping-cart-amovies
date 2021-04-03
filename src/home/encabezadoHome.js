import iconoCarrito from "./iconoCarrito.js";

const encabezadoHome = () => {
  const template = `
  <div>
    <div>Logo</div>
    <div>Titulo</div>
    <div id="carrito"></div>
  </div>
  `;
  const sectionElement = document.createElement("div");
  sectionElement.classList.add("encabezadoHome");
  sectionElement.innerHTML = template;

  const carritoElement = sectionElement.querySelector("#carrito");
  carritoElement.appendChild(iconoCarrito());

  return sectionElement;
};

export default encabezadoHome;
