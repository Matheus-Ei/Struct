// Libraries
import { DataTypes, Model } from "sequelize";

// Local
import connection from "../services/database/connection";

// Models
import UserModel from "./user";

class ProjectModel extends Model {
    public id!: number;

    public title!: string;
    public description!: string;

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
