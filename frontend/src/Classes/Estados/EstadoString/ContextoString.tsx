
import { FlyweightFactoryString } from "../FlyweightEstadoString/FlyweightFactoryString";
import { EstadoString } from "./EstadoString";

export class ContextoString{
    private estado: EstadoString;
    private flyWeight:FlyweightFactoryString;

    constructor(){
        this.flyWeight=FlyweightFactoryString.singleton();
        this.estado=this.flyWeight.getFlyWeightString("Peligro");
    }

    cambioDeEstado(){
        if(this.estado.getName()=="Exito"){
            this.estado=this.flyWeight.getFlyWeightString("Peligro");
        }else{
            this.estado=this.flyWeight.getFlyWeightString("Exito");
        }
    }

    getEstado():string{
        return this.estado.getEstado();
    }

    getEstadoC():EstadoString{
        return this.estado;
    }
}