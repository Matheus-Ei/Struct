// Libraries
import { DataTypes, Model } from "sequelize";

// Database
import sequelize from "../system/database";

// Models
import UserModel from "./user";

class SettingsModel extends Model {
    public id!: number;
    public language!: string;
    public country!: string;
    public theme!: string;
    public userId!: number;
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
        theme: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: UserModel,
                key: "id",
            },
            onDelete: "CASCADE",
        },
    },
    {
        sequelize,
        tableName: "settings",
        timestamps: false,
    }
);

export default SettingsModel;
