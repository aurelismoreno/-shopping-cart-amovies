import itemCarrito from "./itemCarrito.js";


const listadoCarrito = (arrayCarrito) => {
  const wrapperElement = document.createElement("div");
  wrapperElement.classList.add("listaCarrito");
  arrayCarrito.forEach((dataItemCarrito) => {
    wrapperElement.appendChild(itemCarrito(dataItemCarrito));
  });
  return wrapperElement;
};

export default listadoCarrito;
