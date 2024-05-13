import { EstadoBooleano } from "./Estado";
export class EstadoVerdadero implements EstadoBooleano{
    private estado:boolean;
    private name:string;

    constructor(){
        this.name="Verdad";
        this.estado=true;
    }

    getName(): string {
        return this.name;
    }

    getEstado(): boolean {
        return this.estado;
    }
}