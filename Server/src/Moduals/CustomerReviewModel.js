import { DataTypes } from "sequelize";
import sequelizeDB from "../DatabaseConnection/DbConnection.js";

const CustomerReviewModel = sequelizeDB.define("CustomerReview", {
    Name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlpha: true,
        },
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        },
    },
    Phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isNumeric: true,
        },
    },
    Review: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
});

export default CustomerReviewModel;
