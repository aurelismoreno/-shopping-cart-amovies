import itemPelicula from "./itemPelicula.js";

const array = [0, 1, 2, 3];

const listaPeliculas = () => {
  const sectionElement = document.createElement("section");

  array.forEach((n) => {
    sectionElement.appendChild(itemPelicula());
  });
  return sectionElement;
};

export default listaPeliculas;
