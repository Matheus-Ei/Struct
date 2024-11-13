// Libraries
import { DataTypes, Model } from "sequelize";

// Local
import connection from "../services/database/connection.js";

// Models
import SubscriptionModel from "./subscription.js";
import SettingsModel from "./settings.js";

class UserModel extends Model {
    public id!: number;

    public name?: string;
    public about?: string;
    public mail!: string;
    public verified!: boolean;
    public autenticator!: "Default" | "Auth";
    public nickname?: string;
    public password!: string;
    public photo?: string;

    public subscription_id!: number;
    public settings_id!: number;
}

UserModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        name: {
            type: DataTypes.STRING(100),
        },

        about: {
            type: DataTypes.TEXT,
        },

        mail: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true,
        },

        autenticator: {
            type: DataTypes.STRING(50),
            allowNull: false,
            defaultValue: "Default",
        },

        verified: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },

        nickname: {
            type: DataTypes.STRING(50),
        },

        password: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },

        photo: {
            type: DataTypes.BLOB,
        },

        subscription_id: {
            type: DataTypes.INTEGER,
            references: {
                model: SubscriptionModel,
                key: "id",
            },
            onDelete: "CASCADE",
        },

        settings_id: {
            type: DataTypes.INTEGER,
            references: {
                model: SettingsModel,
                key: "id",
            },
            onDelete: "CASCADE",
        },
    },
    {
        sequelize: connection,
        tableName: "users",
        timestamps: false,
    }
);

export default UserModel;
