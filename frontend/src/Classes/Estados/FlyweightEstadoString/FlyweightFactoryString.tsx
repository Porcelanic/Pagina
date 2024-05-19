import { EstadoString } from "../EstadoString/EstadoString";
import { Coleccion } from "../Iterador/Coleccion";
import { ColeccionString } from "../Iterador/ColeccionString";
import { Iterador } from "../Iterador/Iterador";
import { EstadoSuccess } from "../EstadoString/EstadoSuccess";
import { EstadoDanger } from "../EstadoString/EstadoDanger";
import { ColeccionBooleana } from "../Iterador/ColeccionBooleana";
import { EstadoBooleano } from "../EstadoBooleano/EstadoBooleano";
import { EstadoFalso } from "../EstadoBooleano/EstadoFalso";
import { EstadoVerdadero } from "../EstadoBooleano/EstadoVerdadero";

export class FlyweightFactoryString{
    private static instancia:FlyweightFactoryString;
    private colecciones:Coleccion[];
    private iteradores:Iterador[];

    private constructor(){
        this.colecciones=new Array(2);
        this.colecciones[0]=new ColeccionString();
        this.colecciones[1]=new ColeccionBooleana();
        this.iteradores=new Array(2);
        this.iteradores[0]=this.colecciones[0].crearIterador();
        this.iteradores[1]=this.colecciones[1].crearIterador();
    }

    public static singleton(): FlyweightFactoryString {
        if(!this.instancia){
            this.instancia=new FlyweightFactoryString();
        }
        return this.instancia;
    }

    public creacionDeEstadosString(name:string): EstadoString{
        let estado: EstadoString;
        if(name=="Exito"){
            this.colecciones[0].agregar(this.iteradores[0].getIndex(),new EstadoSuccess());
            estado=this.colecciones[0].buscar(this.iteradores[0].getIndex());
        }else{
            this.colecciones[0].agregar(this.iteradores[0].getIndex(),new EstadoDanger());
            estado=this.colecciones[0].buscar(this.iteradores[0].getIndex());
        }
        return estado;
    }

    public getFlyWeightString(name:string): EstadoString{
        let estado: EstadoString;
        estado=this.iteradores[0].buscarNombre(name);
        if(!estado){
            estado=this.creacionDeEstadosString(name);
        }
        return estado;
    }

    public creacionDeEstadosBoolean(name:string): EstadoBooleano{
        let estado: EstadoBooleano;
        if(name=="Verdad"){
            this.colecciones[1].agregar(this.iteradores[1].getIndex(),new EstadoVerdadero());
            estado=this.colecciones[1].buscar(this.iteradores[1].getIndex());
        }else{
            this.colecciones[1].agregar(this.iteradores[1].getIndex(),new EstadoFalso());
            estado=this.colecciones[1].buscar(this.iteradores[1].getIndex());
        }
        return estado;
    }

    public getFlyWeightBoolean(name:string): EstadoBooleano{
        let estado: EstadoBooleano;
        estado=this.iteradores[1].buscarNombre(name);
        if(!estado){
            estado=this.creacionDeEstadosBoolean(name);
        }
        return estado;
    }
}