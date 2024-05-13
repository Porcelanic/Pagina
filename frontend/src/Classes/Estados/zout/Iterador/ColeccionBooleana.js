"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColeccionBooleana = void 0;
const Coleccion_1 = require("./Coleccion");
const IteradorBooleano_1 = require("./IteradorBooleano");
class ColeccionBooleana extends Coleccion_1.Coleccion {
    constructor() {
        super();
        this.array = new Array(2);
    }
    printArray() {
        this.array.forEach(item => {
            console.log(item);
        });
    }
    crearIterador() {
        this.iterador = new IteradorBooleano_1.IteradorBooleano(this);
    }
    getArrayLenght() {
        return this.array.length;
    }
    buscar(number) {
        return this.array[number];
    }
    getIterador() {
        return this.iterador;
    }
    agregar(number, EstadoBooleano) {
        this.array[number] = EstadoBooleano;
    }
}
exports.ColeccionBooleana = ColeccionBooleana;
//# sourceMappingURL=ColeccionBooleana.js.map