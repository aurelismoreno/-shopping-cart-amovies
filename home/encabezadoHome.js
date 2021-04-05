import iconoCarrito from "./iconoCarrito.js";

const encabezadoHome = () => {
  const template = `
  <div class="encabezadoHome-interno">
    <div>
      <a href="?view=home">
        <img src="img/logo.png" alt="AMOVIES" class="encabezadoHome-logo">
      </a>
    </div>
    <div class="inputHome-interno">
      <input id="inputHomeBuscar" type="text" placeholder="Busca tu pelicula favorita">
      <button class="inputHome-buscar">
        <i class="fas fa-search"></i>
      </button>
    </div>
    <div class="encabezadoHome-carrito"></div>
  </div>
  `;
  const wrapperElement = document.createElement("div");
  wrapperElement.classList.add("encabezadoHome");
  wrapperElement.innerHTML = template;

  const buscarElementOnclick = (evt) => {
		evt.preventDefault();
		const inputBuscarElement = wrapperElement.querySelector('#inputHomeBuscar');
		const tituloBuscar = inputBuscarElement.value;
		const url = `?view=home&search=${encodeURI(tituloBuscar)}`;
		window.location = url;
	};

	const buscarElement = wrapperElement.querySelector('.inputHome-buscar');

	buscarElement.addEventListener('click', buscarElementOnclick);

  const carritoElement = wrapperElement.querySelector(".encabezadoHome-carrito");
  carritoElement.appendChild(iconoCarrito());
  return wrapperElement;
};

export default encabezadoHome;
