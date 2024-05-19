import { Coleccion } from "./Coleccion";
import { Iterador } from "./Iterador";
import { IteradorBooleano } from "./IteradorBooleano";
import { EstadoBooleano } from "../EstadoBooleano/EstadoBooleano";

export class ColeccionBooleana extends Coleccion{
    constructor(){
        super();
        this.array= new Array(2);
    }

    crearIterador(): Iterador {
        return new IteradorBooleano(this);
    }

    getArrayLenght():number{
        return this.array.length;
    }

    buscar(number: number): EstadoBooleano {
        return this.array[number];
    }

    agregar(number: number, EstadoBooleano:EstadoBooleano) {
        this.array[number]=EstadoBooleano;
    }
}