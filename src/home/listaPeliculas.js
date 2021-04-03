import itemPelicula from "./itemPelicula.js";

const array = [0, 1, 2, 3];

const listaPeliculas = () => {
  const sectionElement = document.createElement("div");
  sectionElement.classList.add("listaPeliculas");

  array.forEach((n) => {
    sectionElement.appendChild(itemPelicula());
  });
  return sectionElement;
};

export default listaPeliculas;
