import { pool } from "../db.js";

export const createPedido = async (req, res, next) => {
  const { valor, email } = req.body;

  const newOrder = await pool.query(
    "INSERT INTO pedido (valor, estado, fechapedido, fechaenvio, pago_numerodepago, cliente_email, informacion_idinformacion)  VALUES ($1, 'pendiente', (SELECT CAST(NOW() AS date)) , (SELECT CAST((NOW() +  INTERVAL '1 day') AS date ) ),(SELECT MAX(numerodepago) FROM pago), $2, (SELECT MAX(idinformacion) FROM informacion)) RETURNING *",
    [valor, email]
  );
  res.send("bien");
};
