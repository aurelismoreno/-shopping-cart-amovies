import itemCarrito from "./itemCarrito.js";

const array = [0, 1, 2, 3];

const listadoCarrito = () => {
  const wrapperElement = document.createElement("div");
  wrapperElement.classList.add("listaCarrito");
  array.forEach((n) => {
    wrapperElement.appendChild(itemCarrito());
  });
  return wrapperElement;
};

export default listadoCarrito;
