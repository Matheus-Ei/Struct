import { DataTypes, Model } from "sequelize";
import connection from "../services/database/connection";
import ProjectModel from "./project";
import UserModel from "./user";
import PermissionLevelModel from "./permissionLevel";

class RelationshipSharedProject extends Model {
    public id!: number;
    public project_id!: number;
    public user_shared_id!: number;
    public permission_level_id!: number;

    public static associate() {
        ProjectModel.belongsToMany(UserModel, {
            through: this,
            foreignKey: "project_id",
            otherKey: "user_shared_id",
            as: "shared_users",
        });

        UserModel.belongsToMany(ProjectModel, {
            through: this,
            foreignKey: "user_shared_id",
            otherKey: "project_id",
            as: "shared_projects",
        });

        this.belongsTo(PermissionLevelModel, {
            foreignKey: "permission_level_id",
            as: "permission_level",
        });
        PermissionLevelModel.hasMany(this, {
            foreignKey: "permission_level_id",
            as: "relationship_shared_projects",
        });
    }
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
