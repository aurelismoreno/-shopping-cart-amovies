const paginacion = (totalResults) => {
	const urlParams = new URLSearchParams(window.location.search);
	const pageActual = +(urlParams.get('page') || 1);

	const paginacionBoton = (botonTexto, pageNumber) => {
		const template = `${botonTexto}`;
		// BOTON
		const buttonElement = document.createElement('button');
		buttonElement.classList.add('paginacionBoton');
		if (pageNumber === pageActual){
			buttonElement.classList.add('paginacionBoton-activo');
		}
		buttonElement.setAttribute('type', 'button');
		buttonElement.innerHTML = template;

		const buttonElementOnclick = (evt) => {
			evt.preventDefault();

			const tituloBuscar = urlParams.get('search') || 'happy';
			const url = `?view=home&search=${encodeURI(
				tituloBuscar
			)}&page=${pageNumber}`;
			window.location = url;
		};
		buttonElement.addEventListener('click', buttonElementOnclick);

		return buttonElement;
	};
	const cantidadPaginas = Math.round(totalResults / 10);

	const wrapperElement = document.createElement('div');
	wrapperElement.classList.add('paginacion');

	if (pageActual > 1) {
		wrapperElement.appendChild(paginacionBoton('<', pageActual - 1));
	}

	for (let i = 1; i <= cantidadPaginas; i++) {
		wrapperElement.appendChild(paginacionBoton(i, i));
	}
	
	if (pageActual < cantidadPaginas) {
		wrapperElement.appendChild(paginacionBoton('>', pageActual + 1));
	}

	return wrapperElement;
};

export default paginacion;
