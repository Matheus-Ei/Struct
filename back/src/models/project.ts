// Libraries
import { DataTypes, Model } from "sequelize";

// Database
import connection from "../services/database/connection";

// Models
import UserModel from "./user";
import ProjectTypeModel from "./projectType";

class ProjectModel extends Model {
    public id!: number;

    public title!: string;
    public description!: string;

    public project_type_id!: number;
    public owner_user_id!: number;
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

        project_type_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: ProjectTypeModel,
                key: "id",
            },
        },
        owner_user_id: {
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
