import { EstadoBooleano } from "./Estado";
export class EstadoFalso implements EstadoBooleano{
    private estado:boolean;
    private name:string;

    constructor(){
        this.name="Mentira";
        this.estado=false;
    }

    getName(): string {
        return this.name;
    }

    getEstado(): boolean {
        return this.estado;
    }
}