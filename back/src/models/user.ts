// Libraries
import { DataTypes, Model } from "sequelize";

// Local
import connection from "../services/database/connection.js";

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
            unique: true,
        },

        password: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },

        photo: {
            type: DataTypes.BLOB,
        },
    },
    {
        sequelize: connection,
        tableName: "users",
        timestamps: false,
    }
);

export default UserModel;
