const apiUrl = 'http://www.omdbapi.com/?apikey=d8a7f8b1&';

const inputHome = (renderListaPelicula, renderPaginacion) => {
	const template = `
	<div class="inputHome-interno">
		<input id="inputHomeBuscar" type="text" placeholder="Busca tu pelicula favorita">
		<button class="inputHome-buscar">
			<i class='bx bx-search'></i>
		</button>
	</div>
  	`;

	const wrapperElement = document.createElement('div');
	wrapperElement.classList.add('inputHome');
	wrapperElement.innerHTML = template;

	const buscarElementOnclick = (evt) => {
		evt.preventDefault();
		const inputBuscarElement = wrapperElement.querySelector('#inputHomeBuscar');
		const tituloBuscar = inputBuscarElement.value;
		fetch(`${apiUrl}s=${encodeURI(tituloBuscar)}`)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data);
				renderListaPelicula(data.Search);
				renderPaginacion();
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const buscarElement = wrapperElement.querySelector('.inputHome-buscar');

	buscarElement.addEventListener('click', buscarElementOnclick);

	return wrapperElement;
};

export default inputHome;
