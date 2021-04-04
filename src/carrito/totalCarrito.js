import carrito from '../carrito-api.js';

const totalCarrito = () => {
	const template = `Total:USD${carrito.getTotal()}`;
	const wrapperElement = document.createElement('div');
	wrapperElement.classList.add('totalCarrito');
	wrapperElement.innerHTML = template;

	const refrescar = () => {
		wrapperElement.innerHTML = `Total:USD${carrito.getTotal()}`;
	};

	document.addEventListener('cantidadesActual', refrescar);
	return wrapperElement;
};

export default totalCarrito;
