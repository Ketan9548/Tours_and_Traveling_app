import { DataTypes, Model } from "sequelize";
import sequelizeDB from "../DatabaseConnection/DbConnection.js";

class Blogsmodels extends Model { }

Blogsmodels.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: /^[a-zA-Z ]+$/,
        },
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: sequelizeDB,
    modelName: "BlogsModels",
    tableName: "BlogsModels",
    timestamps: true,
    underscored: true,
});

export default Blogsmodels;
