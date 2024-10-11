// Libraries
import { DataTypes, Model } from "sequelize";

// Database
import sequelize from "../system/database";

// Models
import UserModel from "./user";
import ProjectModel from "./project";

class RelationshipSharedProjectModel extends Model {
    public id!: number;
    public permissions!: number;
    public userSharedId!: number;
    public projectId!: number;
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
        userSharedId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: UserModel,
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
        tableName: "relationship_shared_project",
        timestamps: false,
    }
);

export default RelationshipSharedProjectModel;
