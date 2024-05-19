import { EstadoString } from "../EstadoString/EstadoString";
import { EstadoBooleano } from "../EstadoBooleano/EstadoBooleano";
import { Iterador } from "./Iterador";
export abstract class Coleccion{
    protected array:any[];

    abstract crearIterador(): Iterador;

    abstract getArrayLenght(): number;

    abstract buscar(number:number):any;

    abstract agregar(number:number, estado:any):void;
}