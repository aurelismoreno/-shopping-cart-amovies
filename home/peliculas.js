import listaPeliculas from './listaPeliculas.js';
import paginacion from './paginacion.js';

const apiUrl = 'https://www.omdbapi.com/?apikey=d8a7f8b1&';

const peliculas = () => {
    // OBTENER PARAMETRO DE LA RUTA 
	const urlParams = new URLSearchParams(window.location.search);
	const tituloBuscar = urlParams.get('search') || 'happy';
	const pageActual = +(urlParams.get('page') || 1);

	const wrapperElement = document.createElement('div');
	wrapperElement.classList.add('peliculas');

	const renderPeliculas = () => {
		fetch(`${apiUrl}s=${encodeURI(tituloBuscar)}&page=${pageActual}`)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				const arrayPeliculas = data.Search;
				console.log(data);
				wrapperElement.appendChild(listaPeliculas(arrayPeliculas));
				wrapperElement.appendChild(paginacion(data.totalResults));
			})
			.catch((error) => {
				console.log(error);
			});
	};
	renderPeliculas();
	return wrapperElement;
};

export default peliculas;
