const itemPelicula = () => {
  const template = `<div>itemPelicula</div>`;
  const sectionElement = document.createElement("div");
  sectionElement.classList.add("itemPelicula");
  sectionElement.innerHTML = template;
  return sectionElement;
};

export default itemPelicula;
