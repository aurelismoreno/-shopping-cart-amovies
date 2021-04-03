const itemPelicula = () => {
  const template = `<div>itemPelicula</div>`;
  const sectionElement = document.createElement("section");
  sectionElement.innerHTML = template;
  return sectionElement;
};

export default itemPelicula;

const renderizado = () => {
  const container = document.querySelector("#container");
  container.appendChild(itemPelicula());
};
renderizado();
