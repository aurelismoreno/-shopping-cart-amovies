import itemPelicula from './itemPelicula.js';

const apiUrl = 'http://www.omdbapi.com/?apikey=d8a7f8b1&';

const listaPeliculas = () => {
	const urlParams = new URLSearchParams(window.location.search);
	const tituloBuscar = urlParams.get('search') || 'happy';

	const wrapperElement = document.createElement('div');
	wrapperElement.classList.add('listaPeliculas');

	const renderPeliculas = () => {
		fetch(`${apiUrl}s=${encodeURI(tituloBuscar)}`)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				const arrayPeliculas = data.Search;
				console.log(data);
				arrayPeliculas.forEach((pelicula) => {
					wrapperElement.appendChild(itemPelicula(pelicula));
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};
	renderPeliculas();
	return wrapperElement;
};

export default listaPeliculas;
