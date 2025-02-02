import { DataTypes } from "sequelize";
import sequelizeDB from "../DatabaseConnection/DbConnection.js";

const ServicesModels = sequelizeDB.define("Services", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: /^[a-zA-Z\s]+$/,
    },
  },
  list: {
    type: DataTypes.JSON,
    allowNull: false,
    validate: {
      isArray(value) {
        if (!Array.isArray(value)) {
          throw new Error("The list field must be an array.");
        }
      },
    },
  },
});

export default ServicesModels;
