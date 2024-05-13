import { Iterador } from "./Iterador";
export abstract class Coleccion{
    public iterador: Iterador;

    abstract crearIterador(): void;

    abstract getArrayLenght(): number;

    abstract buscar(number:number):any;
}