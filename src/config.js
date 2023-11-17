export const db = {
  user: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "1234",
  // password: process.env.DB_PASSWORD || "1234",
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 5433,
  database: process.env.DB_DATABASE || "camisasFIS",
};

export const port = process.env.PORT || 4000;
