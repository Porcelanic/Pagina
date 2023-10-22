import { Router } from "express";
import {
  createCliente,
  getCliente,
} from "../controllers/clienteDAO.controller.js";
import {
  createArtista,
  getArtista,
} from "../controllers/artistaDAO.controller.js";
const router = Router();

// Rutas para las consultas en cliente

router.post("/clients", createCliente);

router.get("/clients/:email", getCliente);

// Rutas para las consultas en artistas

router.post("/artists", createArtista);

router.get("/artists/:email", getArtista);

export default router;
