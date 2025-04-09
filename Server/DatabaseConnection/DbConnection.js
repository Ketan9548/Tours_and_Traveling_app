import { Sequelize } from "sequelize";
import 'dotenv/config';

const sequelizeDB = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false, // Set to true if you want SQL logs
  }
);
export default sequelizeDB;
