import { Router } from "express";
import {
  createCliente,
  getCliente,
} from "../controllers/clienteDAO.controller.js";

const router = Router();

// Rutas para las consultas

router.post("/clients", createCliente);

router.get("/clients/:email", getCliente);

export default router;
