import { DataTypes } from "sequelize";
import sequelizeDB from "../DatabaseConnection/DbConnection.js";

const ContactInfoModels = sequelizeDB.define("ContactInfo", {
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlpha: true, // Allows only alphabetic characters
    },
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true, // Ensures the value is a valid email
    },
  },
  Phone: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isNumeric: true, // Ensures the value contains only numbers
    },
  },
  Message: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true, // Ensures the message is not empty
    },
  },
});

export default ContactInfoModels;
