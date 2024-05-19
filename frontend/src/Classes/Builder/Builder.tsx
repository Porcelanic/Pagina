import Carta from "./Carta";

export abstract class Builder {
    protected carta:Carta;

    constructor() {
        this.carta = new Carta();
    }

    abstract construirParte(propiedades: { img: string, text: string, price?: number, artista?: string, style?: string }): void;

    getCarta():Carta{
        return this.carta;
    }
}