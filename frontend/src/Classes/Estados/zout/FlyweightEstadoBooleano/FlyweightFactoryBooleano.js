"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlyweightFactoryBooleano = void 0;
const ColeccionBooleana_1 = require("../Iterador/ColeccionBooleana");
class FlyweightFactoryBooleano {
    constructor() {
        this.coleccion = new ColeccionBooleana_1.ColeccionBooleana();
        this.coleccion.crearIterador();
        this.iterador = this.coleccion.getIterador();
    }
    static singleton() {
        if (!this.instancia) {
            this.instancia = new FlyweightFactoryBooleano();
        }
        return this.instancia;
    }
    getFlyWeight(name) {
        return this.iterador.buscarNombre(name);
    }
}
exports.FlyweightFactoryBooleano = FlyweightFactoryBooleano;
//# sourceMappingURL=FlyweightFactoryBooleano.js.map