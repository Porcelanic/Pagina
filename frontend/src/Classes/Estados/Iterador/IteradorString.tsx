import { Iterador } from "./Iterador";
import { EstadoString } from "../EstadoString/EstadoString";
import { ColeccionString } from "./ColeccionString";
import { EstadoBooleano } from "../EstadoBooleano/EstadoBooleano";
export class IteradorString extends Iterador{
    constructor(ColeccionString:ColeccionString){
        super();
        this.coleccion=ColeccionString;
        this.indexActual=0;
    }

    getIndex():number{
        return this.indexActual;
    };

    siguiente():EstadoString{
        this.indexActual++;
        return this.coleccion.buscar(this.indexActual-1);
    };

    public tieneSiguiente(): boolean {
        if(this.indexActual<this.coleccion.getArrayLenght()){
            return true;
        }else{
            return false;
        }
    }

    public buscarNombre(name: string): EstadoString {
        let estado:EstadoString;
        this.indexActual=0;
        do{
            estado=this.siguiente();
            if(!estado){
                break;
            }else if(estado.getName()==name){
                break;
            }
        }while(this.tieneSiguiente())
        return estado;
    }
}