const encabezadoCarrito = () => {
  const template = `
  <div>
    <img src="img/logo.png" alt="AMOVIES"/>
  </div>
  `;
  const wrapperElement = document.createElement("div");
  wrapperElement.classList.add("encabezadoCarrito");
  wrapperElement.innerHTML = template;
  return wrapperElement;
};

export default encabezadoCarrito;
