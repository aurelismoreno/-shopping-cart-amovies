import iconoCarrito from "./iconoCarrito.js";

const encabezadoHome = () => {
  const template = `
  <div class="encabezadoHome-interno">
    <div>
      <a href="?view=home">
        <img src="img/logo.png" alt="AMOVIES">
      </a>
    </div>
    <div>Home</div>
    <div class="encabezadoHome-carrito"></div>
  </div>
  `;
  const wrapperElement = document.createElement("div");
  wrapperElement.classList.add("encabezadoHome");
  wrapperElement.innerHTML = template;

  const carritoElement = wrapperElement.querySelector(".encabezadoHome-carrito");
  carritoElement.appendChild(iconoCarrito());
  return wrapperElement;
};

export default encabezadoHome;
