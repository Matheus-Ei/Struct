// Libraries
import { DataTypes, Model } from "sequelize";

// Local
import connection from "../services/database/connection.js";
import UserModel from "./user.js";

class SettingsModel extends Model {
    public id!: number;

    public language!: string;
    public country!: string;

    public user_id!: number;
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

        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            references: {
                model: UserModel,
                key: "id",
            },
        },
    },
    {
        sequelize: connection,
        tableName: "settings",
        timestamps: false,
    }
);

export default SettingsModel;
