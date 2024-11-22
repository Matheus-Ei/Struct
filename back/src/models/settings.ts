// Libraries
import { DataTypes, Model } from "sequelize";

// Local
import connection from "../services/database/connection.js";

class SettingsModel extends Model {
    public id!: number;

    public language!: string;
    public country!: string;
}

SettingsModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        language: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },

        country: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
    },
    {
        sequelize: connection,
        tableName: "settings",
        timestamps: false,
    }
);

export default SettingsModel;
