import { DataTypes } from "sequelize";
import sequelizeDB from "../../DatabaseConnection/DbConnection.js";

const ProductModels = sequelizeDB.define("ProductModels", {  // Changed from "ContactInfo" to "ProductModels"
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
    timestamps: true,
});

export default ProductModels;
