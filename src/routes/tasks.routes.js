import { Router } from "express";
import {
  createCliente,
  getCliente,
  createTask,
  deleteTask,
  getAllTasks,
  getTask,
  updateTask,
} from "../controllers/tasks.controller.js";

const router = Router();

// create a client
router.post("/clients", createCliente);

router.get("/clients/:email", getCliente);

//------------------------CODIGO DEL TUTORIAL------------------------------
// create a task
router.post("/tasks", createTask);

router.get("/tasks", getAllTasks);

router.get("/tasks/:id", getTask);

router.put("/tasks/:id", updateTask);

router.delete("/tasks/:id", deleteTask);

export default router;
