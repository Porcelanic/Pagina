import { pool } from "../db.js";

export const createPago = async (req, res, next) => {
  try {
    const { fechaPago, valor } = req.body;

    const newTask = await pool.query(
      "INSERT INTO public.pago(fechapago, valor) VALUES($1, $2) RETURNING *",
      [fechaPago, valor]
    );

    res.send("bien");
  } catch (error) {
    if (error.code === "23505") {
      res.send("error");
    }
  }
};

// export const getDireccion = async (req, res, next) => {
//   try {
//     const { email } = req.params
//     const result = await pool.query("SELECT direccion.* FROM cliente JOIN direccion ON cliente.direccion_iddireccion = direccion.iddireccion WHERE cliente.email = $1;", [
//       email,
//     ]);

//     if (result.rows.length === 0) {
//       return res.status(404).json({ message: "Artista no encontrado" });
//     }
//     res.json(result.rows[0]);
//   } catch (error) {
//     console.log("Sucedio un error");
//     console.log(error);
//     next(error);
//   }
// };


