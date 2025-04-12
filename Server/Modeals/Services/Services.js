import { DataTypes } from "sequelize";
import sequelizeDB from "../../DatabaseConnection/DbConnection.js";

const ServiceModels = sequelizeDB.define("ServiceModels", {  // Changed from "ContactInfo" to "ServiceModels"
    Name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlpha: true, // Allows only alphabetic characters
        },
    },
    Des: {
        type: DataTypes.STRING,
    },
}, {
    timestamps: true, // Automatically adds createdAt & updatedAt
});

export default ServiceModels;
