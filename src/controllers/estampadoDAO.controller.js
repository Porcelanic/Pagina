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

export const getCliente = async (req, res) => {
  try {
    const { email } = req.params;
    const result = await pool.query("SELECT * FROM cliente WHERE email = $1", [
      email,
    ]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.log("Sucedio un error");
    console.log(error);
    next(error);
  }
};