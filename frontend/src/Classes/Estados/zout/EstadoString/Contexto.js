"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextoString = void 0;
class ContextoString {
    constructor(estado) {
        this.estado = estado;
    }
    cambioDeEstado(estado) {
        this.estado = estado;
    }
    getEstado() {
        return this.estado.getEstado();
    }
}
exports.ContextoString = ContextoString;
//# sourceMappingURL=Contexto.js.map