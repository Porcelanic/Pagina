import { Iterador } from "./Iterador";
import { EstadoBooleano } from "../EstadoBooleano/Estado";
import { ColeccionBooleana } from "./ColeccionBooleana";
import { EstadoFalso } from "../EstadoBooleano/EstadoFalso";
import { EstadoVerdadero } from "../EstadoBooleano/EstadoVerdadero";
export class IteradorBooleano extends Iterador{
    private array: EstadoBooleano;
    private indexActual: number;

    constructor(ColeccionBooleana:ColeccionBooleana){
        super();
        this.coleccion=ColeccionBooleana;
        this.indexActual=0;
    }

    primero():EstadoBooleano{
        this.indexActual=0;
        return this.array[this.indexActual];
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

    public creacionDeEstados(name:string): EstadoBooleano{
        let estado: EstadoBooleano;
        if(name=="Verdad"){
            this.coleccion.agregar(this.indexActual-1,new EstadoVerdadero());
            estado=this.coleccion.buscar(this.indexActual-1);
        }else{
            this.coleccion.agregar(this.indexActual-1,new EstadoFalso());
            estado=this.coleccion.buscar(this.indexActual-1);
        }
        return estado;
    }

    public buscarNombre(name: string): EstadoBooleano {
        let estado:EstadoBooleano;
        this.indexActual=0;
        do{
            estado=this.siguiente();
            if(!estado){
                estado=this.creacionDeEstados(name);
                break;
            }else if(estado.getName()==name){
                break;
            }
        }while(this.tieneSiguiente())
        return estado;
    }
}