const itemPelicula = (pelicula) => {
  const template = `
  <div class="itemPelicula-interno">
    <div>
      <img src="${pelicula.Poster}" alt="AMOVIES" width="150">
    </div>
    <div>${pelicula.Title}</div>
    <div>${pelicula.Type}</div>
    <div>${pelicula.Year}</div>
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
