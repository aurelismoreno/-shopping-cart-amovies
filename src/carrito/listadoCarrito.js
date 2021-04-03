import itemCarrito from "./itemCarrito.js";

const array = [0, 1, 2, 3];

const listadoCarrito = () => {
  const sectionElement = document.createElement("div");
  sectionElement.classList.add("listaCarrito");
  array.forEach((n) => {
    sectionElement.appendChild(itemCarrito());
  });
  return sectionElement;
};

export default listadoCarrito;
