const listaPeliculas = () => {
  const template = `<div>listaPeliculas</div>`;
  const sectionElement = document.createElement("section");
  sectionElement.innerHTML = template;
  return sectionElement;
};

export default listaPeliculas;

const renderizado = () => {
  const container = document.querySelector("#container");
  container.appendChild(listaPeliculas());
};
renderizado();
