// Libraries
import { DataTypes, Model } from "sequelize";

// Database
import connection from "../services/database/connection";

// Models
import UserModel from "./user";
import ProjectModel from "./project";

class RelationshipSharedProjectModel extends Model {
    public id!: number;
    public permissions!: number;
    public user_shared_id!: number;
    public project_id!: number;
}

RelationshipSharedProjectModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        permissions: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        user_shared_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: UserModel,
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
        tableName: "relationship_shared_project",
        timestamps: false,
    }
);

export default RelationshipSharedProjectModel;
