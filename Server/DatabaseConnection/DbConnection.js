import { Sequelize } from "sequelize";
import 'dotenv/config';

const sequelizeDB = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false,
  }
);
export default sequelizeDB;
