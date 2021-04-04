import encabezadoHome from "./encabezadoHome.js";
import inputHome from "./inputHome.js";
import listaPeliculas from "./listaPeliculas.js";
import paginacion from "./paginacion.js"

const homeView = () => {
  const wrapperElement = document.createElement("div");
  wrapperElement.classList.add('homeView')

  wrapperElement.appendChild(encabezadoHome());
  wrapperElement.appendChild(inputHome());
  wrapperElement.appendChild(listaPeliculas());
  wrapperElement.appendChild(paginacion());
  return wrapperElement;
};

export default homeView;

