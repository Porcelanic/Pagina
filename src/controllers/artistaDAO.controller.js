import { pool } from "../db.js";

export const createArtista = async (req, res, next) => {
  try {
    const { nombre, email, password } = req.body;

    const newTask = await pool.query(
      "INSERT INTO artista (nombre, email, password) VALUES($1, $2, $3) RETURNING *",
      [nombre, email, password]
    );

    res.json(newTask.rows[0]);
  } catch (error) {
    console.log(error);
    if (error.code === "23505") {
      console.log("Error 12212");
    }
  }
};

export const getArtista = async (req, res) => {
  try {
    const { email } = req.params;
    const result = await pool.query("SELECT * FROM artista WHERE email = $1", [
      email,
    ]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Artista no encontrado" });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.log("Sucedio un error");
    console.log(error);
    next(error);
  }
};
