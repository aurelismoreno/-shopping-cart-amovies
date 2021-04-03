const itemCarrito = () => {
  const template = `
  <div class="itemCarrito-interno">
    <div>
      <img src="img/pelicula.png" alt="AMOVIES" width="100">
    </div>
    <div>
      <div>Nombre</div>
      <div>Descripcion</div>
    </div>
    <div class="itemCarrito-precio">precio</div>
    <div>
      <button name="button">-</button>
      <span>1</span>
      <button name="button">+</button>
    </div>
  </div>
  `;
  const wrapperElement = document.createElement("div");
  wrapperElement.classList.add("itemCarrito");
  wrapperElement.innerHTML = template;
  return wrapperElement;
};

export default itemCarrito;
