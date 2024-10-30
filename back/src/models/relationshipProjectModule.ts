// Libraries
import { DataTypes, Model } from "sequelize";

// Database
import connection from "../services/database/connection";

// Models
import ModuleModel from "./module";
import ProjectModel from "./project";

class RelationshipProjectModuleModel extends Model {
    public id!: number;
    public module_id!: number;
    public project_id!: number;
}

RelationshipProjectModuleModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        module_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: ModuleModel,
                key: "id",
            },
        },
        project_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: ProjectModel,
                key: "id",
            },
        },
    },
    {
        sequelize: connection,
        tableName: "relationship_project_module",
        timestamps: false,
    }
);

export default RelationshipProjectModuleModel;
