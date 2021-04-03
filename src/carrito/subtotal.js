const subtotal = () => {
  const template = `<div>subtotal</div>`;
  const wrapperElement = document.createElement("div");
  wrapperElement.classList.add("subtotal");
  wrapperElement.innerHTML = template;
  return wrapperElement;
};

export default subtotal;
