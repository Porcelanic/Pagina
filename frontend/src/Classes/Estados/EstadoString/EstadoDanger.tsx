import { EstadoString } from "./EstadoString";
export class EstadoDanger implements EstadoString{
    private static instancia: EstadoDanger;
    private estado:string;
    private name:string;

    constructor(){
        this.name="Peligro";
        this.estado="danger";
    }

    getName(): string {
        return this.name;
    }

    getEstado(): string {
        return this.estado;
    }
}