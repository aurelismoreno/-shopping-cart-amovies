const inputHome = () => {
	const template = `
	<div class="inputHome-interno">
		<input id="inputHomeBuscar" type="text" placeholder="Busca tu pelicula favorita">
		<button class="inputHome-buscar">
			<i class="fas fa-search"></i>
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
		const url = `?view=home&search=${encodeURI(tituloBuscar)}`;
		window.location = url;
	};

	const buscarElement = wrapperElement.querySelector('.inputHome-buscar');

	buscarElement.addEventListener('click', buscarElementOnclick);

	return wrapperElement;
};

export default inputHome;
