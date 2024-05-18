import { Builder } from "./Builder";
import Carta from "./Carta";

export class BuilderConcreto extends Builder{

      construirParte(propiedades: { img: string, text: string, price?: number, artista?: string, style?: string }): void{
        this.carta.setPropiedades(propiedades);
      }
    
      getResultado(): Carta {
        return this.getCarta();
      }
}