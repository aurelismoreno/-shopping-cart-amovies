import encabezadoCarrito from "./encabezadoCarrito.js";
import cantidadItems from "./cantidadItems.js";
import listadoCarrito from "./listadoCarrito.js";
import subtotal from "./subtotal.js";

const carritoView = () => {
  const wrapperElement = document.createElement("div");
  wrapperElement.classList.add("carritoView");
  wrapperElement.appendChild(encabezadoCarrito());
  wrapperElement.appendChild(cantidadItems());
  wrapperElement.appendChild(listadoCarrito());
  wrapperElement.appendChild(subtotal());
  return wrapperElement;
};

export default carritoView;

const renderizado = () => {
  const container = document.querySelector("#container");
  container.appendChild(carritoView());
};
renderizado();
