import encabezadoCarrito from './encabezadoCarrito.js';
import cantidadItems from './cantidadItems.js';
import listadoCarrito from './listadoCarrito.js';
import totalCarrito from './totalCarrito.js';
import carrito from '../carrito-api.js';

const carritoView = () => {
	const arrayCarrito = carrito.leer();
	const wrapperElement = document.createElement('div');
	wrapperElement.classList.add('carritoView');
	wrapperElement.appendChild(encabezadoCarrito());
	wrapperElement.appendChild(cantidadItems());
	wrapperElement.appendChild(listadoCarrito(arrayCarrito));
	wrapperElement.appendChild(totalCarrito());
	return wrapperElement;
};

export default carritoView;
