// Libraries
import { DataTypes, Model } from "sequelize";

// Database
import sequelize from "../system/database";

class ProjectTypeModel extends Model {
    public id!: number;
    public name!: string;
}

ProjectTypeModel.init(
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
    },
    {
        sequelize,
        tableName: "project_type",
        timestamps: false,
    }
);

export default ProjectTypeModel;
