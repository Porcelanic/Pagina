import { Router } from "express";
import {
  createCliente,
  getCliente,
} from "../controllers/clienteDAO.controller.js";
import {
  createArtista,
  getArtista,
} from "../controllers/artistaDAO.controller.js";
import {
  createDireccion,
  getDireccion,
} from "../controllers/direccionDAO.controller.js";
import {
  saveImage
} from "../controllers/imagenDAO.controller.js";
import {
  createEstampado
} from "../controllers/estampadoDAO.controller.js";
import { createPago } from "../controllers/pagoDAO.controller.js";

const router = Router();

// Rutas para las consultas en cliente
router.post("/clients", createCliente);
router.get("/clients/:email", getCliente);

// Rutas para las consultas en artistas
router.post("/artists", createArtista);
router.get("/artists/:email", getArtista);

// Rutas para insertar direccion
router.post("/addresses", createDireccion);
router.get("/addresses/:email", getDireccion);

// Rutas para pago
router.post("/payment", createPago);

// Rutas estampado
router.post("/image", saveImage);
router.post("/estampado", createEstampado);

export default router;
