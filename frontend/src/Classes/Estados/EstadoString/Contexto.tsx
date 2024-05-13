import { EstadoString } from "./Estado";
export class ContextoString{
    private estado: EstadoString;

    constructor(estado:EstadoString){
        this.estado=estado;
    }

    cambioDeEstado(estado:EstadoString){
        this.estado=estado;
    }

    getEstado():string{
        return this.estado.getEstado();
    }
}