import { Iterador } from "./Iterador";
export abstract class Coleccion{
    public iterador: Iterador;

    abstract crearIterador(): void;

    abstract getIterador(): Iterador;

    abstract getArrayLenght(): number;

    abstract printArray():void

    abstract buscar(number:number):any;

    abstract agregar(number:number, any:any):void;
}