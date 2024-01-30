import { pool } from "../db.js";

export const createCliente = async (req, res, next) => {
  try {
    const { nombre, email, password } = req.body;

    const newTask = await pool.query(
      "INSERT INTO cliente (nombre, email, password) VALUES($1, $2, $3) RETURNING *",
      [nombre, email, password]
    );

    res.send("bien");
  } catch (error) {
    if (error.code === "23505") {
      res.send("error");
    } else {
      console.log(error);
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
  } catch (error) {}
};
