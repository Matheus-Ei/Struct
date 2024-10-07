import { DataTypes, Model } from "sequelize";
import sequelize from "../system/database";

class ModuleModel extends Model {
    public id!: number;
    public name!: string;
    public description!: string;
}

ModuleModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: "module",
        timestamps: false,
    }
);

export default ModuleModel;
