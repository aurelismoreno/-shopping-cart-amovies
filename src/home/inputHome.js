const inputHome = () => {
  const template = `<div>inputHome</div>`;
  const sectionElement = document.createElement("div");
  sectionElement.classList.add("inputHome");

  sectionElement.innerHTML = template;
  return sectionElement;
};

export default inputHome;
