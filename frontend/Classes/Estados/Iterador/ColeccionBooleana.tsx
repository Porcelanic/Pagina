import { Coleccion } from "./Coleccion";
import { Iterador } from "./Iterador";
import { IteradorBooleano } from "./IteradorBooleano";
import { EstadoBooleano } from "../EstadoBooleano/Estado";
export class ColeccionBooleana extends Coleccion{
    private array:EstadoBooleano[];
    constructor(){
        super();
        this.array= new Array(2);
    }

    crearIterador(): void {
        this.iterador=new IteradorBooleano(this);
    }

    getArrayLenght():number{
        return this.array.length;
    }

    buscar(number: number) {
        return this.array[number];
    }

    getIterador(): Iterador {
        return this.iterador;
    }
}