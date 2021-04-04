const itemPelicula = () => {
  const template = `
  <div class="itemPelicula-interno">
    <div>
      <img src="img/pelicula.png" alt="AMOVIES" width="100">
    </div>
    <div>Nombre</div>
    <div>Precio</div>
    <div>
      <button type="button">Añadir</button>
    </div>
  </div>
  `;
  const wrapperElement = document.createElement("div");
  wrapperElement.classList.add("itemPelicula");
  wrapperElement.innerHTML = template;
  return wrapperElement;
};

export default itemPelicula;
