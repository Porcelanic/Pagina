import { Iterador } from "./Iterador";
import { EstadoBooleano } from "../EstadoBooleano/EstadoBooleano";
import { ColeccionBooleana } from "./ColeccionBooleana";
export class IteradorBooleano extends Iterador{
    constructor(ColeccionBooleana:ColeccionBooleana){
        super();
        this.coleccion=ColeccionBooleana;
        this.indexActual=0;
    }

    getIndex():number{
        return this.indexActual;
    };

    siguiente():EstadoBooleano{
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

    public buscarNombre(name: string): EstadoBooleano {
        let estado:EstadoBooleano;
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