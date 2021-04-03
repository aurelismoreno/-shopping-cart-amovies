const subtotal = () => {
  const template = `<div>subtotal</div>`;
  const sectionElement = document.createElement("div");
  sectionElement.classList.add("subtotal");
  sectionElement.innerHTML = template;
  return sectionElement;
};

export default subtotal;
