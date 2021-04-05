const iconoCarrito = () => {
  const template = `
  <div>
    <a href="?view=carrito">
    <i class="fas fa-shopping-cart fa-3x"></i>
    </a>
  </div>`;
  const wrapperElement = document.createElement("div");
  wrapperElement.classList.add("iconoCarrito");

  wrapperElement.innerHTML = template;
  return wrapperElement;
};

export default iconoCarrito;
