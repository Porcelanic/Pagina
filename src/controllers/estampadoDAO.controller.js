import { pool } from "../db.js";

export const createEstampado = async (req, res, next) => {
  try {
    const { diseño, nombre, categoria, artista_email } = req.body;

    const newTask = await pool.query(
      "INSERT INTO estampado (diseño, nombre, categoria, artista_email) VALUES($1, $2, $3, $4) RETURNING *",
      [diseño, nombre, categoria, artista_email]
    );
    res.send("bien");
  } catch (error) {
    if (error.code === "23505") {
      res.send("error");
    }
  }
};

export const getEstampados = async (req, res, next) => {
  try {
    const estampados = await pool.query(
      "SELECT diseño, nombre, artista_email FROM estampado LIMIT 20"
    );
    res.json(estampados.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};