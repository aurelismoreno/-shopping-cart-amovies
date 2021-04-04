const encabezadoCarrito = () => {
  const template = `
  <div>
    <a href="?view=home">
      <img src="img/logo.png" alt="AMOVIES">
    </a>
  </div>
  `;
  const wrapperElement = document.createElement("div");
  wrapperElement.classList.add("encabezadoCarrito");
  wrapperElement.innerHTML = template;
  return wrapperElement;
};

export default encabezadoCarrito;
