import encabezadoHome from "./encabezadoHome.js";
import inputHome from "./inputHome.js";
import listaPeliculas from "./listaPeliculas.js";

const homeView = () => {
  const sectionElement = document.createElement("div");
  sectionElement.classList.add('homeView')

  sectionElement.appendChild(encabezadoHome());
  sectionElement.appendChild(inputHome());
  sectionElement.appendChild(listaPeliculas());
  return sectionElement;
};

export default homeView;

const renderizado = () => {
  const container = document.querySelector("#container");
  container.appendChild(homeView());
};
renderizado();
