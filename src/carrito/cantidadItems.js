const cantidadItems = () => {
  const template = `<div>cantidadItems</div>`;
  const sectionElement = document.createElement("div");
  sectionElement.classList.add("cantidadItems");
  sectionElement.innerHTML = template;
  return sectionElement;
};

export default cantidadItems;
