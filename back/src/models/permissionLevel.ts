// Libraries
import { DataTypes, Model } from "sequelize";

// Local
import connection from "../services/database/connection";

class PermissionLevelModel extends Model {
    public id!: number;
    public name!: string;
    public description!: string;
}

PermissionLevelModel.init(
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

        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize: connection,
        tableName: "permission_level",
        timestamps: false,
    }
);

export default PermissionLevelModel;
