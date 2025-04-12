import { DataTypes } from "sequelize";
import sequelizeDB from "../../DatabaseConnection/DbConnection.js";
import ServiceModels from "./ServiceModels.js";  // Import related model

const TexiService = sequelizeDB.define("ProductModels", {
    Name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlpha: true, // Allows only alphabetic characters
        },
    },
    types: {
        type: DataTypes.STRING,
    },
    Dec: {
        type: DataTypes.STRING,
    },
    Price: {
        type: DataTypes.INTEGER,
    },
    Img: {
        type: DataTypes.STRING,
    }
}, {
    timestamps: true,  // Automatically adds createdAt & updatedAt fields
});

// **Associations in one ot many with products and service model**
TexiService.belongsTo(ServiceModels, { foreignKey: "serviceId", as: "service" });

export default ProductModels;
