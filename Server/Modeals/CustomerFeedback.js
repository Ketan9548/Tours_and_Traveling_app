import { DataTypes, Model } from "sequelize";
import sequelizeDB from "../DatabaseConnection/DbConnection.js";

class CustomerfeedbackModel extends Model { }

CustomerfeedbackModel.init({
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Name cannot be empty",
      },
    },
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: {
        msg: "Please enter a valid email address",
      },
    },
  },
  Phone: {
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
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: {
        args: 1,
        msg: "Rating must be at least 1",
      },
      max: {
        args: 5,
        msg: "Rating cannot be more than 5",
      },
    },
  },
  Review: {
    type: DataTypes.STRING(1000),
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Review message cannot be empty",
      },
    },
  },
}, {
  sequelize: sequelizeDB, // this is important
  modelName: "CustomerReview",
  tableName: "customer_reviews",
  timestamps: true,
  underscored: true,
});

export default CustomerfeedbackModel;
