import iconoCarrito from "./iconoCarrito.js";

const encabezadoHome = () => {
  const template = `
  <div class="encabezadoHome-interno">
    <div>
      <img src="img/logo.png" alt="AMOVIES">
    </div>
    <div>Home</div>
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
