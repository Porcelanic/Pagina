import { pool } from "../db.js";

export const createCamisa = async (req, res, next) => {
  try {
    let itemData = req.body;
    console.log(itemData);
    for (let index = 0; index < itemData.length; index++) {
      let { img, price, talla, text, cantidad, estampa, materialNumber } =
        itemData[index];

      if (estampa == "") {
        estampa = null;
      }

      const newCamisa = await pool.query(
        "INSERT INTO camisa (imagen, precio, talla, color, cantidad, estampado_idestampado, material_idmaterial, pedido_numerodepedido) VALUES($1, $2, $3, $4, $5, $6, $7, (SELECT MAX(numerodepedido) FROM pedido)) RETURNING *",
        [img, price, talla, text, cantidad, estampa, materialNumber]
      );
    }
  } catch (error) {}
};
