import { Coleccion } from "./Coleccion"
export abstract class Iterador {
    protected indexActual: number;
    protected coleccion: Coleccion;

    public abstract getIndex(): number;

    public abstract siguiente():void;

    public abstract tieneSiguiente():boolean;

    public abstract buscarNombre(name:string): any;
}