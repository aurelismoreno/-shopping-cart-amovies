const homeView = () => {
  const template = `<div>homeView</div>`;
  const sectionElement = document.createElement("section");
  sectionElement.innerHTML = template;
  return sectionElement;
};

export default homeView;

const renderizado = () => {
  const container = document.querySelector("#container");
  container.appendChild(homeView());
};
renderizado();
