import Carta from "./Carta";
import { BuilderConcreto } from "./BuilderConcreto";

// Director
class Director {
  private builder: BuilderConcreto;

  constructor(propiedades: { img: string, text: string, price?: number, artista?: string, style?: string }) {
    this.builder = new BuilderConcreto();
    this.builder.construirParte(propiedades);
    this.builder.crearCarta();
  }

  construir(): Carta {
    return this.builder.getResultado();
  }
}

export default Director;
