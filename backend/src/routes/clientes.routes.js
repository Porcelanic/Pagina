import { Router } from "express";
import {
  createCliente,
  getCliente,
} from "../controllers/clienteDAO.controller.js";
import {
  createArtista,
  getArtista,
} from "../controllers/artistaDAO.controller.js";
import { createInformacion } from "../controllers/informacionDAO.controller.js";
import { createPedido } from "../controllers/pedidoDAO.controller.js";
import { createCamisa } from "../controllers/camisaDAO.controller.js";
import { saveImage } from "../controllers/imagenDAO.controller.js";
import {
  createEstampado,
  getEstampados,
} from "../controllers/estampadoDAO.controller.js";
import { createPago } from "../controllers/pagoDAO.controller.js";
import {
  getCantidad,
  updateCantidad,
} from "../controllers/materialDAO.controller.js";
const router = Router();

// Rutas para las consultas en cliente
router.post("/clients", createCliente);
router.get("/clients/:email", getCliente);

// Rutas para las consultas en artistas
router.post("/artists", createArtista);
router.get("/artists/:email", getArtista);

// Ruta para insertar la informacion
router.post("/createInformations", createInformacion);
// router.get("/addresses/:email", getDireccion);

// Ruta para insertar el predido
router.post("/createOrders", createPedido);

// Ruta para insertar camisas
router.post("/createShirts", createCamisa);

// Rutas para pago
router.post("/payment", createPago);

// Rutas para obtener la cantidad
router.get("/materialQuantity/:material", getCantidad);
router.post("/updateQuantity", updateCantidad);

// Rutas estampado
router.post("/image", saveImage);
router.post("/estampado", createEstampado);
router.get("/getEstampados", getEstampados);

export default router;
