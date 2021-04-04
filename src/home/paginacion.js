const paginacion = () => {

	const paginacionBoton = (botonTexto) => {

		const template = `${botonTexto}`;

		const wrapperElement = document.createElement('button');
		wrapperElement.classList.add('paginacionBoton');
        wrapperElement.setAttribute('type','button');
		wrapperElement.innerHTML = template;
		return wrapperElement;
	};

	const array = [1, 2, 3, 4, 5, 6];

	const wrapperElement = document.createElement('div');
	wrapperElement.classList.add('paginacion');

    wrapperElement.appendChild(paginacionBoton('<'));
	array.forEach((n) => {
		wrapperElement.appendChild(paginacionBoton(n));
	});
    wrapperElement.appendChild(paginacionBoton('>'));
	return wrapperElement;
};

export default paginacion;
