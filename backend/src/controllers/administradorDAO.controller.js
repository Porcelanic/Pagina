import { pool } from "../db.js";

export const createAdministrador = async (req, res, next) => {
  try {
    const { nombre, email, password } = req.body;

    const newTask = await pool.query(
      "INSERT INTO administrador (nombre, email, password) VALUES($1, $2, $3) RETURNING *",
      [nombre, email, password]
    );

    res.send("bien");
  } catch (error) {
    if (error.code === "23505") {
      res.send("error");
    }
  }
};

export const getAdministrador = async (req, res) => {
  try {
    const { email } = req.params;
    const result = await pool.query("SELECT * FROM administrador WHERE email = $1", [
      email,
    ]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Administrador no encontrado" });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.log("Sucedio un error");
    console.log(error);
    next(error);
  }
};
