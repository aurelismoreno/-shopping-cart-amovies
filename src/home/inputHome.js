const inputHome = () => {
  const template = `
  <div class="inputHome-interno">
    <input type="text" placeholder="Busca tu pelicula favorita ">
    <i class='bx bx-search'></i>
  </div>`;
  const wrapperElement = document.createElement("div");
  wrapperElement.classList.add("inputHome");

  wrapperElement.innerHTML = template;
  return wrapperElement;
};

export default inputHome;
