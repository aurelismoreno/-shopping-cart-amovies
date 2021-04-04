import itemPelicula from './itemPelicula.js';

const listaPeliculas = (arrayPeliculas) => {
	const wrapperElement = document.createElement('div');
	wrapperElement.classList.add('listaPeliculas');

	arrayPeliculas.forEach((pelicula) => {
		wrapperElement.appendChild(itemPelicula(pelicula));
	});
	return wrapperElement;
};

export default listaPeliculas;
