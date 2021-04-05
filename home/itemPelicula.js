import carrito from '../carrito-api.js';

const precioPelicula = 10;

const itemPelicula = (pelicula) => {
	pelicula.precio = precioPelicula;
	const template = `
  <div class="itemPelicula-interno">
    <div>
      <img src="${pelicula.Poster}" alt="AMOVIES" class="itemPelicula-imagen">
    </div>
    <div>${pelicula.Title}</div>
    <div>${pelicula.Type}</div>
    <div>${pelicula.Year}</div>
    <div>USD${pelicula.precio}</div>
    <div>
      <button type="button" class="itemPelicula-buttonAnadir">Añadir</button>
    </div>
  </div>
  `;

	const wrapperElement = document.createElement('div');
	wrapperElement.classList.add('itemPelicula');
	wrapperElement.innerHTML = template;

	const anadirElementOnclick = (evt) => {
		evt.preventDefault();

		carrito.agregar(pelicula, 1);
	};

	const anadirElement = wrapperElement.querySelector(
		'.itemPelicula-buttonAnadir'
	);
	anadirElement.addEventListener('click', anadirElementOnclick);

	return wrapperElement;
};

export default itemPelicula;
