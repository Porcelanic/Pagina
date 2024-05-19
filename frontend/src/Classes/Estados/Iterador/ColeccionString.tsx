import { Coleccion } from "./Coleccion";
import { Iterador } from "./Iterador";
import { IteradorString } from "./IteradorString";
import { EstadoString } from "../EstadoString/EstadoString";

export class ColeccionString extends Coleccion{
    constructor(){
        super();
        this.array= new Array(2);
    }

    crearIterador(): Iterador {
        return new IteradorString(this);
    }

    getArrayLenght():number{
        return this.array.length;
    }

    buscar(number: number): EstadoString {
        return this.array[number];
    }

    agregar(number: number, EstadoString:EstadoString) {
        this.array[number]=EstadoString;
    }
}