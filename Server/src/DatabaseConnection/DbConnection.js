import { Sequelize } from "sequelize";
import 'dotenv/config'

const sequelizeDB = new Sequelize(process.env.dbname, 'root', process.env.dbpassword, {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelizeDB;
