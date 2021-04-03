import homeView from "./home/homeView.js";
import carritoView from "./carrito/carritoView.js";

const routeView = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const viewName = urlParams.get("view");

  if (viewName === "home" || viewName === null) {
    return homeView();
  }
  if (viewName === "carrito") {
    return carritoView();
  }

  return homeView();
};

export default routeView;

const renderizado = () => {
  const container = document.querySelector("#container");
  container.appendChild(routeView());
};
renderizado();
