import { Coleccion } from "./Coleccion"
export abstract class Iterador {
    protected coleccion: Coleccion;

    public abstract primero():void;

    public abstract siguiente():void;

    public abstract tieneSiguiente():boolean;
}