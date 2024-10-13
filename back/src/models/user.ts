// Libraries
import { DataTypes, Model } from "sequelize";

// Database
import connection from "../services/database/connection.js";

class UserModel extends Model {
    public id!: number;
    public name!: string;
    public mail!: string;
    public nickname?: string;
    public password!: string;
    public photo?: any;
    public paid!: boolean;
    public last_paid_date?: any;
}

UserModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        mail: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        nickname: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        photo: {
            type: DataTypes.UUID,
            allowNull: true,
        },
        paid: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        last_paid_date: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    },
    {
        sequelize: connection,
        tableName: "users",
        timestamps: false,
    }
);

export default UserModel;
