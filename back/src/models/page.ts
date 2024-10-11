// Libraries
import { DataTypes, Model } from "sequelize";

// Database
import sequelize from "../system/database";

// Models
import PageDataModel from "./pageData";
import ProjectModel from "./project";
import ModuleModel from "./module";

class PageModel extends Model {
    public id!: number;
    public pageDataId!: number;
    public parentPageId!: number | null;
    public projectId!: number;
    public moduleId!: number;
}

PageModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        pageDataId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: PageDataModel,
                key: "id",
            },
        },
        parentPageId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: PageModel,
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
        moduleId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: ModuleModel,
                key: "id",
            },
        },
    },
    {
        sequelize,
        tableName: "page",
        timestamps: false,
    }
);

export default PageModel;
