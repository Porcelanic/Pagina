"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextoBooleano = void 0;
const FlyweightFactoryBooleano_1 = require("../FlyweightEstadoBooleano/FlyweightFactoryBooleano");
class ContextoBooleano {
    constructor() {
        this.flyWeight = FlyweightFactoryBooleano_1.FlyweightFactoryBooleano.singleton();
        this.estado = this.flyWeight.getFlyWeight("Mentira");
    }
    cambioDeEstado() {
        if (this.estado.getName() == "Verdad") {
            this.estado = this.flyWeight.getFlyWeight("Mentira");
        }
        else {
            this.estado = this.flyWeight.getFlyWeight("Verdad");
        }
    }
    getEstado() {
        return this.estado.getEstado();
    }
}
exports.ContextoBooleano = ContextoBooleano;
//# sourceMappingURL=Contexto.js.map