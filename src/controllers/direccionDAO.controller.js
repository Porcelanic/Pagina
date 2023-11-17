import { pool } from "../db.js";

export const createDireccion = async (req, res, next) => {
  try {
    const { barrio, ciudad, pais, codigopostal } = req.body;

    const newTask = await pool.query(
      "INSERT INTO direccion (barrio, ciudad, pais, codigopostal) VALUES($1, $2, $3,$4) RETURNING *",
      [barrio, ciudad, pais, codigopostal]
    );

    res.send("bien");
  } catch (error) {
    if (error.code === "23505") {
      res.send("error");
    }
  }
};


