const encabezadoHome = () => {
  const template = `<div>encabezadoHome</div>`;
  const sectionElement = document.createElement("section");
  sectionElement.innerHTML = template;
  return sectionElement;
};

export default encabezadoHome;

const renderizado = () => {
  const container = document.querySelector("#container");
  container.appendChild(encabezadoHome());
};
renderizado();