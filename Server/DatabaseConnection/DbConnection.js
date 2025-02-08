import { Sequelize } from "sequelize";
import 'dotenv/config'

const sequelizeDB = new Sequelize(process.env.dbname, process.env.DB_USER, process.env.dbpassword,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT || 3306,
  });

export default sequelizeDB;
