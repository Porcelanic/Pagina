import { pool } from "../db.js";

export const createPago = async (req, res, next) => {
    const { fechaPago, valor } = req.body;
    const newTask = await pool.query(
      "INSERT INTO pago (fechapago, valor) VALUES($1, $2) RETURNING *",
      [fechaPago, valor]
    );
    res.send("bien");
};
