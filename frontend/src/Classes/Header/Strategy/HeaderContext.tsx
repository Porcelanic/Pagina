import HeaderStrategy from "./HeaderStrategy";
import ClienteHeaderStrategy from "./ClienteHeaderStrategy";
import NoAuthHeaderStrategy from "./NoAuthHeaderStrategy";
import ArtistaHeaderStrategy from "./ArtistaHeaderStrategy";

// Clase de contexto que gestiona la estrategia
class HeaderContext {
  private strategy: HeaderStrategy; // Se deckara el objeto de tipo estrategia

  constructor() {
    this.strategy = new NoAuthHeaderStrategy(); // Estrategia inicial por defecto
  }

  public setStrategy(strategy: HeaderStrategy): void {
    this.strategy = strategy;
  }

  // Método para obtener y renderizar el navbar según el navbar necesario
  public renderNavbar(isUserAuthenticated: boolean): JSX.Element {
    let tipoCliente = localStorage.getItem("tipoDeCliente");

    if (isUserAuthenticated && tipoCliente == "Cliente") {
      this.setStrategy(new ClienteHeaderStrategy());
    } else if (isUserAuthenticated && tipoCliente == "Artista") {
      this.setStrategy(new ArtistaHeaderStrategy());
    } else {
      this.setStrategy(new NoAuthHeaderStrategy());
    }
    return this.strategy.renderNavbar(); // Renderiza el navbar según la estrategia
  }
}

export default HeaderContext;
