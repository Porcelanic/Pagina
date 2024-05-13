
import { FlyweightFactoryBooleano } from "../FlyweightEstadoBooleano/FlyweightFactoryBooleano";
import { EstadoBooleano } from "./Estado";

export class ContextoBooleano{
    private estado: EstadoBooleano;
    private flyWeight:FlyweightFactoryBooleano;

    constructor(){
        this.flyWeight=FlyweightFactoryBooleano.singleton();
        this.estado=this.flyWeight.getFlyWeight("Mentira");
    }

    cambioDeEstado(){
        if(this.estado.getName()=="Verdad"){
            this.estado=this.flyWeight.getFlyWeight("Mentira");
        }else{
            this.estado=this.flyWeight.getFlyWeight("Verdad");
        }
    }

    getEstado():boolean{
        return this.estado.getEstado();
    }
}