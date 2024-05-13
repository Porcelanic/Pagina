import { EstadoString } from "./Estado";
export class EstadoSuccess implements EstadoString{
    private estado:string;
    private name:string;

    constructor(){
        this.name="Exito";
        this.estado="success";
    }

    getName(): string {
        return this.name;
    }

    getEstado(): string {
        return this.estado;
    }
}