import { pool } from "../db.js";

export const getCantidad = async (req, res) => {
  try {
    const { material } = req.params;

    const result = await pool.query(
      "SELECT cantidad FROM material WHERE nombre=$1;",
      [material]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Material no encontrado" });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
