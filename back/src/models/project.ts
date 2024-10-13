// Libraries
import { DataTypes, Model } from "sequelize";

// Database
import connection from "../services/database/connection.js";

// Models
import UserModel from "./user";
import ProjectTypeModel from "./project_type";

class ProjectModel extends Model {
    public id!: number;

    public title!: string;
    public description!: string;

    public projectTypeId!: number;
    public ownerUserId!: number;
}

ProjectModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        projectTypeId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: ProjectTypeModel,
                key: "id",
            },
        },
        ownerUserId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: UserModel,
                key: "id",
            },
        },
    },
    {
        sequelize: connection,
        tableName: "project",
        timestamps: false,
    }
);

export default ProjectModel;
