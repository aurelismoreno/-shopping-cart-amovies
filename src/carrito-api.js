const carritoKey = 'carrito';

const leer = () => {
	const arrayCarrito = JSON.parse(localStorage.getItem(carritoKey));

	return arrayCarrito || [];
};

const agregar = (pelicula, cantidad) => {
	const arrayCarrito = leer();

	let existeItemPelicula = false;
	for (let i = 0; i < arrayCarrito.length; i++) {
		const dataItemCarrito = arrayCarrito[i];
		if (pelicula.imdbID === dataItemCarrito.imdbID) {
			existeItemPelicula = true;
			if (dataItemCarrito.cantidad + cantidad >= 0) {
				dataItemCarrito.cantidad = dataItemCarrito.cantidad + cantidad;
			}
		}
	}

	if (!existeItemPelicula) {
		const itemCarrito = Object.assign({}, pelicula);
		itemCarrito.cantidad = cantidad;
		arrayCarrito.push(itemCarrito);
	}

	localStorage.setItem(carritoKey, JSON.stringify(arrayCarrito));
};

const getTotal = () => {
	const arrayCarrito = leer();
	let total = 0;
	arrayCarrito.forEach((dataItemCarrito) => {
		total = total + dataItemCarrito.precio * dataItemCarrito.cantidad;
	});

	return total;
};

export default { leer, agregar, getTotal };
