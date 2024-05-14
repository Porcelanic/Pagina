"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contexto_1 = require("../EstadoBooleano/Contexto");
/*var coleccion:Coleccion=new ColeccionBooleana();
coleccion.crearIterador();
var iterador:Iterador=coleccion.getIterador();
iterador.buscarNombre("Verdad");
var test:EstadoBooleano=iterador.buscarNombre("Mentira");
var test1:EstadoBooleano=iterador.buscarNombre("Mentira");
console.log(test===test1);
console.log(iterador);
console.log(coleccion);
coleccion.printArray();*/
var contexto = new Contexto_1.ContextoBooleano();
console.log(contexto.getEstado());
contexto.cambioDeEstado();
console.log(contexto.getEstado());
contexto.cambioDeEstado();
console.log(contexto.getEstado());
//# sourceMappingURL=Main.js.map