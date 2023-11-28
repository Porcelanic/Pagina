import { pool } from "../db.js";

export const createEstampado = async (req, res, next) => {
  try {
    const { diseño, nombre, categoria, artista_email } = req.body;

    const newTask = await pool.query(
      "INSERT INTO estampado (diseño, nombre, categoria, artista_email) VALUES($1, $2, $3, $4) RETURNING *",
      [diseño, nombre, categoria, artista_email]
    );
    res.send("bien");
  } catch (error) {
    if (error.code === "23505") {
      res.send("error");
    }
  }
};

export const getEstampados = async (req, res, next) => {
  try {
    const estampados = await pool.query(
      "SELECT diseño, nombre, artista_email FROM estampado LIMIT 20"
    );

    if (estampados.rowCount != 0) {
      const artistasEmails = estampados.rows.map(
        (estampado) => estampado.artista_email
      );
      const artistas = await pool.query(
        `SELECT nombre, email FROM artista WHERE email IN (${artistasEmails
          .map((_, index) => `$${index + 1}`)
          .join(", ")})`,
        artistasEmails
      );

      const artistasMap = artistas.rows.reduce((acc, artista) => {
        acc[artista.email] = artista.nombre;
        return acc;
      }, {});

      const estampadosConNombreArtista = estampados.rows.map((estampado) => ({
        diseño: estampado.diseño,
        nombre: estampado.nombre,
        nombre_artista: artistasMap[estampado.artista_email],
      }));
      res.json(estampadosConNombreArtista);
    } else {
      res.json(estampados);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
