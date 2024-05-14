"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IteradorBooleano = void 0;
const Iterador_1 = require("./Iterador");
const EstadoFalso_1 = require("../EstadoBooleano/EstadoFalso");
const EstadoVerdadero_1 = require("../EstadoBooleano/EstadoVerdadero");
class IteradorBooleano extends Iterador_1.Iterador {
    constructor(ColeccionBooleana) {
        super();
        this.coleccion = ColeccionBooleana;
        this.indexActual = 0;
    }
    primero() {
        this.indexActual = 0;
        return this.array[this.indexActual];
    }
    ;
    siguiente() {
        this.indexActual++;
        return this.coleccion.buscar(this.indexActual - 1);
    }
    ;
    tieneSiguiente() {
        if (this.indexActual < this.coleccion.getArrayLenght()) {
            return true;
        }
        else {
            return false;
        }
    }
    creacionDeEstados(name) {
        let estado;
        if (name == "Verdad") {
            this.coleccion.agregar(this.indexActual - 1, new EstadoVerdadero_1.EstadoVerdadero());
            estado = this.coleccion.buscar(this.indexActual - 1);
        }
        else {
            this.coleccion.agregar(this.indexActual - 1, new EstadoFalso_1.EstadoFalso());
            estado = this.coleccion.buscar(this.indexActual - 1);
        }
        return estado;
    }
    buscarNombre(name) {
        let estado;
        this.indexActual = 0;
        do {
            estado = this.siguiente();
            if (!estado) {
                estado = this.creacionDeEstados(name);
                break;
            }
            else if (estado.getName() == name) {
                break;
            }
        } while (this.tieneSiguiente());
        return estado;
    }
}
exports.IteradorBooleano = IteradorBooleano;
//# sourceMappingURL=IteradorBooleano.js.map