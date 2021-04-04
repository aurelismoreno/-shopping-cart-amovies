import carrito from '../carrito-api.js';
const itemCarrito = (dataItemCarrito) => {
	const template = `
  <div class="itemCarrito-interno">
    <div>
      <img src="${dataItemCarrito.Poster}" alt="AMOVIES" width="100">
    </div>
    <div>
      <div>${dataItemCarrito.Title}</div>
      <div>${dataItemCarrito.Type}</div>
      <div>${dataItemCarrito.Year}</div>
      
    </div>
    <div class="itemCarrito-precio">${dataItemCarrito.precio}</div>
    <div>
      <button name="button" class="itemCarrito-eliminar">-</button>
      <span class="itemCarrito-cantidad">${dataItemCarrito.cantidad}</span>
      <button name="button" class="itemCarrito-agregar">+</button>
    </div>
    <div><span class="itemCarrito-subtotal">${
			dataItemCarrito.precio * dataItemCarrito.cantidad
		}</span></div>
  </div>
  `;
	const wrapperElement = document.createElement('div');
	wrapperElement.classList.add('itemCarrito');
	wrapperElement.innerHTML = template;

	const refrescar = () => {
		const spanCantidadElement = wrapperElement.querySelector(
			'.itemCarrito-cantidad'
		);
		const spanSubtotalElement = wrapperElement.querySelector(
			'.itemCarrito-subtotal'
		);

		spanCantidadElement.innerHTML = `${dataItemCarrito.cantidad}`;
		spanSubtotalElement.innerHTML = `${
			dataItemCarrito.precio * dataItemCarrito.cantidad
		}`;
		const event = new Event('cantidadesActual');
		document.dispatchEvent(event);
	};

	//ELIMINAR ITEM DE CARRITO
	const eliminarElementOnclick = (evt) => {
		evt.preventDefault();

		if (dataItemCarrito.cantidad > 0) {
			carrito.agregar(dataItemCarrito, -1);
			dataItemCarrito.cantidad = dataItemCarrito.cantidad - 1;
			refrescar();
		}
	};

	const eliminarElement = wrapperElement.querySelector('.itemCarrito-eliminar');
	eliminarElement.addEventListener('click', eliminarElementOnclick);

	// AGREGAR ITEM DE CARRITO
	const agregarElementOnclick = (evt) => {
		evt.preventDefault();
		carrito.agregar(dataItemCarrito, 1);
		dataItemCarrito.cantidad = dataItemCarrito.cantidad + 1;
		refrescar();
	};

	const agregarElement = wrapperElement.querySelector('.itemCarrito-agregar');
	agregarElement.addEventListener('click', agregarElementOnclick);

	return wrapperElement;
};

export default itemCarrito;
