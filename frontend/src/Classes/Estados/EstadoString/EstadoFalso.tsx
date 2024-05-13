import { EstadoString } from "./Estado";
export class EstadoDanger implements EstadoString{
    private estado:string;
    private name:string;

    constructor(){
        this.name="Peligro";
        this.estado="Danger";
    }

    getName(): string {
        return this.name;
    }

    getEstado(): string {
        return this.estado;
    }
}