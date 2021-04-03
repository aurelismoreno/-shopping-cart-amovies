const inputHome = () => {
  const template = `<div>inputHome</div>`;
  const wrapperElement = document.createElement("div");
  wrapperElement.classList.add("inputHome");

  wrapperElement.innerHTML = template;
  return wrapperElement;
};

export default inputHome;
