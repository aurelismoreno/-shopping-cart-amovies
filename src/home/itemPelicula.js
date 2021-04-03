const itemPelicula = () => {
  const template = `<div>itemPelicula</div>`;
  const wrapperElement = document.createElement("div");
  wrapperElement.classList.add("itemPelicula");
  wrapperElement.innerHTML = template;
  return wrapperElement;
};

export default itemPelicula;
