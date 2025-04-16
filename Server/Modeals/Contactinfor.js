import { DataTypes, Model } from "sequelize";
import sequelizeDB from "../DatabaseConnection/DbConnection.js";

class ContactInfoModels extends Model { }

ContactInfoModels.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: /^[a-zA-Z ]+$/,
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isNumeric: {
        msg: "Phone number must contain only digits",
      },
      len: {
        args: [10, 10],
        msg: "Phone number must be exactly 10 digits",
      },
    },
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
}, {
  sequelize: sequelizeDB,
  modelName: "ContactInfoModels",
  tableName: "ContactInfo",
  timestamps: true,
  underscored: true,
});

export default ContactInfoModels;
