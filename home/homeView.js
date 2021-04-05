import encabezadoHome from './encabezadoHome.js';
import inputHome from './inputHome.js';
import peliculas from './peliculas.js';

const homeView = () => {
	const wrapperElement = document.createElement('div');

	wrapperElement.classList.add('homeView');

	wrapperElement.appendChild(encabezadoHome());
	// wrapperElement.appendChild(inputHome());
	wrapperElement.appendChild(peliculas());

	return wrapperElement;
};

export default homeView;
