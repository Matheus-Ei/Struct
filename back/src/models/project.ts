import { DataTypes, Model } from "sequelize";
import sequelize from "../system/database";
import UserModel from "./user"; // Importa o model User para fazer a associação

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
                model: UserModel,
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
        sequelize,
        tableName: "project",
        timestamps: false,
    }
);

export default ProjectModel;
