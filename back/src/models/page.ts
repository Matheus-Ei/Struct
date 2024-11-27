// Libraries
import { DataTypes, Model } from "sequelize";

// Local
import connection from "../services/database/connection.js";

// Models
import ProjectModel from "./project.js";
import ModuleModel from "./module.js";

class PageModel extends Model {
    public id!: number;

    public name!: string;
    public description!: string;
    public emoji?: string;

    public project_id!: number;
    public module_id?: number;
    public parent_page_id?: number;

    public static associate() {
        // Project
        ProjectModel.hasMany(this, {
            foreignKey: "project_id",
            as: "pages",
        });
        this.belongsTo(ProjectModel, {
            foreignKey: "project_id",
            as: "project",
        });

        // Childrens
        this.belongsTo(this, {
            foreignKey: "parent_page_id",
            as: "parent",
        });

        // Module
        this.belongsTo(ModuleModel, {
            foreignKey: "module_id",
            as: "module",
        });
        ModuleModel.hasMany(this, {
            foreignKey: "module_id",
            as: "pages",
        });
    }
}

PageModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        emoji: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        project_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: ProjectModel,
                key: "id",
            },
        },

        parent_page_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: PageModel,
                key: "id",
            },
        },

        module_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: ModuleModel,
                key: "id",
            },
        },
    },
    {
        sequelize: connection,
        tableName: "page",
        timestamps: false,
    }
);

export default PageModel;
