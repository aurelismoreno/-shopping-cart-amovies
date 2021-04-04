import encabezadoHome from './encabezadoHome.js';
import inputHome from './inputHome.js';
import listaPeliculas from './listaPeliculas.js';
import paginacion from './paginacion.js';

const homeView = () => {
	const wrapperElement = document.createElement('div');
	const listaPeliculaWrapperElement = document.createElement('div');
	const paginacionWrapperElement = document.createElement('div');

	wrapperElement.classList.add('homeView');

	// INSERTAR LISTA DE PELICULA

	const renderListaPelicula = (arrayPelicula) => {
		listaPeliculaWrapperElement.innerHTML = '';
		listaPeliculaWrapperElement.appendChild(listaPeliculas(arrayPelicula));
	};

	const renderPaginacion = () => {
		paginacionWrapperElement.innerHTML = '';
		paginacionWrapperElement.appendChild(paginacion());
	};
	wrapperElement.appendChild(encabezadoHome());
	wrapperElement.appendChild(inputHome(renderListaPelicula, renderPaginacion));
	wrapperElement.appendChild(listaPeliculaWrapperElement);
	wrapperElement.appendChild(paginacionWrapperElement);
	renderListaPelicula([]);
	renderPaginacion();

  

	return wrapperElement;
};

export default homeView;
