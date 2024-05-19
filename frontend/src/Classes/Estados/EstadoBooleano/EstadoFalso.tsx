import { EstadoBooleano } from "./EstadoBooleano";
export class EstadoFalso implements EstadoBooleano{
    private static instancia: EstadoFalso;
    private estado:boolean;
    private name:string;

    constructor(){
        this.name="Falso";
        this.estado=false;
    }

    getName(): string {
        return this.name;
    }

    getEstado(): boolean {
        return this.estado;
    }
}