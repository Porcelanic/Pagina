import { EstadoBooleano } from "./Estado";

export class ContextoBooleano{
    private estado: EstadoBooleano;

    constructor(estado:EstadoBooleano){
        this.estado=estado;
    }

    cambioDeEstado(estado:EstadoBooleano){
        this.estado=estado;
    }

    getEstado():boolean{
        return this.estado.getEstado();
    }
}