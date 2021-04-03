const inputHome = () => {
  const template = `<div>inputHome</div>`;
  const sectionElement = document.createElement("section");
  sectionElement.innerHTML = template;
  return sectionElement;
};

export default inputHome;

const renderizado = () => {
  const container = document.querySelector("#container");
  container.appendChild(inputHome());
};
renderizado();
