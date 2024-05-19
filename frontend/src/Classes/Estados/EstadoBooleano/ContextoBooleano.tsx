
import { FlyweightFactoryString } from "../FlyweightEstadoString/FlyweightFactoryString";
import { EstadoBooleano } from "./EstadoBooleano";

export class ContextoBooleano{
    private estado: EstadoBooleano;
    private flyWeight:FlyweightFactoryString;

    constructor(){
        this.flyWeight=FlyweightFactoryString.singleton();
        this.estado=this.flyWeight.getFlyWeightBoolean("Falso");
    }

    cambioDeEstado(){
        if(this.estado.getName()=="Verdad"){
            this.estado=this.flyWeight.getFlyWeightBoolean("Falso");
        }else{
            this.estado=this.flyWeight.getFlyWeightBoolean("Verdad");
        }
    }

    getEstado():boolean{
        return this.estado.getEstado();
    }

    getEstadoC():EstadoBooleano{
        return this.estado;
    }
}