// Libraries
import { DataTypes, Model } from "sequelize";

// Local
import connection from "../services/database/connection";

// Models
import PermissionLevelModel from "./permissionLevel";
import ProjectModel from "./project";
import UserModel from "./user";

class RelationshipSharedProject extends Model {
    public id!: number;
    public project_id!: number;
    public user_shared_id!: number;
    public permission_level_id!: number;
}

RelationshipSharedProject.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        project_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: ProjectModel,
                key: "id",
            },
        },

        user_shared_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: UserModel,
                key: "id",
            },
        },

        permission_level_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: PermissionLevelModel,
                key: "id",
            },
        },
    },
    {
        sequelize: connection,
        tableName: "relationship_shared_project",
        timestamps: false,
    }
);

export default RelationshipSharedProject;
