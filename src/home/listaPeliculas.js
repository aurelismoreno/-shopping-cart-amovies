import itemPelicula from "./itemPelicula.js";

const array = [0, 1, 2, 3];

const listaPeliculas = () => {
  const wrapperElement = document.createElement("div");
  wrapperElement.classList.add("listaPeliculas");

  array.forEach((n) => {
    wrapperElement.appendChild(itemPelicula());
  });
  return wrapperElement;
};

export default listaPeliculas;
