import encabezadoCarrito from "./encabezadoCarrito.js";
import cantidadItems from "./cantidadItems.js";
import listadoCarrito from "./listadoCarrito.js";
import subtotal from "./subtotal.js";

const carritoView = () => {
  const sectionElement = document.createElement("div");
  sectionElement.classList.add("carritoView");
  sectionElement.appendChild(encabezadoCarrito());
  sectionElement.appendChild(cantidadItems());
  sectionElement.appendChild(listadoCarrito());
  sectionElement.appendChild(subtotal());
  return sectionElement;
};

export default carritoView;

const renderizado = () => {
  const container = document.querySelector("#container");
  container.appendChild(carritoView());
};
renderizado();
