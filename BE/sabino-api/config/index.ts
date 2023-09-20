import dotenv from "dotenv";

dotenv.config();
export default {
  db: process.env.DB,
  dbName: process.env.DB_NAME,
};
