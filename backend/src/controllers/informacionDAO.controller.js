import { pool } from "../db.js";

export const createInformacion = async (req, res, next) => {
    const { barrio, ciudad, pais, codigopostal, direccion, telefono } =
      req.body;

    const newInformation = await pool.query(
      "INSERT INTO informacion (barrio, ciudad, pais, codigopostal, direccion, telefono) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
      [barrio, ciudad, pais, codigopostal, direccion, telefono]
    );
    res.send("bien");
};

// export const getDireccion = async (req, res, next) => {
//   try {
//     const { email } = req.params;
//     const result = await pool.query(
//       "SELECT direccion.* FROM cliente JOIN direccion ON cliente.direccion_iddireccion = direccion.iddireccion WHERE cliente.email = $1;",
//       [email]
//     );

// const actualizarCliente = await pool.query(
//   "UPDATE cliente SET  direccion_iddireccion=(SELECT MAX(iddireccion) FROM direccion) WHERE cliente.email=$1;",
//   [email]
// );

//     if (result.rows.length === 0) {
//       return res
//         .status(404)
//         .json({ message: "Direccion no encontrada para este cliente" });
//     }
//     res.json(result.rows[0]);
//   } catch (error) {}

// };
