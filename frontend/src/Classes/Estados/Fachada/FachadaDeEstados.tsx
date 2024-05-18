import { ContextoBooleano } from "../EstadoBooleano/ContextoBooleano";
import { ContextoString } from "../EstadoString/ContextoString";

export class FachadaDeEstados{
    contextoEstadoDeAlerta: ContextoString;
    contextoMostrarAlerta: ContextoBooleano;

    constructor(){
        this.contextoEstadoDeAlerta=new ContextoString();
        this.contextoMostrarAlerta=new ContextoBooleano();
    }

    cambioEstadoDeAlerta(num:number): string{
        if(num===1 && this.contextoEstadoDeAlerta.getEstado()!=="danger"){
            this.contextoEstadoDeAlerta.cambioDeEstado();
        }else if (num!==1){
            this.contextoEstadoDeAlerta.cambioDeEstado();
        }
        return this.contextoEstadoDeAlerta.getEstado();
    }

    cambioMostrarAlerta(): boolean{
        this.contextoMostrarAlerta.cambioDeEstado();
        return this.contextoMostrarAlerta.getEstado();
    }

    getEstadoDeAlerta(): string{
        return this.contextoEstadoDeAlerta.getEstado();
    }

    getMostrarAlerta(): boolean{
        return this.contextoMostrarAlerta.getEstado();
    }
}