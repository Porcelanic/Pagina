import { EstadoBooleano } from "../EstadoBooleano/Estado";
import { Coleccion } from "../Iterador/Coleccion";
import { ColeccionBooleana } from "../Iterador/ColeccionBooleana";
import { Iterador } from "../Iterador/Iterador";

export class FlyweightFactoryBooleano{
    private static instancia:FlyweightFactoryBooleano;
    private coleccion:Coleccion;
    private iterador:Iterador;

    private constructor(){
        this.coleccion=new ColeccionBooleana();
        this.coleccion.crearIterador();
        this.iterador=this.coleccion.getIterador();
    }
    public static singleton(): FlyweightFactoryBooleano {
        if(!this.instancia){
            this.instancia=new FlyweightFactoryBooleano();
        }
        return this.instancia;
    }



    getFlyWeight(name:string): EstadoBooleano{
        return this.iterador.buscarNombre(name);
    }
}