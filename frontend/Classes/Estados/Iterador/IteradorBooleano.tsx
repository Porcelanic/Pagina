import { Iterador } from "./Iterador";
import { EstadoBooleano } from "../EstadoBooleano/Estado";
import { ColeccionBooleana } from "./ColeccionBooleana";
export class IteradorBooleano extends Iterador{
    private array: EstadoBooleano[];
    private indexActual: number;

    constructor(ColeccionBooleana:ColeccionBooleana){
        super();
        this.coleccion=ColeccionBooleana;
    }

    primero():EstadoBooleano{
        this.indexActual=0;
        return this.array[this.indexActual];
    };

    siguiente():EstadoBooleano{
        this.indexActual++;
        return this.array[this.indexActual];
    };

    public tieneSiguiente(): boolean {
        if(this.indexActual+1==this.coleccion.getArrayLenght()){
            return false;
        }else{
            return true;
        }
    }

    public all(): void {
        console.log(this.primero());
        while(this.tieneSiguiente()){
            console.log(this.siguiente());
        }

    }
}