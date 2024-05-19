import { EstadoString } from "./EstadoString";
export class EstadoSuccess implements EstadoString{
    private static instancia: EstadoSuccess;
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