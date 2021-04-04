import encabezadoCarrito from './encabezadoCarrito.js';
import cantidadItems from './cantidadItems.js';
import listadoCarrito from './listadoCarrito.js';
import subtotal from './subtotal.js';
import carrito from '../carrito-api.js';

const carritoView = () => {
	const arrayCarrito = carrito.leer();
	const wrapperElement = document.createElement('div');
	wrapperElement.classList.add('carritoView');
	wrapperElement.appendChild(encabezadoCarrito());
	wrapperElement.appendChild(cantidadItems());
	wrapperElement.appendChild(listadoCarrito(arrayCarrito));
	wrapperElement.appendChild(subtotal(arrayCarrito));
	return wrapperElement;
};

export default carritoView;
