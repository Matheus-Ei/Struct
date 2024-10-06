
import { DataTypes, Model } from "sequelize";
import sequelize from "../system/database";

import ModuleModel from "./module";
import ProjectModel from "./project";

class RelationshipProjectModuleModel extends Model {
    public id!: number;
    public moduleId!: number;
    public projectId!: number;
}

RelationshipProjectModuleModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        moduleId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: ModuleModel,
                key: "id",
            },
        },
        projectId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: ProjectModel,
                key: "id",
            },
        },
    },
    {
        sequelize,
        tableName: "relationship_project_module",
        timestamps: false,
    }
);

export default RelationshipProjectModuleModel;
