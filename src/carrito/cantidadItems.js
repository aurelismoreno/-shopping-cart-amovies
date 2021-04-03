const cantidadItems = () => {
  const template = `<div>cantidadItems</div>`;
  const wrapperElement = document.createElement("div");
  wrapperElement.classList.add("cantidadItems");
  wrapperElement.innerHTML = template;
  return wrapperElement;
};

export default cantidadItems;
